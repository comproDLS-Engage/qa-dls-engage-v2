'use strict';

var FIBDragandDrop = require('../../pages/engageExperienceApp/FIB.ItemPlayer.page.js');
var sts, sts1;
module.exports = {

    ENG_ITEM_FIB_TC_3: function (testdata) {
        //Validate FIB Drag & Drop Question Functionality Using Drag and Drop Option
        sts = FIBDragandDrop.dragAndDrop(testdata);
        assertion.assertEqual(sts, true, sts);
        sts1 = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },
    
    ENG_ITEM_FIB_TC_7: function (testdata) {
        //Validate FIBDrag & Drop Question Functionality for correct scenario
        sts = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
        }
    },

    ENG_ITEM_FIB_TC_8: function (testdata) {
        //Validate FIB Drag & Drop Question for partial correct scenario
        sts = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
        }

    },

    ENG_ITEM_FIB_TC_9: function (testdata) {
        //Validate FIB Drag & Drop Question for  incorrect scenario
        sts = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
        }

    },

    ENG_ITEM_FIB_TC_13: function (testdata) {
        //Validate FIB Drag & Drop Question Functionality Using Click Option
        sts = FIBDragandDrop.dragAndDropClick(testdata);
        assertion.assertEqual(sts, true);
        sts1 = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    ENG_ITEM_FIB_TC_19: function (testdata) {
        sts = FIBDragandDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);

        }
    },
    //Validate FIB Drag and Drop question is launched
    ENG_ITEM_FIB_TC_20: function (testdata) {
        sts = FIBDragandDrop.isInitialized(testdata.answerKey);
        assertion.assertEqual(sts.sourceData.length, testdata.maxOptions, "Draggable option count mismatch");
        for (var i = 0; i < sts.sourceData.length; i++) {
            console.log(i+ "    sts.targetData[i][1]    " + sts.targetData[i][1]);
            console.log(i+ "    sts.targetData[i][1]    " + sts.targetData[i][2]);
            assertion.assertEqual(sts.targetData[i][1], "", "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    }
}