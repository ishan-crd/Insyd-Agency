<script lang="ts">
  import { browser } from '$app/environment';
  import { env } from '$env/dynamic/public';
  import DynamicPage from '$components/pages/dynamic-page.svelte';
  import { startStoryblokBridge } from '$lib/storyblok';

  export let data;

  // Only use Storyblok live bridge when connected to CMS (has token)
  if (browser && env.PUBLIC_STORYBLOK_TOKEN && data.page.story?.id) {
    startStoryblokBridge(data.page.story.id, (newStory) => {
      data.page.story = newStory;
    });
  }
</script>

{#key data.page.story?.uuid}
  <DynamicPage page={data.page} />
{/key}
