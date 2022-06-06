"use strict";
// var launchQuiz = require('../../pages/engageExperienceApp/launchQuiz.page.js');
var testPlayerPage = require('../../pages/engageExperienceApp/basePlayer.page.js');
//var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
// var orderlist = require("../../pages/engageExperienceApp/orderlist.page");
// var summaryPage = require("../../pages/engageExperienceApp/summary.page")
// var TOC = require('../../pages/engageExperienceApp/toc_learningPath.page.js');
// var header = require('../../pages/engageExperienceApp/header.page.js');
var sts;

module.exports = {

	//Validate the test player when quiz is launched
	COM_PLAY_TC_1: async function () {
		sts = await testPlayerPage.isInitialized();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.reset_isExists, true, "reset_isExists status mismatch");
		}
		else await assertion.assertFail(sts);
	},

	//Validate the test player when user click "Next Question" button
	COM_PLAY_TC_2: async function () {
		sts = await testPlayerPage.click_Skip();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user perform "Check My Work"
	COM_PLAY_TC_3: async function () {
		sts = await testPlayerPage.click_CheckMyWork();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when Reset is clicked
	COM_PLAY_TC_4: async function () {
		sts = await testPlayerPage.click_Reset();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user perform "Try Again"
	COM_PLAY_TC_5: async function () {
		sts = await testPlayerPage.click_TryAgain();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Previous button in the second question.
	COM_PLAY_TC_6: async function () {
		sts = await testPlayerPage.click_Previous();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Show Answer button.
	COM_PLAY_TC_7: async function () {
		sts = await testPlayerPage.click_ShowAnswer();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Your Response.
	COM_PLAY_TC_8: async function () {
		sts = await testPlayerPage.click_YourResponse();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate the test player when user click Hint button.
	COM_PLAY_TC_9: async function () {
		sts = await testPlayerPage.click_Hint();
		await assertion.assertEqual(sts, true, "status mismatch");
	}
}