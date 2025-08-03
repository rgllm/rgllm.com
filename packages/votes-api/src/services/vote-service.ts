import { VoteStorage } from '../storage/vote-storage';
import { VoteData, VoteUpdateResponse, VoteAction } from '../types';

export class VoteService {
  private storage: VoteStorage;

  constructor(storage: VoteStorage) {
    this.storage = storage;
  }

  async getVoteData(postId: string): Promise<VoteData> {
    const { upvotes, downvotes } = await this.storage.getVoteCounts(postId);
    return {
      postId,
      upvotes,
      downvotes,
      total: upvotes - downvotes
    };
  }

  async updateVote(postId: string, action: VoteAction): Promise<VoteUpdateResponse> {
    const newCount = await this.storage.incrementVote(postId, action);
    const { upvotes, downvotes } = await this.storage.getVoteCounts(postId);

    return {
      postId,
      action,
      upvotes,
      downvotes,
      total: upvotes - downvotes
    };
  }
}