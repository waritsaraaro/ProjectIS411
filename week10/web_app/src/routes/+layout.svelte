<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/one">One</a>
	<a href="/two">Two</a>
	<a href="/three">Three</a>
	<a href="/four">Four</a>
	<a href="/five">Five</a>
	<a href="/six">Six</a>
	<a href="/seven">Seven</a>
</nav>


{@render children()}
