
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D || {};

/**
 * Behavior generated from 3D physics airplane
 */
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D = class PhysicsAirplane3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.Physics3DBehavior = behaviorData.Physics3DBehavior !== undefined ? behaviorData.Physics3DBehavior : "";
    this._behaviorData.CurrentForwardSpeed = Number("0") || 0;
    this._behaviorData.CurrentHorizontalAngularSpeed = Number("0") || 0;
    this._behaviorData.HorizontalAngularSpeedMax = behaviorData.HorizontalAngularSpeedMax !== undefined ? behaviorData.HorizontalAngularSpeedMax : Number("45") || 0;
    this._behaviorData.CurrentVerticalAngularSpeed = Number("0") || 0;
    this._behaviorData.VerticalAngularSpeedMax = behaviorData.VerticalAngularSpeedMax !== undefined ? behaviorData.VerticalAngularSpeedMax : Number("45") || 0;
    this._behaviorData.ForwardSpeedMax = behaviorData.ForwardSpeedMax !== undefined ? behaviorData.ForwardSpeedMax : Number("20") || 0;
    this._behaviorData.ForwardSpeedMin = behaviorData.ForwardSpeedMin !== undefined ? behaviorData.ForwardSpeedMin : Number("10") || 0;
    this._behaviorData.ForwardAcceleration = behaviorData.ForwardAcceleration !== undefined ? behaviorData.ForwardAcceleration : Number("10") || 0;
    this._behaviorData.ForwardDeceleration = behaviorData.ForwardDeceleration !== undefined ? behaviorData.ForwardDeceleration : Number("5") || 0;
    this._behaviorData.ForceFeedbackSpinLogSpeed = Number("0") || 0;
    this._behaviorData.ForceFeedbackSpinHalfwayDuration = behaviorData.ForceFeedbackSpinHalfwayDuration !== undefined ? behaviorData.ForceFeedbackSpinHalfwayDuration : Number("0.25") || 0;
    this._behaviorData.CurrentSpin = Number("0") || 0;
    this._behaviorData.SpinMax = behaviorData.SpinMax !== undefined ? behaviorData.SpinMax : Number("60") || 0;
    this._behaviorData.SpinHalfwayDuration = behaviorData.SpinHalfwayDuration !== undefined ? behaviorData.SpinHalfwayDuration : Number("0.5") || 0;
    this._behaviorData.AcceleratorInput = Number("0") || 0;
    this._behaviorData.TurnHorizontallyInput = Number("0") || 0;
    this._behaviorData.TurnVerticallyInput = Number("0") || 0;
    this._behaviorData.SpinLogSpeed = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.Physics3DBehavior !== undefined)
      this._behaviorData.Physics3DBehavior = behaviorOverriding.Physics3DBehavior;
    if (behaviorOverriding.CurrentForwardSpeed !== undefined)
      this._behaviorData.CurrentForwardSpeed = behaviorOverriding.CurrentForwardSpeed;
    if (behaviorOverriding.CurrentHorizontalAngularSpeed !== undefined)
      this._behaviorData.CurrentHorizontalAngularSpeed = behaviorOverriding.CurrentHorizontalAngularSpeed;
    if (behaviorOverriding.HorizontalAngularSpeedMax !== undefined)
      this._behaviorData.HorizontalAngularSpeedMax = behaviorOverriding.HorizontalAngularSpeedMax;
    if (behaviorOverriding.CurrentVerticalAngularSpeed !== undefined)
      this._behaviorData.CurrentVerticalAngularSpeed = behaviorOverriding.CurrentVerticalAngularSpeed;
    if (behaviorOverriding.VerticalAngularSpeedMax !== undefined)
      this._behaviorData.VerticalAngularSpeedMax = behaviorOverriding.VerticalAngularSpeedMax;
    if (behaviorOverriding.ForwardSpeedMax !== undefined)
      this._behaviorData.ForwardSpeedMax = behaviorOverriding.ForwardSpeedMax;
    if (behaviorOverriding.ForwardSpeedMin !== undefined)
      this._behaviorData.ForwardSpeedMin = behaviorOverriding.ForwardSpeedMin;
    if (behaviorOverriding.ForwardAcceleration !== undefined)
      this._behaviorData.ForwardAcceleration = behaviorOverriding.ForwardAcceleration;
    if (behaviorOverriding.ForwardDeceleration !== undefined)
      this._behaviorData.ForwardDeceleration = behaviorOverriding.ForwardDeceleration;
    if (behaviorOverriding.ForceFeedbackSpinLogSpeed !== undefined)
      this._behaviorData.ForceFeedbackSpinLogSpeed = behaviorOverriding.ForceFeedbackSpinLogSpeed;
    if (behaviorOverriding.ForceFeedbackSpinHalfwayDuration !== undefined)
      this._behaviorData.ForceFeedbackSpinHalfwayDuration = behaviorOverriding.ForceFeedbackSpinHalfwayDuration;
    if (behaviorOverriding.CurrentSpin !== undefined)
      this._behaviorData.CurrentSpin = behaviorOverriding.CurrentSpin;
    if (behaviorOverriding.SpinMax !== undefined)
      this._behaviorData.SpinMax = behaviorOverriding.SpinMax;
    if (behaviorOverriding.SpinHalfwayDuration !== undefined)
      this._behaviorData.SpinHalfwayDuration = behaviorOverriding.SpinHalfwayDuration;
    if (behaviorOverriding.AcceleratorInput !== undefined)
      this._behaviorData.AcceleratorInput = behaviorOverriding.AcceleratorInput;
    if (behaviorOverriding.TurnHorizontallyInput !== undefined)
      this._behaviorData.TurnHorizontallyInput = behaviorOverriding.TurnHorizontallyInput;
    if (behaviorOverriding.TurnVerticallyInput !== undefined)
      this._behaviorData.TurnVerticallyInput = behaviorOverriding.TurnVerticallyInput;
    if (behaviorOverriding.SpinLogSpeed !== undefined)
      this._behaviorData.SpinLogSpeed = behaviorOverriding.SpinLogSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    Physics3DBehavior: this._behaviorData.Physics3DBehavior,
    CurrentForwardSpeed: this._behaviorData.CurrentForwardSpeed,
    CurrentHorizontalAngularSpeed: this._behaviorData.CurrentHorizontalAngularSpeed,
    HorizontalAngularSpeedMax: this._behaviorData.HorizontalAngularSpeedMax,
    CurrentVerticalAngularSpeed: this._behaviorData.CurrentVerticalAngularSpeed,
    VerticalAngularSpeedMax: this._behaviorData.VerticalAngularSpeedMax,
    ForwardSpeedMax: this._behaviorData.ForwardSpeedMax,
    ForwardSpeedMin: this._behaviorData.ForwardSpeedMin,
    ForwardAcceleration: this._behaviorData.ForwardAcceleration,
    ForwardDeceleration: this._behaviorData.ForwardDeceleration,
    ForceFeedbackSpinLogSpeed: this._behaviorData.ForceFeedbackSpinLogSpeed,
    ForceFeedbackSpinHalfwayDuration: this._behaviorData.ForceFeedbackSpinHalfwayDuration,
    CurrentSpin: this._behaviorData.CurrentSpin,
    SpinMax: this._behaviorData.SpinMax,
    SpinHalfwayDuration: this._behaviorData.SpinHalfwayDuration,
    AcceleratorInput: this._behaviorData.AcceleratorInput,
    TurnHorizontallyInput: this._behaviorData.TurnHorizontallyInput,
    TurnVerticallyInput: this._behaviorData.TurnVerticallyInput,
    SpinLogSpeed: this._behaviorData.SpinLogSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.Physics3DBehavior !== undefined)
      this._behaviorData.Physics3DBehavior = networkSyncData.props.Physics3DBehavior;
    if (networkSyncData.props.CurrentForwardSpeed !== undefined)
      this._behaviorData.CurrentForwardSpeed = networkSyncData.props.CurrentForwardSpeed;
    if (networkSyncData.props.CurrentHorizontalAngularSpeed !== undefined)
      this._behaviorData.CurrentHorizontalAngularSpeed = networkSyncData.props.CurrentHorizontalAngularSpeed;
    if (networkSyncData.props.HorizontalAngularSpeedMax !== undefined)
      this._behaviorData.HorizontalAngularSpeedMax = networkSyncData.props.HorizontalAngularSpeedMax;
    if (networkSyncData.props.CurrentVerticalAngularSpeed !== undefined)
      this._behaviorData.CurrentVerticalAngularSpeed = networkSyncData.props.CurrentVerticalAngularSpeed;
    if (networkSyncData.props.VerticalAngularSpeedMax !== undefined)
      this._behaviorData.VerticalAngularSpeedMax = networkSyncData.props.VerticalAngularSpeedMax;
    if (networkSyncData.props.ForwardSpeedMax !== undefined)
      this._behaviorData.ForwardSpeedMax = networkSyncData.props.ForwardSpeedMax;
    if (networkSyncData.props.ForwardSpeedMin !== undefined)
      this._behaviorData.ForwardSpeedMin = networkSyncData.props.ForwardSpeedMin;
    if (networkSyncData.props.ForwardAcceleration !== undefined)
      this._behaviorData.ForwardAcceleration = networkSyncData.props.ForwardAcceleration;
    if (networkSyncData.props.ForwardDeceleration !== undefined)
      this._behaviorData.ForwardDeceleration = networkSyncData.props.ForwardDeceleration;
    if (networkSyncData.props.ForceFeedbackSpinLogSpeed !== undefined)
      this._behaviorData.ForceFeedbackSpinLogSpeed = networkSyncData.props.ForceFeedbackSpinLogSpeed;
    if (networkSyncData.props.ForceFeedbackSpinHalfwayDuration !== undefined)
      this._behaviorData.ForceFeedbackSpinHalfwayDuration = networkSyncData.props.ForceFeedbackSpinHalfwayDuration;
    if (networkSyncData.props.CurrentSpin !== undefined)
      this._behaviorData.CurrentSpin = networkSyncData.props.CurrentSpin;
    if (networkSyncData.props.SpinMax !== undefined)
      this._behaviorData.SpinMax = networkSyncData.props.SpinMax;
    if (networkSyncData.props.SpinHalfwayDuration !== undefined)
      this._behaviorData.SpinHalfwayDuration = networkSyncData.props.SpinHalfwayDuration;
    if (networkSyncData.props.AcceleratorInput !== undefined)
      this._behaviorData.AcceleratorInput = networkSyncData.props.AcceleratorInput;
    if (networkSyncData.props.TurnHorizontallyInput !== undefined)
      this._behaviorData.TurnHorizontallyInput = networkSyncData.props.TurnHorizontallyInput;
    if (networkSyncData.props.TurnVerticallyInput !== undefined)
      this._behaviorData.TurnVerticallyInput = networkSyncData.props.TurnVerticallyInput;
    if (networkSyncData.props.SpinLogSpeed !== undefined)
      this._behaviorData.SpinLogSpeed = networkSyncData.props.SpinLogSpeed;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getPhysics3DBehavior() {
    return this._behaviorData.Physics3DBehavior !== undefined ? this._behaviorData.Physics3DBehavior : "";
  }
  _setPhysics3DBehavior(newValue) {
    this._behaviorData.Physics3DBehavior = newValue;
  }
  _getCurrentForwardSpeed() {
    return this._behaviorData.CurrentForwardSpeed !== undefined ? this._behaviorData.CurrentForwardSpeed : Number("0") || 0;
  }
  _setCurrentForwardSpeed(newValue) {
    this._behaviorData.CurrentForwardSpeed = newValue;
  }
  _getCurrentHorizontalAngularSpeed() {
    return this._behaviorData.CurrentHorizontalAngularSpeed !== undefined ? this._behaviorData.CurrentHorizontalAngularSpeed : Number("0") || 0;
  }
  _setCurrentHorizontalAngularSpeed(newValue) {
    this._behaviorData.CurrentHorizontalAngularSpeed = newValue;
  }
  _getHorizontalAngularSpeedMax() {
    return this._behaviorData.HorizontalAngularSpeedMax !== undefined ? this._behaviorData.HorizontalAngularSpeedMax : Number("45") || 0;
  }
  _setHorizontalAngularSpeedMax(newValue) {
    this._behaviorData.HorizontalAngularSpeedMax = newValue;
  }
  _getCurrentVerticalAngularSpeed() {
    return this._behaviorData.CurrentVerticalAngularSpeed !== undefined ? this._behaviorData.CurrentVerticalAngularSpeed : Number("0") || 0;
  }
  _setCurrentVerticalAngularSpeed(newValue) {
    this._behaviorData.CurrentVerticalAngularSpeed = newValue;
  }
  _getVerticalAngularSpeedMax() {
    return this._behaviorData.VerticalAngularSpeedMax !== undefined ? this._behaviorData.VerticalAngularSpeedMax : Number("45") || 0;
  }
  _setVerticalAngularSpeedMax(newValue) {
    this._behaviorData.VerticalAngularSpeedMax = newValue;
  }
  _getForwardSpeedMax() {
    return this._behaviorData.ForwardSpeedMax !== undefined ? this._behaviorData.ForwardSpeedMax : Number("20") || 0;
  }
  _setForwardSpeedMax(newValue) {
    this._behaviorData.ForwardSpeedMax = newValue;
  }
  _getForwardSpeedMin() {
    return this._behaviorData.ForwardSpeedMin !== undefined ? this._behaviorData.ForwardSpeedMin : Number("10") || 0;
  }
  _setForwardSpeedMin(newValue) {
    this._behaviorData.ForwardSpeedMin = newValue;
  }
  _getForwardAcceleration() {
    return this._behaviorData.ForwardAcceleration !== undefined ? this._behaviorData.ForwardAcceleration : Number("10") || 0;
  }
  _setForwardAcceleration(newValue) {
    this._behaviorData.ForwardAcceleration = newValue;
  }
  _getForwardDeceleration() {
    return this._behaviorData.ForwardDeceleration !== undefined ? this._behaviorData.ForwardDeceleration : Number("5") || 0;
  }
  _setForwardDeceleration(newValue) {
    this._behaviorData.ForwardDeceleration = newValue;
  }
  _getForceFeedbackSpinLogSpeed() {
    return this._behaviorData.ForceFeedbackSpinLogSpeed !== undefined ? this._behaviorData.ForceFeedbackSpinLogSpeed : Number("0") || 0;
  }
  _setForceFeedbackSpinLogSpeed(newValue) {
    this._behaviorData.ForceFeedbackSpinLogSpeed = newValue;
  }
  _getForceFeedbackSpinHalfwayDuration() {
    return this._behaviorData.ForceFeedbackSpinHalfwayDuration !== undefined ? this._behaviorData.ForceFeedbackSpinHalfwayDuration : Number("0.25") || 0;
  }
  _setForceFeedbackSpinHalfwayDuration(newValue) {
    this._behaviorData.ForceFeedbackSpinHalfwayDuration = newValue;
  }
  _getCurrentSpin() {
    return this._behaviorData.CurrentSpin !== undefined ? this._behaviorData.CurrentSpin : Number("0") || 0;
  }
  _setCurrentSpin(newValue) {
    this._behaviorData.CurrentSpin = newValue;
  }
  _getSpinMax() {
    return this._behaviorData.SpinMax !== undefined ? this._behaviorData.SpinMax : Number("60") || 0;
  }
  _setSpinMax(newValue) {
    this._behaviorData.SpinMax = newValue;
  }
  _getSpinHalfwayDuration() {
    return this._behaviorData.SpinHalfwayDuration !== undefined ? this._behaviorData.SpinHalfwayDuration : Number("0.5") || 0;
  }
  _setSpinHalfwayDuration(newValue) {
    this._behaviorData.SpinHalfwayDuration = newValue;
  }
  _getAcceleratorInput() {
    return this._behaviorData.AcceleratorInput !== undefined ? this._behaviorData.AcceleratorInput : Number("0") || 0;
  }
  _setAcceleratorInput(newValue) {
    this._behaviorData.AcceleratorInput = newValue;
  }
  _getTurnHorizontallyInput() {
    return this._behaviorData.TurnHorizontallyInput !== undefined ? this._behaviorData.TurnHorizontallyInput : Number("0") || 0;
  }
  _setTurnHorizontallyInput(newValue) {
    this._behaviorData.TurnHorizontallyInput = newValue;
  }
  _getTurnVerticallyInput() {
    return this._behaviorData.TurnVerticallyInput !== undefined ? this._behaviorData.TurnVerticallyInput : Number("0") || 0;
  }
  _setTurnVerticallyInput(newValue) {
    this._behaviorData.TurnVerticallyInput = newValue;
  }
  _getSpinLogSpeed() {
    return this._behaviorData.SpinLogSpeed !== undefined ? this._behaviorData.SpinLogSpeed : Number("0") || 0;
  }
  _setSpinLogSpeed(newValue) {
    this._behaviorData.SpinLogSpeed = newValue;
  }
}

/**
 * Shared data generated from 3D physics airplane
 */
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.SharedData = class PhysicsAirplane3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DSharedData = new gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsAirplane3D_PhysicsAirplane3DSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMin())
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetSpinHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpinHalfwayDuration(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetForceFeedbackSpinHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForceFeedbackSpinHalfwayDuration(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleratorInput() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleratorInput() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardAcceleration() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMin(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMax()))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleratorInput() == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardDeceleration() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMin(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMax()))
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2);

{gdjs.evtsExt__PhysicsAirplane3D__TurnX.func(runtimeScene, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, eventsFunctionContext.getBehaviorName("Object3D"), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin()), eventsFunctionContext);
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHorizontalAngularSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnHorizontallyInput() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalAngularSpeedMax())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentVerticalAngularSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnVerticallyInput() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngularSpeedMax())
}
{gdjs.evtsExt__PhysicsAirplane3D__TurnZ.func(runtimeScene, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, eventsFunctionContext.getBehaviorName("Object3D"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHorizontalAngularSpeed() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
{gdjs.evtsExt__PhysicsAirplane3D__TurnY.func(runtimeScene, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, eventsFunctionContext.getBehaviorName("Object3D"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentVerticalAngularSpeed() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3DBehavior")).setLinearVelocityX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() * (gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getForwardX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3DBehavior")).setLinearVelocityY(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() * (gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getForwardY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3DBehavior")).setLinearVelocityZ(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() * (gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getForwardZ()));
}
}
{gdjs.evtsExt__PhysicsAirplane3D__TurnX.func(runtimeScene, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, eventsFunctionContext.getBehaviorName("Object3D"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin(), eventsFunctionContext);
}
}

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX((gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX()) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForceFeedbackSpinLogSpeed()));
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSpin(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin() * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForceFeedbackSpinLogSpeed()))
}
}

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHorizontalAngularSpeed() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentVerticalAngularSpeed() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(gdjs.evtTools.common.angleDifference((gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX()), 0));
}
}

{ //Subevents
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber(eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber() + gdjs.evtTools.common.angleDifference(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin(), eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber()) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpinLogSpeed()) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin());
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSpin(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin()+eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber())
}
{gdjs.evtsExt__PhysicsAirplane3D__TurnX.func(runtimeScene, gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595PhysicsAirplane3D_9595_9595PhysicsAirplane3D_9546PhysicsAirplane3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Object3D"), eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
}

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Delta", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TargetedSpin", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[1].getFromIndex(1).setNumber(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpinMax()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHorizontalAngularSpeed() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalAngularSpeedMax());
}

{ //Subevents
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHorizontalAngularSpeed() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentVerticalAngularSpeed() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TimeDelta", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer())));
}

{ //Subevents
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnHorizontallyInput(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnVerticallyInput(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleratorInput(0)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnHorizontallyInput(1)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKey = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnHorizontallyInput(-1)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKey = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnVerticallyInput(-1)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKey = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnUpKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnVerticallyInput(1)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKey = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnDownKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleratorInput(1)
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKey = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleratorInput(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStick = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateAcceleratorStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnHorizontallyInput(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStick = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnHorizontallyStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnVerticallyInput(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStick = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SimulateTurnVerticallyStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpin();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpin = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentSpinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeed = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeed = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHorizontalAngularSpeed();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeed = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentHorizontalAngularSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHorizontalAngularSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeed = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentHorizontalAngularSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentVerticalAngularSpeed();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeed = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.CurrentVerticalAngularSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentVerticalAngularSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeed = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetCurrentVerticalAngularSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalAngularSpeedMax();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.HorizontalAngularSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalAngularSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMax = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetHorizontalAngularSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngularSpeedMax();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.VerticalAngularSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalAngularSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMax = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetVerticalAngularSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMax();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForwardSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMax = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardSpeedMin();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMin = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardSpeedMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForwardSpeedMin(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMin = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardSpeedMinContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardAcceleration();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAcceleration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardAccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForwardAcceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAcceleration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForwardDeceleration();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDeceleration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForwardDecelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForwardDeceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDeceleration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForwardDecelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpinMax();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpinMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMax = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpinHalfwayDuration();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDuration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SpinHalfwayDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpinHalfwayDuration(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpinLogSpeed(Math.log(0.5) / eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDuration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetSpinHalfwayDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForceFeedbackSpinHalfwayDuration();}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDuration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.ForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext = {};
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForceFeedbackSpinHalfwayDuration(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForceFeedbackSpinLogSpeed(Math.log(0.5) / eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDuration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
, "Physics3DBehavior": this._getPhysics3DBehavior()
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

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D.prototype.SetForceFeedbackSpinHalfwayDurationContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsAirplane3D::PhysicsAirplane3D", gdjs.evtsExt__PhysicsAirplane3D__PhysicsAirplane3D.PhysicsAirplane3D);
