'use strict';

var dragAndDrop = require('../../pages/engageExperienceApp/DNDonImage.itemPlayer.page.js');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page.js');
var sts, sts1;
module.exports = {

    //Validate Drag & Drop Question for Correct scenario
    ENG_ITEM_DND_TC_1: function (testdata) {
        sts = dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    //Validate Drag & Drop Question for partial correct scenario
    ENG_ITEM_DND_TC_2: function (testdata) {
        sts = dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    //Validate Drag & Drop Question for incorrect scenario
    ENG_ITEM_DND_TC_3: function (testdata) {
        sts = dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    //Validate Drag & Drop Functionality using Click option
    ENG_ITEM_DND_TC_7: function (testdata) {
        sts = dragAndDrop.dragAndDropClick(testdata);
        assertion.assertEqual(sts, true);
        sts1 = dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate Drag & Drop Question Functionality using drag drop option
    ENG_ITEM_DND_TC_17: function (testdata) {
        sts = dragAndDrop.dragAndDrop(testdata);
        assertion.assertEqual(sts, true, sts);
        sts1 = dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate that the user responses are retained in DND after clicking try again
    ENG_ITEM_DND_TC_19: function (testdata) {
        // akhil - sneed to add action for clicking try again and get the dndData before tryagain and then match it after clicking try again
        sts = dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate Drag and Drop question is launched
    ENG_ITEM_DND_TC_20: function (testdata) {
        sts = dragAndDrop.isInitialized(testdata.answerKey);
        assertion.assertEqual(sts.sourceData.length, testdata.maxOptions, "Draggable option count mismatch");
        for (var i = 0; i < sts.sourceData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], "", "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
        // sts = itemPlayerPage.getItemplayerInfo();
        // assertion.assertEqual(sts.mediaType, testdata.mediaType, "Media type mismatch");
        // assertion.assertEqual(sts.quesText, testdata.text, "Question text mismatch");
        // assertion.assertEqual(sts.instructionText, testdata.instruction, "Instruction text mismatch");
    },

    //Validate That "Tap To Zoom" Option Is Available In The Mobile Mode In The DND Question - (Portrait, Landscape)
    ENG_ITEM_DND_TC_21: function (testdata) {
        sts = dragAndDrop.isInitialized(testdata);
        assertion.assertEqual(sts.tapToZoom_exists, true, "Tap to Zoom option is available");
    },

    //Validate That Image Opens In Zoom Mode On Clicking "Tap To Zoom" - (Portrait, Landscape)
    ENG_ITEM_DND_TC_22: function () {
        sts = dragAndDrop.clickTaptoZoom();
        assertion.assertEqual(sts, true, "Zoom dialog is opened");
    },

    //Validate That The Close Button On The Top Closes The Dialogue Box - (Portrait, Landscape)
    ENG_ITEM_DND_TC_23: function () {
        sts = dragAndDrop.closeZoom();
        assertion.assertEqual(sts, true, "Zoom dialog is closed");
    },

    // Validate That An Option Can Be Selected In The Dropdown - (Portrait, Landscape)
    ENG_ITEM_DND_TC_25: function (testdata) {
        sts = dragAndDrop.dragAndDropZoomDropDown(testdata);
        assertion.assertEqual(sts, null);
        sts = dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
        }
    }


}