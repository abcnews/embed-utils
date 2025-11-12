<script lang="ts">
  import type { Snippet } from "svelte";
  import { emitResize } from "./emitSize.ts";

  let { children }: { children: Snippet } = $props();

  let height = $state(0);

  $effect(() => {
    if (height > 0) {
      emitResize(height);
    }
  });
</script>

<div class="root" bind:clientHeight={height}>
  {@render children()}
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
  }
</style>
