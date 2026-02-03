import type { Handle } from '@sveltejs/kit';
import { PREVIEW_COOKIE_KEY } from '$lib/constants';

const validateDraftMode: Handle = async ({ event, resolve }) => {
  event.locals.version = event.cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';

  const response = await resolve(event);
  if (event.locals.version === 'draft') {
    response.headers.set('X-Frame-Options', 'ALLOW-FROM storyblok.com');
  }

  return response;
};

export const handle = validateDraftMode;
