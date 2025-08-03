import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VoteStorage } from '../../src/storage/vote-storage';

describe('VoteStorage', () => {
  let mockStorage: DurableObjectStorage;
  let voteStorage: VoteStorage;

  beforeEach(() => {
    const storageMap = new Map<string, any>();
    
    mockStorage = {
      get: vi.fn((key: string) => Promise.resolve(storageMap.get(key))),
      put: vi.fn((key: string, value: any) => {
        storageMap.set(key, value);
        return Promise.resolve();
      }),
      delete: vi.fn((key: string) => {
        const existed = storageMap.has(key);
        storageMap.delete(key);
        return Promise.resolve(existed);
      }),
      list: vi.fn(),
      getAlarm: vi.fn(),
      setAlarm: vi.fn(),
      deleteAlarm: vi.fn(),
      sync: vi.fn(),
      transaction: vi.fn(),
      deleteAll: vi.fn(),
      sql: {} as any
    } as DurableObjectStorage;

    voteStorage = new VoteStorage(mockStorage);
  });

  describe('getUpvotes', () => {
    it('should return 0 for new post', async () => {
      const upvotes = await voteStorage.getUpvotes('new-post');
      expect(upvotes).toBe(0);
      expect(mockStorage.get).toHaveBeenCalledWith('new-post:upvotes');
    });

    it('should return stored upvote count', async () => {
      await mockStorage.put('test-post:upvotes', 5);
      const upvotes = await voteStorage.getUpvotes('test-post');
      expect(upvotes).toBe(5);
    });
  });

  describe('getDownvotes', () => {
    it('should return 0 for new post', async () => {
      const downvotes = await voteStorage.getDownvotes('new-post');
      expect(downvotes).toBe(0);
      expect(mockStorage.get).toHaveBeenCalledWith('new-post:downvotes');
    });

    it('should return stored downvote count', async () => {
      await mockStorage.put('test-post:downvotes', 3);
      const downvotes = await voteStorage.getDownvotes('test-post');
      expect(downvotes).toBe(3);
    });
  });

  describe('incrementVote', () => {
    it('should increment upvotes from 0', async () => {
      const newCount = await voteStorage.incrementVote('test-post', 'upvote');
      expect(newCount).toBe(1);
      expect(mockStorage.put).toHaveBeenCalledWith('test-post:upvotes', 1);
    });

    it('should increment existing upvotes', async () => {
      await mockStorage.put('test-post:upvotes', 5);
      const newCount = await voteStorage.incrementVote('test-post', 'upvote');
      expect(newCount).toBe(6);
      expect(mockStorage.put).toHaveBeenCalledWith('test-post:upvotes', 6);
    });

    it('should increment downvotes from 0', async () => {
      const newCount = await voteStorage.incrementVote('test-post', 'downvote');
      expect(newCount).toBe(1);
      expect(mockStorage.put).toHaveBeenCalledWith('test-post:downvotes', 1);
    });

    it('should increment existing downvotes', async () => {
      await mockStorage.put('test-post:downvotes', 2);
      const newCount = await voteStorage.incrementVote('test-post', 'downvote');
      expect(newCount).toBe(3);
      expect(mockStorage.put).toHaveBeenCalledWith('test-post:downvotes', 3);
    });
  });

  describe('getVoteCounts', () => {
    it('should return both counts for new post', async () => {
      const counts = await voteStorage.getVoteCounts('new-post');
      expect(counts).toEqual({ upvotes: 0, downvotes: 0 });
    });

    it('should return stored vote counts', async () => {
      await mockStorage.put('test-post:upvotes', 10);
      await mockStorage.put('test-post:downvotes', 3);
      
      const counts = await voteStorage.getVoteCounts('test-post');
      expect(counts).toEqual({ upvotes: 10, downvotes: 3 });
    });

    it('should handle mixed existing/missing counts', async () => {
      await mockStorage.put('test-post:upvotes', 7);
      
      const counts = await voteStorage.getVoteCounts('test-post');
      expect(counts).toEqual({ upvotes: 7, downvotes: 0 });
    });
  });
});