import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.0-mRqtjW5H6POaf81d9bnr/mode=imports,min/optimized/three.js';

export class Scene
{
    //threejs scene
    #scene;
    constructor() {
        this.#scene = new THREE.Scene();
    }

    get scene()
    {
        return this.#scene;
    }
}