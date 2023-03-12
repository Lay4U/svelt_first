<!-- 특수 엘리먼트 -->
<!-- self
<script>
    import Category from './Category.svelte';

    let category = {
      name: '취급상품',
      sub: [
        {
          name: '컴퓨터',
          sub: [
            {name: '데스크탑'},
            {name: '노트북'},
          ]
        },
        {
          name: '식품관',
          sub: [
            {
              name: '과일',
              sumb: [{name: '수박'}, {name: '바나나'},{name: '키위'}, {name: '딸기'}]
            },
            {
              name: '야채',
              sub: [
                {name: '당근'}, {name: '호박'}
              ]
            }
          ]
        }
        ,{name: '특가상품'}
      ]
    };
</script>

<Category category={category} />-->

<!--
<script> component
    import Read from './Read.svelte';
    import Write from './Write.svelte';
    import Modify from './Modify.svelte';

    const modes = [
      { mode: "읽기", component: Read },
      { mode: "쓰기", component: Write },
      { mode: "수정", component: Modify }
    ];

    let current = modes[0];
    let text = '가장 빨리 만나는 스벨트';
</script>

<select bind:value={current}>
    {#each modes as mode}
        <option value={mode}>{mode.mode}</option>
    {/each}
</select>

<svelte:component this={current.component} content={text} />-->


<!-- window

<script>
    let innerWidth;
    let innerHeight;

    function handleKeydown(event){
      console.log(event.key);
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight on:keydown={handleKeydown} />

<p>innerWidth:{innerWidth}</p>
<p>innerHeight:{innerHeight}</p>
-->

<!-- body, head
<script>
    let message = '마우스를 잃어버렸어요';

    function mouseleaveHandler(){
      message = '마우스를 잃어버렸어요';
    }
</script>

<svelte:body
    on:mouseenter={() => message='마우스 포인터 발견'}
    on:mouseleave={mouseleaveHandler}
    />

<h3>{message}</h3>

<svelte:head>
    <title>svelte:head</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        >
</svelte:head>

<button type="button">일반 버튼</button>
<button type="button" class="btn btn-sm btn-dark">bootstrap 버튼</button>-->



<!-- Options
<script>
    import Todo from './Todo.svelte';
    let todos = [
      { id: 1, done: '완료', text: '세차하기'},
      { id: 2, done: '진행', text: '정원 산책'},
      { id: 3, done: '진행', text: '잔디 깎기'}
    ];

    let refObj;
</script>

<button on:click={() => {
  todos[1] = { id: 2, done: '완료', text: '정원 산책'};
  todos = todos;
}}>정원 산책 완료 </button>

<h2>Immutable 테스트</h2>
{#each todos as todo}
    <Todo bind:todo={todo} />
{/each}

<button on:click={() => {
  console.log(refObj);
  refObj.count = 100;
}}> Todo props 접근 </button>
<h2> Accessors 테스트</h2>
<Todo todo={todos[0]} bind:this={refObj} />-->

<script>
    import Container from "./Container.svelte";
</script>

<h4>1. slot예제</h4>
<Container>
    <div slot="content">
        <p>3번 박스</p>
        <p>2번 박스</p>
    </div>
</Container>

<h4>2. svelte:fragment 예제</h4>
<Container>
    <svelte:fragment slot="content">
        <p>3번 박스</p>
        <p>2번 박스</p>
    </svelte:fragment>
</Container>