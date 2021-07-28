
import React, { useEffect } from 'react';
import { Engine, Scene ,ArcRotateCamera,Vector3,Color4,DirectionalLight,SceneLoader} from "@babylonjs/core";

let canvas;
let scene;
let engine;
let camera

const WithMesh = props => {

  useEffect(() => {
    canvas = document.getElementById("renderCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Load the BABYLON 3D engine
    engine = new Engine(canvas, true);
    scene = createScene(engine)
    camera = createCamera(scene, canvas)
    engine.runRenderLoop(function () {
      scene.render();
    });
  }, [])

    //tạo camera
    const createCamera = (_scene, _canvas) => {
      const _camera = new ArcRotateCamera("Camera", 0, 0.8, 10, Vector3.Zero(), _scene);
      return _camera
    }
  
    //tạo cảnh và vẽ hiện vật
    const createScene = (_engine) => {
      const _scene = new Scene(_engine);
      _scene.clearColor = new Color4(0, 0, 0, 0);
      // const light = new BABYLON.HemisphericLight("Hemis", new BABYLON.Vector3(1000, 1000, 1000), _scene);
      // light.diffuse = new BABYLON.Color3(1, 1, 1);
      const light = new DirectionalLight("DirectionalLight", new Vector3(1, 1, 1), _scene);
      const light2 = new DirectionalLight("DirectionalLight", new Vector3(-1, 1, -1), _scene);
      const light3 = new DirectionalLight("DirectionalLight", new Vector3(0, -1, 0), _scene);
      const light4 = new DirectionalLight("DirectionalLight", new Vector3(0, 1, 0), _scene);
  
      light.intensity = 3;
      light2.intensity = 3;
      light4.intensity = 3;
      light3.intensity = 3;
      // var light = new BABYLON.HemisphericLight();
  
      //load file mesh
     SceneLoader.ImportMesh(null,'/static/mesh/', 'both_houses_scene.babylon', _scene, (meshes) => {
        _scene.activeCamera = null;
        _scene.createDefaultCameraOrLight(true);
        // _scene.activeCamera.attachControl(canvas, true);
        // _scene.activeCamera.inputs.attached.pointers.buttons = [0]
        // _scene.activeCamera.minZ = 0.01
        // _scene.activeCamera.lowerRadiusLimit = 0.2;
        // _scene.activeCamera.upperRadiusLimit = 6;
        // _scene.activeCamera.wheelPrecision = 100; //tốc độ zoom khi lăn chuột
        // _scene.activeCamera.checkCollisions = true
  
       
      })
      return _scene
    }

  return (
    <canvas id="renderCanvas" touch-action="none" style={{ margin: 'auto', display: 'block' }} />
  )
}

export default WithMesh