<!-- 액션 -->
<script>
    function multiClickButton(node, option={count:3, enabled:true}){
      let clickCount = 0;

      const btnClick = () => {
        clickCount++;

        if(clickCount===option.count && option.enabled === true){
          node.dispatchEvent(new CustomEvent("multiClick", option));
          resetCount();
        }
      }

      const resetCount = () => {
        clickCount = 0;
      }

      node.addEventListener("click", btnClick);
      node.addEventListener('blur', resetCount);

      return {
        update(newOption){
          option = newOption;
        },

        destroy(){
          node.removeEventListener("click", btnClick);
          node.removeEventListener('blur', resetCount);
        }
      }
    }
    function multiClickHandler(e){
      console.log(`[${e.target.innerText}] 멀티 클릭 되었습니다.`);
    }

    let enabled = true;
    let count = 4;
</script>

<h1>suse:action 테스트</h1>
<button use:multiClickButton
        on:multiClick={multiClickHandler}
>기본 멀티 클릭 이벤트 </button> <br/>

<button use:multiClickButton={{count, enabled}}
        on:multiClick={multiClickHandler}
>4번 클릭 이벤트 </button> <br/>

<input type=checkbox bind:checked={enabled}>