import { Env } from './types';
import { 
  extractPostId, 
  isValidMethod,
  getClientIP,
  getUserAgent,
  generateRequestId
} from './utils/request-handler';
import { 
  createErrorResponse, 
  createMethodNotAllowedResponse, 
  createInternalErrorResponse,
  createOptionsResponse
} from './utils/response';
import { validatePostId, ValidationError } from './utils/validation';
import { createLogger } from './utils/logger';

export { VoteCounter } from './vote-counter';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const startTime = Date.now();
    const requestId = generateRequestId();
    const logger = createLogger(env.ENVIRONMENT || 'production');
    
    try {
      const url = new URL(request.url);
      const clientIP = getClientIP(request);
      const userAgent = getUserAgent(request);

      logger.info('Request received', {
        requestId,
        method: request.method,
        url: url.pathname + url.search,
        ip: clientIP,
        userAgent
      });

      if (request.method === 'OPTIONS') {
        return createOptionsResponse();
      }

      if (!isValidMethod(request.method)) {
        logger.warn('Method not allowed', { requestId, method: request.method });
        return createMethodNotAllowedResponse();
      }

      const rawPostId = extractPostId(url);
      const postId = validatePostId(rawPostId);

      logger.debug('Processing request', { requestId, postId, action: request.method });

      const id = env.VOTE_COUNTER.idFromName(postId);
      const obj = env.VOTE_COUNTER.get(id);

      const response = await obj.fetch(request);
      
      const duration = Date.now() - startTime;
      logger.info('Request completed', {
        requestId,
        postId,
        status: response.status,
        duration
      });

      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      if (error instanceof ValidationError) {
        logger.warn('Validation error', { requestId, error: error.message, duration });
        return createErrorResponse(error.message, 400);
      }

      logger.error('Unhandled error', error as Error, { requestId, duration });
      return createInternalErrorResponse();
    }
  },
};