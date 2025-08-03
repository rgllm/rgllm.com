import { VoteAction } from '../types';

export class VoteStorage {
  private storage: DurableObjectStorage;

  constructor(storage: DurableObjectStorage) {
    this.storage = storage;
  }

  async getUpvotes(postId: string): Promise<number> {
    return (await this.storage.get(`${postId}:upvotes`)) || 0;
  }

  async getDownvotes(postId: string): Promise<number> {
    return (await this.storage.get(`${postId}:downvotes`)) || 0;
  }

  async incrementVote(postId: string, action: VoteAction): Promise<number> {
    const key = `${postId}:${action}s`;
    const currentCount = (await this.storage.get(key)) || 0;
    const newCount = currentCount + 1;
    await this.storage.put(key, newCount);
    return newCount;
  }

  async getVoteCounts(postId: string): Promise<{ upvotes: number; downvotes: number }> {
    const [upvotes, downvotes] = await Promise.all([
      this.getUpvotes(postId),
      this.getDownvotes(postId)
    ]);
    return { upvotes, downvotes };
  }
}