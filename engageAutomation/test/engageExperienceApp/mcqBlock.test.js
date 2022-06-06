'use strict';
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page.js');
var mcqbPage = require('../../pages/engageExperienceApp/mcqBlock.itemplayer.page.js');
var sts;

module.exports = {

	//Validate UI Of Block MCQ Question In Unattempted State
	ENG_ITEM_MCQB_TC_1: async function (testdata) {
		sts = await mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], "", "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
		//sts = itemPlayerPage.getItemplayerInfo();
		//assertion.assertEqual(sts.mediaType, testdata[1].mediaType, "Media type mismatch");
		//assertion.assertEqual(sts.quesText, testdata[1].text, "Question text mismatch");
		//assertion.assertEqual(sts.instructionText, testdata[1].instruction, "Instruction text mismatch");
	},

	//Validate Block MCQ Question Functionality For Correct Scenario
	ENG_ITEM_MCQB_TC_5: async function (testdata) {
		sts = await mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate Block MCQ Question Functionality For Incorrect Scenario
	ENG_ITEM_MCQB_TC_6: async function (testdata) {
		sts = await mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCQB data for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate Block MCQ Question Functionality With Try Again
	ENG_ITEM_MCQB_TC_7: async function (testdata) {
		sts = await mcqbPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][2], testdata[i][2], "MCQB data for index " + i + " is - " + sts[i]);
				await assertion.assertEqual(sts[i][3], "", "MCQB Feedback icon for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate Block MCQ question selected option
	ENG_ITEM_MCQB_TC_8: async function (testdata) {
		sts = await mcqbPage.clickOption(testdata)
		await assertion.assertEqual(sts, true, "MCQB Choice is - " + sts);
	}

}