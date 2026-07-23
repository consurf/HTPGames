gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDGameLogoObjects1= [];
gdjs.MenuCode.GDGameLogoObjects2= [];
gdjs.MenuCode.GDScrollLogoObjects1= [];
gdjs.MenuCode.GDScrollLogoObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects1[k] = gdjs.MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "In-Game", false);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDGameLogoObjects1.length = 0;
gdjs.MenuCode.GDGameLogoObjects2.length = 0;
gdjs.MenuCode.GDScrollLogoObjects1.length = 0;
gdjs.MenuCode.GDScrollLogoObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDGameLogoObjects1.length = 0;
gdjs.MenuCode.GDGameLogoObjects2.length = 0;
gdjs.MenuCode.GDScrollLogoObjects1.length = 0;
gdjs.MenuCode.GDScrollLogoObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
