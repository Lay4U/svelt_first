<script>

  export let choice = "";

  export let list = [
    {code: "apple", desc: "사과"},
    {code: "kiwi", desc: "키위"},
    {code: "mango", desc: "망고"},
    {code: "strawberry", desc: "딸기"},
  ];
</script>

<select bind:value={choice}>
    <option value="">선택하세요</option>
    {#each list as item}
        <option value={item.code}>{item.desc}</option>
    {/each}
</select>

<style>
</style>