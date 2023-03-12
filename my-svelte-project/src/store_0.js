import {writable, readable, derived} from "svelte/store";

export const count = writable(10);

console.log("store", count);

export const time = readable(new Date(), function start(set) {
  console.log('구독이 시작되었습니다.');
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    console.log('모든 구족이 종료되었습니다.');
    clearInterval(interval);
  };
});

export const power = derived(count, $count => $count * $count);

const start = new Date();
export const elapsed = derived(time, ($time, set) => {
  set(Math.round(($time - start) / 1000));
  return function stop() {
    console.log($time, set);
  }
})
