import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.0-mRqtjW5H6POaf81d9bnr/mode=imports,min/optimized/three.js';

export class Camera
{
    #fov;
    #aspect;
    #near ;
    #far;
    #camera;

    constructor(fov,aspect,near,far) {
        this.#fov = fov;
        this.#aspect = aspect;
        this.#near = near;
        this.#far = far;
        this.#camera = new THREE.PerspectiveCamera(this.#fov, this.#aspect, this.#near, this.#far);
    }

    get camera()
    {
        return this.#camera;
    }

}