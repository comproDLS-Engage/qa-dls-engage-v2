"use strict";
const activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page');
var sts;

module.exports = {

	//Validate the unattempted state of a close ended activity for a student
	ENG_PLAY_TC_1: function (testdata) {
		sts = itemPlayerPage.isInitialized();
		assertion.assertEqual(sts.isSubmitted, false, "Activity submission status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.infoBtn, testdata.infoBtn, "infoBtn status mismatch");
		assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "Show details button status mismatch");
		assertion.assertEqual(sts.checkAnswerBtn, testdata.checkAnswerBtn, "checkAnswerBtn status mismatch");
		assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		assertion.assertEqual(sts.detailsPanel, false, "detailsPanel status mismatch");
		if (sts.quesNumber == null) {
			assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			assertion.assertEqual(sts.prevActivityBtn, testdata.prevActivityBtn, "prevActivityBtn status mismatch");
			if (sts.closeBtn == null)
				assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn, "nextActivityBtn status mismatch");
			else
				assertion.assertEqual(sts.closeBtn, testdata.closeBtn, "closeBtn status mismatch");
		}
		else {
			assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
		}
	},


	//Validate that clicking on next arrow button navigates to next question in the activity
	ENG_PLAY_TC_2: function () {
		let sts2 = activityPlayerPage.getData_activityPlayer();
		sts = activityPlayerPage.click_nextPageBtn();
		assertion.assertEqual(parseInt(sts), parseInt(sts2.quesNumber) + 1, "question number mismatch");
	},

	//Validate that user responses are submitted for the question in an Activity on clicking the Check Answer button
	ENG_PLAY_TC_3: function () {
		sts = activityPlayerPage.click_checkAnswerBtn();
		assertion.assertEqual(sts, false, "checkAnswerBtn status mismatch");
	},

	//Validate that clicking on previous arrow button navigates to previous question in the activity
	ENG_PLAY_TC_4: function () {
		let sts2 = activityPlayerPage.getData_activityPlayer();
		sts = activityPlayerPage.click_prevPageBtn();
		assertion.assertEqual(sts, parseInt(sts2.quesNumber) - 1, "question number mismatch");
	},

	//Validate clicking on Show Answer button displays the answer of the question
	ENG_PLAY_TC_5: function () {
		sts = itemPlayerPage.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = activityPlayerPage.click_showAnswerBtn();
		assertion.assertEqual(sts, true, "showResponseBtn status mismatch");
		sts = itemPlayerPage.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount + incorrectCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, 0, "Incorrect count mismatch");
	},

	//Validate clicking on User Response button displays the user's answer submitted
	ENG_PLAY_TC_6: function () {
		sts = itemPlayerPage.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = activityPlayerPage.click_showResponseBtn();
		assertion.assertEqual(sts, true, "showAnswerBtn status mismatch");
		sts = itemPlayerPage.getItemplayerInfo();
		assertion.assertEqual(sts.correctCount, correctCount, "Correct count mismatch");
		assertion.assertEqual(sts.incorrectCount, incorrectCount, "Incorrect count mismatch");
	},

	//Validate that activity is restored to unattempted state on clicking the Retake button
	ENG_PLAY_TC_7: function () {
		sts = activityPlayerPage.click_retakeActivityBtn();
		assertion.assertEqual(sts, true, "retakeActivityBtn status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
	},

	//Validate the attempted/submitted state of a close ended activity
	ENG_PLAY_TC_8: function (testdata) {
		sts = itemPlayerPage.isInitialized();
		assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.infoBtn, testdata.infoBtn, "infoBtn status mismatch");
		assertion.assertEqual(sts.checkAnswerBtn, testdata.checkAnswerBtn, "checkAnswerBtn status mismatch");
		assertion.assertEqual(sts.showAnswerBtn, testdata.showAnswerBtn, "showAnswerBtn status mismatch");
		assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		assertion.assertEqual(sts.retakeActivityBtn, testdata.retakeActivityBtn, "retakeActivityBtn status mismatch");
		assertion.assertEqual(sts.yourScoreLabel, testdata.yourScoreLabel, "yourScoreLabel status mismatch");
		//assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		assertion.assertEqual(sts.detailsPanel, false, "detailsPanel status mismatch");
		if (sts.quesNumber == null) {
			assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			assertion.assertEqual(sts.prevActivityBtn, testdata.prevActivityBtn, "prevActivityBtn status mismatch");
			if (sts.closeBtn == null)
				assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn, "nextActivityBtn status mismatch");
			else
				assertion.assertEqual(sts.closeBtn, testdata.closeBtn, "closeBtn status mismatch");
		}
		else {
			assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
		}
	},

	//Validate that user responses are submitted for the Activity on clicking the Submit/Finish button
	ENG_PLAY_TC_9: function () {
		sts = activityPlayerPage.click_submitActivityBtn();
		assertion.assertEqual(sts, true, "submitActivityBtn status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertNotEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		assertion.assertNotEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		assertion.assertNotEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
	},

	/*//Validate the activity player when Last question of quiz is launched
	ENG_PLAY_TC_10: function (testdata) {
		sts = itemPlayerPage.isInitialized();
		assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = activityPlayerPage.getData_activityPlayer();
		assertion.assertEqual(sts.checkAnswerBtn, testdata[0].checkAnswer_txt, "submit status mismatch");
		//assertion.assertEqual(sts.submitActivity_txt, testdata[1], "submit status mismatch");
	},*/

	//Validate clicking on Show details button expands the details panel
	ENG_PLAY_TC_11: function () {
		sts = activityPlayerPage.click_showDetailsBtn();
		assertion.assertEqual(sts, "false", "Details panel status mismatch");
	},

	//Validate clicking on Hide details button hides the details panel
	ENG_PLAY_TC_12: function () {
		sts = activityPlayerPage.click_showDetailsBtn();
		assertion.assertEqual(sts, "true", "Details panel status mismatch");
	},

	//Validate that clicking on Next Activity button launches the next activity in the component
	ENG_PLAY_TC_13: function () {
		sts = activityPlayerPage.click_nextActivityBtn();
		assertion.assertNotEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
	},

	//Validate that clicking on Previous Activity button launches the previous activity of the component
	ENG_PLAY_TC_14: function () {
		sts = activityPlayerPage.click_prevActivityBtn();
		assertion.assertNotEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
	},

	//Validate clicking on info icon displays the TOC for the unit for which activity has been launched
	ENG_PLAY_TC_15: function (testdata) {
		sts = activityPlayerPage.click_infoBtn();
		assertion.assertEqual(sts.closeInfoBtn, testdata.closeInfoBtn, "closeInfoBtn status mismatch");
		assertion.assertEqual(sts.infoTocHeading, testdata.infoTocHeading, "infoTocHeading status mismatch");
	},

	//Validate clicking on cross icon closes the info TOC
	ENG_PLAY_TC_16: function () {
		sts = activityPlayerPage.click_closeInfoBtn();
		assertion.assertEqual(sts, true, "closeInfoBtn status mismatch");
	},

}