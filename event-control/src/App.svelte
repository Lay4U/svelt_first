<script>
	import SearchButton from './SearchButton.svelte';
	import Contents from "./Contents.svelte";
	import SimpleButton from "./SimpleButton.svelte";


	let searchText = "";
	const customSearch = (event) => {
		searchText  = event.detail.text;
	}

	const simple = (event) => {
		console.log('simple');
	}
</script>

<p>
	<SearchButton on:searchClicked={customSearch}/>
	<br>{searchText===""?"검색어를 입력 후 Search 버튼을 클릭하세요": "검색어: " + searchText}
</p>

<p>
	<Contents on:searchClicked={customSearch}/>
	<br>{searchText===""?"검색어를 입력 후 Search 버튼을 클릭하세요": "검색어: " + searchText}
</p>

<p>
	<SimpleButton on:click={simple}/>
</p>