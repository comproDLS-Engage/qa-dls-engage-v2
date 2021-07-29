'use strict';
var mcqbPage = require('../../pages/engageExperienceApp/mcqBlock.itemplayer.page.js');
var sts;

module.exports = {

	//Validate UI Of Block MCQ Question In Unattempted State
	ENG_ITEM_MCQB_TC_1: function (testdata) {
		sts = mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], "", "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate Block MCQ Question Functionality For Correct Scenario
	ENG_ITEM_MCQB_TC_5: function (testdata) {
		sts = mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate Block MCQ Question Functionality For Incorrect Scenario
	ENG_ITEM_MCQB_TC_6: function (testdata) {
		sts = mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate Block MCQ Question Functionality With Try Again
	ENG_ITEM_MCQB_TC_7: function (testdata) {
		sts = mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][2], testdata[i][2], "MCQB data for index " + i + " is - " + sts[i]);
				assertion.assertEqual(sts[i][3], "", "MCQB Feedback icon for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate Block MCQ question selected option
	ENG_ITEM_MCQB_TC_8: function (testdata) {
		sts = mcqbPage.clickOption(testdata)
		assertion.assertEqual(sts, true, "MCQB Choice is - " + sts);
	}

}