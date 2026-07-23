
if (typeof gdjs.evtsExt__Light3D__DefinePointLightHelperClasses !== "undefined") {
  gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Light3D__DefinePointLightHelperClasses = {};
gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.idToCallbackMap = new Map();


gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.userFunc0x99b298 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//@ts-ignore
if (gdjs.__light3DExtension.point) {
    //@ts-ignore
    return;
}

/**
 * @typedef {gdjs.CustomRuntimeObject3D & {__cameraDistance: number, __light3D: THREE.PointLight, _getIsCastingShadow: () => boolean, _getColor: () => string}} PointLightRuntimeObject
 */

const game = runtimeScene.getGame();

/**
 * @extends {THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>}
 */
class PointLightHelper extends THREE.Mesh {
    /** @type {PointLightRuntimeObject} */
    object;

	/**
     * @param {PointLightRuntimeObject} object
	 */
    constructor(object) {
        const geometry = new THREE.SphereGeometry(16, 4, 2);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, fog: false, toneMapped: false });
        super(geometry, material);
        this.object = object;
        this.update();

        //@ts-ignore
        this.gdjsRuntimeObject = object;
    }

    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }

    update() {
        const color = gdjs.rgbOrHexStringToNumber(this.object._getColor());
        this.material.color.set(color);
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

class PointLightAdapter {
    /**
     * @param object {gdjs.CustomRuntimeObject3D}
     * @param pointLight {THREE.PointLight}
     */
    constructor(object, pointLight) {
        this.object = object;
        this.pointLight = pointLight;
    }

    /**
     * @param targetX {number}
     * @param targetY {number}
     * @param targetZ {number}
     */
    lookAtPosition(targetX, targetY, targetZ) {
        // Remove from the parent to avoid the scene scale of -1 on Y to mess with the formula.
        const parent = this.pointLight.parent;
        this.pointLight.parent = null;
        this.pointLight.lookAt(targetX, targetY, targetZ);
        this.pointLight.parent = parent;

        // Angle setters update Three.js angles, so we save them first.
        const rotationX = gdjs.toDegrees(this.pointLight.rotation.x);
        const rotationY = gdjs.toDegrees(this.pointLight.rotation.y);
        const rotationZ = gdjs.toDegrees(this.pointLight.rotation.z);
        this.object.setRotationX(rotationX);
        this.object.setRotationY(rotationY);
        this.object.setAngle(rotationZ + 90);
    }

    /**
     * @param color {string}
     */
    setColor(color) {
        setThreeColor(color, this.pointLight.color);
    }

    /**
     * @param intensity {number}
     */
    setIntensity(intensity) {
        this.pointLight.intensity = intensity;
    }

    /**
     * @param decay {number}
     */
    setDecay(decay) {
        this.pointLight.decay = decay;
    }

    /**
     * @param value {number}
     */
    setRange(value) {
        this.pointLight.distance = value;
    }

    /**
     * @param isCastingShadow {boolean}
     */
    setCastingShadow(isCastingShadow) {
        // This is applied by applyVisibilityAndShadow
    }

    /**
     * @param shadowQuality {"Low" | "Medium" | "High"}
     */
    setShadowQuality(shadowQuality) {
        let size = 512;
        switch (shadowQuality) {
            case "Low":
                size = 512;
                break;
            case "Medium":
                size = 1024;
                break;
            case "High":
                size = 2048;
                break;
        }
        const shadow = this.pointLight.shadow;
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
        this.pointLight.shadow.camera.near = value;
    }

    /**
     * @param value {number}
     */
    setShadowCameraFarPlane(value) {
        this.pointLight.shadow.camera.far = value;
    }

    /**
     * @param value {number}
     * @param quality {"Low" | "Medium" | "High"}
     */
    setShadowBias(value, quality) {
        const biasMultiplier =
            quality === 'Low'
                ? 4
                : quality === 'Medium'
                    ? 2
                    : 1;
        this.pointLight.shadow.bias = -value * biasMultiplier;
    }
}

//@ts-ignore
gdjs.__light3DExtension.point = {
    PointLightAdapter,
    PointLightHelper,
}
};
gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.userFunc0x99b298(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.registeredGdjsCallbacks = [];