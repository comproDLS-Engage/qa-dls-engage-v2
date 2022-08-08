'use strict';
var multimcq = require('../../pages/engageExperienceApp/multimcq.itemplayer.page.js');
var sts;

module.exports = {

	//Validate the Multi MCSR question launch in default unattempted state
	ENG_ITEM_MMCQ_TC_1: async function (testdata) {
		sts = await multimcq.isInitialized();
		await assertion.assertEqual(sts, true, "Multi MCSR question not loaded");
		sts = await multimcq.getData_subques(testdata[0]);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][1], testdata[0][i][1], "Subques text for index " + i);
				await assertion.assertEqual(sts[i][2], testdata[0][i][2], "Subques media for index " + i);
			}
		}
		else await assertion.assertFail(sts);
		sts = await multimcq.getData_options(testdata[1]);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][2], null, "Option selection mismatch for index " + i);
				await assertion.assertEqual(sts[i][3], null, "Option status mismatch for index " + i);
				await assertion.assertEqual(sts[i][4], testdata[1][i][4], "Option media mismatch for index " + i);
			}
		}
		else await assertion.assertFail(sts);
	},

	//Validate that the user can select an option in multiple sub-questions while performing the question
	ENG_ITEM_MMCQ_TC_2: async function (testdata) {
		sts = await multimcq.clickOption(testdata)
		await assertion.assertEqual(sts, true, sts);
	},

	//Validate Multi MCSR question after submission
	ENG_ITEM_MMCQ_TC_3: async function (testdata) {
		sts = await multimcq.getData_options(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][2], testdata[i][2], "Option selection mismatch for index " + i);
				await assertion.assertEqual(sts[i][3], testdata[i][3], "Option mismatch for index " + i);
				//await assertion.assertEqual(sts[i][4], testdata[1][i][4], "Option media mismatch for index " + i);
			}
		}
		else await assertion.assertFail(sts);
	},

	/*//Validate MCMR question functionality for Incorrect scenario
	ENG_ITEM_MMCQ_TC_6: async function (testdata) {
		sts = multimcq.getData_multiMcq(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with no incorrect option selected)
	ENG_ITEM_MMCQ_TC_7: async function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate MCMR question functionality for Partial correct scenario (with  incorrect option selected)
	ENG_ITEM_MMCQ_TC_8: async function (testdata) {
		sts = mcmrPage.isInitialized(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				assertion.assertEqual(sts[i][3], testdata[i][3], "MCMR 'value'' for index " + i + " is - " + sts[i]);
			}
		}
		else assertion.assertFail(sts);
	}*/

}