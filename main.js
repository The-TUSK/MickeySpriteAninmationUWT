const gameEngine = new GameEngine();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);
	
	gameEngine.addEntity(new Automata(gameEngine));
	gameEngine.start();
});
