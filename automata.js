class Automata {
    constructor(game) {
        this.automata = [];
        this.height = 100;
        this.width = 200;

        this.tickCount = 0;
        this.ticks = 0;

        this.speed = parseInt(document.getElementById("speed").value, 10);
        
        for (let col = 0; col < this.width; col++) {
            this.automata.push([]);
            for (let row = 0; row < this.height; row++) {
                this.automata[col][row] = 0;
            }
        }

        this.loadRandomAutomata();
    }

    loadRandomAutomata() {
        for (let col = 0; col < this.width; col++) {
            for (let row = 0; row < this.height; row++) {
                this.automata[col][row] = randomInt(2);
            }
        }
    };
    
    update() {
        this.speed = parseInt(document.getElementById("speed").value, 10);

        if (this.tickCount++ >= this.speed && this.speed != 120) {
            this.tickCount = 0;
            this.ticks++;
            document.getElementById('ticks').innerHTML = "Ticks: " + this.ticks;

            let next = [];
            for (let col = 0; col < this.width; col++) {
                next.push([]);
                for (let row = 0; row < this.height; row++) {
                    next[col].push(0);
                }
            }

            for (let col = 0; col < this.width; col++) {
                for (let row = 0; row < this.height; row++) {
                    if (this.automata[col][row] && (this.count(col, row) === 2 || this.count(col, row) === 3)) next[col][row] = 1;
                    if (!this.automata[col][row] && this.count(col, row) === 3) next[col][row] = 1;
                }
            }
            this.automata = next;
        }
    }

    draw(ctx){
        let size = 8;
        let gap = 1;
        ctx.fillStyle = "Black";
        for (let col = 0; col < this.width; col++) {
            for (let row = 0; row < this.height; row++) {
                let cell = this.automata[col][row];
                if (cell) ctx.fillRect(col * size + gap, row * size + gap, size - 2 * gap, size - 2 * gap);
            }
        }
    }
}