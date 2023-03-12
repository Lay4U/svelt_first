<script>
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher();
  let searchText = "";

  function searchEventHandler(){
    dispatch("searchClicked",{
      text: searchText
    });
    console.log('클릭 이벤트 발생');
    searchText = '';
  }
</script>

<input type="text" bind:value={searchText}>

<button on:click={searchEventHandler}> Search </button>

