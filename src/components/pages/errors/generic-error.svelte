<script lang="ts">
  import { dev } from '$app/environment';

  interface Error {
    message: string;
  }

  export let statusCode: number;
  export let error: Error | null;

  // Show error message for 503 (config/setup) or in dev for debugging
  const showMessage = error?.message && (statusCode === 503 || dev);
</script>

<div class="grid h-[calc(100dvh-var(--topnav-height))] place-items-center">
  <p class="text-center text-lg">
    {#if showMessage}
      {statusCode} - {error?.message ?? ''}
    {:else if statusCode >= 500}
      {statusCode} - Something went wrong.<br />We apologize for the inconvenience. If the error
      persists, please contact us.
    {:else}
      {statusCode} {error?.message}
    {/if}
  </p>
</div>
