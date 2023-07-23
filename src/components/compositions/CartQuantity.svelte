<script>
	import { cartStore } from '../../store/stores';
</script>

{#if $cartStore.length > 0}
	<div
		class=" z-0 font-medium absolute bg-white text-sm text-green-900 h-[20px] rounded-full w-[20px] grid place-items-center"
	>
		{$cartStore.length}
	</div>
{/if}
