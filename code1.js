gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDSoldierObjects1= [];
gdjs.GameCode.GDSoldierObjects2= [];
gdjs.GameCode.GDSoldierObjects3= [];
gdjs.GameCode.GDSoldierObjects4= [];
gdjs.GameCode.GDSoldierObjects5= [];
gdjs.GameCode.GDStartMarkerObjects1= [];
gdjs.GameCode.GDStartMarkerObjects2= [];
gdjs.GameCode.GDStartMarkerObjects3= [];
gdjs.GameCode.GDStartMarkerObjects4= [];
gdjs.GameCode.GDStartMarkerObjects5= [];
gdjs.GameCode.GDFallDeathObjects1= [];
gdjs.GameCode.GDFallDeathObjects2= [];
gdjs.GameCode.GDFallDeathObjects3= [];
gdjs.GameCode.GDFallDeathObjects4= [];
gdjs.GameCode.GDFallDeathObjects5= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundObjects5= [];
gdjs.GameCode.GDGroundElevatedObjects1= [];
gdjs.GameCode.GDGroundElevatedObjects2= [];
gdjs.GameCode.GDGroundElevatedObjects3= [];
gdjs.GameCode.GDGroundElevatedObjects4= [];
gdjs.GameCode.GDGroundElevatedObjects5= [];
gdjs.GameCode.GDBombObjects1= [];
gdjs.GameCode.GDBombObjects2= [];
gdjs.GameCode.GDBombObjects3= [];
gdjs.GameCode.GDBombObjects4= [];
gdjs.GameCode.GDBombObjects5= [];
gdjs.GameCode.GDBulletsObjects1= [];
gdjs.GameCode.GDBulletsObjects2= [];
gdjs.GameCode.GDBulletsObjects3= [];
gdjs.GameCode.GDBulletsObjects4= [];
gdjs.GameCode.GDBulletsObjects5= [];
gdjs.GameCode.GDScoreLabelObjects1= [];
gdjs.GameCode.GDScoreLabelObjects2= [];
gdjs.GameCode.GDScoreLabelObjects3= [];
gdjs.GameCode.GDScoreLabelObjects4= [];
gdjs.GameCode.GDScoreLabelObjects5= [];
gdjs.GameCode.GDHighScoreLabelObjects1= [];
gdjs.GameCode.GDHighScoreLabelObjects2= [];
gdjs.GameCode.GDHighScoreLabelObjects3= [];
gdjs.GameCode.GDHighScoreLabelObjects4= [];
gdjs.GameCode.GDHighScoreLabelObjects5= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];
gdjs.GameCode.GDCoinExplosionObjects1= [];
gdjs.GameCode.GDCoinExplosionObjects2= [];
gdjs.GameCode.GDCoinExplosionObjects3= [];
gdjs.GameCode.GDCoinExplosionObjects4= [];
gdjs.GameCode.GDCoinExplosionObjects5= [];
gdjs.GameCode.GDBombExplosionObjects1= [];
gdjs.GameCode.GDBombExplosionObjects2= [];
gdjs.GameCode.GDBombExplosionObjects3= [];
gdjs.GameCode.GDBombExplosionObjects4= [];
gdjs.GameCode.GDBombExplosionObjects5= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects1Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects1, "GroundElevated": gdjs.GameCode.GDGroundElevatedObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HighScoreLabel"), gdjs.GameCode.GDHighScoreLabelObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", "GameHighscore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreLabelObjects2[i].getBehavior("Text").setText("Highscore: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects1[i].getBehavior("Text").setText("Swipe to move and jump.");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects1[i].setCharacterSize(40);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects3Objects = Hashtable.newFrom({"Soldier": gdjs.GameCode.GDSoldierObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects = Hashtable.newFrom({"GroundElevated": gdjs.GameCode.GDGroundElevatedObjects3});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDSoldierObjects3, gdjs.GameCode.GDSoldierObjects4);

{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects4[i].getBehavior("LaneCharacter").MoveRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSoldierObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects3[i].getBehavior("LaneCharacter").MoveLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2, "GroundElevated": gdjs.GameCode.GDGroundElevatedObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects3);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects, true, runtimeScene, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSoldierObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoldierObjects2[i].getBehavior("LaneCharacter").HasChangedOfLane((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSoldierObjects2[k] = gdjs.GameCode.GDSoldierObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoldierObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
/* Reuse gdjs.GameCode.GDSoldierObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects2[i].getBehavior("LaneCharacter").EnablePlatformOnLane(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects, "Object3D", "Platform", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects2Objects = Hashtable.newFrom({"Soldier": gdjs.GameCode.GDSoldierObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletsObjects2Objects = Hashtable.newFrom({"Bullets": gdjs.GameCode.GDBulletsObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects2Objects = Hashtable.newFrom({"Soldier": gdjs.GameCode.GDSoldierObjects2});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullets"), gdjs.GameCode.GDBulletsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletsObjects2[i].getBehavior("LaneObject").IsObjectOnSameLane(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects2Objects, "LaneCharacter", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletsObjects2[k] = gdjs.GameCode.GDBulletsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletsObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects2Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.GameCode.GDScoreLabelObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreLabelObjects2[i].getBehavior("Text").setText("Coins: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) * 1.003);
}{for(var i = 0, len = gdjs.GameCode.GDBulletsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletsObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects1Objects = Hashtable.newFrom({"Soldier": gdjs.GameCode.GDSoldierObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.GameCode.GDBombObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects1Objects = Hashtable.newFrom({"Soldier": gdjs.GameCode.GDSoldierObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombExplosionObjects1Objects = Hashtable.newFrom({"BombExplosion": gdjs.GameCode.GDBombExplosionObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("FallDeath"), gdjs.GameCode.GDFallDeathObjects2);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSoldierObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoldierObjects2[i].getY() > (( gdjs.GameCode.GDFallDeathObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFallDeathObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSoldierObjects2[k] = gdjs.GameCode.GDSoldierObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoldierObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("GameOver");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-vocal-female-pain-scream-2202.wav", 1, false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.GameCode.GDBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBombObjects1[i].getBehavior("LaneObject").IsObjectOnSameLane(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects1Objects, "LaneCharacter", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBombObjects1[k] = gdjs.GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBombObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSoldierObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBombObjects1 */
gdjs.GameCode.GDBombExplosionObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(2).setString("GameOver");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-epic-impact-afar-explosion-2782.wav", 0, false, 50, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombExplosionObjects1Objects, (( gdjs.GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBombObjects1[0].getCenterXInScene()), (( gdjs.GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBombObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDBombExplosionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBombExplosionObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBombObjects1[0].getBehavior("Object3D").getCenterZInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDBombExplosionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBombExplosionObjects1[i].getBehavior("Object3D").setRotationY(-(90));
}
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.eventsList5(runtimeScene);
}


};gdjs.GameCode.asyncCallback15110980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback15110980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback15111740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback15111740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.GameCode.GDScoreLabelObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("GameHighscore", "GameHighscore", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.GameCode.GDScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreLabelObjects2[i].setColor("248;231;28");
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15109148);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "DeathSound", false, 50, 0.7);
}{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.eventsList10(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects = Hashtable.newFrom({"StartMarker": gdjs.GameCode.GDStartMarkerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2, "GroundElevated": gdjs.GameCode.GDGroundElevatedObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
/* Reuse gdjs.GameCode.GDSoldierObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects2[i].getBehavior("LaneCharacter").EnablePlatformOnLane(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects, "Object3D", "Platform", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDSoldierObjects2 */
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects, (( gdjs.GameCode.GDSoldierObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects2[0].getX()), (( gdjs.GameCode.GDSoldierObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects2[0].getY()), false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Layout" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 9)), (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointX("")) + 2048, (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointY("")), 0);
}
{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartMarker"), gdjs.GameCode.GDStartMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDStartMarkerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDStartMarkerObjects2[i].getX() < (( gdjs.GameCode.GDSoldierObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDStartMarkerObjects2[k] = gdjs.GameCode.GDStartMarkerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDStartMarkerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDStartMarkerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStartMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.GameCode.GDBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullets"), gdjs.GameCode.GDBulletsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects1[i].getX() < (( gdjs.GameCode.GDSoldierObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects1[k] = gdjs.GameCode.GDGroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects1[i].getX() < (( gdjs.GameCode.GDSoldierObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects1[k] = gdjs.GameCode.GDGroundElevatedObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBombObjects1[i].getX() < (( gdjs.GameCode.GDSoldierObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBombObjects1[k] = gdjs.GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBombObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletsObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletsObjects1[i].getX() < (( gdjs.GameCode.GDSoldierObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSoldierObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletsObjects1[k] = gdjs.GameCode.GDBulletsObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBombObjects1 */
/* Reuse gdjs.GameCode.GDBulletsObjects1 */
/* Reuse gdjs.GameCode.GDGroundObjects1 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBulletsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletsObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soldier"), gdjs.GameCode.GDSoldierObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Playing");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SwipeGesture__SetLayer.func(runtimeScene, "UI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects1[i].getBehavior("Animation").setAnimationSpeedScale(1.3);
}
}{for(var i = 0, len = gdjs.GameCode.GDSoldierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSoldierObjects1[i].getBehavior("LaneCharacter").EnablePlatformOnLane(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects1Objects, "Object3D", "Platform", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "WhatsApp Audio 2025-06-27 at 00.25.06_edd10e03.mp3", 2, true, 20, 1);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Playing");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "GameOver");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDSoldierObjects1.length = 0;
gdjs.GameCode.GDSoldierObjects2.length = 0;
gdjs.GameCode.GDSoldierObjects3.length = 0;
gdjs.GameCode.GDSoldierObjects4.length = 0;
gdjs.GameCode.GDSoldierObjects5.length = 0;
gdjs.GameCode.GDStartMarkerObjects1.length = 0;
gdjs.GameCode.GDStartMarkerObjects2.length = 0;
gdjs.GameCode.GDStartMarkerObjects3.length = 0;
gdjs.GameCode.GDStartMarkerObjects4.length = 0;
gdjs.GameCode.GDStartMarkerObjects5.length = 0;
gdjs.GameCode.GDFallDeathObjects1.length = 0;
gdjs.GameCode.GDFallDeathObjects2.length = 0;
gdjs.GameCode.GDFallDeathObjects3.length = 0;
gdjs.GameCode.GDFallDeathObjects4.length = 0;
gdjs.GameCode.GDFallDeathObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDGroundElevatedObjects1.length = 0;
gdjs.GameCode.GDGroundElevatedObjects2.length = 0;
gdjs.GameCode.GDGroundElevatedObjects3.length = 0;
gdjs.GameCode.GDGroundElevatedObjects4.length = 0;
gdjs.GameCode.GDGroundElevatedObjects5.length = 0;
gdjs.GameCode.GDBombObjects1.length = 0;
gdjs.GameCode.GDBombObjects2.length = 0;
gdjs.GameCode.GDBombObjects3.length = 0;
gdjs.GameCode.GDBombObjects4.length = 0;
gdjs.GameCode.GDBombObjects5.length = 0;
gdjs.GameCode.GDBulletsObjects1.length = 0;
gdjs.GameCode.GDBulletsObjects2.length = 0;
gdjs.GameCode.GDBulletsObjects3.length = 0;
gdjs.GameCode.GDBulletsObjects4.length = 0;
gdjs.GameCode.GDBulletsObjects5.length = 0;
gdjs.GameCode.GDScoreLabelObjects1.length = 0;
gdjs.GameCode.GDScoreLabelObjects2.length = 0;
gdjs.GameCode.GDScoreLabelObjects3.length = 0;
gdjs.GameCode.GDScoreLabelObjects4.length = 0;
gdjs.GameCode.GDScoreLabelObjects5.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects1.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects2.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects3.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects4.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameCode.GDCoinExplosionObjects5.length = 0;
gdjs.GameCode.GDBombExplosionObjects1.length = 0;
gdjs.GameCode.GDBombExplosionObjects2.length = 0;
gdjs.GameCode.GDBombExplosionObjects3.length = 0;
gdjs.GameCode.GDBombExplosionObjects4.length = 0;
gdjs.GameCode.GDBombExplosionObjects5.length = 0;

gdjs.GameCode.eventsList15(runtimeScene);
gdjs.GameCode.GDSoldierObjects1.length = 0;
gdjs.GameCode.GDSoldierObjects2.length = 0;
gdjs.GameCode.GDSoldierObjects3.length = 0;
gdjs.GameCode.GDSoldierObjects4.length = 0;
gdjs.GameCode.GDSoldierObjects5.length = 0;
gdjs.GameCode.GDStartMarkerObjects1.length = 0;
gdjs.GameCode.GDStartMarkerObjects2.length = 0;
gdjs.GameCode.GDStartMarkerObjects3.length = 0;
gdjs.GameCode.GDStartMarkerObjects4.length = 0;
gdjs.GameCode.GDStartMarkerObjects5.length = 0;
gdjs.GameCode.GDFallDeathObjects1.length = 0;
gdjs.GameCode.GDFallDeathObjects2.length = 0;
gdjs.GameCode.GDFallDeathObjects3.length = 0;
gdjs.GameCode.GDFallDeathObjects4.length = 0;
gdjs.GameCode.GDFallDeathObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDGroundElevatedObjects1.length = 0;
gdjs.GameCode.GDGroundElevatedObjects2.length = 0;
gdjs.GameCode.GDGroundElevatedObjects3.length = 0;
gdjs.GameCode.GDGroundElevatedObjects4.length = 0;
gdjs.GameCode.GDGroundElevatedObjects5.length = 0;
gdjs.GameCode.GDBombObjects1.length = 0;
gdjs.GameCode.GDBombObjects2.length = 0;
gdjs.GameCode.GDBombObjects3.length = 0;
gdjs.GameCode.GDBombObjects4.length = 0;
gdjs.GameCode.GDBombObjects5.length = 0;
gdjs.GameCode.GDBulletsObjects1.length = 0;
gdjs.GameCode.GDBulletsObjects2.length = 0;
gdjs.GameCode.GDBulletsObjects3.length = 0;
gdjs.GameCode.GDBulletsObjects4.length = 0;
gdjs.GameCode.GDBulletsObjects5.length = 0;
gdjs.GameCode.GDScoreLabelObjects1.length = 0;
gdjs.GameCode.GDScoreLabelObjects2.length = 0;
gdjs.GameCode.GDScoreLabelObjects3.length = 0;
gdjs.GameCode.GDScoreLabelObjects4.length = 0;
gdjs.GameCode.GDScoreLabelObjects5.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects1.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects2.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects3.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects4.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameCode.GDCoinExplosionObjects5.length = 0;
gdjs.GameCode.GDBombExplosionObjects1.length = 0;
gdjs.GameCode.GDBombExplosionObjects2.length = 0;
gdjs.GameCode.GDBombExplosionObjects3.length = 0;
gdjs.GameCode.GDBombExplosionObjects4.length = 0;
gdjs.GameCode.GDBombExplosionObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
