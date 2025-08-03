export interface AnalyticsEvent {
  event: string;
  postId: string;
  action?: string;
  timestamp: number;
  ip?: string;
  userAgent?: string;
  requestId?: string;
}

export class Analytics {
  private events: AnalyticsEvent[] = [];
  private maxEvents = 1000;

  track(event: string, data: Partial<AnalyticsEvent>): void {
    const analyticsEvent: AnalyticsEvent = {
      event,
      postId: data.postId || '',
      action: data.action,
      timestamp: Date.now(),
      ip: data.ip,
      userAgent: data.userAgent,
      requestId: data.requestId
    };

    this.events.push(analyticsEvent);

    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }

    console.log(JSON.stringify({
      type: 'analytics',
      ...analyticsEvent
    }));
  }

  getEvents(postId?: string): AnalyticsEvent[] {
    if (postId) {
      return this.events.filter(event => event.postId === postId);
    }
    return [...this.events];
  }

  getStats(postId: string): {
    totalVotes: number;
    upvotes: number;
    downvotes: number;
    uniqueIPs: number;
  } {
    const postEvents = this.events.filter(
      event => event.postId === postId && event.event === 'vote_cast'
    );

    const upvotes = postEvents.filter(event => event.action === 'upvote').length;
    const downvotes = postEvents.filter(event => event.action === 'downvote').length;
    const uniqueIPs = new Set(postEvents.map(event => event.ip).filter(Boolean)).size;

    return {
      totalVotes: postEvents.length,
      upvotes,
      downvotes,
      uniqueIPs
    };
  }

  clear(): void {
    this.events = [];
  }
}

export const createAnalytics = (): Analytics => {
  return new Analytics();
};