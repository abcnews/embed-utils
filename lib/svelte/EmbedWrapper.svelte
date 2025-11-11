<script lang="ts">
  import type { Snippet } from "svelte";
  import { emitResize } from "../core/";

  let { children }: { children: Snippet } = $props();

  let height = $state(0);

  $effect(() => {
    if (height > 0) {
      emitResize(height);
    }
  });
</script>

<div bind:clientHeight={height}>
  {@render children()}
</div>
