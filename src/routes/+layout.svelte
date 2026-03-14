<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</svelte:head>

<nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">FIIT</strong>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      
      <div class="navbar-start" style="flex-grow: 1">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/community">Commu</a>
      </div>
	
      <div class="navbar-end">
        <a class="navbar-item" href="/notify">
          <span class="icon"><i class="fas fa-bell"></i></span>
        </a>
        
        <a class="navbar-item" href="/cart">
          <span class="icon"><i class="fas fa-shopping-cart"></i></span>
          <span class="is-hidden-desktop">Cart</span> 
        </a>

        <div class="navbar-item">
  			<div class="buttons">
    			<a href="/sign in" class="button is-white is-rounded has-text-weight-bold">
      			Sign In
    			</a>
  			</div>
		</div>
      </div> 
	</div> 
</div> </nav>

{@render children()}