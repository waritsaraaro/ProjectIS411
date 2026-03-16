<script>
    import { deserialize } from "$app/forms";
    import Packagecard from "$lib/packagecard.svelte";
    import YourComponent from "$lib/packagecard.svelte";

    const pkg = { 
        name: 'svelte',
        version: 5,
        description: 'blazing fast',
        website: 'https://svelte.dev'
    }
</script>

<Packagecard {...pkg}/>
