<script>
    let { number, increment, decrement} = $props()
</script>

<button onclick={decrement}>-{number}</button>
<button onclick={increment}>+{number}</button>