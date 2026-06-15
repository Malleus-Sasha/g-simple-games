<script lang='ts'>
  let counter = $state<number[]>([0]);
  let len = $derived(counter.length); 
  let increment = () => { counter.push(counter.length) };
</script>

<div class="count">
  <button type="button" class="counter" onclick={increment}>
    Count: {counter}
  </button>
  <div> : {len}</div>
</div>

<style>
  .count {
    display: flex;
    /* flex-direction: column; */
  }
</style>
