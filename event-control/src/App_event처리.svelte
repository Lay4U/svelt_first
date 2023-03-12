<script>
	let count = 0;

	const search = (event) => {
		console.log(event.target);
		count+=1;
	}

</script>

<button on:click={search}>
	Search({count})
</button>

<button on:click={(event) => {
	console.log(event.target);
	count = count+1;
}}>
	Search Inline ({count})
</button>

<button on:click|once={search}>
	Search Once ({count})
</button>