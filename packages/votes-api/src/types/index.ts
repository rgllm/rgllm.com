export interface Env {
  VOTE_COUNTER: DurableObjectNamespace;
  ENVIRONMENT?: string;
  DEBUG?: string;
}

export type VoteAction = 'upvote' | 'downvote';

export interface VoteRequest {
  action: VoteAction;
}

export interface VoteData {
  postId: string;
  upvotes: number;
  downvotes: number;
  total: number;
}

export interface VoteUpdateResponse extends VoteData {
  action: VoteAction;
}

export interface ErrorResponse {
  error: string;
}