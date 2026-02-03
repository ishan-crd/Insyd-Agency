<script lang="ts">
  import PhysicsSection from '$components/physics-section.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/utils/cms';
  import type { PhysicsStoryblok } from '$types/bloks';
  import { Button } from '@significa/svelte-ui';
  import clsx from 'clsx';

  export let block: PhysicsStoryblok;
</script>

<section
  id={block.section_id || undefined}
  class={clsx(
    block.variant === 'section' && 'mt-16 border-y lg:mt-20',
    block.variant === 'hero' && '-mt-12 lg:-mt-20'
  )}
  use:storyblokEditable={block}
>
  {#if block.variant === 'section'}
    <div class="container mx-auto px-container">
      <div class="md:flex">
        <div class="flex-1 pt-10 md:pt-14 lg:pt-20">
          <h3 class="text-5xl text-foreground-secondary">{block.section_title1}</h3>
          <p class="text-5xl">{block.section_title2}</p>

          <p class="mt-4 max-w-md text-2xl text-foreground-secondary">
            {block.section_description}
          </p>
          {#if block.cta_link && block.cta_label}
            {@const { href } = getAnchorFromCmsLink(block.cta_link)}
            <Button class="mt-12" variant="secondary" as="a" {href} arrow>{block.cta_label}</Button>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <div
    class={clsx(
      'container mx-auto',
      block.variant === 'section' ? 'pb-10 md:pb-14 lg:-mb-px lg:pb-px' : 'relative isolate',
      block.variant === 'hero' && block.hero_title && 'overflow-hidden'
    )}
  >
    {#if block.variant === 'hero' && block.hero_title}
      <div
        class="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center px-4"
        aria-hidden="true"
      >
        <p
          class="text-center text-4xl font-bold text-foreground-secondary/40 md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {block.hero_title}
        </p>
        {#if block.overlay_subheading}
          <p
            class="mt-4 text-center text-lg font-medium italic tracking-wide text-foreground-secondary/50 md:text-xl lg:text-2xl"
          >
            {block.overlay_subheading}
          </p>
        {/if}
      </div>
    {/if}
    <PhysicsSection
      style={block.variant === 'hero' && 'height: min(calc(90vh - var(--topnav-height)), 830px);'}
      class={clsx(
        block.variant === 'section' && 'lg:h-[400px]',
        block.variant === 'hero' && 'relative z-10'
      )}
      items={block.physics_blocks}
    />
  </div>
</section>
