"use strict";
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page');
var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
var sts;

module.exports = {

	//Validate the activity player when quiz is launched
	ENG_PLAY_TC_1: function () {
		sts = itemPlayer.isInitialized();
		assertion.assertEqual(sts.isSubmitted, false, "submit status mismatch");
		sts = itemPlayer.getQuesIndex();
		assertion.assertEqual((sts), "0", "Active question index mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		/*Rupsi
		assertion.assertEqual(sts.checkmyWork_isExists, true, "check answer button status mismatch");
		assertion.assertEqual(sts.checkmyWork_isDisabled, "true", "button state mismatch");
		assertion.assertEqual(sts.previous_isExists, false, "previous button status mismatch");*/
	},

	
	//Validate The Test Player When User Click "Next Question" Button
	ENG_PLAY_TC_2: function (testdata) {
		sts = activityPlayerPage.click_nextPageBtn();
		//assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		/*Rupsi
		assertion.assertEqual(sts.previous_isExists, true, "previous button status mismatch");
		assertion.assertEqual(sts.previous_isDisabled, null, "previous button state mismatch");*/
		sts = parseInt(itemPlayer.getQuesIndex()) + 1;
		assertion.assertEqual(sts, testdata.number, "question index mismatch");
	},

	//Validate the test player when user perform "Check My Work"
	ENG_PLAY_TC_3: function (testdata) {
		sts = activityPlayerPage.click_checkAnswerBtn();
		assertion.assertEqual(sts, false, "status mismatch");
	//	sts = activityPlayerPage.getFeedbackInfo();
		//assertion.assertEqual(sts.fdbackText, testdata, "text mismatch");
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
		sts = activityPlayerPage.click_showAnswerBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		sts = itemPlayer.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount + incorrectCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, 0, "Incorrect count mismatch");
	},

	//Validate the test player when user click Your Response.
	ENG_PLAY_TC_6: function () {
		sts = itemPlayer.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = activityPlayerPage.click_showAnswerBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		sts = activityPlayerPage.click_showResponseBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = itemPlayer.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, incorrectCount, "Incorrect count mismatch");
	},

	//Click Restart button in left pane
	ENG_PLAY_TC_7: function () {
		sts = activityPlayerPage.click_retakeActivityBtn();
		sts = itemPlayerPage.isInitialized();
		assertion.assertEqual(sts.isSubmitted, false, "submit status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.retakeActivityBtn, null, "Retake activity button text mismatch");
	},

	//Validate the activity player when quiz is launched for the student
	ENG_PLAY_TC_8: function (testdata) {
		sts = itemPlayer.isInitialized();
		assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = itemPlayer.getQuesIndex();
		assertion.assertEqual((sts), "0", "Active question index mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		/*rupsi
		assertion.assertEqual(sts.checkmyWork_isExists, true, "check answer button status mismatch");
		assertion.assertEqual(sts.checkmyWork_isDisabled, "true", "button state mismatch");
		assertion.assertEqual(sts.previous_isExists, false, "previous button status mismatch");*/
		// sts = activityPlayerPage.getFeedbackInfo();
		// assertion.assertEqual(sts.fdbackText, testdata, "text mismatch");
	},

	//Validate the activity player when user click on Submit Answers button
	ENG_PLAY_TC_9: function () {
		sts = activityPlayerPage.click_submitActivityBtn();
	//	assertion.assertEqual(sts.submitActivity_isDisabled, "true", "status mismatch");
	},

	//Validate the activity player when Last question of quiz is launched
	ENG_PLAY_TC_10: function (testdata) {
		sts = itemPlayer.isInitialized();
		assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.checkAnswerBtn, testdata[0].checkAnswer_txt, "submit status mismatch");
		//assertion.assertEqual(sts.submitActivity_txt, testdata[1], "submit status mismatch");
	},
	
	// Click show details button in activity Player
	ENG_PLAY_TC_11: function (testdata) {
		sts = activityPlayerPage.click_showDetailsBtn();
		assertion.assertEqual(sts, 'false', "restart button status mismatch");
	},

}