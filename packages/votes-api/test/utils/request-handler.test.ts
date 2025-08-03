import { describe, it, expect } from 'vitest';
import { 
  extractPostId, 
  parseVoteRequest, 
  validateVoteAction, 
  isValidMethod 
} from '../../src/utils/request-handler';

describe('request-handler', () => {
  describe('extractPostId', () => {
    it('should extract postId from URL parameters', () => {
      const url = new URL('https://example.com/?postId=test-post-123');
      expect(extractPostId(url)).toBe('test-post-123');
    });

    it('should return null when postId is missing', () => {
      const url = new URL('https://example.com/');
      expect(extractPostId(url)).toBeNull();
    });

    it('should handle empty postId parameter', () => {
      const url = new URL('https://example.com/?postId=');
      expect(extractPostId(url)).toBe('');
    });

    it('should handle special characters in postId', () => {
      const postId = 'post-with-special-chars_123.test';
      const url = new URL(`https://example.com/?postId=${encodeURIComponent(postId)}`);
      expect(extractPostId(url)).toBe(postId);
    });
  });

  describe('parseVoteRequest', () => {
    it('should parse valid upvote request', async () => {
      const request = new Request('https://example.com', {
        method: 'POST',
        body: JSON.stringify({ action: 'upvote' }),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await parseVoteRequest(request);
      expect(result.action).toBe('upvote');
    });

    it('should parse valid downvote request', async () => {
      const request = new Request('https://example.com', {
        method: 'POST',
        body: JSON.stringify({ action: 'downvote' }),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await parseVoteRequest(request);
      expect(result.action).toBe('downvote');
    });

    it('should handle malformed JSON gracefully', async () => {
      const request = new Request('https://example.com', {
        method: 'POST',
        body: 'invalid json',
        headers: { 'Content-Type': 'application/json' }
      });

      await expect(parseVoteRequest(request)).rejects.toThrow();
    });
  });

  describe('validateVoteAction', () => {
    it('should validate upvote action', () => {
      expect(validateVoteAction('upvote')).toBe(true);
    });

    it('should validate downvote action', () => {
      expect(validateVoteAction('downvote')).toBe(true);
    });

    it('should reject invalid actions', () => {
      expect(validateVoteAction('invalid')).toBe(false);
      expect(validateVoteAction('')).toBe(false);
      expect(validateVoteAction('UPVOTE')).toBe(false);
      expect(validateVoteAction('like')).toBe(false);
    });

    it('should handle null and undefined', () => {
      expect(validateVoteAction(null as any)).toBe(false);
      expect(validateVoteAction(undefined as any)).toBe(false);
    });
  });

  describe('isValidMethod', () => {
    it('should validate GET method', () => {
      expect(isValidMethod('GET')).toBe(true);
    });

    it('should validate POST method', () => {
      expect(isValidMethod('POST')).toBe(true);
    });

    it('should reject invalid methods', () => {
      expect(isValidMethod('PUT')).toBe(false);
      expect(isValidMethod('DELETE')).toBe(false);
      expect(isValidMethod('PATCH')).toBe(false);
      expect(isValidMethod('OPTIONS')).toBe(false);
    });

    it('should handle case sensitivity', () => {
      expect(isValidMethod('get')).toBe(false);
      expect(isValidMethod('post')).toBe(false);
    });
  });
});