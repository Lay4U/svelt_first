<!--Context API-->

<script>
    import { setContext } from "svelte";
    import Fruit from "./Fruit.svelte";
    import Clothes from "./Clothes.svelte";
    setContext("ceo", "김형래");
</script>

<Fruit />
<Clothes />