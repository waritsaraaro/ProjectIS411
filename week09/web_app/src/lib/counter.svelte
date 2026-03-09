<script>
    import { counter } from '$lib/counter.svelte.js'
</script>

<button onclick={() => counter.count += 1}>
clicks: {counter.count}
</button>
