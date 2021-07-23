"use strict";
// var launchQuiz = require('../../pages/engageExperienceApp/launchQuiz.page.js');
var testPlayerPage = require('../../pages/engageExperienceApp/testPlayer.page.js');
var itemPlayer = require('../../pages/engageExperienceApp/itemPlayer.page');
// var orderlist = require("../../pages/engageExperienceApp/orderlist.page");
// var summaryPage = require("../../pages/engageExperienceApp/summary.page")
// var TOC = require('../../pages/engageExperienceApp/toc_learningPath.page.js');
// var header = require('../../pages/engageExperienceApp/header.page.js');
var sts;

module.exports = {

	//Validate that the Learning path appears on clicking back button from the Start Quiz page
	ENG_QUIZ_TC_1: function (chapterObject) {
		sts = header.moveToPreviousPage();
		assertion.assertEqual(sts, true);
		sts = TOC.isInitializedLearningPath();
		assertion.assertEqual(sts.length, chapterObject.section.length, JSON.stringify(sts));
	},

	//Validate the test player when quiz is launched and question is not performed
	ENG_QUIZ_TC_2: function (testdata) {
		sts = itemPlayer.isInitialized();
		// console.log(sts);
		// assertion.assertEqual(sts.question.quesText, testdata, "Question text mismatch");
		// if ((typeof (sts)) === "object") {
		// 	if (sts.question.quesType.includes("order-list"))
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	else
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
		// 	assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		// }
		// else assertion.assertFail(sts);
	},

	//
	//Validate the test player when Reset is clicked
	ENG_QUIZ_TC_3: function (testdata) {
		sts = testPlayerPage.click_Reset();
		// console.log(sts);
		// assertion.assertEqual(sts.question.quesText, testdata, "Question text mismatch");
		// if ((typeof (sts)) === "object") {
		// 	if (sts.question.quesType.includes("order-list"))
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	else
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
		// 	assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		// }
		// else assertion.assertFail(sts);
	},

	//Validate the test player when user perform "Try Again" in the last Question of the quiz.
	ENG_QUIZ_TC_5: function () {
		sts = testPlayerPage.click_TryAgain();
		// console.log(sts);
		// if ((typeof (sts)) === "object") {
		// 	assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question status mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	assertion.assert((sts.rightBtn.btnDatatid.includes("endtest")), "Right button is not finish button");
		// 	assertion.assert(sts.question.feedback.fdbackText === undefined, "Feedback text error - " + sts.question.feedback);
		// }
		// else assertion.assertFail(sts);
	},

	//Validate The Test Player When User Click "Next Question" Button After Performing Check My Work
	ENG_QUIZ_TC_6: function (testdata) {
		sts = testPlayerPage.click_Skip();
		console.log(sts);
		// if ((typeof (sts)) === "object") {
		// 	if (sts.question.quesType.includes("order-list"))
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	else
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		// 	if (testdata != undefined) {
		// 		assertion.assertEqual(sts.question.quesText, testdata.text, "Question text mismatch");
		// 		assertion.assertEqual(sts.activeQues, testdata.number, "Active question mismatch");
		// 	}
		// }
		// else assertion.assertFail(sts);
	},

	//Validate the test player when user perform "Check My Work" in the first Question of the quiz.
	ENG_QUIZ_TC_13: function () {
		sts = testPlayerPage.click_CheckMyWork();
		// console.log(sts);
		// if ((typeof (sts)) === "object") {
		// 	assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, true, "Question status mismatch");

			//added to handle Practice-Ex3- Akanksha, Akhil
			// assertion.assert((sts.centerBtn.btnDatatid.includes("next")||(sts.centerBtn.btnDatatid.includes("endtest"))), "Center button is not next question button");
			// assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			// assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			// assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback);
		// }
		// else assertion.assertFail(sts);
	},

	//Validate the test player when user click Previous button in the second question.
	ENG_QUIZ_TC_20: function () {
		sts = testPlayerPage.click_Previous();
		// console.log(sts);
		// if ((typeof (sts)) === "object") {
		// 	if (sts.question.quesType.includes("order-list"))
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	else
		// 		assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
		// 	assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
		// 	assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		// }
		// else assertion.assertFail(sts);
	},

	//Validate The Test Player When User Perform "Check My Work" in the last Question of the quiz.
	ENG_QUIZ_TC_4: function () {
		sts = testPlayerPage.click_CheckMyWork();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question status mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("endtest")), "Center button is not finish button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback);
			// if (testdata != undefined) {
			// 	assertion.assertEqual(sts.question.feedback.fdbackText, testdata, "Feedback text mismatch");
			// }
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click "Skip" without performing Check My Work in the any of the question
	ENG_QUIZ_TC_7: function () {
		let quesInfo = testPlayerPage.getQuesInfo();
		sts = testPlayerPage.click_Skip();
		if ((typeof (sts)) === "object") {
			if (sts.question.quesType.includes("order-list"))
				assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			else
				assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, quesInfo.activeQues + 1, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when the user clicks the Continue button.
	/*ENG_QUIZ_TC_8: function (testdata) {
		sts = StartQuiz.click_StartQuiz()
		assertion.assertEqual(sts.activeQues, testdata.number, JSON.stringify(sts));
		assertion.assertEqual(sts.question.quesText, testdata.text, JSON.stringify(sts));
	},*/

	//Validate the test player when user perform any question of quiz
	ENG_QUIZ_TC_9: function () {
		sts = itemPlayer.isInitialized();
		console.log(sts);
		// if ((typeof (sts)) === "object") {
		// 	assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
		// 	if (sts.activeQues == 1)
		// 		assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
		// 	else
		// 		assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
		// 	assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
		// 	assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
		// 	assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
		// 	assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
		// 	if (sts.activeQues == sts.maxQues)
		// 		assertion.assert((sts.rightBtn.btnDatatid.includes("endtest")), "Right button is not finish button");
		// 	else
		// 		assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		// }
		// else assertion.assertFail(sts);
	},

	//Validate the test player when user perform "Check My Work" in the any middle Question of the quiz.
	ENG_QUIZ_TC_10: function () {
		sts = testPlayerPage.click_CheckMyWork();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question status mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("next")), "Center button is not next button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	// Validate The Test Player When User Click The Finish Button After Checking The Last Question
	ENG_QUIZ_TC_11: function () {
		sts = testPlayerPage.click_Finish();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.status, true, "Summary page status mismatch")
			assertion.assertEqual(sts.header.status, true, "Summary page header status mismatch")
			assertion.assertEqual(sts.footer.status, true, "Summary page header status mismatch")
		}
		else assertion.assertFail(sts);
	},

	// Validate The Test Player When User Click The Finish Button Without Checking The Last Question
	ENG_QUIZ_TC_12: function () {
		sts = testPlayerPage.click_Finish();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.status, true, "Summary page status mismatch")
			assertion.assertEqual(sts.header.status, true, "Summary page header status mismatch")
			assertion.assertEqual(sts.footer.status, true, "Summary page header status mismatch")
		}
		else assertion.assertFail(sts);
	},

	

	//Validate the test player when user perform "Try Again" in any middle question of the quiz.
	ENG_QUIZ_TC_14: function () {
		sts = testPlayerPage.click_TryAgain();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question status mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
			assertion.assert(sts.question.feedback.fdbackText === undefined, "Feedback text error - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user perform "Try Again" in the first Question of the quiz.
	ENG_QUIZ_TC_15: function () {
		sts = testPlayerPage.click_TryAgain();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question status mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			
			//added to handle Practice-Ex3- Akanksha, Akhil
			assertion.assert((sts.rightBtn.btnDatatid.includes("next"))||(sts.rightBtn.btnDatatid.includes("endtest")), "Right button is not skip button");
			assertion.assert(sts.question.feedback.fdbackText === undefined, "Feedback text error - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click "Next Question" button after performing Check My Work in the second last question of the quiz.
	ENG_QUIZ_TC_17: function (testdata) {
		sts = testPlayerPage.click_Skip();
		if ((typeof (sts)) === "object") {
			if (sts.question.quesType.includes("order-list"))
				assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			else
				assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, sts.maxQues, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("endtest")), "Right button is not finish button");
			if (testdata != undefined) {
				assertion.assertEqual(sts.question.quesText, testdata.text, "Question text mismatch");
				assertion.assertEqual(sts.activeQues, testdata.number, "Active question mismatch");
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click "Skip" in the second last question of the quiz without performing Check My Work.
	ENG_QUIZ_TC_19: function () {
		sts = testPlayerPage.click_Skip();
		if ((typeof (sts)) === "object") {
			if (sts.question.quesType.includes("order-list"))
				assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			else
				assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, sts.maxQues, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("endtest")), "Right button is not finish button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click Previous button in the any of the question.
	ENG_QUIZ_TC_21: function () {
		let quesInfo = testPlayerPage.getQuesInfo();
		sts = testPlayerPage.click_Previous();
		if ((typeof (sts)) === "object") {
			if (sts.question.quesType.includes("order-list"))
				assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			else
				assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, quesInfo.activeQues - 1, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click Cancel icon in the header without performing any question
	ENG_QUIZ_TC_22: function (testdata) {
		sts = testPlayerPage.click_CloseItem();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "launch Quiz page status mismatch")
			// assertion.assertEqual(sts.data.launchQuizBtn_txt, testdata, "Continue Quiz Btn text mismatch - ")
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click Cancel icon in the header without performing the first question and then resume the quiz.
	ENG_QUIZ_TC_23: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			if (sts.question.quesType.includes("order-list"))
				assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			else
				assertion.assertEqual(sts.centerBtn.btnState, 'disabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player resume when user perform any middle question (do not check) and then resume the quiz
	ENG_QUIZ_TC_24: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, false, "Question submission state mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("check")), "Center button is not check my work button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("next")), "Right button is not skip button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player resume when user perform last question with Check My Work and then resume the quiz
	ENG_QUIZ_TC_25: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question submission state mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("endtest")), "Center button is not finish button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user launches the quiz in review mode
	ENG_QUIZ_TC_26: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'disabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'disabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("next")), "Center button is not next question button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user clicks Next question button in review mode.
	ENG_QUIZ_TC_27: function () {
		sts = testPlayerPage.click_Skip();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'disabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question submission state mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("next")), "Center button is not next question button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate the content of the Test Player
	ENG_QUIZ_TC_28: function (testdata) {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.headerText, testdata[0], "Quiz header text mismatch");
			assertion.assertEqual(sts.centerBtn.btnText, testdata[1], "Center button text mismatch");
			assertion.assertEqual(sts.leftBtn.btnText, testdata[2], "Left button text mismatch");
			assertion.assertEqual(sts.rightBtn.btnText, testdata[3], "Right button text mismatch");
			if (sts.question.isSubmitted == true) {
				assertion.assertEqual(sts.question.feedback.fdbackText, testdata[4], "Feedback text mismatch");
				if (testdata[5] == undefined)
					assertion.assertEqual(sts.question.feedback.buttonText, "", "Show Answer button text mismatch");
				else
					assertion.assertEqual(sts.question.feedback.buttonText, testdata[5], "Show Answer button text mismatch");

				if (testdata[6] == undefined)
					assertion.assertEqual(sts.question.feedback.showAnswerText, "", "Show Answer text mismatch");
				else
					assertion.assertEqual(sts.question.feedback.showAnswerText, testdata[6], "Show Answer text mismatch");
			}
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player in review mode when user click Next Question button to move to the last question of the quiz
	ENG_QUIZ_TC_29: function () {
		sts = testPlayerPage.click_Skip();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.centerBtn.btnState, 'enabled', "Center button state mismatch");
			assertion.assertEqual(sts.leftBtn.btnState, 'enabled', "Left button state mismatch");
			assertion.assertEqual(sts.rightBtn.btnState, 'disabled', "Right button state mismatch");
			assertion.assertEqual(sts.question.isSubmitted, true, "Question submission state mismatch");
			assertion.assertEqual(sts.activeQues, sts.maxQues, "Active question mismatch");
			assertion.assert((sts.centerBtn.btnDatatid.includes("review")), "Center button is not close review button");
			assertion.assert((sts.leftBtn.btnDatatid.includes("previous")), "Left button is not previous button");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click Close Review button when the review mode was launched from the Summary page
	ENG_QUIZ_TC_30: function () {
		sts = testPlayerPage.click_closeReview();
		assertion.assertEqual(sts, true);
		sts = summaryPage.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.status, true, "Summary page status mismatch")
			assertion.assertEqual(sts.header.status, true, "Summary page header status mismatch")
			assertion.assertEqual(sts.footer.status, true, "Summary page header status mismatch")
		}
		else assertion.assertFail(sts);
	},

	//Validate the test player when user click Close Review button when the review mode was launched from the Retake quiz page
	// ENG_QUIZ_TC_31: function () {
	// 	sts = testPlayerPage.click_closeReview();
	// 	assertion.assertEqual(sts, true);
	// 	sts = launchQuiz.isInitialized();
	// 	if ((typeof (sts)) === "object") {
	// 		assertion.assertEqual(sts.pageStatus, true, "Launch Quiz page status mismatch")
	// 		assertion.assertEqual(sts.header.status, true, "Summary page header status mismatch")
	// 		assertion.assertEqual(sts.footer.status, true, "Summary page header status mismatch")
	// 	}
	// 	else assertion.assertFail(sts);
	// },

	//Validate the shuffling of options in the questions when quiz is relaunched using Start/Retake Quiz Button on the launch quiz page
	// ENG_QUIZ_TC_32: function (testdata) {
	// 	let sts2 = orderlist.isInitialized(testdata[0]);
	// 	assertion.assert((typeof (sts2)) === "object", "OrderList data - " + sts2);
	// 	sts = testPlayerPage.click_Skip();
	// 	assertion.assertEqual(sts.activeQues, 6, "Active question mismatch");
	// 	sts = testPlayerPage.click_Finish();
	// 	assertion.assertEqual(sts.status, true, "Summary page status mismatch");
	// 	sts = header.moveToPreviousPage();
	// 	assertion.assertEqual(sts, true);
	// 	sts = TOC.click_LearningPathResource(testdata[1].index, testdata[2].index);
	// 	assertion.assertEqual(sts, true);
	// 	sts = launchQuiz.click_launchQuiz();
	// 	assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
	// 	sts = testPlayerPage.click_Skip();
	// 	assertion.assertEqual(sts.activeQues, 2, "Active question mismatch");
	// 	sts = testPlayerPage.click_Skip();
	// 	assertion.assertEqual(sts.activeQues, 3, "Active question mismatch");
	// 	sts = testPlayerPage.click_Skip();
	// 	assertion.assertEqual(sts.activeQues, 4, "Active question mismatch");
	// 	sts = testPlayerPage.click_Skip();
	// 	assertion.assertEqual(sts.activeQues, 5, "Active question mismatch");
	// 	sts = orderlist.isInitialized(testdata[0]);
	// 	let unmatchCount = 0;
	// 	for (var i = 0; i < sts2.length; i++) {
	// 		if (sts[i][2] != sts2[i][2])
	// 			unmatchCount++;
	// 	}
	// 	assertion.assert(unmatchCount > 0, "Options did not shuffle in order list question. \nList of options in first attempt - " + sts2 + "\nList of options in the second attempt - " + sts);
	// },

	//Validate the shuffling of options in the questions when quiz is relaunched using Retake Quiz Button on the Summary page
	ENG_QUIZ_TC_33: function (testdata) {
		let sts2 = orderlist.isInitialized(testdata);
		assertion.assert((typeof (sts2)) === "object", "OrderList data - " + sts2);
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 6, "Active question mismatch");
		sts = testPlayerPage.click_Finish();
		assertion.assertEqual(sts.status, true, "Summary page status mismatch");
		sts = summaryPage.clickRetakeQuiz();
		assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 2, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 3, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 4, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 5, "Active question mismatch");
		sts = orderlist.isInitialized(testdata);
		let unmatchCount = 0;
		for (var i = 0; i < sts2.length; i++) {
			if (sts[i][2] != sts2[i][2])
				unmatchCount++;
		}
		assertion.assert(unmatchCount > 0, "Options did not shuffle in order list question. \nList of options in first attempt - " + sts2 + "\nList of options in the second attempt - " + sts);
	},

	//Validate That The Question Options Are Not Shuffled When Quiz Is Resumed if user had made some changes in the question
	// ENG_QUIZ_TC_34: function (testdata) {
	// 	sts = orderlist.orderListChange(testdata)
	// 	assertion.assertEqual(sts, true, "OrderList is - " + sts);
	// 	let sts2 = orderlist.isInitialized(testdata);
	// 	assertion.assert((typeof (sts2)) === "object", "OrderList data - " + sts2);
	// 	sts = testPlayerPage.click_CloseItem();
	// 	if ((typeof (sts)) === "object")
	// 		assertion.assertEqual(sts.pageStatus, true, "launch Quiz page status mismatch")
	// 	else assertion.assertFail(sts);
	// 	sts = launchQuiz.click_launchQuiz();
	// 	assertion.assertEqual(sts.activeQues, 5, "Active question mismatch");
	// 	sts = orderlist.isInitialized(testdata);
	// 	let matchCount = 0;
	// 	for (var i = 0; i < sts2.length; i++) {
	// 		if (sts[i][2] == sts2[i][2])
	// 			matchCount++;
	// 	}
	// 	assertion.assert(matchCount == sts.length, "Options shuffled in order list question. \nList of options in first attempt - " + sts2 + "\nList of options in the second attempt - " + sts);
	// },

	//Validate That The Question Options Are Not Shuffled When Quiz Is Launched In Review Mode
	ENG_QUIZ_TC_35: function (testdata) {
		let sts2 = orderlist.isInitialized(testdata);
		assertion.assert((typeof (sts2)) === "object", "OrderList data - " + sts2);
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 6, "Active question mismatch");
		sts = testPlayerPage.click_Finish();
		assertion.assertEqual(sts.status, true, "Summary page status mismatch");
		sts = summaryPage.clickReviewQuiz();
		assertion.assertEqual(sts.activeQues, 1, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 2, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 3, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 4, "Active question mismatch");
		sts = testPlayerPage.click_Skip();
		assertion.assertEqual(sts.activeQues, 5, "Active question mismatch");
		sts = orderlist.isInitialized(testdata);
		let matchCount = 0;
		for (var i = 0; i < sts2.length; i++) {
			if (sts[i][2] == sts2[i][2])
				matchCount++;
		}
		assertion.assert(matchCount == sts.length, "Options shuffled in order list question. \nList of options in first attempt - " + sts2 + "\nList of options in the second attempt - " + sts);
	},

	/*	//Validate That The Question Options Are Not Shuffled When Question Is Relaunched Using Skip Button
		ENG_QUIZ_TC_38: function () {
			sts = orderlist.isInitialized();
			initialcount = sts.question.options.length;
			initialoptionsText = orderlist.getCurrentStatusOrderList(sts.activeQues, initialcount);
			sts = testPlayerPage.click_Previous();
			sts = testPlayerPage.click_Skip();
			sts = orderlist.isInitialized();
			finalcount = sts.question.options.length;
			finaloptionsText = orderlist.getCurrentStatusOrderList(sts.activeQues, finalcount);
			assertion.assertEqual(initialcount, finalcount);
			for (var i = 0; i <= finalcount; i++)
				assertion.assertEqual(initialoptionsText[i], finaloptionsText[i], JSON.stringify(sts));
		},
	
		//Validate That The Question Options Are Not Shuffled When Try Again Is Clicked
		ENG_QUIZ_TC_39: function () {
			sts = orderlist.isInitialized();
			initialcount = sts.question.options.length;
			initialoptionsText = orderlist.getCurrentStatusOrderList(sts.activeQues, initialcount);
			sts = testPlayerPage.click_CheckMyWork();
			sts = testPlayerPage.click_TryAgain();
			sts = orderlist.isInitialized();
			finalcount = sts.question.options.length;
			finaloptionsText = orderlist.getCurrentStatusOrderList(sts.activeQues, finalcount);
			assertion.assertEqual(initialcount, finalcount);
			for (var i = 0; i <= finalcount; i++)
				assertion.assertEqual(initialoptionsText[i], finaloptionsText[i], JSON.stringify(sts));
		},
	*/

	//Validate That Show Answer Button Does Not Appear On Clicking Check My Work If Question Is Performed Correctly
	ENG_QUIZ_TC_41: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert(sts.question.feedback.buttonText == "", "Show answer button text mismatch - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate that Show Answer button is displayed if question (DND image, DND Text, Orderlist question) is performed incorrectly
	ENG_QUIZ_TC_42: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.rightBtn.btnState, 'enabled', "Right button state mismatch");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.buttonText instanceof Error) === false, "Show answer button text error - " + sts.question.feedback.buttonText);
			assertion.assert(sts.question.feedback.buttonText != "", "Show answer button text mismatch - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate That Correct Answer Is Displayed On Click "Show Answer" Button
	ENG_QUIZ_TC_43: function () {
		sts = itemPlayer.isInitialized();
		let correctCount = sts.question.correctCount;
		let incorrectCount = sts.question.incorrectCount;
		sts = testPlayerPage.click_showAnswer();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.question.correctCount, correctCount + incorrectCount, "Correct count mismatch");
			assertion.assertEqual(sts.question.incorrectCount, 0, "Incorrect count mismatch");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.buttonText instanceof Error) === false, "Show answer button text error - " + sts.question.feedback.buttonText);
			assertion.assert(sts.question.feedback.buttonText != "", "Show answer button text mismatch - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.showAnswerText instanceof Error) === false, "Showing answer  text error - " + sts.question.feedback.showAnswerText);
			assertion.assert(sts.question.feedback.showAnswerText != "", "Showing answer text mismatch - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate That Previous User State Is Displayed On Clicking Your Response Button
	ENG_QUIZ_TC_44: function () {
		sts = itemPlayer.isInitialized();
		var correctCount = sts.question.correctCount;
		var incorrectCount = sts.question.incorrectCount;
		sts = testPlayerPage.click_showAnswer();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.question.correctCount, correctCount + incorrectCount, "Correct count mismatch");
			assertion.assertEqual(sts.question.incorrectCount, 0, "Incorrect count mismatch");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.buttonText instanceof Error) === false, "Show answer button text error - " + sts.question.feedback.buttonText);
			assertion.assert(sts.question.feedback.buttonText != "", "Show answer button text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.showAnswerText instanceof Error) === false, "Showing answer text error - " + sts.question.feedback.showAnswerText);
			assertion.assert(sts.question.feedback.showAnswerText != "", "Showing answer text is blank - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
		sts = testPlayerPage.click_yourResponse();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.question.correctCount, correctCount, "Correct count mismatch");
			assertion.assertEqual(sts.question.incorrectCount, incorrectCount, "Incorrect count mismatch");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.buttonText instanceof Error) === false, "Show answer button text error - " + sts.question.feedback.buttonText);
			assertion.assert(sts.question.feedback.buttonText != "", "Show answer button text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.showAnswerText instanceof Error) === false, "Showing answer text error - " + sts.question.feedback.showAnswerText);
			assertion.assert(sts.question.feedback.showAnswerText == "", "Showing answer text is not blank - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate that Show Answer button is displayed in Review Mode if question is performed incorrectly
	ENG_QUIZ_TC_45: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.rightBtn.btnState, 'disabled', "Right button state mismatch");
			assertion.assert((sts.rightBtn.btnDatatid.includes("tryagain")), "Right button is not try again button");
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert((sts.question.feedback.buttonText instanceof Error) === false, "Show answer button text error - " + sts.question.feedback.buttonText);
			assertion.assert(sts.question.feedback.buttonText != "", "Show answer button is blank - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},

	//Validate that Show Answer button is not displayed if question (MCQB or MCQR) is performed incorrectly
	ENG_QUIZ_TC_46: function () {
		sts = itemPlayer.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assert((sts.question.feedback.fdbackText instanceof Error) === false, "Feedback text error - " + sts.question.feedback.fdbackText);
			assertion.assert(sts.question.feedback.fdbackText != "", "Feedback text is blank - " + sts.question.feedback);
			assertion.assert(sts.question.feedback.buttonText == "", "Show answer button text is not blank - " + sts.question.feedback);
		}
		else assertion.assertFail(sts);
	},
}