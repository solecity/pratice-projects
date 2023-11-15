import { Background } from "./background";
import { Scene } from '../system/Scene';

export class GameScene extends Scene {
    create() {
        this.createBackground();
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    update(dt) {
        this.bg.update(dt);
    }
}