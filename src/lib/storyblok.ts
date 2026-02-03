import {
  apiPlugin,
  type ISbStoryData,
  type SbSDKOptions,
  storyblokInit,
  useStoryblokBridge
} from '@storyblok/js';
import type { HttpError } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { onMount } from 'svelte';
import { env } from '$env/dynamic/public';
import { mockStoryblokApi } from './mock-storyblok-api';

function getStoryblokApi(
  apiOptions: SbSDKOptions['apiOptions'] = {},
  options: Omit<SbSDKOptions, 'apiOptions'> = {}
) {
  const accessToken = env.PUBLIC_STORYBLOK_TOKEN;
  if (!accessToken || typeof accessToken !== 'string' || accessToken.trim() === '') {
    // No token = static mode: use mock content from src/lib/mock-data.ts
    return mockStoryblokApi;
  }

  const { storyblokApi } = storyblokInit({
    accessToken,
    use: [apiPlugin],
    ...options,
    apiOptions: {
      https: true,
      ...apiOptions
    }
  });

  return storyblokApi ?? mockStoryblokApi;
}

export const getStoryblok = (
  apiOptions: SbSDKOptions['apiOptions'] = {},
  options: Omit<SbSDKOptions, 'apiOptions'> = {}
) => {
  return getStoryblokApi(apiOptions, options);
};

export const storyblok = getStoryblokApi();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function startStoryblokBridge<T extends { story: ISbStoryData<any> }>(
  id: number,
  onNewStory: (newStory: T['story']) => void
) {
  onMount(async () => {
    getStoryblok();
    useStoryblokBridge(id, onNewStory);
  });
}

export const isStatusError = (err: unknown): err is { status: number } => {
  return (
    typeof err === 'object' && err !== null && 'status' in err && typeof err.status === 'number'
  );
};

/**
 * Converts a Storyblok error to a SvelteKit error when needed.
 *
 * @param err - The error object to handle, which can be of any type.
 * @returns The original error if it is not a Storyblok error, or a SvelteKit 404 error.
 */
export const handleStoryblokError = <T>(err: T): T | HttpError => {
  if (isStatusError(err) && err.status === 404) {
    return error(404, 'Storyblok 404 error');
  }
  return err;
};
