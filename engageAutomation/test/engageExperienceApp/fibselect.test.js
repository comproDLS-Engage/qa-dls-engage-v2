'use strict';
var fibSelect = require('../../pages/engageExperienceApp/fibselect.itemPlayer.page.js');
var sts;

module.exports = {

    //Validate the FIB Select question in the unattempted state
    ENG_ITEM_FIBSEL_TC_1: async function () {
        sts = await fibSelect.isInitialized();
        await assertion.assertEqual(sts, true, "FIB Select question not loaded");
    },

    //Validate that user is able to select the desired option on clicking on any of the options of the dropdown
    ENG_ITEM_FIBSEL_TC_2: async function (testdata) {
        sts = await fibSelect.selectValue(testdata);
        await assertion.assertEqual(sts, true);
    },

    //Validate FIB Select Question for correct scenario
    ENG_ITEM_FIBSEL_TC_3: async function (testdata) {
        sts = await fibSelect.getTargetData(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][1], testdata[i][2], "FIB select value mismatch for " + sts[i]);
                await assertion.assertEqual(sts[i][2], testdata[i][3], "FIB select status mismatch for " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
    },



    //Validate FIB Text Question for correct scenario
    ENG_ITEM_FIBTEXT_TC_5: async function (testdata) {
        sts = await FIBText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.targetData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate FIB Text Question for partial scenario
    ENG_ITEM_FIBTEXT_TC_6: async function (testdata) {
        sts = await FIBText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.targetData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate FIB Text Question for complete incorrect scenario
    ENG_ITEM_FIBTEXT_TC_7: async function (testdata) {
        sts = await FIBText.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.targetData.length; i++) {
                await assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
                await assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
            }
        }
        else await assertion.assertFail(sts);
    }
}