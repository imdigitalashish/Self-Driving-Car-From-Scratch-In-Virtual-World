class Application {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 600;
        this.canvas.height = 600;

        this.ctx = this.canvas.getContext('2d');
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new Application();
})