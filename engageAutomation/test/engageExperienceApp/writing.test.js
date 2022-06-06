'use strict';
var writingPlayer = require('../../pages/engageExperienceApp/writing.itemplayer.page');
var sts;

module.exports = {

	//Validate the writing question launch in default unattempted state
	ENG_ITEM_WRIT_TC_1: async function () {
		sts = await writingPlayer.isInitialized();
		await assertion.assertEqual(sts, true, "Writing question not loaded");
	},

	//Validate the writing question launch in submitted state
	ENG_ITEM_WRIT_TC_2: async function (testdata) {
		sts = await writingPlayer.getData_writing(testdata);
		console.log(sts)
		if (sts.length > 0) {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][2], true, "Textbox state mismatch for " + sts[i][0]);
            }
        }
        else await assertion.assertFail(sts);
	},

	//Validate that the user can add the text in the textboxes of the writing question
	ENG_ITEM_WRIT_TC_3: async function (testdata) {
		sts = await writingPlayer.set_textboxValue(testdata)
		await assertion.assertEqual(sts, true, sts);
	},

	
}