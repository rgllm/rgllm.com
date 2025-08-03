import { VoteData, VoteUpdateResponse, ErrorResponse } from '../types';

export function createJsonResponse<T>(data: T, status = 200): Response {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-cache'
  });

  return new Response(JSON.stringify(data), {
    status,
    headers
  });
}

export function createErrorResponse(message: string, status = 400): Response {
  const error: ErrorResponse = { error: message };
  return createJsonResponse(error, status);
}

export function createVoteDataResponse(voteData: VoteData): Response {
  return createJsonResponse(voteData);
}

export function createVoteUpdateResponse(voteUpdate: VoteUpdateResponse): Response {
  return createJsonResponse(voteUpdate);
}

export function createMethodNotAllowedResponse(): Response {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });

  return new Response('Method not allowed', { 
    status: 405,
    headers
  });
}

export function createOptionsResponse(): Response {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  });

  return new Response(null, {
    status: 204,
    headers
  });
}

export function createInternalErrorResponse(): Response {
  return createErrorResponse('Internal server error', 500);
}