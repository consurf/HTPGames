
if (typeof gdjs.evtsExt__Light3D__SetLightCountMax !== "undefined") {
  gdjs.evtsExt__Light3D__SetLightCountMax.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Light3D__SetLightCountMax = {};
gdjs.evtsExt__Light3D__SetLightCountMax.idToCallbackMap = new Map();


gdjs.evtsExt__Light3D__SetLightCountMax.userFunc0x928be8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const value = eventsFunctionContext.getArgument("Value");

gdjs.__light3DExtension.lightCountMax.value = value;
};
gdjs.evtsExt__Light3D__SetLightCountMax.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Light3D__DefineHelperClasses.func(runtimeScene, eventsFunctionContext);
}
}

}


{


gdjs.evtsExt__Light3D__SetLightCountMax.userFunc0x928be8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__SetLightCountMax.func = function(runtimeScene, Value, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Light3D__SetLightCountMax.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Light3D__SetLightCountMax.registeredGdjsCallbacks = [];