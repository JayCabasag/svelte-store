<script>
	import Navbar from '../components/compositions/Navbar.svelte';
	import Test from '../components/compositions/Test.svelte';
	import ProductListLayout from '../components/layout/ProductListLayout.svelte';
</script>

<Navbar />
<ProductListLayout />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
