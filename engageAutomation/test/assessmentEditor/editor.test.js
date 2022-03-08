"use strict";

var testbench = require('../../pages/assessmentEditor/TestBench.page.js');
var EditorPlayer = require('../../pages/assessmentEditor/itemPlayersFeatures.page.js');

var sts, i;

module.exports = {

	//TestBench Home page is initialised
	EDIT_TC_1: function () {
		sts = testbench.isInitialized();
		//return MCQ1 Object.
		//assertion.assertEqual(sts.pageStatus, true, "Testbench page status mismatch");
	},

	//Click on Launch Button
	EDIT_TC_2: function () {
		sts = testbench.clickLaunch();
		//assertion.assertEqual(sts.pageStatus, true, "Quiz page status mismatch");
	},

	//Validate that the Title name is updated in the Header and in Title text box
	ASE_SET_TC_3: function (testdata) {
		sts = EditorPlayer.setQuizTitle(testdata);
		assertion.assertEqual(sts, testdata, "Quiz page title status mismatch");
	},
	//Validate that the Next Button on the Setup Page should navigate to the Question tab
	ASE_SET_TC_15: function (testdata) {
		sts = EditorPlayer.clickNextbtn();
		assertion.assertEqual(sts, 'true', "Question tab is not selected");
	},
	//
	ASE_QUN_TC_17: function () {
		sts = EditorPlayer.clickEditorTab();
		assertion.assertEqual(sts, true, "Editor tab is not selected");
	},
	//Validate that a new question is added by clicking on the 'Add new Question' button on the left pane
	ASE_COM_TC_4: function (testdata) {
		sts = EditorPlayer.clickAddQuestionBtn();
		assertion.assertEqual(sts.editorCount, 12, "Question tab is not selected");
	},
	//Validate that alphanumeric text is supported in Question Title Text.
	ASE_QUN_TC_5: function (testdata) {
		//EditorPlayer.isInitialized1(testdata[0])
		sts = EditorPlayer.setQuestionTitle(testdata);

	},
	//Validate the editor is selected in question pane and displayed.
	ASE_COM_TC_120: function (testdata) {
		sts = EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	ASE_COM_TC_86: function (testdata) {
		sts = EditorPlayer.clickAddAudioBtn();
		assertion.assertEqual(sts, true, "Audio btn is not clicked");
		sts = EditorPlayer.audioUpload(testdata);
		assertion.assertEqual(sts, true, "Audio is not uploaded");

		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	ASE_COM_TC_87: function (testdata) {
		sts = EditorPlayer.clickAddVideoBtn();
		assertion.assertEqual(sts, true, "Video btn is not clicked");
		sts = EditorPlayer.audioUpload(testdata);
		assertion.assertEqual(sts, true, "Video is not uploaded");

		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	//  Validate that user is able to add "Title/Credits" in Audio Media
	ASE_COM_TC_92: function (testdata) {
		sts = EditorPlayer.setAudioCredit(testdata);
		assertion.assertEqual(sts, true, "Audio Credit is not set");
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	//Validate that the Question can be added using Add Question button.
	ASE_QUN_TC_9: function () {
		sts = EditorPlayer.click_AddQuestion_Dialog_Ok_Button();
		assertion.assertEqual(sts, true, "Ok btn is not clicked");
	},

	//Enter the Answer in FIB Value
	ASE_FIB_TC_1: function (testdata) {
		sts = EditorPlayer.setAnswer(testdata[0], testdata[1]);
		for (var i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[1][i], "option" + i + " is not set correctly");
		}
	},

	//  Validate that Option is added in  questions
	ASE_MCQ_TC_14: function (testdata) {
		sts = EditorPlayer.setOptions(testdata);
		for (var i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},
	ASE_COM_TC_75: function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = EditorPlayer.clickAddImageBtn();
		assertion.assertEqual(sts, true, "Image btn is not clicked");
		sts = EditorPlayer.imageUpload(testdata);
		assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	ASE_DND_TC_29: function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = EditorPlayer.imageUpload(testdata);
		assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	ASE_COM_TC_42: function (testdata) {
		sts = EditorPlayer.setQuestionText(testdata);
		console.log(sts)
		assertion.assertEqual(sts, true, "question text is not set");
	},
	ASE_COM_TC_15: function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = EditorPlayer.clickAddVideoBtn();
		assertion.assertEqual(sts, true, "Video btn is not clicked"); //
		sts = EditorPlayer.setVideoMediaURL(testdata);
		assertion.assertEqual(sts, true, "Video Media url is not set");

	},
	ASE_COM_TC_16: function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = EditorPlayer.setVideoCredit(testdata);
		assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},

	//"Add item pair options in a question Click on Add Pair"
	ASE_MAT_TC_13: function () {
		sts = EditorPlayer.clickAddPairBtn();
		assertion.assertEqual(sts, true, "Add Pair button is not clicked");
	},
	//Add text in left itmes
	ASE_MAT_TC_14: function (testdata) {
		sts = EditorPlayer.setItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not set correctly");
		}
	},
	//Add text in matched itmes
	ASE_MAT_TC_15: function (testdata) {
		sts = EditorPlayer.setMatchedItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not matched correctly");
		}
	},
	//Validate that the user can add a label in the Response Template
	ASE_DND_TC_9: function (testdata) {
		sts = EditorPlayer.clickAddLabelBtn(testdata)
		assertion.assertEqual(sts, true, "Add label button is not clicked");
	},

	ASE_COM_TC_9: function (testdata) {
		sts = EditorPlayer.clickAddInstructionBtn();
		assertion.assertEqual(sts, true, "Instruction tab is not clicked");
		sts = EditorPlayer.setQuestionInstruction(testdata);
		assertion.assertEqual(sts, true, "Question Instruction status mismatch");
	},
	//Validate that user is able to add group if group count is less than 10

	ASE_CLS_TC_2: function () {
		sts = EditorPlayer.clickAddGroupBtn();
		assertion.assertEqual(sts, true, "Add Group button is not clicked");
	},

	//Validate that user is able to add option if total option count is less than 15
	ASE_CLS_TC_13: function (testdata) {
		sts = EditorPlayer.clickAddOptionBtn(testdata);
		assertion.assertEqual(sts, true, "Add Option button is not clicked");
	},
	//Validate that special characters are allowed in Group Name.
	ASE_CLS_TC_9: function (testdata) {
		sts = EditorPlayer.setClassifyGroups(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Groups" + i + " is not set correctly");
		}
	},
	//Validate that alphanumeric characters are allowed in option Name.
	ASE_CLS_TC_21: function (testdata) {
		sts = EditorPlayer.setClassifyOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Options" + i + " is not set correctly");
		}
	},
	//Validate that user should be able to select group for an option.
	ASE_CLS_TC_17: function (testdata) {
		sts = EditorPlayer.selectGroupsForOptions(testdata[0], testdata[1], testdata[2]);
		console.log(sts)
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[0][i], "Group option" + i + " is not set correctly");
		}
	},

	//click preview button
	ASE_COM_TC_997: function () {
		sts = EditorPlayer.clickPreviewBtn();
		assertion.assertEqual(sts, true, "Preview button status mismatch");
	},

	//click preview tab
	ASE_COM_TC_998: function () {
		sts = EditorPlayer.clickPreviewPublishTab();
		assertion.assertEqual(sts, true, "Preview tab status mismatch");
	},

	//click save and return button
	ASE_COM_TC_999: function () {
		sts = EditorPlayer.clickSaveandReturnBtn();
		assertion.assertEqual(sts, true, "Error in save and return");
		//assertion.assert((sts instanceof Error) === true, "Error in save and return - " + sts);
		browser.switchWindow(global.appUrl);
	},


	//Click on Question Tab
	/*ASE_SET_TC_15: function (testdata) {
		sts = EditorPlayer.clickQuestionTab();
		//assertion.assertEqual(sts, true, "Question tab is not clicked");
		sts = EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
		sts = EditorPlayer.clickEditorTab();
		//assertion.assertEqual(sts, true, "Editor tab is not clicked");
	},*/

	//Select MCQ question
	EDIT_TC_5: function (testdata) {
		sts = EditorPlayer.clickAddQuestionBtn();
		//assertion.assertEqual(sts, true, "Question tab is not clicked");
		sts = EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
		sts = EditorPlayer.click_AddQuestion_Dialog_Ok_Button();
		//assertion.assertEqual(sts, true, "Ok btn is not clicked");
	},

	//Click add Question Button
	EDIT_TC_6: function (testdata) {
		sts = EditorPlayer.clickDrawerQuestionNumber(testdata);
		assertion.assertEqual(sts, true, "Question Drawer Tab is not clicked");
	},

	//add question title
	EDIT_TC_7: function (testdata) {
		sts = EditorPlayer.setQuestionTitle(testdata);
		assertion.assertEqual(sts, true, "Question title status mismatch");
	},
	//add instruction

	//add video
	EDIT_TC_9: function (testdata) {
		sts = EditorPlayer.clickAddVideoBtn();
		assertion.assertEqual(sts, true, "Video btn is not clicked"); //
		sts = EditorPlayer.setVideoMediaURL(testdata[0]);
		assertion.assertEqual(sts, true, "Video Media url is not set");
		sts = EditorPlayer.setVideoCredit(testdata[1]);
		assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},
	//add image
	EDIT_TC_10: function (testdata) {
		sts = EditorPlayer.clickAddImageBtn();
		assertion.assertEqual(sts, true, "Image btn is not clicked");
		sts = EditorPlayer.imageUpload(testdata[0]);
		assertion.assertEqual(sts, true, "Image Upload is not updated");
		sts = EditorPlayer.setImageCredit(testdata[1]);
		assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},
	EDIT_TC_10_DND: function (testdata) {
		sts = EditorPlayer.imageUpload(testdata);
		assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	//add audio
	EDIT_TC_11: function (testdata) {
		sts = EditorPlayer.clickAddAudioBtn();
		assertion.assertEqual(sts, true, "Audio btn is not clicked");
		sts = EditorPlayer.audioUpload(testdata[0]);
		assertion.assertEqual(sts, true, "Audio is not uploaded");
		sts = EditorPlayer.setAudioCredit(testdata[1]);
		assertion.assertEqual(sts, true, "Audio Credit is not set");
	},
	//add Question Text
	EDIT_TC_12: function (testdata) {
		sts = EditorPlayer.setQuestionText(testdata);
		assertion.assertEqual(sts, true, "question text is not set");
	},

	EDIT_TC_13: function (testdata) {
		sts = EditorPlayer.clickAddAnswerMCQSRBtn(testdata[0]);
		assertion.assertEqual(sts, true, "Answer button is not clicked");
	},

	EDIT_TC_14: function (testdata) {
		sts = EditorPlayer.setOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},


	EDIT_TC_16: function (testdata) {
		sts = EditorPlayer.selectCorrectOptions(testdata)
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},

	EDIT_TC_17: function (testdata) {
		sts = EditorPlayer.selectOptionStyle(testdata);
		assertion.assertEqual(sts, true, "Option Style is not clicked");
	},

	EDIT_TC_18: function () {
		sts = EditorPlayer.dragLabel();
	},

	EDIT_TC_19: function (testdata) {
		sts = EditorPlayer.clickAddBlank(testdata);
		assertion.assertEqual(sts, true, "Add Blank button is not clicked");
	},

	ASE_MAT_TC_13: function () {
		sts = EditorPlayer.clickAddPairBtn();
		assertion.assertEqual(sts, true, "Add Pair button is not clicked");
	},

	EDIT_TC_21: function (testdata) {
		sts = EditorPlayer.setItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not set correctly");
		}
	},

	EDIT_TC_22: function (testdata) {
		sts = EditorPlayer.setMatchedItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not matched correctly");
		}
	},


	EDIT_TC_25: function (testdata) {
		sts = EditorPlayer.setClassifyGroups(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Groups" + i + " is not set correctly");
		}
	},

	EDIT_TC_26: function (testdata) {
		sts = EditorPlayer.setClassifyOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Options" + i + " is not set correctly");
		}
	},

	EDIT_TC_27: function (testdata) {
		sts = EditorPlayer.selectGroupsForOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			assertion.assertEqual(sts[i], testdata[i], "Group option" + i + " is not set correctly");
		}
	},

	EDIT_TC_100: function () {
		sts = EditorPlayer.clickPreviewBtn()
		assertion.assertEqual(sts, true, "Preview button is not clicked");
	},
	//set question text for writing player
	ASE_COM_TC_1000: function (testdata) {
		sts = EditorPlayer.setQuestionTextinwriting(testdata)
		assertion.assertEqual(sts, true, "Question text  mismatch");

	},
	ASE_COM_TC_1001: function (testdata) {
		sts = EditorPlayer.setHeaderTextinPlaceHolder(testdata)
		console.log(sts)
		assertion.assertEqual(sts, true, "Question text  mismatch");

	},
	ASE_COM_TC_1002: function (testdata) {
		sts = EditorPlayer.setInsTextinPlaceHolder(testdata)
		console.log(sts)
		assertion.assertEqual(sts, true, "Question text  mismatch");

	},

	ASE_COM_TC_1003: function () {
		sts = EditorPlayer.clickNextBtn()
		console.log(sts)
		assertion.assertEqual(sts, true, "Next Question clicked");

	},
	ASE_COM_TC_1004: function () {
		sts = EditorPlayer.deleteMediabtn()
		console.log(sts)
		assertion.assertEqual(sts, true, "Delete Media Clicked");

	},
	ASE_COM_TC_1005: function () {
		sts = EditorPlayer.clickEditPrompt_Btn()
		console.log(sts)
		assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1006: function (testdata) {
		sts = EditorPlayer.setPromptTextPlaceHolder(testdata)
		console.log(sts)
		assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1007: function (testdata) {
		console.log(testdata)
		console.log(testdata[0])
		sts = EditorPlayer.clickeditSubQuestionbtn(testdata[0])
		console.log(sts)
		assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1009: function (testdata) {
		sts = EditorPlayer.setSubQuestiontxt(testdata[1])
		assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1008: function (testdata) {
		sts = EditorPlayer.setOptiontxt(testdata)
		console.log(sts)
		assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1010: function () {
		sts = EditorPlayer.clickTopBottombtn()
		assertion.assertEqual(sts, true, "Top Bottpm button clicked");
	},
	ASE_COM_TC_1011: function () {
		sts = EditorPlayer.clickLeftRightbtn()
		assertion.assertEqual(sts, true, "Left Right option button clicked");
	},
	ASE_COM_TC_1012: function (testdata) {
		sts = EditorPlayer.setScorePlaceHolder(testdata)
		assertion.assertEqual(sts, true, "Left Right option button clicked");
	},
	ASE_COM_TC_1013: function () {
		sts = EditorPlayer.clickAddAnswerBtnComman()
		assertion.assertEqual(sts, true, "Add Answer button clicked");
	},
	ASE_FIBDROPDOWN_TC_1013: function (testdata) {
		sts = EditorPlayer.clickUniqueOption(testdata)
		assertion.assertEqual(sts, true, "unique option button clicked");
	},
	ASE_FIBDROPDOWN_TC_1014: function () {
		sts = EditorPlayer.clickCommonOption()
		assertion.assertEqual(sts, true, "common option button clicked");
	},
	ASE_FIBDROPDOWN_TC_1015: function (testdata) {
		sts = EditorPlayer.setinputOptionText(testdata)
		assertion.assertEqual(sts, true, "input option is not added");
	},
	ASE_FIBDROPDOWN_TC_1016: function (testdata) {
		sts = EditorPlayer.setresponseOptionText(testdata)
		assertion.assertEqual(sts, true, "response option is not added");
	},
}
