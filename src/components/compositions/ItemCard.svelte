<script>
	import { fade } from 'svelte/transition';
	import ProductToggler from './ProductToggler.svelte';
	/** @type {import('./../../app').Item} */
	export let item;
	$: amount = item.product.price * item.quantity;
</script>

<div class="flex flex-row" transition:fade>
	<div
		class="w-full max-w-[75px] h-[75px] max-h-[75px] overflow-clip flex items-center justify-center"
	>
		<img src={item.product.image} alt={item.product.title} height="75px" width="75px" />
	</div>
	<div class="flex flex-col justify-center pl-5 flex-1">
		<div class="flex flex-1 justify-between w-full items-center">
			<h1 class="font-bold">{item.product.title}</h1>
			<p class="font-bold min-w-max">${amount.toFixed(2)}</p>
		</div>
		<div class="flex w-full items-center gap-5">
			<div class="min-w-[100px]">
				<ProductToggler product={item.product} />
			</div>
		</div>
	</div>
</div>
