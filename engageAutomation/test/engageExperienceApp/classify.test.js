'use strict';
var classify = require('../../pages/engageExperienceApp/classify.itemPlayer.page.js');
var testplayer = require('../../pages/engageExperienceApp/basePlayer.page.js');
var sts, sts1;

module.exports = {
    ENG_ITEM_CLA_TC_1: async function (testdata) {
        //Validate the unattempt state of the player
        sts = await classify.isInitialized(testdata[0], testdata[1]);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData.key1[i][1], null, "Target text mismatch for " + sts.targetData.key1[i][1]);
                await assertion.assertEqual(sts.targetData.key1[i][2], null, "Status mismatch for " + sts.targetData.key1[i][1]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate that user is able to place option pill inside the Group using drag and drop
    ENG_ITEM_CLA_TC_2: async function (testdata) {
        sts = await classify.dragAndDrop(testdata);
        await assertion.assertEqual(sts, true, sts);
        sts1 = await classify.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            await assertion.assertEqual(sts1.targetData.key1[i][1], testdata.key1[i][3], "Target text mismatch for " + sts1.targetData.key1[i][1]);
            if (testdata.key1[i][1] == "")
                await assertion.assertEqual(sts1.sourceData[i][1], testdata.key1[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                await assertion.assertEqual(sts1.sourceData[i][1], testdata.key1[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate the Classify Player for correct scenario
    ENG_ITEM_CLA_TC_4: async function (testdata) {
        sts = await classify.isInitialized(testdata[0], testdata[1]);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData.key1[i][1]);
                await assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData.key1[i][1]);
            }
            for (var i = 0; i < sts.targetData.key2.length; i++) {
                await assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData.key2[i][1]);
                await assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData.key2[i][1]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate the Classify Player for incorrect scenario
    /*ENG_ITEM_CLA_TC_6: async function (testdata) {
        sts = await classify.isInitialized(testdata[0], testdata[1]);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData[i]);
            }
            for (var i = 0; i < sts.targetData.key2.length; i++) {
                await assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },*/

    //Validate the Classify Player for partial scenario
    /*ENG_ITEM_CLA_TC_5: async function (testdata) {
        sts = await classify.isInitialized(testdata[0], testdata[1]);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData[i]);
            }
            for (var i = 0; i < sts.targetData.key2.length; i++) {
                await assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },*/
    
    //Validate the classify player behaviour when try again button is clicked.
    /*ENG_ITEM_CLA_TC_20: async function (testdata) {
        sts = await classify.isInitialized(testdata);
        sts1 = await testplayer.click_TryAgain();
        sts1 = await classify.isInitialized(testdata);
        if ((typeof (sts1)) === "object") {
            for (var i = 0; i < sts1.sourceData.length; i++) {
                await assertion.assertEqual(sts1.targetData.key1[i][1], sts.targetData.key1[i][1], "Target text mismatch for " + sts1.targetData.key1[i][1]);
            }
        }
        else await assertion.assertFail(sts);
    }*/
}