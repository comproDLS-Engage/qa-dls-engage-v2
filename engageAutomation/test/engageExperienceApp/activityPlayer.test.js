"use strict";
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');
var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
var sts;

module.exports = {

	//Validate the activity player when quiz is launched
	ENG_PLAY_TC_1: function () {
		sts = itemPlayer.isInitialized();
		assertion.assertEqual(sts.isSubmitted, false, "submit status mismatch");
		sts = itemPlayer.getQuesIndex();
		assertion.assertEqual((sts), "0", "Active question index mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		assertion.assertEqual(sts.checkmyWork_isExists, true, "check answer button status mismatch");
		assertion.assertEqual(sts.checkmyWork_isDisabled, "true", "button state mismatch");
		assertion.assertEqual(sts.previous_isExists, false, "previous button status mismatch");
	},

	//Validate The Test Player When User Click "Next Question" Button
	ENG_PLAY_TC_2: function (testdata) {
		sts = activityPlayerPage.clickNextQuestion();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		assertion.assertEqual(sts.previous_isExists, true, "previous button status mismatch");
		assertion.assertEqual(sts.previous_isDisabled, null, "previous button state mismatch");
		sts = parseInt(itemPlayer.getQuesIndex()) + 1;
		assertion.assertEqual(sts, testdata.number, "question index mismatch");
	},

	//Validate the test player when user perform "Check My Work"
	ENG_PLAY_TC_3: function (testdata) {
		sts = activityPlayerPage.clickCheckAnswer();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getFeedbackInfo();
		assertion.assertEqual(sts.fdbackText, testdata, "text mismatch");
	},

	//Validate the test player when user click Previous button in the second question.
	/*ENG_PLAY_TC_4: function () {
		sts = activityPlayerPage.clickPreviousQuestion();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		//assertions to be added
	},*/

	//Validate the test player when user click Show Answer button.
	ENG_PLAY_TC_5: function () {
		sts = itemPlayer.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = activityPlayerPage.clickShowAnswer();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		sts = itemPlayer.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount + incorrectCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, 0, "Incorrect count mismatch");
	},

	//Validate the test player when user click Your Response.
	ENG_PLAY_TC_6: function () {
		sts = itemPlayer.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = activityPlayerPage.clickShowAnswer();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		sts = activityPlayerPage.clickYourResponse();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = itemPlayer.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, incorrectCount, "Incorrect count mismatch");
	},

	//Click Restart button in left pane
	ENG_PLAY_TC_7: function () {
		sts = activityPlayerPage.clickRestartButton();
		assertion.assertEqual(sts.checkmyWork_isExists, true, "check answer button status mismatch");
		assertion.assertEqual(sts.checkmyWork_isDisabled, "true", "button state mismatch");
	},

	//Validate the activity player when quiz is launched for the student
	ENG_PLAY_TC_8: function (testdata) {
		sts = itemPlayer.isInitialized();
		assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = itemPlayer.getQuesIndex();
		assertion.assertEqual((sts), "0", "Active question index mismatch");
		sts = activityPlayerPage.getActivityPlayerData();
		assertion.assertEqual(sts.checkmyWork_isExists, true, "check answer button status mismatch");
		assertion.assertEqual(sts.checkmyWork_isDisabled, "true", "button state mismatch");
		assertion.assertEqual(sts.previous_isExists, false, "previous button status mismatch");
		// sts = activityPlayerPage.getFeedbackInfo();
		// assertion.assertEqual(sts.fdbackText, testdata, "text mismatch");
	},

	//Validate the activity player when user click on Submit Answers button
	ENG_PLAY_TC_9: function () {
		sts = activityPlayerPage.clickSubmitActivity();
		assertion.assertEqual(sts.submitActivity_isDisabled, "true", "status mismatch");
	},

}