<script>
  export let list_todos = [];
</script>

<ul>
    {#each list_todos as item}
        <li>{item}</li>
    {/each}
</ul>