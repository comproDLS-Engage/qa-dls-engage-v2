"use strict";
const openActivityPlayerPage = require('../../pages/engageExperienceApp/openActivityPlayer.page');
const writingPlayerPage = require('../../pages/engageExperienceApp/writingPlayer.page');
const activityPlayerTest = require('../../test/engageExperienceApp/activityPlayer.test');
var sts;

module.exports = {

	//Validate the writing question in unattempted state for student
	ENG_OPEN_TC_1: async function (testdata) {
		sts = await writingPlayerPage.isInitialized();
		await assertion.assertEqual(sts, true, "writing player status mismatch");
		sts = await writingPlayerPage.getData_writingPlayer(testdata[0]);
		await assertion.assertEqual(sts[0][2], null, "Activity submission status mismatch");

		sts = await openActivityPlayerPage.getData_openActivityPlayer();
		await assertion.assertEqual(sts.showDetailsBtn, testdata[1].showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.infoBtn, testdata[1].infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.leftPanelHidden, true, "leftPanelHidden status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.feedbackBtn, null, "feedbackBtn status mismatch");
		await assertion.assertEqual(sts.submittedOn, null, "submittedOn status mismatch");
		await assertion.assertEqual(sts.gradedOn, null, "gradedOn status mismatch");
		await assertion.assertEqual(sts.submitActivityBtn, testdata[1].submitActivityBtn, "submitActivityBtn status mismatch");
		await assertion.assertEqual(sts.submitGradeBtn, testdata[1].submitGradeBtn, "submitGradeBtn status mismatch");
		await assertion.assertEqual(sts.retakeOpenActivityBtn, null, "retakeOpenActivityBtn status mismatch");

		if (sts.leftPanelHidden == true)
			await activityPlayerTest.ENG_PLAY_TC_11();
		sts = await openActivityPlayerPage.getData_openActivityLeftPanel();
		await assertion.assertEqual(sts.gradingTitle, null, "gradingTitle status mismatch");
		await assertion.assertEqual(sts.gradingSubtitle, null, "gradingSubtitle status mismatch");
		await assertion.assertEqual(sts.statusPill, null, "statusPill status mismatch");
		await assertion.assert(await sts.bookName.includes(testdata[2]), "bookName status mismatch");
		await assertion.assertEqual(sts.activityName, testdata[3], "activityName status mismatch");
		await assertion.assertEqual(sts.cardTitle, testdata[1].cardTitle, "cardTitle status mismatch");
		await assertion.assertEqual(sts.cardSubtitle, testdata[1].cardSubtitle, "cardSubtitle status mismatch");
		await assertion.assertEqual(sts.cardText, testdata[1].cardText, "cardText status mismatch");
		await assertion.assertEqual(sts.attempt1Label, null, "attempt1Label status mismatch");
		await assertion.assertEqual(sts.attempt2Label, null, "attempt2Label status mismatch");
		await assertion.assertEqual(sts.attempt3Label, null, "attempt3Label status mismatch");
		await assertion.assertEqual(sts.attempt1SubmittedTime, null, "attempt1SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt1GradedTime, null, "attempt1GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt1StatusPill, null, "attempt1StatusPill status mismatch");
		await assertion.assertEqual(sts.attempt2SubmittedTime, null, "attempt2SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt2GradedTime, null, "attempt2GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt2StatusPill, null, "attempt2StatusPill status mismatch");
		await assertion.assertEqual(sts.scoreLabel, null, "scoreLabel status mismatch");
		await assertion.assertEqual(sts.scoreInput, null, "scoreInput status mismatch");
		await assertion.assertEqual(sts.feedbackLabel, null, "feedbackLabel status mismatch");
		await assertion.assertEqual(sts.feedbackInput, null, "feedbackInput status mismatch");
		await assertion.assertEqual(sts.reattemptLabel, null, "reattemptLabel status mismatch");
		await assertion.assertEqual(sts.reattemptYesBtn, null, "reattemptYesBtn status mismatch");
		await assertion.assertEqual(sts.reattemptNoBtn, null, "reattemptNoBtn status mismatch");
		await assertion.assertEqual(sts.scoreError, null, "scoreError status mismatch");
		//await activityPlayerTest.ENG_PLAY_TC_12();
	},

	//Validate the writing question in attempted state (not graded) for student
	ENG_OPEN_TC_2: async function () {
		sts = await writingPlayerPage.isInitialized();
		await assertion.assertEqual(sts, true, "writing player status mismatch");
		sts = await writingPlayerPage.getData_writingPlayer(testdata[0]);
		await assertion.assertEqual(sts[0][2], true, "Activity submission status mismatch");

		sts = await openActivityPlayerPage.getData_openActivityPlayer();
		await assertion.assertEqual(sts.showDetailsBtn, testdata[1].showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.infoBtn, testdata[1].infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.leftPanelHidden, true, "leftPanelHidden status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, null, "yourScoreLabel status mismatch");
		await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.feedbackBtn, null, "feedbackBtn status mismatch");
		await assertion.assertEqual(sts.submittedOn, testdata[1].submittedOn, "submittedOn status mismatch");
		await assertion.assertEqual(sts.gradedOn, null, "gradedOn status mismatch");
		await assertion.assertEqual(sts.submitActivityBtn, null, "submitActivityBtn status mismatch");
		await assertion.assertEqual(sts.submitGradeBtn, testdata[1].submitGradeBtn, "submitGradeBtn status mismatch");
		await assertion.assertEqual(sts.retakeOpenActivityBtn, null, "retakeOpenActivityBtn status mismatch");

		sts = await openActivityPlayerPage.getData_openActivityLeftPanel();
		await assertion.assertEqual(sts.gradingTitle, null, "gradingTitle status mismatch");
		await assertion.assertEqual(sts.gradingSubtitle, null, "gradingSubtitle status mismatch");
		await assertion.assertEqual(sts.statusPill, testdata[1].statusPill[0], "statusPill status mismatch");
		await assertion.assertEqual(sts.bookName, testdata[1].bookName, "bookName status mismatch");
		await assertion.assertEqual(sts.activityName, testdata[1].activityName, "activityName status mismatch");
		await assertion.assertEqual(sts.cardTitle, testdata[1].cardTitle, "cardTitle status mismatch");
		await assertion.assertEqual(sts.cardSubtitle, testdata[1].cardSubtitle, "cardSubtitle status mismatch");
		await assertion.assertEqual(sts.cardText, testdata[1].cardText, "cardText status mismatch");
		await assertion.assertEqual(sts.attempt1Label, null, "attempt1Label status mismatch");
		await assertion.assertEqual(sts.attempt2Label, null, "attempt2Label status mismatch");
		await assertion.assertEqual(sts.attempt3Label, null, "attempt3Label status mismatch");
		await assertion.assertEqual(sts.attempt1SubmittedTime, null, "attempt1SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt1GradedTime, null, "attempt1GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt1StatusPill, null, "attempt1StatusPill status mismatch");
		await assertion.assertEqual(sts.attempt2SubmittedTime, null, "attempt2SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt2GradedTime, null, "attempt2GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt2StatusPill, null, "attempt2StatusPill status mismatch");
		await assertion.assertEqual(sts.scoreLabel, null, "scoreLabel status mismatch");
		await assertion.assertEqual(sts.scoreInput, null, "scoreInput status mismatch");
		await assertion.assertEqual(sts.feedbackLabel, null, "feedbackLabel status mismatch");
		await assertion.assertEqual(sts.feedbackInput, null, "feedbackInput status mismatch");
		await assertion.assertEqual(sts.reattemptLabel, null, "reattemptLabel status mismatch");
		await assertion.assertEqual(sts.reattemptYesBtn, null, "reattemptYesBtn status mismatch");
		await assertion.assertEqual(sts.reattemptNoBtn, null, "reattemptNoBtn status mismatch");
		await assertion.assertEqual(sts.scoreError, null, "scoreError status mismatch");
	},

	//Validate the writing question in graded state for student
	ENG_OPEN_TC_3: async function () {
		sts = await writingPlayerPage.isInitialized();
		await assertion.assertEqual(sts, true, "writing player status mismatch");
		sts = await writingPlayerPage.getData_writingPlayer(testdata[0]);
		await assertion.assertEqual(sts[0][2], true, "Activity submission status mismatch");
		// pending update
		sts = await openActivityPlayerPage.getData_openActivityPlayer();
		await assertion.assertEqual(sts.showDetailsBtn, testdata[1].showDetailsBtn[0], "showDetailsBtn status mismatch");
		await assertion.assertEqual(sts.infoBtn, testdata[1].infoBtn, "infoBtn status mismatch");
		await assertion.assertEqual(sts.leftPanelHidden, true, "leftPanelHidden status mismatch");
		await assertion.assertEqual(sts.yourScoreLabel, testdata[1].yourScoreLabel, "yourScoreLabel status mismatch");
		//await assertion.assertEqual(sts.yourScoreValue, null, "yourScoreValue status mismatch");
		await assertion.assertEqual(sts.feedbackBtn, testdata[1].feedbackBtn, "feedbackBtn status mismatch");
		await assertion.assertEqual(sts.submittedOn, testdata[1].submittedOn, "submittedOn status mismatch");
		await assertion.assertEqual(sts.gradedOn, null, "gradedOn status mismatch");
		await assertion.assertEqual(sts.submitActivityBtn, null, "submitActivityBtn status mismatch");
		await assertion.assertEqual(sts.submitGradeBtn, testdata[1].submitGradeBtn, "submitGradeBtn status mismatch");
		await assertion.assertEqual(sts.retakeOpenActivityBtn, null, "retakeOpenActivityBtn status mismatch");

		sts = await openActivityPlayerPage.getData_openActivityLeftPanel();
		await assertion.assertEqual(sts.gradingTitle, null, "gradingTitle status mismatch");
		await assertion.assertEqual(sts.gradingSubtitle, null, "gradingSubtitle status mismatch");
		await assertion.assertEqual(sts.statusPill, testdata[1].statusPill[0], "statusPill status mismatch");
		await assertion.assertEqual(sts.bookName, testdata[1].bookName, "bookName status mismatch");
		await assertion.assertEqual(sts.activityName, testdata[1].activityName, "activityName status mismatch");
		await assertion.assertEqual(sts.cardTitle, testdata[1].cardTitle, "cardTitle status mismatch");
		await assertion.assertEqual(sts.cardSubtitle, testdata[1].cardSubtitle, "cardSubtitle status mismatch");
		await assertion.assertEqual(sts.cardText, testdata[1].cardText, "cardText status mismatch");
		await assertion.assertEqual(sts.attempt1Label, testdata[1].attempt1Label, "attempt1Label status mismatch");
		await assertion.assertEqual(sts.attempt2Label, null, "attempt2Label status mismatch");
		await assertion.assertEqual(sts.attempt3Label, null, "attempt3Label status mismatch");
		await assertion.assertEqual(sts.attempt1SubmittedTime, testdata[1].attempt1SubmittedTime, "attempt1SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt1GradedTime, testdata[1].attempt1GradedTime, "attempt1GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt1StatusPill, testdata[1].attempt1StatusPill[0], "attempt1StatusPill status mismatch");
		await assertion.assertEqual(sts.attempt2SubmittedTime, null, "attempt2SubmittedTime status mismatch");
		await assertion.assertEqual(sts.attempt2GradedTime, null, "attempt2GradedTime status mismatch");
		await assertion.assertEqual(sts.attempt2StatusPill, null, "attempt2StatusPill status mismatch");

		await assertion.assertEqual(sts.scoreLabel, null, "scoreLabel status mismatch");
		await assertion.assertEqual(sts.scoreInput, null, "scoreInput status mismatch");
		await assertion.assertEqual(sts.feedbackLabel, null, "feedbackLabel status mismatch");
		await assertion.assertEqual(sts.feedbackInput, null, "feedbackInput status mismatch");
		await assertion.assertEqual(sts.reattemptLabel, null, "reattemptLabel status mismatch");
		await assertion.assertEqual(sts.reattemptYesBtn, null, "reattemptYesBtn status mismatch");
		await assertion.assertEqual(sts.reattemptNoBtn, null, "reattemptNoBtn status mismatch");
		await assertion.assertEqual(sts.scoreError, null, "scoreError status mismatch");
	},

	//Validate that clicking on Submit Answers displays Submit dialog
	ENG_OPEN_TC_4: async function () {
		sts = await openActivityPlayerPage.click_submitActivityBtn();
		await assertion.assertEqual(sts.submitActivityDialogTitle, testdata.submitActivityDialogTitle, "submitActivityDialogTitle status mismatch");
		await assertion.assertEqual(sts.submitActivityDialogSubtitle, testdata.submitActivityDialogSubtitle, "submitActivityDialogSubtitle status mismatch");
		await assertion.assertEqual(sts.submitActivityDialogCancelBtn, testdata.submitActivityDialogCancelBtn, "submitActivityDialogCancelBtn status mismatch");
		await assertion.assertEqual(sts.submitActivityDialogConfirmBtn, testdata.submitActivityDialogConfirmBtn, "submitActivityDialogConfirmBtn status mismatch");
	},

	//Validate that clicking on Cancel button does not submit the student response
	ENG_OPEN_TC_6: async function () {
		sts = await openActivityPlayerPage.click_submitActivityDialogCancelBtn();
		await assertion.assertEqual(sts, true, "submitActivityDialogCancelBtn status mismatch");
	},

	/*//Validate that clicking on Submit Answers displays Submit dialog
	ENG_OPEN_TC_7: async function () {
		sts = await openActivityPlayerPage.click_retakeOpenActivityBtn();
		await assertion.assertEqual(sts.retakeOpenDialogTitle, testdata.retakeOpenDialogTitle, "retakeOpenDialogTitle status mismatch");
		await assertion.assertEqual(sts.retakeOpenDialogSubtitle, testdata.retakeOpenDialogSubtitle, "retakeOpenDialogSubtitle status mismatch");
		await assertion.assertEqual(sts.retakeOpenDialogNoBtn, testdata.retakeOpenDialogNoBtn, "retakeOpenDialogNoBtn status mismatch");
		await assertion.assertEqual(sts.retakeOpenDialogYesBtn, testdata.retakeOpenDialogYesBtn, "retakeOpenDialogYesBtn status mismatch");
	},*/
}