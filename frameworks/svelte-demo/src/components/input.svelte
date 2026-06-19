<script lang="ts">
  let inputValue = $state<string>('');
  let red = $derived(inputValue.length > 4);
</script>

<div class="input">
  <input type="text" bind:value={inputValue} class:red>
</div>
 
