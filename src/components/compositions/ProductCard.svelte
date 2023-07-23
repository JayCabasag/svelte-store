<script>
	import ProductToggler from './ProductToggler.svelte';
	import { cartStore } from '../../store/stores';
	import ProductAddToCart from './ProductAddToCart.svelte';
	import { truncateText } from '$lib/truncateText';

	/** @type {import('./../../app').Product} */
	export let product;

	$: isOnCart = $cartStore.find((p) => p.product.id === product.id);
	let truncatedProductTitle = truncateText(product.title, 30);
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
</div>
