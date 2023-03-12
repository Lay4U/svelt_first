<!-- slot -->

<script>
    import Card from "./Card.svelte";
    let user = '홍길동';

    import Hoverable from "./Hoverable.svelte";
</script>

<Card>
    <h2 slot="user">{user}</h2>
<!--    <span slot="email">hong@email.com</span>-->
    <span slot="mobile">010-1234-5678</span>
</Card>

<Hoverable>
    <h2 slot="user" let:hovered={isFocused} class:hovered={isFocused}>
        홍길동 {#if isFocused}님 반갑습니다. {/if}
    </h2>
</Hoverable>

<Hoverable>
    <h2 slot="user" let:hovered class:hovered>
        김길동 {#if hovered}님 어서오세요. {/if}
    </h2>
</Hoverable>

<style>
    .hovered{
        font-style: italic;
        color:brown;
    }
</style>