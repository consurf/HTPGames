
if (typeof gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses !== "undefined") {
  gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses = {};
gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.idToCallbackMap = new Map();


gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.userFunc0xa2f110 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//@ts-ignore
if (gdjs.__light3DExtension.spot) {
    //@ts-ignore
    return;
}

/**
 * @typedef {gdjs.CustomRuntimeObject3D & {__cameraDistance: number, __light3D: THREE.SpotLight, _getIsCastingShadow: () => boolean, _getConeAngle: () => number, _getColor: () => string}} SpotLightRuntimeObject
 */

const game = runtimeScene.getGame();

const coneLength = 64;

class SpotLightHelper extends THREE.Object3D {
    /** @type {SpotLightRuntimeObject} */
    object;
    /** @type {THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>} */
    cone;
    /** @type {THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>} */
    centerLine;
    /** @type {THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>} */
    originBox;

	/**
     * @param {SpotLightRuntimeObject} object
	 */
    constructor(object) {
        super();
        this.object = object;
        this.type = 'SpotLightHelper';

        const coneGeometry = new THREE.BufferGeometry();
        const conePositions = [
            0, 0, 0, 1, 0, 0,
            0, 0, 0, 1, 1, 0,
            0, 0, 0, 1, - 1, 0,
            0, 0, 0, 1, 0, 1,
            0, 0, 0, 1, 0, - 1
        ];
        for (let i = 0, j = 1, l = 32; i < l; i++ , j++) {
            const p1 = (i / l) * Math.PI * 2;
            const p2 = (j / l) * Math.PI * 2;
            conePositions.push(
                1, Math.cos(p1), Math.sin(p1),
                1, Math.cos(p2), Math.sin(p2)
            );
        }
        coneGeometry.setAttribute('position', new THREE.Float32BufferAttribute(conePositions, 3));
        this.cone = new THREE.LineSegments(
            coneGeometry,
            new THREE.LineBasicMaterial({ fog: false, toneMapped: false })
        );
        this.add(this.cone);
        const centerLineGeometry = new THREE.BufferGeometry();
        centerLineGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
            0, 0, 0, coneLength, 0, 0
        ], 3));
        this.centerLine = new THREE.LineSegments(
            centerLineGeometry,
            new THREE.LineBasicMaterial({ fog: false, toneMapped: false })
        );
        this.add(this.centerLine);

        this.originBox = new THREE.Mesh(
            new THREE.BoxGeometry(16, 16, 16),
            new THREE.MeshBasicMaterial({ fog: false, toneMapped: false })
        );
        this.add(this.originBox);
        this.update();

        //@ts-ignore
        this.originBox.gdjsRuntimeObject = object;
    }

    dispose() {
        this.cone.geometry.dispose();
        this.cone.material.dispose();
        this.centerLine.geometry.dispose();
        this.centerLine.material.dispose();
        this.originBox.geometry.dispose();
        this.originBox.material.dispose();
    }

    update() {
        /** @type {number} */
        const coneAngle = gdjs.toRad(this.object._getConeAngle());
        const coneWidth = coneLength * Math.sin(coneAngle);
        const coneHeight = coneLength * Math.cos(coneAngle);
        this.cone.scale.set(coneHeight, coneWidth, coneWidth);
        const color = gdjs.rgbOrHexStringToNumber(this.object._getColor());
        this.cone.material.color.set(color);
        this.centerLine.material.color.set(color);
        this.originBox.material.color.set(color);
    }
}

/**
 * @param {string} colorString
 * @param {THREE.Color} threeColor
 */
const setThreeColor = (colorString, threeColor) => {
    const integerColor = gdjs.rgbOrHexToRGBColor(colorString);
    threeColor.r = integerColor[0] / 255;
    threeColor.g = integerColor[1] / 255;
    threeColor.b = integerColor[2] / 255;
};

class SpotLightAdapter {
    /**
     * @param object {gdjs.CustomRuntimeObject3D}
     * @param spotLight {THREE.SpotLight}
     */
    constructor(object, spotLight) {
        this.object = object;
        this.spotLight = spotLight;
    }

    /**
     * @param targetX {number}
     * @param targetY {number}
     * @param targetZ {number}
     */
    lookAtPosition(targetX, targetY, targetZ) {
        // Remove from the parent to avoid the scene scale of -1 on Y to mess with the formula.
        const parent = this.spotLight.parent;
        this.spotLight.parent = null;
        this.spotLight.lookAt(targetX, targetY, targetZ);
        this.spotLight.parent = parent;

        // Angle setters update Three.js angles, so we save them first.
        const rotationX = gdjs.toDegrees(this.spotLight.rotation.x);
        const rotationY = gdjs.toDegrees(this.spotLight.rotation.y);
        const rotationZ = gdjs.toDegrees(this.spotLight.rotation.z);
        this.object.setRotationX(rotationX);
        this.object.setRotationY(rotationY);
        this.object.setAngle(rotationZ + 90);
    }

    /**
     * @param color {string}
     */
    setColor(color) {
        setThreeColor(color, this.spotLight.color);
    }

    /**
     * @param intensity {number}
     */
    setIntensity(intensity) {
        this.spotLight.intensity = intensity;
    }

    /**
     * @param decay {number}
     */
    setDecay(decay) {
        this.spotLight.decay = decay;
    }

    /**
     * @param value {number}
     */
    setConeLength(value) {
        this.spotLight.distance = value;
    }

    /**
     * @param coneAngle {number}
     */
    setConeAngle(coneAngle) {
        this.spotLight.angle = coneAngle * Math.PI / 180;
    }

    /**
     * @param smoothing {number}
     */
    setSmoothing(smoothing) {
        this.spotLight.penumbra = smoothing;
    }

    /**
     * @param isCastingShadow {boolean}
     */
    setCastingShadow(isCastingShadow) {
        // This is applied by applyVisibilityAndShadow
    }

    /**
     * @param shadowQuality {"Low" | "Medium" | "High" | "VeryHigh"}
     */
    setShadowQuality(shadowQuality) {
        let size = 512;
        switch (shadowQuality) {
            case "Low":
                size = 256;
                break;
            case "Medium":
                size = 512;
                break;
            case "High":
                size = 1024;
                break;
            case "VeryHigh":
                size = 2048;
                break;
        }
        const shadow = this.spotLight.shadow;
        const mapSize = shadow.mapSize;
        if (mapSize.width !== size) {
            mapSize.set(size, size);

            // Force the recreation of the shadow map texture:
            if (shadow.map) {
                shadow.map.dispose();
                shadow.map = null;
            }
            shadow.needsUpdate = true;
        }
    }

    /**
     * @param value {number}
     */
    setShadowCameraNearPlane(value) {
        this.spotLight.shadow.camera.near = value;
    }

    /**
     * @param value {number}
     */
    setShadowCameraFarPlane(value) {
        this.spotLight.shadow.camera.far = value;
    }

    /**
     * @param value {number}
     * @param quality {"Low" | "Medium" | "High" | "VeryHigh"}
     * @param coneAngle {number}
     */
    setShadowBias(value, quality, coneAngle) {
        const biasMultiplier =
            quality === 'Low'
                ? 8
                : quality === 'Medium'
                    ? 4
                    : quality === 'High'
                        ? 2 : 1;
        // Multiply by 0.125 to make values around 0.001 work best.
        this.spotLight.shadow.bias = -value * 0.125 * biasMultiplier *
            Math.tan(gdjs.toRad(gdjs.evtTools.common.clamp(coneAngle, 0, 89)));
    }

    /**
     * @param resourceName {string}
     */
    setImage(resourceName) {
        if (!resourceName) {
            this.spotLight.map = null;
            return;
        }
        const texture = game.getImageManager().getThreeTexture(resourceName);
        this.spotLight.map = texture;
    }
}

//@ts-ignore
gdjs.__light3DExtension.spot = {
    SpotLightAdapter,
    SpotLightHelper,
}
};
gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.userFunc0xa2f110(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Light3D__DefineSpotLightHelperClasses.registeredGdjsCallbacks = [];