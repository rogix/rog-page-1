export function createGrid(size: number) {
	const grid = document.querySelector('.grid') as HTMLElement;
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const cols = Math.floor(screenWidth / size);
	const rows = Math.floor(screenHeight / size);
	const gridWidth = cols * size;
	const gridHeight = rows * size;
	const widthRatio = screenWidth / gridWidth;
	const heightRatio = screenHeight / gridHeight;
	const scale = Math.min(widthRatio, heightRatio);

	grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
	grid.style.transform = `scale(${scale})`;

	for (let i = 0; i < rows * cols; i++) {
		const square = document.createElement('span');

		square.style.boxShadow = '0 0 0 0.03em rgba(150,150,150,0.05) inset';
		grid.appendChild(square);
	}

	return grid;
}
