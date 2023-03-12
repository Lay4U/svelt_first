<script>
    export let category;
</script>

<ul>
    <li>
        {category.name}
        {#if category.sub}
            ({category.sub.length})
            {#each category.sub as item}
                <svelte:self category={item} />
            {/each}
        {/if}
    </li>
</ul>