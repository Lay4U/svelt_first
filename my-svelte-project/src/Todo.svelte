<svelte:options immutable={true} accessors={true} />

<script>
  import {afterUpdate} from "svelte";

  export let todo;
  export let count = 0;
  afterUpdate(() => {
    count++;
    console.log("afterUpdate", count);
  });
</script>

<p>[{todo.done}] {todo.text} ({count}) </p>