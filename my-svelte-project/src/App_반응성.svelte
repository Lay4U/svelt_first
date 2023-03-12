<script>
    // let count = 10;
    // $: console.log(`count는 ${count}입니다.`)


    let count = 0;
    $: console.log('1. 한줄 구문: ', count);

    $: {
      count;
      console.log("2. 코드 블록: count가 변경됨");
    }

    $: if(count>0){
      console.log("3. if 조건: count가 0 보다 크다.");
    }

    $: for (let i = 0; i < 4; i++) {
      count;
      console.log("4. for loop 안에 count 값 변경됨 for: ", i);
    }

    function addCount() {
      count = count +1;
    }


    let colors = ["빨강", "주황", "노랑", "초록"];

    $: console.log("log.1: ", colors);

    function assignment(){
      colors.pop();
      colors = colors; // 할당을 해줘야함.
      console.log("log.2: ", colors);
    }




    let man = {
      age: "10",
      name: {
        first: "형래",
        last: "김"
      }
    };
    let name = man.name;

    function assignment2(){
      man.name.last = "kim";
      name = name;
      console.log(name.last);
    }
</script>

<button on:click={addCount}>카운트는 {count}입니다.</button>

<p>{colors.join(", ")} 모두 {colors.length} 개의 색이 있습니다.</p>
<button on:click={assignment}>할당</button>


<p>man.name.last: {man.name.last}</p>
<p>name.last: {name.last}</p>
<button on:click={assignment2}>할당</button>