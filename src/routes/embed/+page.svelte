<script lang="ts">
  import EmbedWrapper from "$lib/EmbedWrapper.svelte";

  let repetitions = $state(5);
  let content = $derived.by(() => {
    return Array.from({ length: repetitions }, () => "Hello World! ");
  });
</script>

<EmbedWrapper>
  {#each content as item}
    <p>{item}</p>
  {/each}
</EmbedWrapper>

<style>
  :global {
    body {
      margin: 0;
      padding: 0;
    }
  }
</style>
