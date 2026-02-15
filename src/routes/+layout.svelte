<script>
	import Title from "$lib/components/sections/title.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import '../styles/global.css'
</script>


<header>
	<Navbar />
</header>

<main style="padding-top: 4rem;">
	<!-- page content -->

	<slot />
</main>

	<Footer />


<style>
	

	main {
		background-color: #fff;
	}
	
</style>