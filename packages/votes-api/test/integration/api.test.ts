import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('API Integration Tests', () => {
  const createMockRequest = (method: string, url: string, body?: any) => {
    const headers = new Headers();
    if (body) {
      headers.set('Content-Type', 'application/json');
    }

    return new Request(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
  };

  const createMockEnv = () => {
    const mockDurableObject = {
      fetch: vi.fn()
    };

    const mockNamespace = {
      idFromName: vi.fn().mockReturnValue('mock-id'),
      get: vi.fn().mockReturnValue(mockDurableObject)
    };

    return {
      VOTE_COUNTER: mockNamespace,
      mockDurableObject
    };
  };

  describe('Worker Entry Point', () => {
    it('should handle GET request for vote retrieval', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER, mockDurableObject } = createMockEnv();

      const mockResponse = new Response(JSON.stringify({
        postId: 'test-post',
        upvotes: 5,
        downvotes: 2,
        total: 3
      }));

      mockDurableObject.fetch.mockResolvedValue(mockResponse);

      const request = createMockRequest('GET', 'https://example.com/?postId=test-post');
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toEqual({
        postId: 'test-post',
        upvotes: 5,
        downvotes: 2,
        total: 3
      });

      expect(VOTE_COUNTER.idFromName).toHaveBeenCalledWith('test-post');
      expect(mockDurableObject.fetch).toHaveBeenCalledWith(request);
    });

    it('should handle POST request for voting', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER, mockDurableObject } = createMockEnv();

      const mockResponse = new Response(JSON.stringify({
        postId: 'test-post',
        action: 'upvote',
        upvotes: 6,
        downvotes: 2,
        total: 4
      }));

      mockDurableObject.fetch.mockResolvedValue(mockResponse);

      const request = createMockRequest('POST', 'https://example.com/?postId=test-post', {
        action: 'upvote'
      });
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.action).toBe('upvote');
      expect(data.postId).toBe('test-post');

      expect(VOTE_COUNTER.idFromName).toHaveBeenCalledWith('test-post');
      expect(mockDurableObject.fetch).toHaveBeenCalledWith(request);
    });

    it('should return 400 when postId is missing', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER } = createMockEnv();

      const request = createMockRequest('GET', 'https://example.com/');
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toBe('postId parameter is required');
    });

    it('should return 405 for unsupported methods', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER } = createMockEnv();

      const request = createMockRequest('DELETE', 'https://example.com/?postId=test-post');
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(405);
    });

    it('should handle empty postId parameter', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER } = createMockEnv();

      const request = createMockRequest('GET', 'https://example.com/?postId=');
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toBe('postId parameter is required');
    });

    it('should reject URL-encoded postId with invalid characters', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER, mockDurableObject } = createMockEnv();

      const encodedPostId = encodeURIComponent('post with spaces');
      const request = createMockRequest('GET', `https://example.com/?postId=${encodedPostId}`);
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(400);
      const responseData = await response.json();
      expect(responseData.error).toContain('postId can only contain letters, numbers, dots, underscores, and hyphens');
    });

    it('should handle errors gracefully', async () => {
      const { default: worker } = await import('../../src/index');
      const { VOTE_COUNTER, mockDurableObject } = createMockEnv();

      mockDurableObject.fetch.mockRejectedValue(new Error('Storage error'));

      const request = createMockRequest('GET', 'https://example.com/?postId=test-post');
      const response = await worker.fetch(request, { VOTE_COUNTER } as any, {} as any);

      expect(response.status).toBe(500);
      const data = await response.json();
      expect(data.error).toBe('Internal server error');
    });
  });
});