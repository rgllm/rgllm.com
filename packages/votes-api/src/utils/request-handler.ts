import { VoteRequest } from '../types';

export function extractPostId(url: URL): string | null {
  return url.searchParams.get('postId');
}

export async function parseVoteRequest(request: Request): Promise<VoteRequest> {
  const body = await request.json();
  return body as VoteRequest;
}

export function validateVoteAction(action: string): action is 'upvote' | 'downvote' {
  return ['upvote', 'downvote'].includes(action);
}

export function isValidMethod(method: string): boolean {
  return ['GET', 'POST', 'OPTIONS'].includes(method);
}

export function getClientIP(request: Request): string {
  return request.headers.get('CF-Connecting-IP') || 
         request.headers.get('X-Forwarded-For') || 
         'unknown';
}

export function getUserAgent(request: Request): string {
  return request.headers.get('User-Agent') || 'unknown';
}

export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}