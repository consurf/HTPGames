gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDCatObjects1= [];
gdjs.MenuCode.GDCatObjects2= [];
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects1= [];
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects2= [];
gdjs.MenuCode.GDTileeObjects1= [];
gdjs.MenuCode.GDTileeObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.MenuCode.GDCatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCatObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCatObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCatObjects1[k] = gdjs.MenuCode.GDCatObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCatObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CatScene1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "b4815b730ea5946a1b2d0e32a5cec91c8a1a0bb07be1fa2e5ba2e03b69d75437_Hold on a Sec.aac", true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tilee"), gdjs.MenuCode.GDTileeObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDTileeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTileeObjects1[i].setXOffset(gdjs.MenuCode.GDTileeObjects1[i].getXOffset() + (0.5));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDTileeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTileeObjects1[i].setYOffset(gdjs.MenuCode.GDTileeObjects1[i].getYOffset() + (0.5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "RBracket");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDCatObjects1.length = 0;
gdjs.MenuCode.GDCatObjects2.length = 0;
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects1.length = 0;
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects2.length = 0;
gdjs.MenuCode.GDTileeObjects1.length = 0;
gdjs.MenuCode.GDTileeObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDCatObjects1.length = 0;
gdjs.MenuCode.GDCatObjects2.length = 0;
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects1.length = 0;
gdjs.MenuCode.GDBlackAndWhiteLeftVolumeSettingObjects2.length = 0;
gdjs.MenuCode.GDTileeObjects1.length = 0;
gdjs.MenuCode.GDTileeObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
