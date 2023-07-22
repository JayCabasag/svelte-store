<script>
	let count = 0;

	function handleUpdateCount() {
		count += 1;
		alert('Hello');
	}
</script>

<button on:click={handleUpdateCount}>Add</button>
<div>{count}</div>
