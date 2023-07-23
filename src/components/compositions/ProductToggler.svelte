<script>
	import { cartStore } from '../../store/stores';

	/** @type {import('./../../app').Product} */
	export let product;

	$: currentCartItem = $cartStore.find((p) => p.product.id === product.id);

	function handleDecreaseCount() {
		if (!currentCartItem) return;
		const newQuantity = currentCartItem.quantity - 1;
		const updatedCartItem = { ...currentCartItem, quantity: newQuantity };
		cartStore.updateItem(updatedCartItem);
	}

	function handleIncreaseCount() {
		if (!currentCartItem) return;
		const newQuantity = currentCartItem.quantity + 1;
		const updatedCartItem = { ...currentCartItem, quantity: newQuantity };
		cartStore.updateItem(updatedCartItem);
	}
</script>

<div class="flex justify-between items-center mt-[4px]">
	<button
		class="max-w-[40px] w-full font-medium rounded-l py-1 bg-transparent hover:bg-green-500 text-green-500 hover:text-white border border-green-500 hover:border-transparent"
		on:click={handleDecreaseCount}
	>
		-
	</button>
	<span class="border-t border-b border-green-500 py-1 w-full flex items-center justify-center">
		{currentCartItem?.quantity ?? 0}
	</span>
	<button
		class="max-w-[40px] w-full font-medium rounded-r py-1 bg-transparent hover:bg-green-500 text-green-500 hover:text-white border border-green-500 hover:border-transparent"
		on:click={handleIncreaseCount}
	>
		+
	</button>
</div>
