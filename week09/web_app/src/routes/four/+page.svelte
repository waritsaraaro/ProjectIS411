<script>
    let numbers = $state([1, 2, 3, 4])
    let total = $derived(numbers.reduce((t, n) => t + n, 0))

    function addnumber() {
        numbers.push(numbers.length + 1 )
        console.log(numbers.length)
    }
</script>

<h1>Four</h1>
<p>this page Four.</p>

<p> {numbers.join (' + ')} = {total}</p>

<button onclick={addnumber}>
    Add a numbers
</button>