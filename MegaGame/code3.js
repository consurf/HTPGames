gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects1= [];
gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2= [];
gdjs.SettingsCode.GDRedButtonWithShadowObjects1= [];
gdjs.SettingsCode.GDRedButtonWithShadowObjects2= [];
gdjs.SettingsCode.GDTileeObjects1= [];
gdjs.SettingsCode.GDTileeObjects2= [];


gdjs.SettingsCode.asyncCallback13457052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SettingsCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackAndWhiteRightVolumeSetting"), gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2[i].TweenOpen(null);
}
}
gdjs.SettingsCode.localVariables.length = 0;
}
gdjs.SettingsCode.idToCallbackMap.set(13457052, gdjs.SettingsCode.asyncCallback13457052);
gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SettingsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.SettingsCode.asyncCallback13457052(runtimeScene, asyncObjectsList)), 13457052, asyncObjectsList);
}
}

}


};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.SettingsCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDRedButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDRedButtonWithShadowObjects1[k] = gdjs.SettingsCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tilee"), gdjs.SettingsCode.GDTileeObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDTileeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTileeObjects1[i].setXOffset(gdjs.SettingsCode.GDTileeObjects1[i].getXOffset() + (0.5));
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDTileeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTileeObjects1[i].setYOffset(gdjs.SettingsCode.GDTileeObjects1[i].getYOffset() + (0.5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects1.length = 0;
gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2.length = 0;
gdjs.SettingsCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.SettingsCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.SettingsCode.GDTileeObjects1.length = 0;
gdjs.SettingsCode.GDTileeObjects2.length = 0;

gdjs.SettingsCode.eventsList1(runtimeScene);
gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects1.length = 0;
gdjs.SettingsCode.GDBlackAndWhiteRightVolumeSettingObjects2.length = 0;
gdjs.SettingsCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.SettingsCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.SettingsCode.GDTileeObjects1.length = 0;
gdjs.SettingsCode.GDTileeObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
