/**
 * Mock Storyblok API for static mode (no CMS).
 * Returns static content from mock-data.ts when PUBLIC_STORYBLOK_TOKEN is not set.
 */

import type { ISbStoriesParams } from '@storyblok/js';
import { MOCK_AWARDS, MOCK_CONFIGURATION, MOCK_STORIES_BY_SLUG, PROJECTS } from './mock-data';

type GetParams = ISbStoriesParams & { version?: string };

function createMockApi() {
  return {
    async get(url: string, params?: GetParams) {
      // Single story: cdn/stories/configuration, cdn/stories/home, etc.
      if (url.startsWith('cdn/stories/') && !url.endsWith('stories/')) {
        const slug = url.replace('cdn/stories/', '').trim();
        const story = slug === 'configuration' ? MOCK_CONFIGURATION : MOCK_STORIES_BY_SLUG[slug];
        if (story) {
          return { data: { story } };
        }
      }

      // List stories: cdn/stories with content_type
      if (url === 'cdn/stories' && params) {
        const contentType = params.content_type;

        if (contentType === 'career') {
          return { data: { stories: [] }, total: 0 };
        }
        if (contentType === 'recognition-entry' || contentType === 'recognition-type') {
          const stories = contentType === 'recognition-entry' ? MOCK_AWARDS : [];
          return { data: { stories }, total: stories.length };
        }
        if (contentType === 'team-member') {
          return { data: { stories: [] }, total: 0 };
        }
        if (contentType === 'blog-post') {
          return { data: { stories: [] }, total: 0 };
        }
        if (contentType === 'project') {
          return { data: { stories: PROJECTS }, total: PROJECTS.length };
        }
      }

      // cdn/tags for blog
      if (url === 'cdn/tags') {
        return { data: { tags: [] } };
      }

      // Not found
      const err = new Error('Not found') as Error & { status?: number };
      err.status = 404;
      throw err;
    },
    async getAll(url: string, params?: GetParams) {
      if (url === 'cdn/stories' && params) {
        const contentType = params.content_type;
        if (contentType === 'blog-post') return [];
        if (contentType === 'project') return PROJECTS;
        if (contentType === 'recognition-entry') return MOCK_AWARDS;
      }
      return [];
    }
  };
}

export type MockStoryblokApi = ReturnType<typeof createMockApi>;
export const mockStoryblokApi = createMockApi();
