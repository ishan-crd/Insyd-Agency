<script lang="ts">
  import '$styles/index.css';

  import DraftMode from '$components/draft-mode.svelte';
  import ImageGallery from '$components/image-gallery.svelte';
  import PageDrawer from '$components/page-drawer.svelte';
  import { toast, Toaster, ToastNotification } from '@significa/svelte-ui';
  import { beforeNavigate } from '$app/navigation';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  beforeNavigate(() => {
    toast.clearAll();
  });

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Toaster component={ToastNotification} />
  <DraftMode />

  <PageDrawer />
  <ImageGallery />
  <slot />
</QueryClientProvider>
