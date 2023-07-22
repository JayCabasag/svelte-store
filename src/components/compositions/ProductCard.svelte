<script>
	import ProductToggler from './ProductToggler.svelte';
	import { cartStore } from '../../store/stores';
	import ProductAddToCart from './ProductAddToCart.svelte';

	/** @type {import('./../../app').Product} */
	export let product;

	$: isOnCart = $cartStore.find((p) => p.product.id === product.id);
</script>

<div class="border shadow max-w-[200px] h-auto p-[15px] flex flex-col flex-1">
	<div class="h-[150px] w-[150px] overflow-hidden">
		<img src={product.image} alt={product.title} height="100%" width="100%" />
	</div>
	{product.price}
	{product.title}
	{#if isOnCart}
		<ProductToggler {product} />
	{:else}
		<ProductAddToCart {product} />
	{/if}
</div>
