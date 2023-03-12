<script>
    import { count } from "./store.js";
    import {onDestroy, onMount} from "svelte";

    let disabled = false;

    function Increase() {
      count.update((n) => {
        return n+1;
      });
    }

    const unsub = count.subscribe((v) => {
      disabled = v >= 100 ? true : false;
    });

    onDestroy(unsub)
</script>

<button disabled={disabled} on:click={Increase}>count 증가</button>