"use strict";
var testbench = require('../../pages/assessmentEditor/TestBench.page.js');
var EditorPlayer = require('../../pages/assessmentEditor/itemPlayersFeatures.page.js');

var sts, i;

module.exports = {

	//TestBench Home page is initialised
	EDIT_TC_1: async function () {
		sts = await testbench.isInitialized();
		//return MCQ1 Object.
		//assertion.assertEqual(sts.pageStatus, true, "Testbench page status mismatch");
	},

	//Click on Launch Button
	EDIT_TC_2: async function () {
		sts = await testbench.clickLaunch();
		//assertion.assertEqual(sts.pageStatus, true, "Quiz page status mismatch");
	},

	//Validate that the Title name is updated in the Header and in Title text box
	ASE_SET_TC_3: async function (testdata) {
		sts = await EditorPlayer.setQuizTitle(testdata);
		await assertion.assertEqual(sts, testdata, "Quiz page title status mismatch");
	},
	//Validate that the Next Button on the Setup Page should navigate to the Question tab
	ASE_SET_TC_15: async function (testdata) {
		sts = await EditorPlayer.clickNextbtn();
		await assertion.assertEqual(sts, 'true', "Question tab is not selected");
	},
	//
	ASE_QUN_TC_17: async function () {
		sts = await EditorPlayer.clickEditorTab();
		await assertion.assertEqual(sts, true, "Editor tab is not selected");
	},
	//Validate that a new question is added by clicking on the 'Add new Question' button on the left pane
	ASE_COM_TC_4: async function (testdata) {
		sts = await EditorPlayer.clickAddQuestionBtn();
		await assertion.assertEqual(sts.editorCount, 12, "Question tab is not selected");
	},
	//Validate that alphanumeric text is supported in Question Title Text.
	ASE_QUN_TC_5: async function (testdata) {
		//EditorPlayer.isInitialized1(testdata[0])
		sts = await EditorPlayer.setQuestionTitle(testdata);

	},
	//Validate the editor is selected in question pane and displayed.
	ASE_COM_TC_120: async function (testdata) {
		sts = await EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	ASE_COM_TC_86: async function (testdata) {
		sts = await EditorPlayer.clickAddAudioBtn();
		await assertion.assertEqual(sts, true, "Audio btn is not clicked");
		sts = await EditorPlayer.audioUpload(testdata);
		await assertion.assertEqual(sts, true, "Audio is not uploaded");

		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	ASE_COM_TC_87: async function (testdata) {
		sts = await EditorPlayer.clickAddVideoBtn();
		await assertion.assertEqual(sts, true, "Video btn is not clicked");
		sts = await EditorPlayer.audioUpload(testdata);
		await assertion.assertEqual(sts, true, "Video is not uploaded");

		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	//  Validate that user is able to add "Title/Credits" in Audio Media
	ASE_COM_TC_92: async function (testdata) {
		sts = await EditorPlayer.setAudioCredit(testdata);
		await assertion.assertEqual(sts, true, "Audio Credit is not set");
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
	},
	//Validate that the Question can be added using Add Question button.
	ASE_QUN_TC_9: async function () {
		sts = await EditorPlayer.click_AddQuestion_Dialog_Ok_Button();
		await assertion.assertEqual(sts, true, "Ok btn is not clicked");
	},

	//Enter the Answer in FIB Value
	ASE_FIB_TC_1: async function (testdata) {
		sts = await EditorPlayer.setAnswer(testdata[0], testdata[1]);
		for (var i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[1][i], "option" + i + " is not set correctly");
		}
	},

	//  Validate that Option is added in  questions
	ASE_MCQ_TC_14: async function (testdata) {
		sts = await EditorPlayer.setOptions(testdata);
		for (var i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},
	ASE_COM_TC_75: async function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = await EditorPlayer.clickAddImageBtn();
		await assertion.assertEqual(sts, true, "Image btn is not clicked");
		sts = await EditorPlayer.imageUpload(testdata);
		await assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	ASE_DND_TC_29: async function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = await EditorPlayer.imageUpload(testdata);
		await assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	ASE_DND_TC_30: async function (testdata) {
			//Validate that Image Left Right dropdown is clicked from settings.
		sts = await EditorPlayer.click_dndimagePlacement_btn();
		await assertion.assertEqual(sts, true, "dndimagePlacement_btn is not clicked");
	},
	ASE_DND_TC_31: async function (testdata) {
			//Validate that Left Right option is clicked from image setting dropdown.
		sts = await EditorPlayer.click_dndimageleftRight_btn();
		await assertion.assertEqual(sts, true, "dndimageleftRight_btn is not clicked");
	},
	ASE_DND_TC_32: async function (testdata) {
		//Validate that Top Bottom option is clicked from image setting dropdown.
		sts = await EditorPlayer.click_dndimagetopBottom_btn(testdata);
		await assertion.assertEqual(sts, true, "dndimagetopBottom_btn is not clicked");
	},
	ASE_COM_TC_42: async function (testdata) {
		sts = await EditorPlayer.setQuestionText(testdata);
		await assertion.assertEqual(sts, true, "question text is not set");
	},
	ASE_COM_TC_15: async function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = await EditorPlayer.clickAddVideoBtn();
		await assertion.assertEqual(sts, true, "Video btn is not clicked"); //
		sts = await EditorPlayer.setVideoMediaURL(testdata);
		await assertion.assertEqual(sts, true, "Video Media url is not set");

	},
	ASE_COM_TC_16: async function (testdata) {
		//Validate that alphanumeric text is supported in Question Title Text.
		sts = await EditorPlayer.setVideoCredit(testdata);
		await assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},

	//"Add item pair options in a question Click on Add Pair"
	ASE_MAT_TC_13: async function () {
		sts = await EditorPlayer.clickAddPairBtn();
		await assertion.assertEqual(sts, true, "Add Pair button is not clicked");
	},
	//Add text in left itmes
	ASE_MAT_TC_14: async function (testdata) {
		sts = await EditorPlayer.setItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not set correctly");
		}
	},
	//Add text in matched itmes
	ASE_MAT_TC_15: async function (testdata) {
		sts = await EditorPlayer.setMatchedItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not matched correctly");
		}
	},
	//Validate that the user can add a label in the Response Template
	ASE_DND_TC_9: async function (testdata) {
		sts = await EditorPlayer.clickAddLabelBtn(testdata)
		await assertion.assertEqual(sts, true, "Add label button is not clicked");
	},

	ASE_COM_TC_9: async function (testdata) {
		sts = await EditorPlayer.clickAddInstructionBtn();
		await assertion.assertEqual(sts, true, "Instruction tab is not clicked");
		sts = await EditorPlayer.setQuestionInstruction(testdata);
		await assertion.assertEqual(sts, true, "Question Instruction status mismatch");
	},
	//Validate that user is able to add group if group count is less than 10

	ASE_CLS_TC_2: async function () {
		sts = await EditorPlayer.clickAddGroupBtn();
		await assertion.assertEqual(sts, true, "Add Group button is not clicked");
	},

	//Validate that user is able to add option if total option count is less than 15
	ASE_CLS_TC_13: async function (testdata) {
		sts = await EditorPlayer.clickAddOptionBtn(testdata);
		await assertion.assertEqual(sts, true, "Add Option button is not clicked");
	},
	//Validate that special characters are allowed in Group Name.
	ASE_CLS_TC_9: async function (testdata) {
		sts = await EditorPlayer.setClassifyGroups(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Groups" + i + " is not set correctly");
		}
	},
	//Validate that alphanumeric characters are allowed in option Name.
	ASE_CLS_TC_21: async function (testdata) {
		sts = await EditorPlayer.setClassifyOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Options" + i + " is not set correctly");
		}
	},
	//Validate that user should be able to select group for an option.
	ASE_CLS_TC_17: async function (testdata) {
		sts = await EditorPlayer.selectGroupsForOptions(testdata[0], testdata[1], testdata[2]);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[0][i], "Group option" + i + " is not set correctly");
		}
	},

	//click preview button
	ASE_COM_TC_997: async function () {
		sts = await EditorPlayer.clickPreviewBtn();
		await assertion.assertEqual(sts, true, "Preview button status mismatch");
	},

	//click preview tab
	ASE_COM_TC_998: async function () {
		sts = await EditorPlayer.clickPreviewPublishTab();
		await assertion.assertEqual(sts, true, "Preview tab status mismatch");
	},

	//click save and return button
	ASE_COM_TC_999: async function () {
		sts = await EditorPlayer.clickSaveandReturnBtn();
		await assertion.assertEqual(sts, true, "Error in save and return");
		//assertion.assert((sts instanceof Error) === true, "Error in save and return - " + sts);
		await browser.switchWindow(global.appUrl);
	},


	//Click on Question Tab
	/*ASE_SET_TC_15: async function (testdata) {
		sts = EditorPlayer.clickQuestionTab();
		//assertion.assertEqual(sts, true, "Question tab is not clicked");
		sts = EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
		sts = EditorPlayer.clickEditorTab();
		//assertion.assertEqual(sts, true, "Editor tab is not clicked");
	},*/

	//Select MCQ question
	EDIT_TC_5: async function (testdata) {
		sts = await EditorPlayer.clickAddQuestionBtn();
		//assertion.assertEqual(sts, true, "Question tab is not clicked");
		sts = await EditorPlayer.selectItemPlayerBtn(testdata);
		//assertion.assertEqual(sts, true, "item Player btn is not clicked");
		sts = await EditorPlayer.click_AddQuestion_Dialog_Ok_Button();
		//assertion.assertEqual(sts, true, "Ok btn is not clicked");
	},

	//Click add Question Button
	EDIT_TC_6: async function (testdata) {
		sts = await EditorPlayer.clickDrawerQuestionNumber(testdata);
		await assertion.assertEqual(sts, true, "Question Drawer Tab is not clicked");
	},

	//add question title
	EDIT_TC_7: async function (testdata) {
		sts = await EditorPlayer.setQuestionTitle(testdata);
		await assertion.assertEqual(sts, true, "Question title status mismatch");
	},
	//add instruction

	//add video
	EDIT_TC_9: async function (testdata) {
		sts = await EditorPlayer.clickAddVideoBtn();
		await assertion.assertEqual(sts, true, "Video btn is not clicked"); //
		sts = await EditorPlayer.setVideoMediaURL(testdata[0]);
		await assertion.assertEqual(sts, true, "Video Media url is not set");
		sts = await EditorPlayer.setVideoCredit(testdata[1]);
		await assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},
	//add image
	EDIT_TC_10: async function (testdata) {
		sts = await EditorPlayer.clickAddImageBtn();
		await assertion.assertEqual(sts, true, "Image btn is not clicked");
		sts = await EditorPlayer.imageUpload(testdata[0]);
		await assertion.assertEqual(sts, true, "Image Upload is not updated");
		sts = await EditorPlayer.setImageCredit(testdata[1]);
		await assertion.assertEqual(sts, true, "Vedio Credit is not set");
	},
	EDIT_TC_10_DND: async function (testdata) {
		sts = await EditorPlayer.imageUpload(testdata);
		await assertion.assertEqual(sts, true, "Image Upload is not updated");
	},
	//add audio
	EDIT_TC_11: async function (testdata) {
		sts = await EditorPlayer.clickAddAudioBtn();
		await assertion.assertEqual(sts, true, "Audio btn is not clicked");
		sts = await EditorPlayer.audioUpload(testdata[0]);
		await assertion.assertEqual(sts, true, "Audio is not uploaded");
		sts = await EditorPlayer.setAudioCredit(testdata[1]);
		await assertion.assertEqual(sts, true, "Audio Credit is not set");
	},
	//add Question Text
	EDIT_TC_12: async function (testdata) {
		sts = await EditorPlayer.setQuestionText(testdata);
		await assertion.assertEqual(sts, true, "question text is not set");
	},

	EDIT_TC_13: async function (testdata) {
		sts = await EditorPlayer.clickAddAnswerMCQSRBtn(testdata[0]);
		await assertion.assertEqual(sts, true, "Answer button is not clicked");
	},

	EDIT_TC_14: async function (testdata) {
		sts = await EditorPlayer.setOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},


	EDIT_TC_16: async function (testdata) {
		sts = await EditorPlayer.selectCorrectOptions(testdata)
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "option" + i + " is not set correctly");
		}
	},

	EDIT_TC_17: async function (testdata) {
		sts = await EditorPlayer.selectOptionStyle(testdata);
		await assertion.assertEqual(sts, true, "Option Style is not clicked");
	},

	EDIT_TC_18: async function () {
		sts = await EditorPlayer.dragLabel();
	},

	EDIT_TC_19: async function (testdata) {
		sts = await EditorPlayer.clickAddBlank(testdata);
		await assertion.assertEqual(sts, true, "Add Blank button is not clicked");
	},

	ASE_MAT_TC_13: async function () {
		sts = await EditorPlayer.clickAddPairBtn();
		await assertion.assertEqual(sts, true, "Add Pair button is not clicked");
	},

	EDIT_TC_21: async function (testdata) {
		sts = await EditorPlayer.setItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not set correctly");
		}
	},

	EDIT_TC_22: async function (testdata) {
		sts = await EditorPlayer.setMatchedItems(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Items" + i + " is not matched correctly");
		}
	},


	EDIT_TC_25: async function (testdata) {
		sts = await EditorPlayer.setClassifyGroups(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Groups" + i + " is not set correctly");
		}
	},

	EDIT_TC_26: async function (testdata) {
		sts = await EditorPlayer.setClassifyOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Options" + i + " is not set correctly");
		}
	},

	EDIT_TC_27: async function (testdata) {
		sts = await EditorPlayer.selectGroupsForOptions(testdata);
		for (i = 1; i <= testdata.length; i++) {
			await assertion.assertEqual(sts[i], testdata[i], "Group option" + i + " is not set correctly");
		}
	},

	EDIT_TC_100: async function () {
		sts = await EditorPlayer.clickPreviewBtn()
		await assertion.assertEqual(sts, true, "Preview button is not clicked");
	},
	//set question text for writing player
	ASE_COM_TC_1000: async function (testdata) {
		sts = await EditorPlayer.setQuestionTextinwriting(testdata)
		await assertion.assertEqual(sts, true, "Question text  mismatch");

	},
	ASE_COM_TC_1001: async function (testdata) {
		sts = await EditorPlayer.setHeaderTextinPlaceHolder(testdata)
		await assertion.assertEqual(sts, true, "Question text  mismatch");

	},
	ASE_COM_TC_1002: async function (testdata) {
		sts = await EditorPlayer.setInsTextinPlaceHolder(testdata)
		await assertion.assertEqual(sts, true, "Question text  mismatch");

	},

	ASE_COM_TC_1003: async function () {
		sts = await EditorPlayer.clickNextBtn()
		await assertion.assertEqual(sts, true, "Next Question clicked");

	},
	ASE_COM_TC_1004: async function () {
		sts = await EditorPlayer.deleteMediabtn()
		await assertion.assertEqual(sts, true, "Delete Media Clicked");

	},
	ASE_COM_TC_1005: async function () {
		sts = await EditorPlayer.clickEditPrompt_Btn()
		await assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1006: async function (testdata) {
		sts = await EditorPlayer.setPromptTextPlaceHolder(testdata)
		await assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1007: async function (testdata) {
		sts = await EditorPlayer.clickeditSubQuestionbtn(testdata[0])
		await assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1009: async function (testdata) {
		sts = await EditorPlayer.setSubQuestiontxt(testdata)
		await assertion.assertEqual(sts, true, "setSubQuestiontxt");
	},
	ASE_COM_TC_1099: async function (testdata) {
		sts = await EditorPlayer.setOptionCheckbox(testdata)
		await assertion.assertEqual(sts, true, "setOptionCheckbox button");
	},
	ASE_COM_TC_1098: async function (testdata) {
		sts = await EditorPlayer.setOptionRadio(testdata)
		await assertion.assertEqual(sts, true, "setOptionCheckbox button");
	},
	ASE_COM_TC_1008: async function (testdata) {
		sts = await EditorPlayer.setOptiontxt(testdata)
		await assertion.assertEqual(sts, true, "Edit Prompt button");
	},
	ASE_COM_TC_1010: async function () {
		sts = await EditorPlayer.clickTopBottombtn()
		await assertion.assertEqual(sts, true, "Top Bottpm button clicked");
	},
	ASE_COM_TC_1011: async function () {
		sts = await EditorPlayer.clickLeftRightbtn()
		await assertion.assertEqual(sts, true, "Left Right option button clicked");
	},
	ASE_COM_TC_1012: async function (testdata) {
		sts = await EditorPlayer.setScorePlaceHolder(testdata)
		await assertion.assertEqual(sts, true, "Left Right option button clicked");
	},
	ASE_COM_TC_1013: async function () {
		sts = await EditorPlayer.clickAddAnswerBtnComman()
		await assertion.assertEqual(sts, true, "Add Answer button clicked");
	},
	ASE_COM_TC_1014: async function () {
		sts = await EditorPlayer.clickDonebtn()
		await assertion.assertEqual(sts, true, "Done button clicked");
	},
	ASE_COM_TC_1015: async function () {
		sts = await EditorPlayer.clickAddSubquestion()
		await assertion.assertEqual(sts, true, "Done button clicked");
	},
	ASE_COM_TC_1016: async function () {
		sts = await EditorPlayer.clickshufflingCheckBox()
		await assertion.assertEqual(sts, true, "shufflingCheckBox is checked");
	},
	ASE_FIBDROPDOWN_TC_1013: async function (testdata) {
		sts = await EditorPlayer.clickUniqueOption(testdata)
		await assertion.assertEqual(sts, true, "unique option button clicked");
	},
	ASE_FIBDROPDOWN_TC_1014: async function () {
		sts = await EditorPlayer.clickCommonOption()
		await assertion.assertEqual(sts, true, "common option button clicked");
	},
	ASE_FIBDROPDOWN_TC_1015: async function (testdata) {
		sts = await EditorPlayer.setinputOptionText(testdata)
		await assertion.assertEqual(sts, true, "input option is not added");
	},
	ASE_FIBDROPDOWN_TC_1016: async function (testdata) {
		sts = await EditorPlayer.setresponseOptionText(testdata)
		await assertion.assertEqual(sts, true, "response option is not added");
	},
	ASE_WRITING_TC_1: async function (testdata) {
		sts = await EditorPlayer.setRowsNumber(testdata[0],testdata[1])
		await assertion.assertEqual(sts, true, "Row Number is not added");
	},
	ASE_WRITING_TC_2: async function (testdata) {
		sts = await EditorPlayer.setCharacterLimit(testdata[0],testdata[2])
		await assertion.assertEqual(sts, true, "CharacterLimit is not added");
	},
	ASE_WRITING_TC_3: async function (testdata) {
		sts = await EditorPlayer.setPlaceHolderText(testdata[0],testdata[3])
		await assertion.assertEqual(sts, true, "placeHolderText is not added");
	},
	ASE_WRITING_TC_4: async function (testdata) {
		console.log(testdata)
		sts = await EditorPlayer.click_AllowRichTextMedia(testdata[0])
		await assertion.assertEqual(sts, true, "allowrichTextMedia is not checked");
	},
	ASE_WRITING_TC_5: async function (testdata) {
		sts = await EditorPlayer.click_AllowFileAttachment(testdata[0])
		await assertion.assertEqual(sts, true, "allowFileAttachment is not checked");
	},
	ASE_COM_TC_1017: async function () {
		sts = await EditorPlayer.clickAddBlankCKEditor()
		await assertion.assertEqual(sts, true, "Blank is added");
	},
	ASE_COM_TC_1018: async function () {
		sts = await EditorPlayer.click_instruction_boldbtn()
		await assertion.assertEqual(sts, true, "click_instruction_boldbtn clicked");
	},
	ASE_COM_TC_1019: async function () {
		sts = await EditorPlayer.click_instruction_italicbtn()
		await assertion.assertEqual(sts, true, "click_instruction_italicbtn clicked");
	},

	ASE_COM_TC_1020: async function () {
		sts = await EditorPlayer.click_instruction_underlinebtn()
		await assertion.assertEqual(sts, true, "click_instruction_underlinebtn clicked");
	},

	ASE_COM_TC_1021: async function () {
		sts = await EditorPlayer.click_instruction_bulletmenuList()
		await assertion.assertEqual(sts, true, "click_instruction_bulletmenuList clicked");
	},
	ASE_COM_TC_1022: async function () {
		sts = await EditorPlayer.click_instruction_numberListmenudropdownbtn()
		await assertion.assertEqual(sts, true, "instruction_numberListmenudropdownbtn clicked");
	},
	ASE_COM_TC_1023: async function () {
		sts = await EditorPlayer.click_instruction_numbermenuList()
		await assertion.assertEqual(sts, true, "instruction_numbermenuList clicked");
	},
	ASE_COM_TC_1024: async function (testdata) {
		sts = await EditorPlayer.click_instruction_numbermenuItem(testdata)
		await assertion.assertEqual(sts, true, "instruction_numbermenuItem clicked");
	},
	ASE_COM_TC_1025: async function () {
		sts = await EditorPlayer.click_instruction_bulletListmenudropdownbtn()
		await assertion.assertEqual(sts, true, "instruction_bulletListmenudropdownbtn clicked");
	},
	ASE_COM_TC_1026: async function () {
		sts = await EditorPlayer.click_instruction_bulletmenuItem()
		await assertion.assertEqual(sts, true, "instruction_bulletmenuItem clicked");
	},
	ASE_COM_TC_1027: async function () {
		sts = await EditorPlayer.click_instruction_languagebtn()
		await assertion.assertEqual(sts, true, "instruction_languagebtn clicked");
	},
	ASE_COM_TC_1028: async function () {
		sts = await EditorPlayer.click_instruction_languagedropdownvalue()
		await assertion.assertEqual(sts, true, "click_instruction_languagedropdownvalue clicked");
	},
	ASE_COM_TC_1029: async function () {
		sts = await EditorPlayer.click_instruction_langbtn()
		await assertion.assertEqual(sts, true, "instruction_langbtn clicked");
	},
	ASE_COM_TC_1030: async function () {
		sts = await EditorPlayer.click_instruction_undobtn()
		await assertion.assertEqual(sts, true, "Instruction_undobtn clicked");
	},
	ASE_COM_TC_1031: async function () {
		sts = await EditorPlayer.click_instruction_redobtn()
		await assertion.assertEqual(sts, true, "instruction_bulletListmenudropdownbtnclicked");
	},
	ASE_COM_TC_1032: async function () {
		sts = await EditorPlayer.clickinstructionEditbtn()
		await assertion.assertEqual(sts, true, "instruction Edit button is notlicked");
	},
	ASE_COM_TC_1033: async function () {
		sts = await EditorPlayer.clickEditHeaderbtn()
		await assertion.assertEqual(sts, true, "Header Edit button is not clicked");
	},
	ASE_COM_TC_1034: async function () {
		sts = await EditorPlayer.click_header_headingdropdownbtn()
		await assertion.assertEqual(sts, true, "header_headingdropdownbtn clicked");
	},
	ASE_COM_TC_1035: async function () {
		sts = await EditorPlayer.click_header_headingtoolbarvaluebtn()
		await assertion.assertEqual(sts, true, "headingtoolbarvaluebtn clicked");
	},

	ASE_COM_TC_1036: async function () {
		sts = await EditorPlayer.click_header_boldbtn()
		await assertion.assertEqual(sts, true, "Header Bold is not  clicked");
	},
	ASE_COM_TC_1037: async function () {
		sts = await EditorPlayer.click_header_italicbtn()
		await assertion.assertEqual(sts, true, "Header Italic is not  clicked");
	},
	ASE_COM_TC_1038: async function () {
		sts = await EditorPlayer.click_header_underlinebtn()
		await assertion.assertEqual(sts, true, "Header underline is not  clicked");
	},

	ASE_COM_TC_1039: async function () {
		sts = await EditorPlayer.click_header_languagebtn()
		await assertion.assertEqual(sts, true, "Haeder Language button not clicked");
	},
	ASE_COM_TC_1040: async function () {
		sts = await EditorPlayer.click_header_languagedropdownvaluebtn()
		await assertion.assertEqual(sts, true, "Header Language dropdown is not  clicked");
	},
	ASE_COM_TC_1041: async function () {
		sts = await EditorPlayer.click_header_langbtn()
		await assertion.assertEqual(sts, true, "Header Lang is not  clicked");
	},
	ASE_COM_TC_1042: async function () {
		sts = await EditorPlayer.click_header_undobtn()
		await assertion.assertEqual(sts, true, "Header undo is not  clicked");
	},

	ASE_COM_TC_1043: async function () {
		sts = await EditorPlayer.click_header_redobtn()
		await assertion.assertEqual(sts, true, "Haeder redo button not clicked");
	},
	ASE_COM_TC_1044: async function () {
		sts = await EditorPlayer.click_prompt_headerdropdownbtn()
		await assertion.assertEqual(sts, true, "prompt_headerdropdownbtn is not clicked");
	},
	ASE_COM_TC_1045: async function () {
		sts = await EditorPlayer.click_prompt_headingtoolbarvaluebtn()
		await assertion.assertEqual(sts, true, "Prompt headingtoolbarvaluebtn is not clicked");
	},

	ASE_COM_TC_1046: async function () {
		sts = await EditorPlayer.click_prompt_boldbtn()
		await assertion.assertEqual(sts, true, "Prompt Bold is not  clicked");
	},
	ASE_COM_TC_1047: async function () {
		sts = await EditorPlayer.click_prompt_italicbtn()
		await assertion.assertEqual(sts, true, "Prompt Italic is not  clicked");
	},
	ASE_COM_TC_1048: async function () {
		sts = await EditorPlayer.click_prompt_underlinebtn()
		await assertion.assertEqual(sts, true, "Prompt underline is not  clicked");
	},

	ASE_COM_TC_1049: async function () {
		sts = await EditorPlayer.click_prompt_languagebtn()
		await assertion.assertEqual(sts, true, "Prompt Language button not clicked");
	},
	ASE_COM_TC_1050: async function () {
		sts = await EditorPlayer.click_prompt_languagedropdownvaluebtn()
		await assertion.assertEqual(sts, true, "Prompt Language dropdown is not  clicked");
	},
	ASE_COM_TC_1051: async function () {
		sts = await EditorPlayer.click_prompt_langbtn()
		await assertion.assertEqual(sts, true, "Prompt Lang is not  clicked");
	},
	ASE_COM_TC_1052: async function () {
		sts = await EditorPlayer.click_prompt_undobtn()
		await assertion.assertEqual(sts, true, "Prompt undo is not  clicked");
	},

	ASE_COM_TC_1053: async function () {
		sts = await EditorPlayer.click_prompt_redobtn()
		await assertion.assertEqual(sts, true, "Prompt redo button not clicked");
	},
	ASE_COM_TC_1054: async function () {
		sts = await EditorPlayer.click_prompt_blockQuotebtn()
		await assertion.assertEqual(sts, true, "Prompt Block quotes is not  clicked");
	},

	ASE_COM_TC_1055: async function () {
		sts = await EditorPlayer.click_prompt_linebtn()
		await assertion.assertEqual(sts, true, "Prompt Line button not clicked");
	},

	// need to check this funtion workflow
	ASE_COM_TC_1056: async function () {
		sts = await EditorPlayer.click_prompt_tabledropdownbtn()
		await assertion.assertEqual(sts, true, "Prompt tabledropdownbtn is not  clicked");
	},
	ASE_COM_TC_1057: async function () {
		sts = await EditorPlayer.click_prompt_imagebtn()
		await assertion.assertEqual(sts, true, "Prompt img is not  clicked");
	},
	ASE_COM_TC_1058: async function () {
		sts = await EditorPlayer.click_prompt_bulletmenuItembtn()
		await assertion.assertEqual(sts, true, "Prompt bulletmenuItembtn is not  clicked");
	},

	ASE_COM_TC_1059: async function () {
		sts = await EditorPlayer.click_prompt_numbermenuItembtn()
		await assertion.assertEqual(sts, true, "Prompt number menu Item button not clicked");
	},
	ASE_COM_TC_1060: async function () {
		sts = await EditorPlayer.click_prompt_bulletListmenudropdownbtn()
		await assertion.assertEqual(sts, true, "Prompt bullet List menu dropdown btn is not  clicked");
	},
	ASE_COM_TC_1061: async function () {
		sts = await EditorPlayer.click_prompt_numbermenuListbtn()
		await assertion.assertEqual(sts, true, "Prompt number menu List btn is not  clicked");
	},
	ASE_COM_TC_1062: async function () {
		sts = await EditorPlayer.click_prompt_numberListmenudropdownbtn()
		await assertion.assertEqual(sts, true, "Prompt number List menu dropdown btn is not  clicked");
	},
	ASE_COM_TC_1063: async function () {
		sts = await EditorPlayer.click_prompt_bulletmenuListbtn()
		await assertion.assertEqual(sts, true, "Prompt bullet List menu is not  clicked");
	},
	ASE_COM_TC_1064: async function () {
		sts = await EditorPlayer.clickCtrlA()
		await assertion.assertEqual(sts, true, "ctrl+A is not  clicked");
	},
	ASE_COM_TC_1065: async function (testdata) {
		sts = await EditorPlayer.clickOptionEditbutton(testdata)
		await assertion.assertEqual(sts, true, "Edit Subquestion Option  button");
	},
	ASE_COM_TC_1066: async function () {
		sts = await EditorPlayer.click_subQuestion_boldbtn()
		await assertion.assertEqual(sts, true, "subQuestion Bold is not  clicked");
	},
	ASE_COM_TC_1067: async function () {
		sts = await EditorPlayer.click_subQuestion_italicbtn()
		await assertion.assertEqual(sts, true, "subQuestion Italic is not  clicked");
	},
	ASE_COM_TC_1068: async function () {
		sts = await EditorPlayer.click_subQuestion_underlinebtn()
		await assertion.assertEqual(sts, true, "subQuestion underline is not  clicked");
	},

	ASE_COM_TC_1069: async function () {
		sts = await EditorPlayer.click_subQuestion_languagebtn()
		await assertion.assertEqual(sts, true, "subQuestion Language button not clicked");
	},
	ASE_COM_TC_1070: async function () {
		sts = await EditorPlayer.click_subQuestion_languagedropdownvaluebtn()
		await assertion.assertEqual(sts, true, "subQuestion Language dropdown is not  clicked");
	},
	ASE_COM_TC_1071: async function () {
		sts = await EditorPlayer.click_subQuestion_langbtn()
		await assertion.assertEqual(sts, true, "subQuestion Lang is not  clicked");
	},
	ASE_COM_TC_1072: async function () {
		sts = await EditorPlayer.click_subQuestion_undobtn()
		await assertion.assertEqual(sts, true, "subQuestion undo is not  clicked");
	},

	ASE_COM_TC_1073: async function () {
		sts = await EditorPlayer.click_subQuestion_redobtn()
		await assertion.assertEqual(sts, true, "subQuestion redo button not clicked");
	},
	ASE_COM_TC_1074: async function () {
		sts = await EditorPlayer.click_subQuestion_blockQuotebtn()
		await assertion.assertEqual(sts, true, "subQuestion Block quotes is not  clicked");
	},

	ASE_COM_TC_1075: async function () {
		sts = await EditorPlayer.click_subQuestion_linebtn()
		await assertion.assertEqual(sts, true, "subQuestion Line button not clicked");
	},

	// need to check this funtion workflow
	ASE_COM_TC_1076: async function () {
		sts = await EditorPlayer.click_subQuestion_tabledropdownbtn()
		await assertion.assertEqual(sts, true, "subQuestion tabledropdownbtn is not  clicked");
	},
	ASE_COM_TC_1077: async function () {
		sts = await EditorPlayer.click_subQuestionOption_boldbtn()
		await assertion.assertEqual(sts, true, "subQuestion Bold is not  clicked");
	},
	ASE_COM_TC_1078: async function () {
		sts = await EditorPlayer.click_subQuestionOption_italicbtn()
		await assertion.assertEqual(sts, true, "subQuestion Italic is not  clicked");
	},
	ASE_COM_TC_1079: async function () {
		sts = await EditorPlayer.click_subQuestionOption_languagebtn()
		await assertion.assertEqual(sts, true, "subQuestion underline is not  clicked");
	},

	ASE_COM_TC_1080: async function () {
		sts = await EditorPlayer.click_subQuestionOption_languagebtn()
		await assertion.assertEqual(sts, true, "subQuestion Language button not clicked");
	},
	ASE_COM_TC_1081: async function () {
		sts = await EditorPlayer.click_subQuestionOption_languagedropdownvaluebtn()
		await assertion.assertEqual(sts, true, "subQuestion Language dropdown is not  clicked");
	},
	ASE_COM_TC_1082: async function () {
		sts = await EditorPlayer.click_subQuestionOption_langbtn()
		await assertion.assertEqual(sts, true, "subQuestion Lang is not  clicked");
	},
	ASE_COM_TC_1083: async function () {
		sts = await EditorPlayer.click_subQuestionOption_undobtn()
		await assertion.assertEqual(sts, true, "subQuestion undo is not  clicked");
	},

	ASE_COM_TC_1084: async function () {
		sts = await EditorPlayer.click_subQuestionOption_redobtn()
		await assertion.assertEqual(sts, true, "subQuestion redo button not clicked");
	},
}
