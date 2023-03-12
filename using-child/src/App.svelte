<script>
	import CustomSelect from "./CustomSelect.svelte";

	let fruit = "apple";

	let color = "yellow";
	let colorList = [
		{ code: "red", desc: "빨강" },
		{ code: "yellow", desc: "노랑" },
		{ code: "green", desc: "초록" },
		{ code: "orange", desc: "주황"},
	]

	let param = {
		choice: "yellow",
		list: [
			{ code: "red", desc: "빨강" },
			{ code: "yellow", desc: "노랑" },
			{ code: "green", desc: "초록" },
			{ code: "orange", desc: "주황"},
		]
	}
</script>

<main>
	<ul>
		<li>개발자 A: <CustomSelect/></li>
		<li>개발자 B: <CustomSelect bind:choice={fruit} /> - {fruit} 선택됨</li>
		<li>개발자 C: <CustomSelect list={colorList} bind:choice={color} /> - {color} 선택됨</li>
		<li>spread: <CustomSelect {...param} /> - { param.choice } 선택됨</li>
	</ul>
</main>

<style>

</style>