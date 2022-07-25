'use strict';

var DNDinText = require('../../pages/engageExperienceApp/dndInText.itemplayer.page.js');
var sts, sts1;
module.exports = {

    ENG_ITEM_FIB_TC_3: async function (testdata) {
        //Validate FIB Drag & Drop Question Functionality Using Drag and Drop Option
        sts = await DNDinText.dragAndDrop(testdata);
        await assertion.assertEqual(sts, true, sts);
        sts = await DNDinText.isInitialized(testdata);
        //console.log(sts)
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                if (testdata[i][1] == "")
                    await assertion.assertEqual(sts.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts.sourceData[i]);
                else
                    await assertion.assertEqual(sts.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts.sourceData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    ENG_ITEM_FIB_TC_7: async function (testdata) {
        //Validate FIBDrag & Drop Question Functionality for correct scenario
        sts = await DNDinText.isInitialized(testdata);
        //console.log(sts)
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    ENG_ITEM_FIB_TC_8: async function (testdata) {
        //Validate FIB Drag & Drop Question for partial correct scenario
        sts = await DNDinText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);

    },

    ENG_ITEM_FIB_TC_9: async function (testdata) {
        //Validate FIB Drag & Drop Question for  incorrect scenario
        sts = await DNDinText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][4], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    ENG_ITEM_FIB_TC_13: async function (testdata) {
        //Validate FIB Drag & Drop Question Functionality Using Click Option
        sts = await DNDinText.dragAndDropClick(testdata);
        await assertion.assertEqual(sts, true);
        sts1 = await DNDinText.isInitialized(testdata);
        for (var i = 0; i < sts1.sourceData.length; i++) {
            await assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
            if (testdata[i][1] == "")
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][3], "Source text mismatch for " + sts1.sourceData[i]);
            else
                await assertion.assertEqual(sts1.sourceData[i][1], testdata[i][1], "Source text mismatch for " + sts1.sourceData[i]);
        }
    },

    ENG_ITEM_FIB_TC_19: async function (testdata) {
        sts = await DNDinText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts1.targetData[i][1], testdata[i][3], "Target text mismatch for " + sts1.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);

            }
        }
        else await assertion.assertFail(sts);
    },
    //Validate FIB Drag and Drop question is launched
    ENG_ITEM_FIB_TC_20: async function (testdata) {
        sts = await DNDinText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.sourceData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], null, "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], null, "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    }
}