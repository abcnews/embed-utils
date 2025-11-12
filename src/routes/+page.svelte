<script lang="ts">
  import { onMount } from "svelte";
  let height = $state(100);

  onMount(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "embed-size") {
        height = event.data.height;
      }
    });
  });
</script>

<iframe src="/embed" width="100%" {height} title="embed" frameborder="0">
</iframe>
