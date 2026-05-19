import posthog from 'posthog-js';

export type WMEvent =
  | 'page_view'
  | 'hero_cta_clicked'
  | 'pricing_plan_viewed'
  | 'contact_modal_opened'
  | 'contact_form_submitted'
  | 'service_page_viewed'
  | 'work_filter_used'
  | 'section_scrolled';

export function track(event: WMEvent, props?: Record<string, unknown>) {
  // Only fire analytics if PostHog has consent (check posthog.has_opted_in_capturing())
  // In this project, we assume consent is already wired via an existing mechanism 
  // or we check the PostHog internal state.
  if (posthog.has_opted_in_capturing()) {
    posthog.capture(event, props);
  } else if (import.meta.env.DEV) {
    // For local testing, we can log to console
    console.log(`[Analytics-DEV] ${event}`, props);
  }
}
