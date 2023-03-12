<script>


    import {tick, onMount, beforeUpdate, afterUpdate, onDestroy} from "svelte";

    let txt;

    onMount(() =>{

      console.log('Child onMount 호출');
      txt = document.getElementById('text01');
      txt.focus();
    })

    onDestroy(() => {
      console.log('CHild onDestroy 호출됨');
    })

    beforeUpdate(() => {
      if(txt) console.log('Child beforeUpdate 호출됨', txt.value);
    });

    afterUpdate(() => {
      console.log('Child afterUpdate 호출됨', txt.value);
    });

    let x = 0;

</script>

<h1> Child </h1>
<input type="text" id="text01" bind:value={x} />
<button on:click={async () => {
  x++;
  await tick();
  console.log(x);
  console.log(document.getElementById('text01').value);
}}>add</button>