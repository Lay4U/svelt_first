<!--transition-->
<script>
  import {blur, fade, fly, scale, slide} from "svelte/transition"

  let show = true;

  import {circIn} from "svelte/easing";

  let options = {duration: 1000, easing: circIn};
  let visible = true;

  let visible2 = true;
  let status = '이벤트 기다리는 중..';

  let grandparent = true;
  let parent = true;
</script>

<button on:click={() => show = !show}>
    Toggle
</button>
{#if show}
    <h1 transition:fade={options}>fade는 점점 사라집니다.</h1>
    <h1 transition:blur={options}>blur는 뿌옇게</h1>
    <h1 transition:fly={{...options, x: 150}}>fly는 날아다녀요</h1>
    <h1 transition:slide={options}>slide 커튼처럼</h1>
    <h1 transition:scale={options}>멀어지며 작아지는 scale</h1>
{/if}

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>
{#if visible}
    <p in:fly={{y:200, duration: 2000}} out:fade>
        아래서 날아 들어오고, 조용히 사라지다.
    </p>
{/if}

<p>이벤트 상태: {status}</p>

<label>
    <input type="checkbox" bind:checked={visible2}>
    visible2
</label>

{#if visible2}
    <p
            transition:fly="{{y: 200, duration: 2000}}"
            on:introstart={() => status = '등장 시작'}
            on:introend={() => status = '등장 완료'}
            on:outrostart={() => status = '사라지기 시작'}
            on:outroend={() => status = '사라지기 완료'}
    >
        트랜지션 이벤트 처리
    </p>
{/if}

<p><input type="checkbox" bind:checked={grandparent}>조부모</p>
<p><input type="checkbox" bind:checked={parent}>부모</p>
{#if grandparent}
    {#if parent}
        <p transition:fade> 형 - 어른 말씀 잘 들음</p>
        <p transition:fade|local> 동생 - 부모 말만 듣는 local</p> <!--잘되는데?-->
    {/if}
{/if}