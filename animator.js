class Animator {
	constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration)
	{
		Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration});
		
		this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
	};

	drawFrame(tick, ctx, x, y, scale)
	{
		this.elapsedTime += tick;
		if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime
		const frame = this.currentFrame();
		var newWidth;
		if (frame == 2){
			newWidth = 64;
		} else {
			newWidth = this.width;		
		}
		ctx.drawImage(this.spriteSheet,
            this.xStart + this.width*frame, this.yStart, //source from sheet
            newWidth, this.height,
            x, y,
            this.width * scale,
            this.height * scale);

	};

	currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };

};