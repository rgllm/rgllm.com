import { describe, it, expect } from 'vitest';
import { 
  createJsonResponse,
  createErrorResponse,
  createVoteDataResponse,
  createVoteUpdateResponse,
  createMethodNotAllowedResponse,
  createInternalErrorResponse
} from '../../src/utils/response';
import { VoteData, VoteUpdateResponse } from '../../src/types';

describe('response', () => {
  describe('createJsonResponse', () => {
    it('should create JSON response with default status 200', async () => {
      const data = { test: 'value' };
      const response = createJsonResponse(data);
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await response.json();
      expect(responseData).toEqual(data);
    });

    it('should create JSON response with custom status', async () => {
      const data = { error: 'test error' };
      const response = createJsonResponse(data, 400);
      
      expect(response.status).toBe(400);
      
      const responseData = await response.json();
      expect(responseData).toEqual(data);
    });
  });

  describe('createErrorResponse', () => {
    it('should create error response with default status 400', async () => {
      const message = 'Test error message';
      const response = createErrorResponse(message);
      
      expect(response.status).toBe(400);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await response.json();
      expect(responseData).toEqual({ error: message });
    });

    it('should create error response with custom status', async () => {
      const message = 'Server error';
      const response = createErrorResponse(message, 500);
      
      expect(response.status).toBe(500);
      
      const responseData = await response.json();
      expect(responseData).toEqual({ error: message });
    });
  });

  describe('createVoteDataResponse', () => {
    it('should create vote data response', async () => {
      const voteData: VoteData = {
        postId: 'test-post',
        upvotes: 10,
        downvotes: 2,
        total: 8
      };
      
      const response = createVoteDataResponse(voteData);
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await response.json();
      expect(responseData).toEqual(voteData);
    });
  });

  describe('createVoteUpdateResponse', () => {
    it('should create vote update response', async () => {
      const voteUpdate: VoteUpdateResponse = {
        postId: 'test-post',
        action: 'upvote',
        upvotes: 11,
        downvotes: 2,
        total: 9
      };
      
      const response = createVoteUpdateResponse(voteUpdate);
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await response.json();
      expect(responseData).toEqual(voteUpdate);
    });
  });

  describe('createMethodNotAllowedResponse', () => {
    it('should create method not allowed response', () => {
      const response = createMethodNotAllowedResponse();
      
      expect(response.status).toBe(405);
    });
  });

  describe('createInternalErrorResponse', () => {
    it('should create internal error response', async () => {
      const response = createInternalErrorResponse();
      
      expect(response.status).toBe(500);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await response.json();
      expect(responseData).toEqual({ error: 'Internal server error' });
    });
  });
});