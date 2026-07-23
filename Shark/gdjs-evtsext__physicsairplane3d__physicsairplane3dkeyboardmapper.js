
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper || {};

/**
 * Behavior generated from 3D airplane keyboard mapper
 */
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper = class PhysicsAirplane3DKeyboardMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsAirplane3D = behaviorData.PhysicsAirplane3D !== undefined ? behaviorData.PhysicsAirplane3D : "";
    this._behaviorData.TurnRight = behaviorData.TurnRight !== undefined ? behaviorData.TurnRight : "Right";
    this._behaviorData.TurnLeft = behaviorData.TurnLeft !== undefined ? behaviorData.TurnLeft : "Left";
    this._behaviorData.TurnUp = behaviorData.TurnUp !== undefined ? behaviorData.TurnUp : "Down";
    this._behaviorData.TurnDown = behaviorData.TurnDown !== undefined ? behaviorData.TurnDown : "Up";
    this._behaviorData.Accelerator = behaviorData.Accelerator !== undefined ? behaviorData.Accelerator : "LShift";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsAirplane3D !== undefined)
      this._behaviorData.PhysicsAirplane3D = behaviorOverriding.PhysicsAirplane3D;
    if (behaviorOverriding.TurnRight !== undefined)
      this._behaviorData.TurnRight = behaviorOverriding.TurnRight;
    if (behaviorOverriding.TurnLeft !== undefined)
      this._behaviorData.TurnLeft = behaviorOverriding.TurnLeft;
    if (behaviorOverriding.TurnUp !== undefined)
      this._behaviorData.TurnUp = behaviorOverriding.TurnUp;
    if (behaviorOverriding.TurnDown !== undefined)
      this._behaviorData.TurnDown = behaviorOverriding.TurnDown;
    if (behaviorOverriding.Accelerator !== undefined)
      this._behaviorData.Accelerator = behaviorOverriding.Accelerator;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsAirplane3D: this._behaviorData.PhysicsAirplane3D,
    TurnRight: this._behaviorData.TurnRight,
    TurnLeft: this._behaviorData.TurnLeft,
    TurnUp: this._behaviorData.TurnUp,
    TurnDown: this._behaviorData.TurnDown,
    Accelerator: this._behaviorData.Accelerator,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsAirplane3D !== undefined)
      this._behaviorData.PhysicsAirplane3D = networkSyncData.props.PhysicsAirplane3D;
    if (networkSyncData.props.TurnRight !== undefined)
      this._behaviorData.TurnRight = networkSyncData.props.TurnRight;
    if (networkSyncData.props.TurnLeft !== undefined)
      this._behaviorData.TurnLeft = networkSyncData.props.TurnLeft;
    if (networkSyncData.props.TurnUp !== undefined)
      this._behaviorData.TurnUp = networkSyncData.props.TurnUp;
    if (networkSyncData.props.TurnDown !== undefined)
      this._behaviorData.TurnDown = networkSyncData.props.TurnDown;
    if (networkSyncData.props.Accelerator !== undefined)
      this._behaviorData.Accelerator = networkSyncData.props.Accelerator;
  }

  // Properties:
  
  _getPhysicsAirplane3D() {
    return this._behaviorData.PhysicsAirplane3D !== undefined ? this._behaviorData.PhysicsAirplane3D : "";
  }
  _setPhysicsAirplane3D(newValue) {
    this._behaviorData.PhysicsAirplane3D = newValue;
  }
  _getTurnRight() {
    return this._behaviorData.TurnRight !== undefined ? this._behaviorData.TurnRight : "Right";
  }
  _setTurnRight(newValue) {
    this._behaviorData.TurnRight = newValue;
  }
  _getTurnLeft() {
    return this._behaviorData.TurnLeft !== undefined ? this._behaviorData.TurnLeft : "Left";
  }
  _setTurnLeft(newValue) {
    this._behaviorData.TurnLeft = newValue;
  }
  _getTurnUp() {
    return this._behaviorData.TurnUp !== undefined ? this._behaviorData.TurnUp : "Down";
  }
  _setTurnUp(newValue) {
    this._behaviorData.TurnUp = newValue;
  }
  _getTurnDown() {
    return this._behaviorData.TurnDown !== undefined ? this._behaviorData.TurnDown : "Up";
  }
  _setTurnDown(newValue) {
    this._behaviorData.TurnDown = newValue;
  }
  _getAccelerator() {
    return this._behaviorData.Accelerator !== undefined ? this._behaviorData.Accelerator : "LShift";
  }
  _setAccelerator(newValue) {
    this._behaviorData.Accelerator = newValue;
  }
}

/**
 * Shared data generated from 3D airplane keyboard mapper
 */
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.SharedData = class PhysicsAirplane3DKeyboardMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DKeyboardMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DKeyboardMapperSharedData = new gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DKeyboardMapperSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnUp());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsAirplane3D")).SimulateTurnUpKey(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnDown());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsAirplane3D")).SimulateTurnDownKey(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnRight());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsAirplane3D")).SimulateTurnRightKey(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnLeft());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsAirplane3D")).SimulateTurnLeftKey(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAccelerator());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsAirplane3D")).SimulateAcceleratorKey(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnLeft();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnLeftContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnLeft(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeft = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnLeftContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnRight();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnRightContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnRight(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnRightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnUp();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUp = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnUpContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnUp(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUp = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnUpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnDown();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.TurnDownContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnDown(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDown = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetTurnDownContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAccelerator();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.Accelerator = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.AcceleratorContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAccelerator(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAccelerator = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsAirplane3D": this._getPhysicsAirplane3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper.prototype.SetAcceleratorContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper", gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3DKeyboardMapper.PhysicsAirplane3DKeyboardMapper);
