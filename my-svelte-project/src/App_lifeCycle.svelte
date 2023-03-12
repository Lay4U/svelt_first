<!-- 라이프 사이클 -->

<script>
  import Child from './Child.svelte';
  let flag = false;
</script>

<section>
    <button on:click={() => flag = !flag}>
        {flag===true ? 'Destroy CHIld!' : 'Create Child!'}
    </button>

    <p>
        {#if flag}
            <Child />
        {/if}
    </p>
</section>