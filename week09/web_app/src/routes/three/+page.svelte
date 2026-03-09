<script>
    let count = $state(0)

    function increment() {
        count += 1
    }
</script>

<h1>Three</h1>
<p>this page Three.</p>

<button onclick={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}

</button>