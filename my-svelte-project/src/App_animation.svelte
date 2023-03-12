<!--애니메이션-->
<script>
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function shuffle() {
    numbers = numbers.sort(() => 0.5 - Math.random());
  }

  import {flip} from "svelte/animate";
</script>

<button on:click={shuffle}> 섞기</button>
<div>
    {#each numbers as number (number)}
        <button animate:flip>{number}</button>
    {/each}
</div>
