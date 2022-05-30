enum EventType {
  'link',
  'navigate',
  'recommend',
  'click',
}

type TrackEvent = (
  event_value: string,
  event_type: keyof typeof EventType,
  url?: string | undefined,
  website_id?: string | undefined,
) => void

export const trackEvent: TrackEvent = (...args) => {
  if ((window as any).umami && typeof (window as any).umami.trackEvent === 'function') {
    ;(window as any).umami.trackEvent(...args)
  }
}
