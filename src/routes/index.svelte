<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Editors } from '../data/editors';
	import { searchString } from '../helpers/string.helper';
	let input = '';

	$: filteredEditors = Editors.filter(
		(editor) => searchString(editor.publisher, input) || searchString(editor.name, input)
	);
</script>

<svelte:head>
	<title>Imaginales - Wanted List</title>
	<meta name="description" content="Imaginales - Wanted List" />
</svelte:head>

<section>
	<h1>Imaginales</h1>
	<input type="text" bind:value={input} placeholder="Nom, maison" />

	{#each filteredEditors as editor}
		<div class="card">
			{#if editor.picture}
				<img class="picture" src="pics/{editor.picture}" alt="poi" />
			{/if}
			<p>{editor.name}</p>
			<p class="publisher">{editor.publisher}</p>
			<p>{editor.position}</p>
			{#if editor.comment}
				<p>{editor.comment}</p>
			{/if}
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.card {
		width: 200px;
		border: 1px solid black;
		border-radius: 4px;
		padding: 10px;
		margin: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.picture {
		max-width: 200px;
		max-height: 200px;
		border-radius: 4px;
	}

	.publisher {
		font-weight: bold;
		font-size: 25px;
	}
</style>
