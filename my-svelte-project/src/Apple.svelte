<script>
  import {getContext, hasContext} from "svelte";
    let rate = getContext("discount")
    console.log(getContext("discount"));

    if(!hasContext("discount")){
      rate = 0;
    }
</script>

<p>오늘 사과는 {rate}% 할인합니다.</p>