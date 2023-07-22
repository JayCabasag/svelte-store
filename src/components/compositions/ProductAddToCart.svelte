<script>
	import { generateUUID } from '../../lib/generateUUID';
	import { cartStore } from '../../store/stores';

	/** @type {import('./../../app').Product} */
	export let product;

	/** @type {import('./../../app').Item} */
	$: item = { id: generateUUID(), quantity: 1, product };

	function handleAddToCart() {
		cartStore.addItem(item);
	}
</script>

<button
	class="font-medium rounded py-1 mt-[4px] bg-transparent hover:bg-green-500 text-green-500 hover:text-white px-4 border border-green-500 hover:border-transparent"
	on:click={handleAddToCart}
>
	Add to cart
</button>
