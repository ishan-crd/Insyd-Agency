<script lang="ts">
  import ContactForm from '$components/contact-form.svelte';
  import Segg1 from '$components/pages/contact/illustrations/segg1.svelte';
  import Segg2 from '$components/pages/contact/illustrations/segg2.svelte';
  import PanWithEggs from '$components/pages/contact/pan-with-eggs.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { ContactUsFormStoryblok } from '$types/bloks';

  export let block: ContactUsFormStoryblok;
</script>

<div use:storyblokEditable={block} class="mt-16 overflow-hidden pb-20 lg:mt-28 lg:pb-32">
  <div class="container relative mx-auto px-container">
    <section class="pb-5 pt-10 lg:pb-12 lg:pt-20 lg:text-center">
      <h1 class="mx-auto text-7xl lg:max-w-xl">
        <span class="text-[#EC4899]">{block.title1}</span>
        {block.title2}
      </h1>
    </section>

    <section
      class="mx-auto rounded-xl border border-border/50 bg-background-panel/60 p-6 backdrop-blur-sm dark:bg-background-panel/40 lg:max-w-xl lg:p-8 lg:pt-5"
    >
      <ContactForm variant="contact" disclaimer={block.form_support_text} />
    </section>

    <PanWithEggs
      class="absolute -left-16 top-1/2 hidden -translate-y-1/2 -rotate-[14deg] drop-shadow-md lg:block"
    />
    <Segg1 class="absolute -right-16 top-[170px] hidden -rotate-[16deg] drop-shadow-md lg:block" />
    <Segg2 class="absolute -right-20 top-[400px] hidden -rotate-[16deg] drop-shadow-md lg:block" />
  </div>
</div>
