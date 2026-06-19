<script lang='ts'>
  let { initial = 0, increase }: { initial: number, increase: () => void } = $props();
  let counter = $state<number>(initial);
  let len = $derived(counter); 
  let increment = () => { 
    counter++ 
  };

  $effect(() => {
    console.log(counter);
  })
</script>

<div class="count">
  <button type="button" class="counter" onclick={increment}>
    Count: {counter}
  </button>
  <div> : {len}</div>
  {#if counter > 5}
    <div>Counter more then 5</div>
  {/if}
</div>

<style>
  .count {
    display: flex;
    /* flex-direction: column; */
  }
</style>
