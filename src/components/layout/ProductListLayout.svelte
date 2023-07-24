<script>
	import { getAllProducts } from '../../lib/getAllProducts';
	import { onDestroy, onMount } from 'svelte';
	import ProductCard from '../compositions/ProductCard.svelte';
	import { productsStore } from '../../store/stores';
	import { DEFAULT_INITIAL_PRODUCT_LIMIT } from '../../utils/constants';

	async function loadInitialProducts() {
		try {
			const products = await getAllProducts(DEFAULT_INITIAL_PRODUCT_LIMIT);
			productsStore.updateProducts(products);
		} catch (error) {
			console.error('Error fetching products:', error);
			productsStore.updateProducts([]);
		}
	}

	onMount(() => {
		loadInitialProducts();
	});

	$: lastProduct = $productsStore.products[$productsStore.products.length - 1];

	$: isLoadingProducts = $productsStore.status === 'initial-loading';
	$: isLoadingNextProducts = $productsStore.status === 'loading-next-page';

	onDestroy(() => productsStore.updateProducts([]));
</script>

<main class="w-full flex flex-col items-center justify-center">
	{#if isLoadingProducts}
		<p>Please wait...</p>
	{:else}
		<section
			class="w-full my-[15px] min-h-[calc(100vh-60px)] items-start justify-center flex flex-wrap max-w-[1440px] gap-5"
		>
			{#each $productsStore.products as product}
				<ProductCard {product} {lastProduct} />
			{/each}
		</section>
	{/if}
	{#if isLoadingNextProducts}
		<p>Loading more...</p>
	{/if}
</main>
