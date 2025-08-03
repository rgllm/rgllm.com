import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VoteService } from '../../src/services/vote-service';
import { VoteStorage } from '../../src/storage/vote-storage';

describe('VoteService', () => {
  let mockStorage: VoteStorage;
  let voteService: VoteService;

  beforeEach(() => {
    mockStorage = {
      getUpvotes: vi.fn(),
      getDownvotes: vi.fn(),
      incrementVote: vi.fn(),
      getVoteCounts: vi.fn()
    } as any;

    voteService = new VoteService(mockStorage);
  });

  describe('getVoteData', () => {
    it('should return vote data with correct total calculation', async () => {
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 10, downvotes: 3 });

      const result = await voteService.getVoteData('test-post');

      expect(result).toEqual({
        postId: 'test-post',
        upvotes: 10,
        downvotes: 3,
        total: 7
      });
      expect(mockStorage.getVoteCounts).toHaveBeenCalledWith('test-post');
    });

    it('should handle zero votes', async () => {
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 0, downvotes: 0 });

      const result = await voteService.getVoteData('new-post');

      expect(result).toEqual({
        postId: 'new-post',
        upvotes: 0,
        downvotes: 0,
        total: 0
      });
    });

    it('should handle negative totals', async () => {
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 2, downvotes: 5 });

      const result = await voteService.getVoteData('unpopular-post');

      expect(result).toEqual({
        postId: 'unpopular-post',
        upvotes: 2,
        downvotes: 5,
        total: -3
      });
    });
  });

  describe('updateVote', () => {
    it('should update upvote and return correct response', async () => {
      mockStorage.incrementVote = vi.fn().mockResolvedValue(6);
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 6, downvotes: 2 });

      const result = await voteService.updateVote('test-post', 'upvote');

      expect(result).toEqual({
        postId: 'test-post',
        action: 'upvote',
        upvotes: 6,
        downvotes: 2,
        total: 4
      });
      expect(mockStorage.incrementVote).toHaveBeenCalledWith('test-post', 'upvote');
      expect(mockStorage.getVoteCounts).toHaveBeenCalledWith('test-post');
    });

    it('should update downvote and return correct response', async () => {
      mockStorage.incrementVote = vi.fn().mockResolvedValue(3);
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 5, downvotes: 3 });

      const result = await voteService.updateVote('test-post', 'downvote');

      expect(result).toEqual({
        postId: 'test-post',
        action: 'downvote',
        upvotes: 5,
        downvotes: 3,
        total: 2
      });
      expect(mockStorage.incrementVote).toHaveBeenCalledWith('test-post', 'downvote');
      expect(mockStorage.getVoteCounts).toHaveBeenCalledWith('test-post');
    });

    it('should handle first vote on new post', async () => {
      mockStorage.incrementVote = vi.fn().mockResolvedValue(1);
      mockStorage.getVoteCounts = vi.fn().mockResolvedValue({ upvotes: 1, downvotes: 0 });

      const result = await voteService.updateVote('new-post', 'upvote');

      expect(result).toEqual({
        postId: 'new-post',
        action: 'upvote',
        upvotes: 1,
        downvotes: 0,
        total: 1
      });
    });
  });
});