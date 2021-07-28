import { Vector3 } from '@babylonjs/core';
import React from 'react';
import {
  Engine,
  FreeCamera,
  HemisphericLight, Mesh, Scene
} from 'react-babylonjs';

const WithMesh = props => {

  return (
    <Engine canvasId="babylonJS" width={600} height={600}>
      <Scene>
        <FreeCamera
          name="camera1"
          position={new Vector3(0, 5, -15)}
          target={Vector3.Zero()}
        />
        <HemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <Mesh
          rootUrl='../../../public/static/mesh/'
          sceneFilename="both_houses_scene.babylon"
        />
      </Scene>
    </Engine>
  )
}

export default WithMesh