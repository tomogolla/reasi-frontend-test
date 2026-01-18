<script>
	import Title from "$lib/components/sections/title.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import '../styles/global.css'
</script>


<header>
	<Navbar />
</header>

<main style="padding-top: 4rem;">
	<!-- page content -->

	<slot />
</main>


<footer>
	<p>Copyright @2026</p>
</footer>

<style>
	

	main {
		background-color: #fff;
	}

	footer {
		text-align: center;
	}
</style>