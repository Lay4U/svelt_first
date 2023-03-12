<!--HTML 엘리먼트에 데이터 바인딩 하기-->

<!-- 바인딩 기초
<script>
    let name = 'world';
</script>

<main>
&lt;!&ndash;    <input type="text" value="{name}" />&ndash;&gt;
    <input type="text" bind:value="{name}" />
    <h1>Hello {name}!</h1>
</main>
-->


<!--
<script>
    let name = 'world';
    let size = 30;
</script>

<main>
    <input type="range" bind:value={size} min="0" max="100" /><br/>
    <input type="number" bind:value={size} min="0" max="100" /><br/>
    <h1 style="font-size: {size}px;">Hello {name}!!</h1>
</main>

-->

<!--
<script>
  let editable = false;
  let favorite = "스벨트";
</script>

<main>
    <input type="checkbox" bind:checked={editable}>
    수정하려면 체크하세요
    {#if editable}
        <p> 수정 모드: <input bind:value={favorite}></p>
    {:else}
        <p> 보기 모드: {favorite}</p>
    {/if}
</main>
-->


<!--
<script>
  let where = "";
  let menu = ["커피", "주스", "샌드위치", "김밥"];
  let chosen = [];
  let order = "";
  $:order = chosen.length > 0
    ? `<b>${chosen}</b> 메뉴를 <b>${where === '매장'
      ? '매장 식사를'
      : '포장 주문을'}
        </b> 선택 하셨습니다.`
    : "메뉴를 선택해주세요";
</script>

<main>
    <h2> 포장: {where}</h2>
    <input type="radio" bind:group={where} value="포장"> 포장합니다.
    <input type="radio" bind:group={where} value="매장"> 매장에서 먹을래요

    <h2>메뉴 : {chosen}</h2>
    {#each menu as item}
        <label>
            <input type="checkbox" bind:group={chosen} value="{item}"> {item}
        </label>
    {/each}

    <p>{@html order}</p>
</main>
-->

<!--
<script>
  import {marked} from "marked"
    let markdown = '# 타이틀 \n\n- 리스트1\n- 리스트2\n- 리스트3';
</script>

<textarea bind:value={markdown} placeholder="내용 입력"/>

<div class="preview">{@html marked(markdown)}</div>

<style>
    textarea {
        height: 40%;
        width: 100%;
        margin: 0;
        border: none;
    }
    .preview{
        height: 60%;
        padding: 20px;
        border-top: solid 2px gray;
    }
</style>
-->

<!--
<script>
    let choice = "";
    let chosen = [];
</script>

<select bind:value={choice}>
    <option value="값1">값1 선택</option>
    <option value="값2">값2 선택</option>
    <option value="값3">값3 선택</option>
</select>

<select multiple bind:value={chosen}>
    <option value="값1">값1 선택</option>
    <option value="값2">값2 선택</option>
    <option value="값3">값3 선택</option>
</select>-->

<!--

<script>
  let where;
  let menu = ["커피", "주스", "샌드위치", "김밥"];
  let chosen = [];
  let order;
  $:order = chosen.length > 0
    ? `<b>${chosen}</b> 메뉴를 <b>
        ${where === '매장'
      ? '매장 식사를'
      : '포장 주문을'}
        </b>선택 하셨습니다.`
    : "메뉴를 선택해주세요";
</script>

<main>
    <h2> 포장: {where}</h2>
    <select bind:value={where}>
        <option value="">선택하세요</option>
        <option value="포장">포장합니다</option>
        <option value="매장">매장에서 먹을래요</option>
    </select>

    <h2> 메뉴: {chosen}</h2>
    <select multiple bind:value={chosen}>
        {#each menu as item}
            <option value="{item}">{item}</option>
        {/each}
    </select>
    <p>{@html order}</p>
</main>-->

<!--

<script>
    let html = '<p>가장 빨리 만나는 스벨트</p>';
</script>
<div contenteditable="true" bind:innerHTML={html}></div>
<pre>{html}</pre>

<style>
    [contenteditable=true]{
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 10px;
    }
</style>-->


<!--
<script>
  let customers = [
    {disable: false, email: "hong@mail.com", mailType: "home", name: "홍길동", age: 25, grade: "gold"},
    {disable: false, email: "kim@mail.com", mailType: "office", name: "김길동", age: 39, grade: "silver"},
    {disable: false, email: "lee@mail.com", mailType: "home", name: "이길동", age: 35, grade: "normal"},
  ];
</script>

<table border="1">
    <thead>
    <th>탈퇴여부</th>
    <th>이메일</th>
    <th>메일 타입</th>
    <th>이름</th>
    <th>나이</th>
    <th>등급</th>
    </thead>
    <tbody>
    {#each customers as cust}
        <tr>
            <td><input type="checkbox" bind:checked={cust.disable}></td>
            <td><input type="text" bind:value={cust.email} disabled="{cust.disable}"></td>
            <td>
                [ 집: <input type="radio" bind:group={cust.mailType} value="home" disabled={cust.disable}> |
                회사: <input type="radio" bind:group={cust.mailType} value="office" disabled={cust.disabled}> ]
            </td>
            <td>
                <input type="text" bind:value={cust.name} disabled={cust.disable}>
            </td>
            <td>
                <input type="number" bind:value={cust.age} disabled={cust.disable}>
            </td>
            <td>
                <select bind:value={cust.grade}>
                    <option value="gold">골드</option>
                    <option value="silver">실버</option>
                    <option value="normal">일반</option>
                </select>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    table{
        width: 100%;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td{
        border: 1px solid;
        padding: 10px;
    }
</style>-->

<!--

<script>
    let paused = true;
    let currentTime = 0;
    let duration;
    let volume = 0.5;
    let muted = false;
    let playbackRate = 1;

    function format(seconds){
      if (isNaN(seconds)) return "...";
      let minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);

      if (seconds < 10) seconds = '0' + seconds;
      return `${minutes}:${seconds}`;
    }
</script>

<video
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    bind:paused
    bind:currentTime
    bind:duration
    bind:volume
    bind:muted
    bind:playbackRate>
    <track kind="captions" />
</video>

<div class="controller">
    <input class="progress" type="range" bind:value={currentTime} min="0" max="{duration}" step="0.001"/>

    <div class="time">
        <span>{format(currentTime)}</span>
        <span>{format(duration)}</span>
    </div>
    <br/>

    <div class="controls">
        <button on:click={() => {paused = !paused;}}>
            {#if paused} 시작 {:else} 정지 {/if}
        </button>

        <select bind:value={playbackRate}>
            <option value="0.5">0.5배속</option>
            <option value="1">1배속</option>
            <option value="1.5">1.5배속</option>
            <option value="2">2배속</option>
        </select>

        <button on:click={() => {currentTime = currentTime -5}}> &lt; 5초 </button>
        <button on:click={() => {currentTime = currentTime +5}}> 5초 &gt; </button>

        <button on:click={() => {muted = !muted;}}>{#if muted} 소리 켜기 {:else} 쉿! {/if}</button>

        <input type="range" bind:value={volume} min="0" max="1" step="0.01"/>
    </div>

    <style>
        video, .controller, .progress, .controls{
            width: 100%;
        }

        .time{
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .controls>input{
            vertical-align: middle;
        }
    </style>
</div>-->

<!-- block-level element's dimension is immutable -->
<!--
<script>
    let w = 500;
    let h = 500;
    let text = "크기 값 바인딩 예제";
    let size = 15;
</script>

<p>{w}px x {h}px</p>

<input type="range" bind:value={size}>

<div bind:clientWidth={w} bind:clientHeight={h}>
    &lt;!&ndash;{text}&ndash;&gt;
    <span style="font-size: {size}px">{text}</span>
</div>

<style>
    div { border: solid gray 1px;}
</style>-->
<!--

<script>
  import { onMount } from "svelte";
  onMount(async() => {
    todoInput.focus();
  })

  let todos = [];
    let todoInput;
    let todo = "";
    const add = () => {
        if(todo.replaceAll(" ", "")===""){
          alert('값을 입력하세요');
          todoInput.focus();
        }else{
          todos.push(todo);
          todos = todos;
          todo = "";
          todoInput.focus();
        }
    }

    const remove = () => {
        todos = [];
        todoInput.focus();
    }
</script>

<input type="text" bind:this={todoInput} bind:value={todo}>
<button on:click={add}>추가</button>
<ul>
    {#each todos as item}
        <li>{item}</li>
{/each}
</ul>

<button on:click={remove}>전부 삭제</button>
-->


<script>
  import {onMount} from "svelte";
  import List from "./List.svelte";

  onMount(async () => {
    todoInput.focus();
  })

  let todos = [];
  let todoInput;
  let todo = "";

  const add = () => {
    if (todo.replaceAll(" ", "") === "") {
      alert('값을 입력하세요');
      todoInput.focus();
    } else {
      todos.push(todo);
      todos = todos;
      todo = "";
      todoInput.focus();
    }
  }

  const remove = () => {
    todos = [];
    todoInput.focus();
  }
</script>

<input type="text" bind:this={todoInput} bind:value={todo}>
<button on:click={add}>추가</button>

<List list_todos = {todos} />

<button on:click={remove}>전부 삭제</button>


