<!-- 모션, 트윈과 스프링-->

<script>
  import {tweened} from "svelte/motion";
  import {cubicIn} from "svelte/easing";

  const progress = tweened(0, {
    duration: 1000
  });

  const progress2 = tweened(0, {
    duration: 1000,
    easing: cubicIn
  });

  console.log(progress);

  progress.subscribe(v => console.log(v));



  import {spring} from "svelte/motion";

  let coords = spring({ x: 50, y: 50}, {
    stiffness: 0.1,
    damping: 0.5,
    precision: 0.3
  });

  let size = spring(10);
</script>

<style>
    svg { width: 100%; height: 100%; margin: -8px;}
    circle { fill: #080808}
    progress {
        width: 100%
    }
</style>

<svg
    on:mousemove={e => coords.set({
        x: e.clientX,
        y: e.clientY
    })}
    on:mousedown={e => size.set(30)}
    on:mouseup={e => size.set(10)}
    >
    <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>



<progress value={$progress}></progress>
<progress value={$progress2}></progress>
<button on:click={() => {
  progress.set(0);
    progress2.set(0);
}}>0%
</button>
<button on:click={() => {
  progress.set(0.5);
progress2.set(0.5)}}>50%
</button>
<button on:click={() => {
  progress.set(1);
progress2.set(1)}}>100%
</button>
