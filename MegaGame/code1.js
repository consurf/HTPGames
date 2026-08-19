gdjs.LogoCode = {};
gdjs.LogoCode.localVariables = [];
gdjs.LogoCode.idToCallbackMap = new Map();
gdjs.LogoCode.GDIntroObjects1= [];
gdjs.LogoCode.GDIntroObjects2= [];


gdjs.LogoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.LogoCode.GDIntroObjects1);
{for(var i = 0, len = gdjs.LogoCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.LogoCode.GDIntroObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.LogoCode.GDIntroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LogoCode.GDIntroObjects1.length;i<l;++i) {
    if ( gdjs.LogoCode.GDIntroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.LogoCode.GDIntroObjects1[k] = gdjs.LogoCode.GDIntroObjects1[i];
        ++k;
    }
}
gdjs.LogoCode.GDIntroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.LogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LogoCode.GDIntroObjects1.length = 0;
gdjs.LogoCode.GDIntroObjects2.length = 0;

gdjs.LogoCode.eventsList0(runtimeScene);
gdjs.LogoCode.GDIntroObjects1.length = 0;
gdjs.LogoCode.GDIntroObjects2.length = 0;


return;

}

gdjs['LogoCode'] = gdjs.LogoCode;
