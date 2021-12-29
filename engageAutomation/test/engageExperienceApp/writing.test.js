'use strict';
var writingPlayer = require('../../pages/engageExperienceApp/writing.itemplayer.page');
var sts;

module.exports = {

	//Validate the writing question launch in default unattempted state
	ENG_ITEM_WRIT_TC_1: function () {
		sts = writingPlayer.isInitialized();
		assertion.assertEqual(sts, true, "Writing question not loaded");
	},

	//Validate the writing question launch in submitted state
	ENG_ITEM_WRIT_TC_2: function () {
		sts = writingPlayer.getData_writing();
		// assertion for disabled state of the textarea - akhil
	},

	//Validate that the user can add the text in the textboxes of the writing question
	ENG_ITEM_WRIT_TC_3: function (testdata) {
		sts = writingPlayer.set_textboxValue(testdata)
		assertion.assertEqual(sts, true, sts);
	},

	
}