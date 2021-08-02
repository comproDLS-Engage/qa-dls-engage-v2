"use strict";
// var launchQuiz = require('../../pages/engageExperienceApp/launchQuiz.page.js');
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');
var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
// var orderlist = require("../../pages/engageExperienceApp/orderlist.page");
// var summaryPage = require("../../pages/engageExperienceApp/summary.page")
// var TOC = require('../../pages/engageExperienceApp/toc_learningPath.page.js');
// var header = require('../../pages/engageExperienceApp/header.page.js');
var sts;

module.exports = {

	//Validate the activity player when quiz is launched
	ENG_PLAY_TC_1: function (testdata) {
		sts = itemPlayer.isInitialized();
		console.log(JSON.stringify(sts));
		sts = activityPlayerPage.getActivityPlayerData();
		console.log(JSON.stringify(sts));
	},

	//Validate The Test Player When User Click "Next Question" Button
	ENG_PLAY_TC_2: function (testdata) {
		sts = activityPlayerPage.clickNextQuestion();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user perform "Check My Work"
	ENG_PLAY_TC_3: function () {
		sts = activityPlayerPage.clickCheckAnswer();
		assertion.assertEqual(sts, true, "status mismatch");
		sts =  activityPlayerPage.getFeedbackInfo();
		console.log("feedback info : " + JSON.stringify(sts));
	},

	//Validate the test player when user click Previous button in the second question.
	ENG_PLAY_TC_4: function () {
		sts = activityPlayerPage.clickPreviousQuestion();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Show Answer button.
	ENG_PLAY_TC_5: function () {
		sts = activityPlayerPage.clickShowAnswer();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Your Response.
	ENG_PLAY_TC_6: function () {
		sts = activityPlayerPage.clickYourResponse();
		assertion.assertEqual(sts, true, "status mismatch");
	}
}