gdjs.FirstMenuCode = {};
gdjs.FirstMenuCode.localVariables = [];
gdjs.FirstMenuCode.idToCallbackMap = new Map();
gdjs.FirstMenuCode.GDGreenButtonObjects1= [];
gdjs.FirstMenuCode.GDGreenButtonObjects2= [];


gdjs.FirstMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.FirstMenuCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstMenuCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.FirstMenuCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FirstMenuCode.GDGreenButtonObjects1[k] = gdjs.FirstMenuCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.FirstMenuCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logo", false);
}
}

}


};

gdjs.FirstMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FirstMenuCode.GDGreenButtonObjects1.length = 0;
gdjs.FirstMenuCode.GDGreenButtonObjects2.length = 0;

gdjs.FirstMenuCode.eventsList0(runtimeScene);
gdjs.FirstMenuCode.GDGreenButtonObjects1.length = 0;
gdjs.FirstMenuCode.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['FirstMenuCode'] = gdjs.FirstMenuCode;
