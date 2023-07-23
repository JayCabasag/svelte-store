<script>
	import { getAllProducts } from '../../lib/getAllProducts';
	import { onDestroy, onMount } from 'svelte';
	import ProductCard from '../compositions/ProductCard.svelte';
	import { productsStore } from '../../store/stores';

	onMount(async () => {
		try {
			const products = await getAllProducts();
			productsStore.setProducts(products);
		} catch (error) {
			console.error('Error fetching products:', error);
			productsStore.setProducts([]);
		}
	});

	onDestroy(() => productsStore.setProducts([]));
</script>

<main class="w-full flex items-center justify-center">
	<section
		class="w-full mt-[15px] min-h-[calc(100vh-60px)] items-center justify-center flex flex-wrap max-w-[1440px] gap-5"
	>
		{#each $productsStore as product}
			<ProductCard {product} />
		{/each}
	</section>
</main>
