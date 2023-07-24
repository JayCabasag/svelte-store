<script>
	import ProductToggler from './ProductToggler.svelte';
	import { cartStore, productsStore } from '../../store/stores';
	import ProductAddToCart from './ProductAddToCart.svelte';
	import { truncateText } from '$lib/truncateText';
	import viewport from '$lib/useViewport';
	import { DEFAULT_INITIAL_PRODUCT_LIMIT } from '../../utils/constants';
	import { getAllProducts } from '$lib/getAllProducts';

	/** @type {import('./../../app').Product} */
	export let product;

	$: isOnCart = $cartStore.find((p) => p.product.id === product.id);
	let truncatedProductTitle = truncateText(product.title, 30);

	/** @type {import('./../../app').Product} */
	export let lastProduct;

	async function loadMoreProducts() {
		const newLimit = $productsStore.limit + DEFAULT_INITIAL_PRODUCT_LIMIT;
		productsStore.updateLimit(newLimit);
		productsStore.updateStatus('loading-next-page');
		try {
			const products = await getAllProducts(newLimit);
			productsStore.updateProducts(products);
			productsStore.updateStatus('completed');
		} catch (error) {
			console.error('Error fetching products:', error);
			productsStore.updateProducts([]);
			productsStore.updateStatus('failed');
		} finally {
			productsStore.updateStatus('idle');
		}
	}

	$: isLastProduct = product.id === lastProduct?.id;
</script>

<div class="border max-h-[250px] shadow max-w-[200px] h-auto p-[15px] flex flex-col flex-1">
	<div class="h-[150px] w-[165px] overflow-hidden">
		<img src={product.image} alt={product.title} height="100%" width="100%" />
	</div>
	<div class="w-[165px]">
		<h2 class="text-lg font-bold">${product.price}</h2>
		<h2>{truncatedProductTitle}</h2>
	</div>
	{#if isOnCart}
		<ProductToggler {product} />
	{:else}
		<ProductAddToCart {product} />
	{/if}
	{#if isLastProduct}
		<div use:viewport on:enterViewport={loadMoreProducts} />
	{/if}
</div>
