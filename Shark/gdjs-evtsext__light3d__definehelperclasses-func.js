
if (typeof gdjs.evtsExt__Light3D__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__Light3D__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Light3D__DefineHelperClasses = {};
gdjs.evtsExt__Light3D__DefineHelperClasses.idToCallbackMap = new Map();


gdjs.evtsExt__Light3D__DefineHelperClasses.userFunc0x99b298 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//@ts-ignore
if (gdjs.__light3DExtension) {
    //@ts-ignore
    return;
}

/**
 * @typedef {gdjs.CustomRuntimeObject3D & {__cameraDistance: number, __light3D: THREE.SpotLight | THREE.PointLight, _getIsCastingShadow: () => boolean}} LightRuntimeObject
 */

const game = runtimeScene.getGame();
const isInGameEdition = game.isInGameEdition && game.isInGameEdition();


class Light3DRenderer extends gdjs.CustomRuntimeObject3DRenderer {

    constructor(
        object,
        instanceContainer,
        parent
    ) {
        super(object, instanceContainer, parent);
    }

    _updateThreeGroup() {
        /** @type {LightRuntimeObject} */
        //@ts-ignore
        const object = this._object;
        const threeObject3D = this.get3DRendererObject();

        threeObject3D.rotation.set(
            gdjs.toRad(object.getRotationX()),
            gdjs.toRad(object.getRotationY()),
            gdjs.toRad(object.angle)
        );

        threeObject3D.position.set(
            object.getX(),
            object.getY(),
            object.getZ()
        );

        // Force the scale to 1 because the light doesn't really has a size.
        threeObject3D.scale.set(
            object.isFlippedX() ? -1 : 1,
            object.isFlippedY() ? -1 : 1,
            object.isFlippedZ() ? -1 : 1
        );

        threeObject3D.visible = !this._object.hidden;

        const spotLight = object.__light3D;

        const editor = game.getInGameEditor ? game.getInGameEditor() : null;

        spotLight.castShadow = false;
        spotLight.visible = false;

        if (!object.isHidden()) {
            let isSelected = false;
            if (editor) {
                const selectedObject = editor._selection.getLastSelectedObject();
                let parentObject = object;
                isSelected = parentObject === selectedObject;
                while (!isSelected && parentObject.getInstanceContainer()
                    //@ts-ignore
                    .getOwner) {
                    parentObject = parentObject.getInstanceContainer()
                        //@ts-ignore
                        .getOwner();
                    isSelected = parentObject === selectedObject;
                }
            }
            if (!editor || !editor.areEffectsHidden() || isSelected) {
                let rootObject = object;
                while (rootObject.getInstanceContainer()
                    //@ts-ignore
                    .getOwner) {
                    rootObject = rootObject.getInstanceContainer()
                        //@ts-ignore
                        .getOwner();
                }
                const runtimeScene = rootObject.getRuntimeScene();
                let distanceSq = 0;
                if (!isSelected) {
                    const layerName = rootObject.getLayer();
                    const cameraX = gdjs.evtTools.camera.getCameraX(runtimeScene, layerName, 0);
                    const cameraY = gdjs.evtTools.camera.getCameraY(runtimeScene, layerName, 0);
                    const cameraZ = gdjs.scene3d.camera.getCameraZ(runtimeScene, layerName, 0);
                    const deltaX = rootObject.getX() - cameraX;
                    const deltaY = rootObject.getY() - cameraY;
                    const deltaZ = rootObject.getZ() - cameraZ;
                    distanceSq = deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ;
                }
                getLightManager(
                    //@ts-ignore
                    runtimeScene
                ).applyVisibilityAndShadow(object, distanceSq);
            }
        }

        // Force the visibility to be checked every frame
        this._isContainerDirty = true;
    }
}

const editorLightCountMax = {
    value: 20
};

const lightCountMax = {
    value: 20
};

const editorLightShadowCountMax = {
    value: 4
};

const lightShadowCountMax = {
    value: 4
};

gdjs.registerRuntimeScenePreEventsCallback(
    runtimeScene => {
        getLightManager(
            //@ts-ignore
            runtimeScene.getScene()
        ).clear();
    });
if (gdjs.registerInGameEditorPostStepCallback) {
    gdjs.registerInGameEditorPostStepCallback(
        inGameEditor => {
            getLightManager(
                //@ts-ignore
                inGameEditor.getEditedInstanceContainer().getScene()
            ).clear();
        });
}

/**
 * Get the platforms manager of an instance container.
 * @param {gdjs.RuntimeScene & {__lightManager: LightManager}} runtimeScene
 */
function getLightManager(runtimeScene) {
    if (!runtimeScene.__lightManager) {
        // Create the shared manager if necessary.
        runtimeScene.__lightManager = isInGameEdition ?
            new LightManager(editorLightCountMax, editorLightShadowCountMax) :
            new LightManager(lightCountMax, lightShadowCountMax);
    }
    return runtimeScene.__lightManager;
}

/** @type {{isInserted: boolean, removedObject: LightRuntimeObject | null}} */
const sortResult = { isInserted: false, removedObject: null };

class CappedLightList {
    /** @type {Array<{object: LightRuntimeObject, weight: number}>} */
    objects = [];
    /** @type {{value: number}} */
    capacity;
    weight = 0;
    /** @type {(object: LightRuntimeObject) => void} */
    onInsertion;
    /** @type {(object: LightRuntimeObject) => void} */
    onDeletion;

    /**
     * @param {{value: number}} capacity
     * @param {(object: LightRuntimeObject) => void} onInsertion
     * @param {(object: LightRuntimeObject) => void} onDeletion
     */
    constructor(capacity, onInsertion, onDeletion) {
        this.capacity = capacity;
        this.onInsertion = onInsertion;
        this.onDeletion = onDeletion;
    }

    clear() {
        this.objects.length = 0;
        this.weight = 0;
    }

    /**
     * @param object {LightRuntimeObject}
     * @param distance {number}
     * @param weight {number}
     */
    insertByDistance(object, distance, weight) {
        let insertionIndex = 0;
        for (let index = this.objects.length - 1; index >= 0; index--) {
            const { object: other } = this.objects[index];
            const otherDistance = other.__cameraDistance;
            if (distance >= otherDistance) {
                insertionIndex = index + 1;
                break;
            }
        }
        if (insertionIndex === this.objects.length
            && this.weight + weight > this.capacity.value) {
            return;
        }
        this.weight += weight;

        let deletedPair = null;
        while (this.objects.length > 0 && this.weight > this.capacity.value) {
            deletedPair = this.objects.pop();
            const { object: removedObject, weight: otherWeight } = deletedPair;
            this.weight -= otherWeight;
            this.onDeletion(removedObject);
        }

        let insertedPair;
        if (deletedPair) {
            insertedPair = deletedPair;
            insertedPair.object = object;
            insertedPair.weight = weight;
        }
        else {
            insertedPair = { object, weight };
        }
        this.onInsertion(object);
        this.objects.splice(insertionIndex, 0, insertedPair);
        object.__cameraDistance = distance;
    }
}

class LightManager {
    /** @type {CappedLightList} */
    visibleObjects;
    /** @type {CappedLightList} */
    shadowObjects;

    /**
     * @param maxCount {{value: number}}
     * @param shadowCount {{value: number}}
     */
    constructor(maxCount, shadowCount) {
        this.visibleObjects = new CappedLightList(
            maxCount,
            (object) => { object.__light3D.visible = true; },
            (object) => { object.__light3D.visible = false; }
        );
        this.shadowObjects = new CappedLightList(
            shadowCount,
            (object) => { object.__light3D.castShadow = true; },
            (object) => { object.__light3D.castShadow = false; }
        );
    }

    clear() {
        this.visibleObjects.clear();
        this.shadowObjects.clear();
    }

    /**
     * @param object {LightRuntimeObject}
     * @param distance {number}
     */
    applyVisibilityAndShadow(object, distance) {
        if (object._getIsCastingShadow()) {
            this.shadowObjects.insertByDistance(object, distance,
                //@ts-ignore
                object.__light3D.map ? 2 : 1);
        }
        this.visibleObjects.insertByDistance(object, distance, 1);
    }
}

//@ts-ignore
gdjs.__light3DExtension = {
    Light3DRenderer,
    lightCountMax,
    lightShadowCountMax,
}
};
gdjs.evtsExt__Light3D__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Light3D__DefineHelperClasses.userFunc0x99b298(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Light3D__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Light3D__DefineHelperClasses.registeredGdjsCallbacks = [];