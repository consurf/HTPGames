
if (typeof gdjs.evtsExt__PhysicsAirplane3D__TurnY !== "undefined") {
  gdjs.evtsExt__PhysicsAirplane3D__TurnY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhysicsAirplane3D__TurnY = {};
gdjs.evtsExt__PhysicsAirplane3D__TurnY.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__TurnY.GDObjectObjects1= [];


gdjs.evtsExt__PhysicsAirplane3D__TurnY.userFunc0x9cde10 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.RuntimeObject3D} */
const object = objects[0];
/** @type {number} */
const angle = eventsFunctionContext.getArgument("Angle");

if (angle === 0) {
    return;
}
const threeObject = object.get3DRendererObject();
threeObject.rotateY(gdjs.toRad(angle));

const rotationX = gdjs.toDegrees(threeObject.rotation.x);
const rotationY = gdjs.toDegrees(threeObject.rotation.y);
const rotationZ = gdjs.toDegrees(threeObject.rotation.z);
// These methods overrides threeObject.rotation
object.setRotationX(rotationX);
object.setRotationY(rotationY);
object.setAngle(rotationZ);

};
gdjs.evtsExt__PhysicsAirplane3D__TurnY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__TurnY.GDObjectObjects1);

const objects = gdjs.evtsExt__PhysicsAirplane3D__TurnY.GDObjectObjects1;
gdjs.evtsExt__PhysicsAirplane3D__TurnY.userFunc0x9cde10(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PhysicsAirplane3D__TurnY.func = function(runtimeScene, Object, Object3D, Angle, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsAirplane3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsAirplane3D"),
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
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PhysicsAirplane3D__TurnY.GDObjectObjects1.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__TurnY.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__TurnY.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__PhysicsAirplane3D__TurnY.registeredGdjsCallbacks = [];