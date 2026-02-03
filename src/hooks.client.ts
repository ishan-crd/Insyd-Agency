import type { HandleClientError } from '@sveltejs/kit';

// Client-side hooks (no Sentry/analytics in static mode)
export const handleError: HandleClientError = ({ error }) => {
  console.error(error);
};
