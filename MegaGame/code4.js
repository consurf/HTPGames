gdjs.CatScene1Code = {};
gdjs.CatScene1Code.localVariables = [];
gdjs.CatScene1Code.idToCallbackMap = new Map();
gdjs.CatScene1Code.GDCat_95952Objects1= [];
gdjs.CatScene1Code.GDCat_95952Objects2= [];
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects1= [];
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects2= [];
gdjs.CatScene1Code.GDFlattenerObjects1= [];
gdjs.CatScene1Code.GDFlattenerObjects2= [];
gdjs.CatScene1Code.GDBGObjects1= [];
gdjs.CatScene1Code.GDBGObjects2= [];
gdjs.CatScene1Code.GDBookObjects1= [];
gdjs.CatScene1Code.GDBookObjects2= [];
gdjs.CatScene1Code.GDEndObjects1= [];
gdjs.CatScene1Code.GDEndObjects2= [];
gdjs.CatScene1Code.GDHTP_9595VolumeObjects1= [];
gdjs.CatScene1Code.GDHTP_9595VolumeObjects2= [];


gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects = Hashtable.newFrom({"Cat_2": gdjs.CatScene1Code.GDCat_95952Objects1});
gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDFlattenerObjects1Objects = Hashtable.newFrom({"Flattener": gdjs.CatScene1Code.GDFlattenerObjects1});
gdjs.CatScene1Code.asyncCallback14653276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CatScene1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CatScene1", true);
}
gdjs.CatScene1Code.localVariables.length = 0;
}
gdjs.CatScene1Code.idToCallbackMap.set(14653276, gdjs.CatScene1Code.asyncCallback14653276);
gdjs.CatScene1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CatScene1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CatScene1Code.asyncCallback14653276(runtimeScene, asyncObjectsList)), 14653276, asyncObjectsList);
}
}

}


};gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDBookObjects1Objects = Hashtable.newFrom({"Book": gdjs.CatScene1Code.GDBookObjects1});
gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects = Hashtable.newFrom({"Cat_2": gdjs.CatScene1Code.GDCat_95952Objects1});
gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects = Hashtable.newFrom({"Cat_2": gdjs.CatScene1Code.GDCat_95952Objects1});
gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects = Hashtable.newFrom({"Cat_2": gdjs.CatScene1Code.GDCat_95952Objects1});
gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDEndObjects1Objects = Hashtable.newFrom({"End": gdjs.CatScene1Code.GDEndObjects1});
gdjs.CatScene1Code.asyncCallback14657132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CatScene1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}
gdjs.CatScene1Code.localVariables.length = 0;
}
gdjs.CatScene1Code.idToCallbackMap.set(14657132, gdjs.CatScene1Code.asyncCallback14657132);
gdjs.CatScene1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CatScene1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CatScene1Code.asyncCallback14657132(runtimeScene, asyncObjectsList)), 14657132, asyncObjectsList);
}
}

}


};gdjs.CatScene1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cat_2"), gdjs.CatScene1Code.GDCat_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Flattener"), gdjs.CatScene1Code.GDFlattenerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects, "PlatformerObject", gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDFlattenerObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14652660);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CatScene1Code.GDCat_95952Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Die", false, 100, gdjs.randomFloatInRange(1, 3));
}
{for(var i = 0, len = gdjs.CatScene1Code.GDCat_95952Objects1.length ;i < len;++i) {
    gdjs.CatScene1Code.GDCat_95952Objects1[i].getBehavior("Tween").addObjectScaleYTween2("Flat", 0.00001, "linear", 1, true, false);
}
}

{ //Subevents
gdjs.CatScene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat_2"), gdjs.CatScene1Code.GDCat_95952Objects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CatScene1Code.GDCat_95952Objects1.length === 0 ) ? 0 :gdjs.CatScene1Code.GDCat_95952Objects1[0].getPointX("")) + 400, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CatScene1Code.GDCat_95952Objects1.length === 0 ) ? 0 :gdjs.CatScene1Code.GDCat_95952Objects1[0].getPointY("")) + 40, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.CatScene1Code.GDBookObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cat_2"), gdjs.CatScene1Code.GDCat_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDBookObjects1Objects, gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CatScene1Code.GDBookObjects1 */
/* Reuse gdjs.CatScene1Code.GDCat_95952Objects1 */
{for(var i = 0, len = gdjs.CatScene1Code.GDBookObjects1.length ;i < len;++i) {
    gdjs.CatScene1Code.GDBookObjects1[i].separateFromObjectsList(gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat_2"), gdjs.CatScene1Code.GDCat_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.CatScene1Code.GDEndObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDCat_959595952Objects1Objects, gdjs.CatScene1Code.mapOfGDgdjs_9546CatScene1Code_9546GDEndObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14656700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CatScene1Code.GDCat_95952Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "2c73ebd849c60078c3744888d940243bc5dc25f70589da4a008e7e20bc65b054_Powerup 4.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.CatScene1Code.GDCat_95952Objects1.length ;i < len;++i) {
    gdjs.CatScene1Code.GDCat_95952Objects1[i].activateBehavior("PlatformerObject", false);
}
}

{ //Subevents
gdjs.CatScene1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.CatScene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CatScene1Code.GDCat_95952Objects1.length = 0;
gdjs.CatScene1Code.GDCat_95952Objects2.length = 0;
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects1.length = 0;
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects2.length = 0;
gdjs.CatScene1Code.GDFlattenerObjects1.length = 0;
gdjs.CatScene1Code.GDFlattenerObjects2.length = 0;
gdjs.CatScene1Code.GDBGObjects1.length = 0;
gdjs.CatScene1Code.GDBGObjects2.length = 0;
gdjs.CatScene1Code.GDBookObjects1.length = 0;
gdjs.CatScene1Code.GDBookObjects2.length = 0;
gdjs.CatScene1Code.GDEndObjects1.length = 0;
gdjs.CatScene1Code.GDEndObjects2.length = 0;
gdjs.CatScene1Code.GDHTP_9595VolumeObjects1.length = 0;
gdjs.CatScene1Code.GDHTP_9595VolumeObjects2.length = 0;

gdjs.CatScene1Code.eventsList2(runtimeScene);
gdjs.CatScene1Code.GDCat_95952Objects1.length = 0;
gdjs.CatScene1Code.GDCat_95952Objects2.length = 0;
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects1.length = 0;
gdjs.CatScene1Code.GDIndustrial_9595block_95952Objects2.length = 0;
gdjs.CatScene1Code.GDFlattenerObjects1.length = 0;
gdjs.CatScene1Code.GDFlattenerObjects2.length = 0;
gdjs.CatScene1Code.GDBGObjects1.length = 0;
gdjs.CatScene1Code.GDBGObjects2.length = 0;
gdjs.CatScene1Code.GDBookObjects1.length = 0;
gdjs.CatScene1Code.GDBookObjects2.length = 0;
gdjs.CatScene1Code.GDEndObjects1.length = 0;
gdjs.CatScene1Code.GDEndObjects2.length = 0;
gdjs.CatScene1Code.GDHTP_9595VolumeObjects1.length = 0;
gdjs.CatScene1Code.GDHTP_9595VolumeObjects2.length = 0;


return;

}

gdjs['CatScene1Code'] = gdjs.CatScene1Code;
