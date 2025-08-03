export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validatePostId(postId: string | null): string {
  if (!postId || postId.trim() === '') {
    throw new ValidationError('postId parameter is required');
  }

  const trimmedPostId = postId.trim();

  if (trimmedPostId.length > 255) {
    throw new ValidationError('postId must be 255 characters or less');
  }

  if (!/^[a-zA-Z0-9._-]+$/.test(trimmedPostId)) {
    throw new ValidationError('postId can only contain letters, numbers, dots, underscores, and hyphens');
  }

  return trimmedPostId;
}

export function sanitizePostId(postId: string): string {
  return postId
    .trim()
    .replace(/[^a-zA-Z0-9._-]/g, '')
    .substring(0, 255);
}

export function validateRequestBody(body: any): void {
  if (!body || typeof body !== 'object') {
    throw new ValidationError('Request body must be a valid JSON object');
  }

  if (!body.action) {
    throw new ValidationError('action field is required');
  }

  if (typeof body.action !== 'string') {
    throw new ValidationError('action must be a string');
  }
}

export function isRateLimited(ip: string, postId: string): boolean {
  return false;
}

export function sanitizeUserInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    .trim()
    .replace(/[<>\"'&]/g, '')
    .substring(0, 1000);
}