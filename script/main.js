import {Globals} from "./Singleton/Globals.js";
import {Instantiator} from "./Singleton/Instantiator.js";
import {SettingsChanger} from "./Singleton/SettingsChanger.js";
import {Scene} from "./Model/Scene.js";
import {Camera} from "./Model/Camera.js";
import * as THREE from "https://cdn.skypack.dev/pin/three@v0.133.0-mRqtjW5H6POaf81d9bnr/mode=imports,min/optimized/three.js";


let cubes;

export function initialize()
{
    Globals.currentCamera = new Camera(75,2,0.1,5);
    Globals.canvas = document.querySelector('#c');
    Globals.currentCamera.camera.position.z = 2;
    Globals.renderer = new THREE.WebGLRenderer({canvas: Globals.canvas});
    Globals.currentScene = new Scene();

}

export function start()
{
    initialize();
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    cubes = [
        Instantiator.makeInstance(geometry, 0x44aa88,  0,0,0),
        Instantiator.makeInstance(geometry, 0x8844aa, -2,0,0),
        Instantiator.makeInstance(geometry, 0xaa8844,  2,0,0),
    ];

    Globals.currentScene.scene.add(cubes[0]);
    Globals.currentScene.scene.add(cubes[1]);
    Globals.currentScene.scene.add(cubes[2]);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    Globals.currentScene.scene.add(light);
    render();
}

export function render(time) {
    let renderer = Globals.renderer;
    let camera = Globals.currentCamera.camera;

    time *= 0.001;

    if (SettingsChanger.resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    console.log("scene "+Globals.currentScene,"cam "+camera);
    renderer.render(Globals.currentScene.scene, camera);

    requestAnimationFrame(render);
}



