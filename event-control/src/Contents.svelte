<script>
    import SearchButton from "./SearchButton.svelte";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    function forward(event){
      dispatch("searchClicked", event.detail);
    }
</script>

<h2>Contents</h2>
<SearchButton on:searchClicked={forward} />>