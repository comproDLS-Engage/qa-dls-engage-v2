'use strict';
var mcmrPage = require('../../pages/engageExperienceApp/mcmr.itemplayer.page.js');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page.js');
var sts;

module.exports = {

	//Validate the MCMR question launch in default unattempted state
	ENG_ITEM_MCMR_TC_1: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], "", "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
		// sts = itemPlayerPage.getItemplayerInfo();
		// assertion.assertEqual(sts.mediaType, testdata[1].mediaType, "Media type mismatch");
		// assertion.assertEqual(sts.quesText, testdata[1].text, "Question text mismatch");
		// assertion.assertEqual(sts.instructionText, testdata[1].instruction, "Instruction text mismatch");
	},

	//Validate that the user responses are retained in MCMR after clicking try again
	ENG_ITEM_MCMR_TC_2: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][2], testdata[i][2], "MCMR data for index " + i + " is - " + sts[i]);
				await assertion.assertEqual(sts[i][3], "", "MCMR Feedback icon for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate that the user can select multiple options while performing MCMR question
	ENG_ITEM_MCMR_TC_3: async function (testdata) {
		sts = await mcmrPage.clickOptions(testdata)
		await assertion.assertEqual(sts, true, sts);
	},

	//Validate MCMR question functionality for Correct scenario
	ENG_ITEM_MCMR_TC_5: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Incorrect scenario
	ENG_ITEM_MCMR_TC_6: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with no incorrect option selected)
	ENG_ITEM_MCMR_TC_7: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with  incorrect option selected)
	ENG_ITEM_MCMR_TC_8: async function (testdata) {
		sts = await mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else await assertion.assertFail(sts);
	}

}