<header>
	<div>
		<h2>ROGIX</h2>
	</div>

	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About me</a></li>
			<li><a href="/contact">Projects</a></li>
		</ul>
	</nav>

	<div>
		<button>
			<a href="/login">Let's talk</a>
		</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		color: #fff;
		position: relative;
		z-index: 1;
		background-color: #121414;
		height: 70px;
		margin: 0 40px;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 60px;
		padding: 0;
		color: #fff;
	}

	nav a {
		color: #fff;
		text-decoration: none;
		font-weight: 700;
	}

	button {
		background-color: #1caecb;
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		cursor: pointer;
	}

	button a {
		color: #000;
		text-decoration: none;
		font-weight: 700;
	}
</style>
