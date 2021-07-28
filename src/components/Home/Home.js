import { Color3, Vector3 } from '@babylonjs/core';
import React from "react";
import {
    Engine,

    FreeCamera,
    HemisphericLight, Scene
} from "react-babylonjs";
import SpinningBox from './SpinningBox';

const DefaultPlayground = () => (
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
            <SpinningBox
                name='box1'
                position={new Vector3(0, 0, 5)}
                color={Color3.FromHexString('#EEB5EB')}
                hoveredColor={Color3.FromHexString('#C26DBC')}
            />
        </Scene>
    </Engine>
);

export default DefaultPlayground;
