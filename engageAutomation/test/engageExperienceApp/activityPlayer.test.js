"use strict";
const activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page');
var sts;

module.exports = {

	//Validate the unattempted state of a close ended activity for a student
	ENG_PLAY_TC_1: async function (testdata) {
		sts = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts.quesType, testdata[0].quesType, "quesType mismatch");
		await assertion.assertEqual(sts.quesTitle, testdata[0].quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts.instructionText, testdata[0].instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts.promptText, testdata[0].promptText, "promptText mismatch");
		await assertion.assertEqual(sts.viewLabels.instructionHeading, testdata[0].viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneLabel, testdata[0].viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneOrMoreLabel, testdata[0].viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectFromDropdownLabel, testdata[0].viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingLeftLabel, testdata[0].viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingRightLabel, testdata[0].viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts.mediaType, testdata[0].mediaType, "mediaType mismatch");
		if (sts.mediaType != null)
			await assertion.assertEqual(sts.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts.isSubmitted, false, "isSubmitted mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, testdata[1].infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata[1].showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, testdata[1].checkAnswerBtn, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		if (sts.quesNumber == null) {
			await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
			await assertion.assertEqual(sts.prevActivityBtn, testdata[1].prevActivityBtn[0], "prevActivityBtn status mismatch");
			if (sts.closeBtn == null)
				await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
			else
				await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
		}
		else {
			let q = sts.quesNumber.split(" ");
			if (q[0] == '1') {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, testdata[1].prevActivityBtn[0], "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeBtn != null)
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
			else if (q[0] == q[2]) {
				await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				if (sts.closeBtn == null)
					await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
				else
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
			else {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeBtn != null)
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
		}
	},

	//Validate that clicking on next arrow button navigates to next question in the activity
	ENG_PLAY_TC_2: async function () {
		let sts2 = await activityPlayerPage.getData_activityPlayer();
		sts = await activityPlayerPage.click_nextPageBtn();
		await assertion.assertEqual(parseInt(sts), parseInt(sts2.quesNumber) + 1, "question number mismatch");
	},

	//Validate that user responses are submitted for the question in an Activity on clicking the Check Answer button
	ENG_PLAY_TC_3: async function () {
		sts = await activityPlayerPage.click_checkAnswerBtn();
		await assertion.assertEqual(sts, false, "checkAnswerBtn status mismatch");
	},

	//Validate that clicking on previous arrow button navigates to previous question in the activity
	ENG_PLAY_TC_4: async function () {
		let sts2 = await activityPlayerPage.getData_activityPlayer();
		sts = await activityPlayerPage.click_prevPageBtn();
		await assertion.assertEqual(parseInt(sts), parseInt(sts2.quesNumber) - 1, "question number mismatch");
	},

	//Validate clicking on Show Answer button displays the answer of the question
	ENG_PLAY_TC_5: async function () {
		sts = await itemPlayerPage.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = await activityPlayerPage.click_showAnswerBtn();
		await assertion.assertEqual(sts, true, "showResponseBtn status mismatch");
		sts = await itemPlayerPage.getItemplayerInfo();
		await assertion.assertEqual(sts.correctCount, correctCount + incorrectCount, "Correct count mismatch");
		await assertion.assertEqual(sts.incorrectCount, 0, "Incorrect count mismatch");
	},

	//Validate clicking on User Response button displays the user's answer submitted
	ENG_PLAY_TC_6: async function () {
		sts = await itemPlayerPage.getItemplayerInfo();
		let correctCount = sts.correctCount;
		let incorrectCount = sts.incorrectCount;
		sts = await activityPlayerPage.click_showResponseBtn();
		await assertion.assertEqual(sts, true, "showAnswerBtn status mismatch");
		sts = await itemPlayerPage.getItemplayerInfo();
		await assertion.assertNotEqual(sts.correctCount, correctCount, "Correct count mismatch");
		await assertion.assertNotEqual(sts.incorrectCount, incorrectCount, "Incorrect count mismatch");
	},

	//Validate that activity is restored to unattempted state on clicking the Retake button
	ENG_PLAY_TC_7: async function (testdata) {
		sts = await activityPlayerPage.click_retakeActivityBtn();
		await assertion.assertEqual(sts, true, "retakeActivityBtn status mismatch");
		sts = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts.quesType, testdata.quesType, "quesType mismatch");
		await assertion.assertEqual(sts.quesTitle, testdata.quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts.instructionText, testdata.instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts.promptText, testdata.promptText, "promptText mismatch");
		await assertion.assertEqual(sts.viewLabels.instructionHeading, testdata.viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneLabel, testdata.viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneOrMoreLabel, testdata.viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectFromDropdownLabel, testdata.viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingLeftLabel, testdata.viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingRightLabel, testdata.viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts.mediaType, testdata.mediaType, "mediaType mismatch");
		if (sts.mediaType != null)
			await assertion.assertEqual(sts.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts.isSubmitted, false, "Activity submission status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
	},

	//Validate the attempted/submitted state of a close ended activity
	ENG_PLAY_TC_8: async function (testdata) {
		let sts2 = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts2.quesType, testdata[0].quesType, "quesType mismatch");
		await assertion.assertEqual(sts2.quesTitle, testdata[0].quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts2.instructionText, testdata[0].instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts2.promptText, testdata[0].promptText, "promptText mismatch");
		await assertion.assertEqual(sts2.viewLabels.instructionHeading, testdata[0].viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts2.viewLabels.selectOneLabel, testdata[0].viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts2.viewLabels.selectOneOrMoreLabel, testdata[0].viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts2.viewLabels.selectFromDropdownLabel, testdata[0].viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts2.viewLabels.matchingLeftLabel, testdata[0].viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts2.viewLabels.matchingRightLabel, testdata[0].viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts2.mediaType, testdata[0].mediaType, "mediaType mismatch");
		if (sts2.mediaType != null)
			await assertion.assertEqual(sts2.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts2.isSubmitted, true, "submit status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, testdata[1].infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, testdata[1].checkAnswerBtn, "checkAnswerBtn status mismatch");
		if (sts2.quesType.includes("mcqsr"))
			await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		else
			await assertion.assertEqual(sts.showAnswerBtn, testdata[1].showAnswerBtn, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, testdata[1].retakeActivityBtn, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, testdata[1].yourScoreLabel, "yourScoreLabel status mismatch");
		//assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertNotEqual(sts.feedbackText, null, "feedbackText status mismatch");
		if (sts.quesNumber == null) {
			await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
			await assertion.assertEqual(sts.prevActivityBtn, testdata[1].prevActivityBtn[0], "prevActivityBtn status mismatch");
			if (sts.closeBtn == null)
				await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
			else
				await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
		}
		else {
			let q = sts.quesNumber.split(" ");
			if (q[0] == '1') {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, testdata[1].prevActivityBtn[0], "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeBtn != null)
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
			else if (q[0] == q[2]) {
				await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				if (sts.closeBtn == null)
					await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
				else
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
			else {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeBtn != null)
					await assertion.assertEqual(sts.closeBtn, testdata[1].closeBtn, "closeBtn status mismatch");
			}
		}
	},

	//Validate that user responses are submitted for the Activity on clicking the Submit/Finish button
	ENG_PLAY_TC_9: async function (testdata) {
		sts = await activityPlayerPage.click_submitActivityBtn();
		await assertion.assertEqual(sts, true, "submitActivityBtn status mismatch");
		sts = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts.quesType, testdata.quesType, "quesType mismatch");
		await assertion.assertEqual(sts.quesTitle, testdata.quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts.instructionText, testdata.instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts.promptText, testdata.promptText, "promptText mismatch");
		await assertion.assertEqual(sts.viewLabels.instructionHeading, testdata.viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneLabel, testdata.viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneOrMoreLabel, testdata.viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectFromDropdownLabel, testdata.viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingLeftLabel, testdata.viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingRightLabel, testdata.viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts.mediaType, testdata.mediaType, "mediaType mismatch");
		if (sts.mediaType != null)
			await assertion.assertEqual(sts.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts.isSubmitted, true, "submit status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertNotEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertNotEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertNotEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertNotEqual(sts.feedbackText, null, "feedbackText status mismatch");
	},

	//Validate that Finish or Submit button is not displayed in the last question of a closed ended activity to a teacher
	ENG_PLAY_TC_10: async function () {
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.submitActivityBtn, null, "submitActivityBtn status mismatch");
	},

	//Validate clicking on Show details button expands the details panel
	ENG_PLAY_TC_11: async function () {
		sts = await activityPlayerPage.click_showDetailsBtn();
		await assertion.assertEqual(sts, "false", "Details panel status mismatch");
	},

	//Validate clicking on Hide details button hides the details panel
	ENG_PLAY_TC_12: async function () {
		sts = await activityPlayerPage.click_showDetailsBtn();
		await assertion.assertEqual(sts, "true", "Details panel status mismatch");
	},

	//Validate that clicking on Next Activity button launches the next activity in the component
	ENG_PLAY_TC_13: async function () {
		sts = await activityPlayerPage.click_nextActivityBtn();
		await assertion.assertNotEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
	},

	//Validate that clicking on Previous Activity button launches the previous activity of the component
	ENG_PLAY_TC_14: async function () {
		sts = await activityPlayerPage.click_prevActivityBtn();
		await assertion.assertNotEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
	},

	//Validate clicking on info icon displays the TOC for the unit for which activity has been launched
	ENG_PLAY_TC_15: async function (testdata) {
		sts = await activityPlayerPage.click_infoBtn();
		await assertion.assertEqual(sts.closeInfoBtn, testdata.closeInfoBtn, "closeInfoBtn status mismatch");
		await assertion.assertEqual(sts.infoTocHeading, testdata.infoTocHeading, "infoTocHeading status mismatch");
	},

	//Validate clicking on cross icon closes the info TOC
	ENG_PLAY_TC_16: async function () {
		sts = await activityPlayerPage.click_closeInfoBtn();
		await assertion.assertEqual(sts, true, "closeInfoBtn status mismatch");
	},

	//Validate that Submit Answers button is displayed for activity where either or both Contributes to Completion and Contributes to Score flag are true
	ENG_PLAY_TC_17: async function (testdata) {
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.submitActivityBtn, testdata.submitActivityBtn[0], "submitActivityBtn mismatch");
	},

	//Validate that Submit Answers button is displayed for activity where both Contributes to Completion and Contributes to Score flag are false
	ENG_PLAY_TC_18: async function (testdata) {
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.submitActivityBtn, testdata.submitActivityBtn[0], "submitActivityBtn mismatch");
	},

	//Validate the unattempted state of an etext activity when contributes to completion flag is true
	ENG_PLAY_TC_19: async function (testdata) {
		sts = await activityPlayerPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Page status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, testdata.infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.markCompleteBtn, null, "markCompleteBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		await assertion.assertEqual(sts.prevActivityBtn, testdata.prevActivityBtn[0], "prevActivityBtn status mismatch");
		if (sts.nextActivityBtn == null)
			await assertion.assertEqual(sts.closeBtn, testdata.closeBtn, "closeBtn status mismatch");
		else {
			await assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn[0], "nextActivityBtn status mismatch");
			await assertion.assertEqual(sts.closeBtn, null, "closeBtn status mismatch");
		}
	},

	//Validate the unattempted state of an etext activity when contributes to completion flag is false
	ENG_PLAY_TC_20: async function (testdata) {
		sts = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts.isSubmitted, false, "Activity submission status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, testdata.infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.markCompleteBtn, null, "markCompleteBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		await assertion.assertEqual(sts.prevActivityBtn, testdata.prevActivityBtn[0], "prevActivityBtn status mismatch");
		if (sts.nextActivityBtn == null)
			await assertion.assertEqual(sts.closeBtn, testdata.closeBtn, "closeBtn status mismatch");
		else {
			await assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn[0], "nextActivityBtn status mismatch");
			await assertion.assertEqual(sts.closeBtn, null, "closeBtn status mismatch");
		}
	},

	//Validate the unattempted state of html webbook
	ENG_PLAY_TC_21: async function (testdata) {
		sts = await activityPlayerPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Page status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, testdata.infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.markCompleteBtn, null, "markCompleteBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		await assertion.assertEqual(sts.prevActivityBtn, testdata.prevActivityBtn[1], "prevActivityBtn status mismatch");
		if (sts.nextActivityBtn == null)
			await assertion.assertEqual(sts.closeBtn, testdata.closeBtn, "closeBtn status mismatch");
		else {
			await assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn[1], "nextActivityBtn status mismatch");
			await assertion.assertEqual(sts.closeBtn, null, "closeBtn status mismatch");
		}
	},

	//Validate that clicking on Mark as Complete button displays Competed On information in the footer
	ENG_PLAY_TC_22: async function () {
		sts = await activityPlayerPage.click_markCompleteBtn();
		await assertion.assertEqual(sts, false, "Completed text status mismatch");
	},

	//Validate clicking on Close Assignment button closes the assignment and previous page is displayed
	ENG_PLAY_TC_23: async function () {
		sts = await activityPlayerPage.click_closeAssignmentBtn();
		await assertion.assertEqual(sts, true, "Close assignment button status mismatch");
	},

	//Validate the unattempted state of a close ended activity when launched from assignment
	ENG_PLAY_TC_24: async function (testdata) {
		sts = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts.quesType, testdata[0].quesType, "quesType mismatch");
		await assertion.assertEqual(sts.quesTitle, testdata[0].quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts.instructionText, testdata[0].instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts.promptText, testdata[0].promptText, "promptText mismatch");
		await assertion.assertEqual(sts.viewLabels.instructionHeading, testdata[0].viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneLabel, testdata[0].viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneOrMoreLabel, testdata[0].viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectFromDropdownLabel, testdata[0].viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingLeftLabel, testdata[0].viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingRightLabel, testdata[0].viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts.mediaType, testdata[0].mediaType, "mediaType mismatch");
		if (sts.mediaType != null)
			await assertion.assertEqual(sts.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts.isSubmitted, false, "Activity submission status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, null, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata[1].showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		if (sts.quesNumber == null) {
			await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
			await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
			if (sts.closeAssignmentBtn == null)
				await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
			else
				await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
		}
		else {
			let q = sts.quesNumber.split(" ");
			if (q[0] == '1') {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeAssignmentBtn != null)
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
			else if (q[0] == q[2]) {
				await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				if (sts.closeAssignmentBtn == null)
					await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
				else
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
			else {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeAssignmentBtn != null)
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
		}
	},

	//Validate the attempted state of a close ended activity when launched from assignment
	ENG_PLAY_TC_25: async function (testdata) {
		let sts2 = await itemPlayerPage.isInitialized();
		await assertion.assertEqual(sts2.quesType, testdata[0].quesType, "quesType mismatch");
		await assertion.assertEqual(sts2.quesTitle, testdata[0].quesTitle, "quesTitle mismatch");
		await assertion.assertEqual(sts2.instructionText, testdata[0].instructionText, "instructionText mismatch");
		await assertion.assertEqual(sts2.promptText, testdata[0].promptText, "promptText mismatch");
		await assertion.assertEqual(sts.viewLabels.instructionHeading, testdata[0].viewLabels.instructionHeading, "instructionHeading mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneLabel, testdata[0].viewLabels.selectOneLabel, "selectOneLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectOneOrMoreLabel, testdata[0].viewLabels.selectOneOrMoreLabel, "selectOneOrMoreLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.selectFromDropdownLabel, testdata[0].viewLabels.selectFromDropdownLabel, "selectFromDropdownLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingLeftLabel, testdata[0].viewLabels.matchingLeftLabel, "matchingLeftLabel mismatch");
		await assertion.assertEqual(sts.viewLabels.matchingRightLabel, testdata[0].viewLabels.matchingRightLabel, "matchingRightLabel mismatch");
		await assertion.assertEqual(sts2.mediaType, testdata[0].mediaType, "mediaType mismatch");
		if (sts2.mediaType != null)
			await assertion.assertEqual(sts2.mediaLoaded, true, "mediaLoaded mismatch");
		await assertion.assertEqual(sts2.isSubmitted, true, "submit status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, null, "infoBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, testdata[1].retakeActivityBtn, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, testdata[1].yourScoreLabel, "yourScoreLabel status mismatch");
		//assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertNotEqual(sts.feedbackText, null, "feedbackText status mismatch");
		if (sts.quesNumber == null) {
			await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
			await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
			await assertion.assertEqual(sts.prevActivityBtn, testdata[1].prevActivityBtn[0], "prevActivityBtn status mismatch");
			if (sts.closeAssignmentBtn == null)
				await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
			else
				await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
		}
		else {
			let q = sts.quesNumber.split(" ");
			if (q[0] == '1') {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeAssignmentBtn != null)
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
			else if (q[0] == q[2]) {
				await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				if (sts.closeAssignmentBtn == null)
					await assertion.assertEqual(sts.nextActivityBtn, testdata[1].nextActivityBtn[0], "nextActivityBtn status mismatch");
				else
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
			else {
				await assertion.assertEqual(sts.nextPageBtn, "", "nextPageBtn status mismatch");
				await assertion.assertEqual(sts.prevPageBtn, "", "prevPageBtn status mismatch");
				await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
				await assertion.assertEqual(sts.nextActivityBtn, null, "nextActivityBtn status mismatch");
				if (sts.closeAssignmentBtn != null)
					await assertion.assertEqual(sts.closeAssignmentBtn, testdata[1].closeAssignmentBtn, "closeAssignmentBtn status mismatch");
			}
		}
	},

	//Validate the unattempted state of a non scorable activity when launched from assignment
	ENG_PLAY_TC_26: async function (testdata) {
		sts = await activityPlayerPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Page status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, null, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.markCompleteBtn, testdata.markCompleteBtn, "markCompleteBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assertEqual(sts.completedTxt, null, "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		await assertion.assertEqual(sts.prevActivityBtn, null, "prevActivityBtn status mismatch");
		if (sts.nextActivityBtn == null)
			await assertion.assertEqual(sts.closeAssignmentBtn, testdata.closeAssignmentBtn, "closeAssignmentBtn status mismatch");
		else {
			await assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn[0], "nextActivityBtn status mismatch");
			await assertion.assertEqual(sts.closeAssignmentBtn, null, "closeAssignmentBtn status mismatch");
		}
	},

	//Validate the attempted state of a non scorable activity when launched from assignment
	ENG_PLAY_TC_27: async function (testdata) {
		sts = await activityPlayerPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Page status mismatch");
		sts = await activityPlayerPage.getData_activityPlayer();
		await assertion.assertEqual(sts.infoBtn, null, "infoBtn status mismatch");
		await assertion.assertEqual(sts.showDetailsBtn, testdata.showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.markCompleteBtn, null, "markCompleteBtn status mismatch");
		await assertion.assertEqual(sts.checkAnswerBtn, null, "checkAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showAnswerBtn, null, "showAnswerBtn status mismatch");
		await assertion.assertEqual(sts.showResponseBtn, null, "showResponseBtn status mismatch");
		await assertion.assertEqual(sts.retakeActivityBtn, null, "retakeActivityBtn status mismatch");
		await assertion.assert(sts.completedTxt.includes(testdata.completedTxt), "completedTxt status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.prevPageBtn, null, "prevPageBtn status mismatch");
		await assertion.assertEqual(sts.nextPageBtn, null, "nextPageBtn status mismatch");
		await assertion.assertEqual(sts.detailsPanelHidden, "true", "detailsPanel status mismatch");
		await assertion.assertEqual(sts.feedbackText, null, "feedbackText status mismatch");
		await assertion.assert(testdata.prevActivityBtn[0].includes(sts.prevActivityBtn), "prevActivityBtn status mismatch");
		if (sts.nextActivityBtn == null)
			await assertion.assertEqual(sts.closeAssignmentBtn, testdata.closeAssignmentBtn, "closeAssignmentBtn status mismatch");
		else {
			await assertion.assertEqual(sts.nextActivityBtn, testdata.nextActivityBtn[1], "nextActivityBtn status mismatch");
			await assertion.assertEqual(sts.closeAssignmentBtn, null, "closeAssignmentBtn status mismatch");
		}
	},
}