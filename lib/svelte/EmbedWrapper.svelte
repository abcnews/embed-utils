<script lang="ts">
  import type { Snippet } from 'svelte';
  import { emitResize } from '../core';
  
  let { children }: { children: Snippet } = $props();
  
  let container: HTMLDivElement;
  
  $effect(() => {
    if (!container) return;
    
    const observer = new ResizeObserver(() => {
      emitResize(container.offsetHeight);
    });
    
    observer.observe(container);
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this={container}>
  {@render children()}
</div>
