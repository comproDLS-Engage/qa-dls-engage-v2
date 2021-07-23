'use strict';

var classify = require('../../pages/engageExperienceApp/classify.itemPlayer.page.js');
var testplayer = require('../../pages/engageExperienceApp/testPlayer.page.js');
var sts, sts1;
module.exports = {
    //Validate that user is able to place option pill inside the Group using drag and drop
    ENG_ITEM_CLA_TC_2: function (testdata) {
        sts = classify.dragAndDrop(testdata);
        assertion.assertEqual(sts, true, sts);
        sts1 = classify.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData.key1[i][1], testdata.key1[i][3], "Target text mismatch for " + sts1.targetData.key1[i][1]);
            if (testdata.key1[i][1] == "")
                assertion.assertEqual(sts1.sourceData[i][1], testdata.key1[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                assertion.assertEqual(sts1.sourceData[i][1], testdata.key1[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate the Classify Player for correct scenario
    ENG_ITEM_CLA_TC_4: function (testdata) {
        sts = classify.isInitialized(testdata[0], testdata[1]);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData.key1[i][1]);
            assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData.key1[i][1]);
        }
        for (var i = 0; i < sts.targetData.key2.length; i++) {
            assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData.key2[i][1]);
            assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData.key2[i][1]);
        }
    },

    //Validate the Classify Player for incorrect scenario
    ENG_ITEM_CLA_TC_6: function (testdata) {
        sts = classify.isInitialized(testdata[0], testdata[1]);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData[i]);
        }
        for (var i = 0; i < sts.targetData.key2.length; i++) {
            assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate the Classify Player for partial scenario
    ENG_ITEM_CLA_TC_5: function (testdata) {
        sts = classify.isInitialized(testdata[0], testdata[1]);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData.key1[i][1], testdata[0].key1[i][3], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData.key1[i][2], testdata[0].key1[i][4], "Status mismatch for " + sts.targetData[i]);
        }
        for (var i = 0; i < sts.targetData.key2.length; i++) {
            assertion.assertEqual(sts.targetData.key2[i][1], testdata[0].key2[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData.key2[i][2], testdata[0].key2[i][2], "Status mismatch for " + sts.targetData[i]);
        }
    },
    //Validate the classify player behaviour when try again button is clicked.
    ENG_ITEM_CLA_TC_20: function (testdata) {
        sts = classify.isInitialized(testdata);
        sts1 = testplayer.click_TryAgain();
        if ((typeof (sts1)) === "object") {
            sts1 = classify.isInitialized(testdata);
            for (var i = 0; i < sts1.sourceData.length; i++) {
                assertion.assertEqual(sts1.targetData.key1[i][1], sts.targetData.key1[i][1], "Target text mismatch for " + sts1.targetData.key1[i][1]);
            }
        }
        else assertion.assertFail(sts);
    }
}