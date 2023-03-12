import {writable} from "svelte/store";

function createCount(){
  const cnt = writable(1);

  return {
    subscribe: cnt.subscribe,
    set: cnt.set,
    update: cnt.update,
    increment: () => cnt.update(n=> n+1),
    decrement: () => cnt.update(n=> n-1),
    reset: () => cnt.set(1)
  }
}



export const count = createCount();

