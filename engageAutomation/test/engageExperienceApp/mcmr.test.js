'use strict';
var mcmrPage = require('../../pages/engageExperienceApp/mcmr.itemplayer.page.js');
var sts;

module.exports = {

	//Validate the MCMR question launch in default unattempted state
	ENG_ITEM_MCMR_TC_1: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], "", "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate that the user responses are retained in MCMR after clicking try again
	ENG_ITEM_MCMR_TC_2: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][2], testdata[i][2], "MCMR data for index " + i + " is - " + sts[i]);
				assertion.assertEqual(sts[i][3], "", "MCMR Feedback icon for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate that the user can select multiple options while performing MCMR question
	ENG_ITEM_MCMR_TC_3: function (testdata) {
		sts = mcmrPage.clickOptions(testdata)
		assertion.assertEqual(sts, true, sts);
	},

	//Validate MCMR question functionality for Correct scenario
	ENG_ITEM_MCMR_TC_5: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Incorrect scenario
	ENG_ITEM_MCMR_TC_6: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with no incorrect option selected)
	ENG_ITEM_MCMR_TC_7: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with  incorrect option selected)
	ENG_ITEM_MCMR_TC_8: function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	}

}