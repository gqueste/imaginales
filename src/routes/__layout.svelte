<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
