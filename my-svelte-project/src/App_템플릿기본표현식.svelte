<script>
  // export let name = "홍길동";
  // export let name="홍길동"
  // export const name = "홍길동"

  import Component from "./Component.svelte";
  export let name = "world";
  console.log(name);
  $:console.log(name)
  // let name = 'world';
  let a = 1;
  let colors = ["빨강", "노랑", "파랑", "보라"];
  let emailCard = {
    _id: "a1",
    name: "둘리",
    email: "d2@mail.com",
    age: 10,
  }

  console.log(Object.entries(emailCard));

  async function promiseFunc() {
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello Universe~!");
        // reject(new Error('reject입니다.'))
      }, 1000)
    });

    const rtn = await result;
    return rtn;
  }

  let myPromise = promiseFunc()


  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const json = await res.json();
    return json;
  }

  let promisePosts = getPosts();

  export function greeting(name) {
    alert('안녕하세요 ${name}님')
  }

  import MyView from "./MyView.svelte";

  const post = {
    title: "가장 빨리 만나는 스벨트",
    content: "<span style='color:red'>스벨트</span>는 정말 <b>재미있었어용</b>"
  }
</script>

<input type="number" bind:value={a}/>
{#if a > 0}
    <h1>Hello {name}!!</h1>
{/if}

{#if a === 0}
    <p>{a}입니다.</p>
{:else if a > 0}
    <p>{a} 는 양수입니다.</p>
{:else}
    <p>{a} 는 음수입니다.</p>
{/if}

<input type=text bind:value={name}>
<p>{Date()}</p>

{#key name}
    <p>{Date()}</p>
    <h1>Hello {name}!</h1>
{/key}

<input type=text bind:value={name}>
{#key name}
    <Component name={name}/>
{/key}

<div>
    <h1>{post.title}</h1>
    {@html post.content}
</div>

<!--{@debug name}-->

<main>
    <select>
        <option> 선택하세요</option>
        {#each colors as color, idx }
            <option> {idx + 1}: {color}</option>
        {/each}
    </select>

    <ul>
        {#each colors as color, idx}
            <li>{idx}: {color}</li>
        {/each}
    </ul>


    {#each Object.entries(emailCard) as [key, value], idx}
        <p>{idx}번재 키: {key}의 값은 {value}</p>
    {/each}

    <button on:click={() => myPromise = promiseFunc() }> async 함수 호출하기</button>
    {#await myPromise}
        <h1>잠시만 기다리세요...</h1>
    {:then res}
        <h1>{res}</h1>
    {:catch error}
        <h1>Error: {error.message}</h1>
    {/await}

    <button on:click={() => promisePosts = getPosts()}> 포스트 리스트 가져오기</button>
    <table border="1">
        <thead>
        <th>id</th>
        <th>사용자</th>
        <th>타이틀</th>
        <th>내용</th>
        </thead>
        <tbody>
        {#await promisePosts}
            <tr>
                <td colspan="4">
                    가져오는 중 잠시만 기다리세용
                </td>
            </tr>
        {:then posts}
            {#each posts as post}
                <tr>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            {/each}
        {:catch error}
            <tr>
                <td colspan="4">
                    Error: {error.message}
                </td>

            </tr>
        {/await}
        </tbody>
    </table>

    <!--    <h1>Hello {name}!</h1>-->
    <!--    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>-->
    <!--    <MyView/>-->
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>