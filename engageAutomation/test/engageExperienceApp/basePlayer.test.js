"use strict";
// var launchQuiz = require('../../pages/engageExperienceApp/launchQuiz.page.js');
var testPlayerPage = require('../../pages/engageExperienceApp/basePlayer.page.js');
var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
// var orderlist = require("../../pages/engageExperienceApp/orderlist.page");
// var summaryPage = require("../../pages/engageExperienceApp/summary.page")
// var TOC = require('../../pages/engageExperienceApp/toc_learningPath.page.js');
// var header = require('../../pages/engageExperienceApp/header.page.js');
var sts;

module.exports = {

	//Validate the test player when quiz is launched
	COM_PLAY_TC_1: function (testdata) {
		sts = itemPlayer.isInitialized();	
		console.log(JSON.stringify(sts));
	},

	//Validate The Test Player When User Click "Next Question" Button
	COM_PLAY_TC_2: function (testdata) {
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user perform "Check My Work"
	COM_PLAY_TC_3: function () {
		sts = testPlayerPage.click_CheckMyWork();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when Reset is clicked
	COM_PLAY_TC_4: function (testdata) {
		sts = testPlayerPage.click_Reset();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user perform "Try Again"
	COM_PLAY_TC_5: function () {
		sts = testPlayerPage.click_TryAgain();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Previous button in the second question.
	COM_PLAY_TC_6: function () {
		sts = testPlayerPage.click_Previous();
		assertion.assertEqual(sts, true, "status mismatch");

	}
}