import { VoteStorage } from './storage/vote-storage';
import { VoteService } from './services/vote-service';
import { 
  extractPostId, 
  parseVoteRequest, 
  validateVoteAction, 
  isValidMethod,
  generateRequestId
} from './utils/request-handler';
import { 
  createErrorResponse, 
  createVoteDataResponse, 
  createVoteUpdateResponse, 
  createMethodNotAllowedResponse, 
  createInternalErrorResponse 
} from './utils/response';
import { validateRequestBody, ValidationError } from './utils/validation';
import { createLogger } from './utils/logger';

export class VoteCounter {
  private voteService: VoteService;
  private logger = createLogger();

  constructor(state: DurableObjectState) {
    const storage = new VoteStorage(state.storage);
    this.voteService = new VoteService(storage);
  }

  async fetch(request: Request): Promise<Response> {
    const requestId = generateRequestId();
    const startTime = Date.now();

    try {
      const url = new URL(request.url);
      const postId = extractPostId(url);

      if (!postId) {
        this.logger.warn('Missing postId', { requestId });
        return createErrorResponse('postId parameter is required');
      }

      this.logger.info('Durable Object request', { requestId, postId, method: request.method });

      if (!isValidMethod(request.method)) {
        this.logger.warn('Invalid method', { requestId, method: request.method });
        return createMethodNotAllowedResponse();
      }

      if (request.method === 'GET') {
        return this.handleGetVotes(postId, requestId);
      }

      if (request.method === 'POST') {
        return this.handleUpdateVote(request, postId, requestId);
      }

      return createMethodNotAllowedResponse();
    } catch (error) {
      const duration = Date.now() - startTime;
      this.logger.error('Durable Object error', error as Error, { requestId, duration });
      return createInternalErrorResponse();
    }
  }

  private async handleGetVotes(postId: string, requestId: string): Promise<Response> {
    try {
      this.logger.debug('Getting votes', { requestId, postId });
      const voteData = await this.voteService.getVoteData(postId);
      this.logger.info('Votes retrieved', { requestId, postId, ...voteData });
      return createVoteDataResponse(voteData);
    } catch (error) {
      this.logger.error('Failed to get votes', error as Error, { requestId, postId });
      return createInternalErrorResponse();
    }
  }

  private async handleUpdateVote(request: Request, postId: string, requestId: string): Promise<Response> {
    try {
      const requestBody = await parseVoteRequest(request);
      validateRequestBody(requestBody);
      
      const { action } = requestBody;
      
      if (!validateVoteAction(action)) {
        this.logger.warn('Invalid vote action', { requestId, postId, action });
        return createErrorResponse('Invalid action. Use "upvote" or "downvote"');
      }

      this.logger.debug('Updating vote', { requestId, postId, action });
      const voteUpdate = await this.voteService.updateVote(postId, action);
      this.logger.info('Vote updated', { requestId, ...voteUpdate });
      
      return createVoteUpdateResponse(voteUpdate);
    } catch (error) {
      if (error instanceof ValidationError) {
        this.logger.warn('Vote validation error', { requestId, postId, error: error.message });
        return createErrorResponse(error.message, 400);
      }
      
      this.logger.error('Failed to update vote', error as Error, { requestId, postId });
      return createInternalErrorResponse();
    }
  }
}