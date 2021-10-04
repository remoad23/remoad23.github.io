import {Globals} from "./Globals.js";
import * as THREE from "https://cdn.skypack.dev/pin/three@v0.133.0-mRqtjW5H6POaf81d9bnr/mode=imports,min/optimized/three.js";

export class Instantiator
{
    static makeInstance(geometry, color, x,y,z) {
        const material = new THREE.MeshPhongMaterial({color});
        const mesh = new THREE.Mesh(geometry, material);
        Globals.currentScene.scene.add(mesh);
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = z;
        return mesh;
    }
}