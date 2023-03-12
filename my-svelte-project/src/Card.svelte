<script>
    console.log($$slots);
</script>

<div class="card">
    <slot name="user"></slot>
    <p>전화번호: <slot name="mobile"></slot></p>
<!--    <p>이메일: <slot name="email"></slot></p>-->
    {#if $$slots.email}
        <p>이메일: <slot name="email"></slot></p>
    {/if}
</div>

<style>
    .card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>