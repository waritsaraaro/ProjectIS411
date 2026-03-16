<script>
    import Stepper from "$lib/stepper.svelte";
    let value = $state(0)
</script>

<p>The currentvalue is {value}</p>

<Stepper 
    number=1
    increment={() => value += 1}
    decrement={() => value -= 1}
/>
<hr>
<Stepper 
    number=2
    increment={() => value += 1}
    decrement={() => value -= 1}
/>