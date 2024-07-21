import { Car } from "./js/elements/Car.js";

class Application {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 200;
        this.canvas.height = window.innerHeight;

        this.ctx = this.canvas.getContext('2d');

        this.car = new Car(100, 100, 50, 50);

        requestAnimationFrame(this.render.bind(this))
        
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.car.update();
        this.car.draw(this.ctx);
        requestAnimationFrame(this.render.bind(this))
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new Application();
})