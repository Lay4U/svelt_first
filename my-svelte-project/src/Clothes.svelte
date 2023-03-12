<script>
    import { setContext } from "svelte";
    import Socks from "./Socks.svelte";

    setContext("discount", 20);
</script>

<h3>의류 매장</h3>
<Socks/>