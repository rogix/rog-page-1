<script>
	import { createGrid } from '$lib/utils/createGrid';
	import { onMount } from 'svelte';

	let amountOfColumns = 70;

	onMount(() => {
		window.addEventListener('resize', () => {
			createGrid(amountOfColumns);
		});
		createGrid(amountOfColumns);
	});
</script>

<div class="grid" />

<section>
	<h2>Hello.</h2>
	<h2>I'm Jay.</h2>
	<p>
		I'm a <span>web developer</span> and <span>designer</span> based in
		<span>London</span>.
	</p>
</section>

<style>
	.grid {
		position: absolute;
		top: 75px;
		left: 0;
		right: 0;
		bottom: 0;
		display: grid;
		width: calc(100vw - 25px);
		height: calc(100vh - 80px);
		margin: 0 auto;
		justify-content: center;
	}

	section {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		height: auto;
		flex-direction: column;
		margin-block-start: 130px;
	}

	h2 {
		color: aliceblue;
		font-size: 86px;
		margin: 0;
	}

	p {
		color: aliceblue;
		font-size: 24px;
		margin: 0;
	}
</style>
