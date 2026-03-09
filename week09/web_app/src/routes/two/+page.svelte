<script>
    import NestedComp from "$lib/Nested.svelte";
    let string = `this string contains some <strong><i>HTML!!!</i></strong>`
</script>

<h1>Two</h1>
<p>this page two.</p>

<p>{@html string}</p>

<NestedComp />
<NestedComp />