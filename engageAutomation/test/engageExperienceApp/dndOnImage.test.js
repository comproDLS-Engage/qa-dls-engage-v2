'use strict';
var dragAndDrop = require('../../pages/engageExperienceApp/dndOnImage.itemPlayer.page.js');
var sts, sts1;
module.exports = {
    
    //Validate the drag and drop onto image question in unattempted state
    ENG_ITEM_DNDI_TC_1: async function (testdata) {
        sts = await dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            await assertion.assertEqual(sts.targetData[i][1], null, "Target text mismatch for " + sts.targetData[i]);
            await assertion.assertEqual(sts.targetData[i][2], null, "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate that user can drag and drop the pills from source to target location using drag drop functionality
    ENG_ITEM_DNDI_TC_2: async function (testdata) {
        sts = await dragAndDrop.dragAndDrop(testdata);
        await assertion.assertEqual(sts, true, sts);
        sts1 = await dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            await assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate that user can move the pills from source to target location using click functionality
    ENG_ITEM_DNDI_TC_3: async function (testdata) {
        sts = await dragAndDrop.dragAndDropClick(testdata);
        await assertion.assertEqual(sts, true);
        sts1 = await dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            await assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    //Validate the drag and drop onto image question in attempted state after submission
    ENG_ITEM_DNDI_TC_4: async function (testdata) {
        sts = await dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate Drag & Drop Question for partial correct scenario
    /*ENG_ITEM_DND_TC_2: async function (testdata) {
        sts = await dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },*/

    //Validate Drag & Drop Question for incorrect scenario
    /*ENG_ITEM_DND_TC_3: async function (testdata) {
        sts = await dragAndDrop.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },*/

    //Validate that the user responses are retained in DND after clicking try again
    /*ENG_ITEM_DND_TC_19: async function (testdata) {
        // akhil - sneed to add action for clicking try again and get the dndData before tryagain and then match it after clicking try again
        sts = await dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts.sourceData.length; i++) {
            await assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            await assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    },*/

    //Validate That "Tap To Zoom" Option Is Available In The Mobile Mode In The DND Question - (Portrait, Landscape)
    /*ENG_ITEM_DND_TC_21: async function (testdata) {
        sts = await dragAndDrop.isInitialized(testdata);
        await assertion.assertEqual(sts.tapToZoom_exists, true, "Tap to Zoom option is available");
    },*/

    //Validate That Image Opens In Zoom Mode On Clicking "Tap To Zoom" - (Portrait, Landscape)
    /*ENG_ITEM_DND_TC_22: async function () {
        sts = await dragAndDrop.clickTaptoZoom();
        await assertion.assertEqual(sts, true, "Zoom dialog is opened");
    },*/

    //Validate That The Close Button On The Top Closes The Dialogue Box - (Portrait, Landscape)
    /*ENG_ITEM_DND_TC_23: async function () {
        sts = await dragAndDrop.closeZoom();
        await assertion.assertEqual(sts, true, "Zoom dialog is closed");
    },*/

    // Validate That An Option Can Be Selected In The Dropdown - (Portrait, Landscape)
    /*ENG_ITEM_DND_TC_25: async function (testdata) {
        sts = await dragAndDrop.dragAndDropZoomDropDown(testdata);
        await assertion.assertEqual(sts, null);
        sts = await dragAndDrop.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
        }
    }*/


}