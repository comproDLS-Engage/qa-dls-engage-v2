"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const path = require('path');

var res, obj;

// rename this file to itemEditor.page.js - akhil

module.exports = {

	nextbtn: selectorFile.css.quizpage.nextbtn,
	editor_tab: selectorFile.css.quizpage.editor_tab,
	previewPublish_tab: selectorFile.css.quizpage.previewPublish_tab,
	ok_btn: selectorFile.css.quizpage.ok_btn,
	itemPlayer_btn: selectorFile.css.quizpage.itemPlayer_btn,
	//editor
	drawerQuestion: selectorFile.css.editorTab.drawerQuestion,
	questionType_header: selectorFile.css.editorTab.questionType_header,
	questionAccordionText: selectorFile.css.editorTab.questionAccordionText,
	answerAccordionText: selectorFile.css.editorTab.answerAccordionText,
	scoringAccordionText: selectorFile.css.editorTab.scoringAccordionText,
	hintAccordionText: selectorFile.css.editorTab.hintAccordionText,
	addQuestion_btn: selectorFile.css.editorTab.addQuestion_btn,
	addQuestionGrid: selectorFile.css.editorTab.addQuestionGrid,
	questionTitle_input: selectorFile.css.editorTab.questionTitle_input,
	addInstruction_btn: selectorFile.css.editorTab.addInstruction_btn,
	instruction_input: selectorFile.css.editorTab.instruction_input,
	addVideo_btn: selectorFile.css.editorTab.addVideo_btn,
	videoURL_input: selectorFile.css.editorTab.videoURL_input,
	videoType_btn: selectorFile.css.editorTab.videoType_btn,
	videoCredit_input: selectorFile.css.editorTab.videoCredit_input,
	media_input: selectorFile.css.editorTab.media_input,
	addImage_btn: selectorFile.css.editorTab.addImage_btn,
	uploadedImage: selectorFile.css.editorTab.uploadedImage,
	imageCredit_input: selectorFile.css.editorTab.imageCredit_input,
	addAudio_btn: selectorFile.css.editorTab.addAudio_btn,
	uploadedAudio: selectorFile.css.editorTab.uploadedAudio,
	audioCredit_input: selectorFile.css.editorTab.audioCredit_input,
	questionInputField: selectorFile.css.editorTab.questionInputField,
	addAnswer_btn: selectorFile.css.editorTab.addAnswer_btn,
	inputOptions: selectorFile.css.editorTab.inputOptions,
	preview_btn: selectorFile.css.editorTab.preview_btn,
	checkboxOption_input: selectorFile.css.editorTab.multipleResponse.checkboxOption_input,
	optionStyle_radio: selectorFile.css.editorTab.optionStyle_radio,
	addLabel_btn: selectorFile.css.editorTab.DND.addLabel_btn,
	//addImage_btn: selectorFile.css.editorTab.DND.addImage_btn,
	container_labelA: selectorFile.css.editorTab.DND.container_labelA,
	container_labelB: selectorFile.css.editorTab.DND.container_labelB,
	container_labelC: selectorFile.css.editorTab.DND.container_labelC,
	container_labelD: selectorFile.css.editorTab.DND.container_labelD,
	container_labelE: selectorFile.css.editorTab.DND.container_labelE,
	addBlank_btn: selectorFile.css.editorTab.DND_image.addBlank_btn,
	questionText_input: selectorFile.css.editorTab.DND_image.questionText_input,
	questionInputField: selectorFile.css.editorTab.questionInputField,
	inputItem: selectorFile.css.editorTab.matching.inputItem,
	inputMatchedItem: selectorFile.css.editorTab.matching.inputMatchedItem,
	addPair: selectorFile.css.editorTab.matching.addPair,
	group_input: selectorFile.css.editorTab.classify.group_input,
	options_input: selectorFile.css.editorTab.classify.options_input,
	addGroup_btn: selectorFile.css.editorTab.classify.addGroup_btn,
	addOption_btn: selectorFile.css.editorTab.classify.addOption_btn,
	editorsel: selectorFile.css.editorTab,
	fibAnswerOption: selectorFile.css.editorTab.fib.fibAnswerOption,
	createQuestion_btn: selectorFile.css.editorTab.createQuestion_btn,
	headerEdit_btn: selectorFile.css.editorTab.headerEdit_btn,
	instructionEdit_btn: selectorFile.css.editorTab.instructionEdit_btn,
	placeHolder_txt: selectorFile.css.editorTab.placeHolder_txt,
	placeHolderHeader_txt: selectorFile.css.editorTab.placeHolderHeader_txt,
	placeHolderIns_txt: selectorFile.css.editorTab.placeHolderIns_txt,
	done_btn: selectorFile.css.editorTab.done_btn,
	nextqun_btn: selectorFile.css.editorTab.nextqun_btn,
	deleteMedia_btn: selectorFile.css.editorTab.deleteMedia_btn,
	editPrompt_btn: selectorFile.css.editorTab.editPrompt_btn,
	editSubQuestion_btn: selectorFile.css.editorTab.editSubQuestion_btn,
	subOptionIndex: selectorFile.css.editorTab.subOptionIndex,
	subOptionCheckBoxIndex: selectorFile.css.editorTab.subOptionCheckBoxIndex,
	subOptionRadioIndex: selectorFile.css.editorTab.subOptionRadioIndex,
	subOptionValue: selectorFile.css.editorTab.subOptionValue,
	subOptiontext: selectorFile.css.editorTab.subOptiontext,
	topsbottomOption: selectorFile.css.editorTab.topsbottomOption,
	leftRightOption: selectorFile.css.editorTab.leftRightOption,
	addMoreButton: selectorFile.css.editorTab.addMoreButton,
	scoreInputBox: selectorFile.css.editorTab.scoreInputBox,
	addSubqun_btn: selectorFile.css.editorTab.addSubqun_btn,
	uniqueOption: selectorFile.css.editorTab.fibdropdown.uniqueOption,
	commonOption: selectorFile.css.editorTab.fibdropdown.commonOption,
	inputOption: selectorFile.css.editorTab.fibdropdown.inputOption,
	responseOption: selectorFile.css.editorTab.fibdropdown.responseOption,
	addAnswerbtn: selectorFile.css.editorTab.addAnswerbtn,
	rowNumber: selectorFile.css.editorTab.writing.rowNumber,
	characterLimit: selectorFile.css.editorTab.writing.characterLimit,
	placeHolderText: selectorFile.css.editorTab.writing.placeHolderText,
	allowrichTextMedia: selectorFile.css.editorTab.writing.allowrichTextMedia,
	allowFileAttachment: selectorFile.css.editorTab.writing.allowFileAttachment,
	responseEdit: selectorFile.css.editorTab.responseEdit,
	responseTextArea: selectorFile.css.editorTab.responseTextArea,
	textAreabtn: selectorFile.css.editorTab.textAreabtn,
	shufflingCheckBox: selectorFile.css.editorTab.shufflingCheckBox,
	instruction_boldbtn: selectorFile.css.editorTab.instruction_formatting.instruction_boldbtn,
	instruction_italicbtn: selectorFile.css.editorTab.instruction_formatting.instruction_italicbtn,
	instruction_underlinebtn: selectorFile.css.editorTab.instruction_formatting.instruction_underlinebtn,
	instruction_numberListmenudropdownbtn: selectorFile.css.editorTab.instruction_formatting.instruction_numberListmenudropdownbtn,
	instruction_numbermenuList: selectorFile.css.editorTab.instruction_formatting.instruction_numbermenuList,
	instruction_numbermenuItem: selectorFile.css.editorTab.instruction_formatting.instruction_numbermenuItem,
	instruction_bulletListmenudropdownbtn: selectorFile.css.editorTab.instruction_formatting.instruction_bulletListmenudropdownbtn,
	instruction_bulletmenuList: selectorFile.css.editorTab.instruction_formatting.instruction_bulletmenuList,
	instruction_bulletmenuItem: selectorFile.css.editorTab.instruction_formatting.instruction_bulletmenuItem,
	instruction_languageClick: selectorFile.css.editorTab.instruction_formatting.instruction_languagebtn,
	instruction_languagedropdoenvalue: selectorFile.css.editorTab.instruction_formatting.instruction_languagedropdoenvalue,
	instruction_langbtn: selectorFile.css.editorTab.instruction_formatting.instruction_langbtn,
	instruction_undobtn: selectorFile.css.editorTab.instruction_formatting.instruction_undobtn,
	instruction_redobtn: selectorFile.css.editorTab.instruction_formatting.instruction_redobtn,
	header_headingdropdownbtn: selectorFile.css.editorTab.headerFormatting.header_headingdropdownbtn,
	header_headingtoolbarvaluebtn: selectorFile.css.editorTab.headerFormatting.header_headingtoolbarvaluebtn,
	header_boldbtn: selectorFile.css.editorTab.headerFormatting.header_boldbtn,
	header_italicbtn: selectorFile.css.editorTab.headerFormatting.header_italicbtn,
	header_underlinebtn: selectorFile.css.editorTab.headerFormatting.header_underlinebtn,
	header_languagebtn: selectorFile.css.editorTab.headerFormatting.header_languagebtn,
	header_languagedropdoenvaluebtn: selectorFile.css.editorTab.headerFormatting.header_languagedropdoenvaluebtn,
	header_langbtn: selectorFile.css.editorTab.headerFormatting.header_langbtn,
	header_undobtn: selectorFile.css.editorTab.headerFormatting.header_undobtn,
	header_redobtn: selectorFile.css.editorTab.headerFormatting.header_redobtn,
	prompt_headerdropdownbtn: selectorFile.css.editorTab.promptFormatting.prompt_headerdropdownbtn,
	prompt_headingtoolbarvaluebtn: selectorFile.css.editorTab.promptFormatting.prompt_headingtoolbarvaluebtn,
	prompt_boldbtn: selectorFile.css.editorTab.promptFormatting.prompt_boldbtn,
	prompt_italicbtn: selectorFile.css.editorTab.promptFormatting.prompt_italicbtn,
	prompt_underlinebtn: selectorFile.css.editorTab.promptFormatting.prompt_underlinebtn,
	prompt_numberListmenudropdownbtn: selectorFile.css.editorTab.promptFormatting.prompt_numberListmenudropdownbtn,
	prompt_numbermenuListbtn: selectorFile.css.editorTab.promptFormatting.prompt_numbermenuListbtn,
	prompt_numbermenuItembtn: selectorFile.css.editorTab.promptFormatting.prompt_numbermenuItembtn,
	prompt_bulletListmenudropdownbtn: selectorFile.css.editorTab.promptFormatting.prompt_bulletListmenudropdownbtn,
	prompt_bulletmenuListbtn: selectorFile.css.editorTab.promptFormatting.prompt_bulletmenuListbtn,
	prompt_bulletmenuItembtn: selectorFile.css.editorTab.promptFormatting.prompt_bulletmenuItembtn,
	prompt_languagebtn: selectorFile.css.editorTab.promptFormatting.prompt_languagebtn,
	prompt_languagedropdownvaluebtn: selectorFile.css.editorTab.promptFormatting.prompt_languagedropdownvaluebtn,
	prompt_langbtn: selectorFile.css.editorTab.promptFormatting.prompt_langbtn,
	prompt_imagebtn: selectorFile.css.editorTab.promptFormatting.prompt_imagebtn,
	prompt_tabledropdownbtn: selectorFile.css.editorTab.promptFormatting.prompt_tabledropdownbtn,
	prompt_linebtn: selectorFile.css.editorTab.promptFormatting.prompt_linebtn,
	prompt_blockQuotebtn: selectorFile.css.editorTab.promptFormatting.prompt_blockQuotebtn,
	prompt_undobtn: selectorFile.css.editorTab.promptFormatting.prompt_undobtn,
	prompt_redobtn: selectorFile.css.editorTab.promptFormatting.prompt_redobtn,
	subQuestion_boldbtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_boldbtn,
	subQuestion_italicbtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_italicbtn,
	subQuestion_underlinebtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_underlinebtn,
	subQuestion_languagebtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_languagebtn,
	subQuestion_languagedropdownvaluebtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_languagedropdownvaluebtn,
	subQuestion_langbtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_langbtn,
	subQuestion_tabledropdownbtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_tabledropdownbtn,
	subQuestion_linebtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_linebtn,
	subQuestion_blockQuotebtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_blockQuotebtn,
	subQuestion_undobtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_undobtn,
	subQuestion_redobtn: selectorFile.css.editorTab.subQuestionFormatting.subQuestion_redobtn,
	subQuestionOption_boldbtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_boldbtn,
	subQuestionOption_italicbtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_italicbtn,
	subQuestionOption_underlinebtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_underlinebtn,
	subQuestionOption_languagebtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_languagebtn,
	subQuestionOption_languagedropdownvaluebtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_languagedropdownvaluebtn,
	subQuestionOption_langbtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_langbtn,
	subQuestionOption_undobtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_undobtn,
	subQuestionOption_redobtn: selectorFile.css.editorTab.subQuestionOptionFormatting.subQuestionOption_redobtn,
	imagePlacement_btn: selectorFile.css.editorTab.DND_image.imagePlacement_btn,
	leftRight_btn: selectorFile.css.editorTab.DND_image.leftRight_btn,
	topBottom_btn: selectorFile.css.editorTab.DND_image.topBottom_btn,
	editMatchingItem: selectorFile.css.editorTab.matching.editMatchingItem,
	numberFormatiingbtn: selectorFile.css.editorTab.editorSettings.numberFormatiingbtn,
	numbertype1: selectorFile.css.editorTab.editorSettings.numbertype1,
	numbertype2: selectorFile.css.editorTab.editorSettings.numbertype2,
	numbertype3: selectorFile.css.editorTab.editorSettings.numbertype3,
	selectPositionRadiobtn: selectorFile.css.editorTab.editorSettings.selectPositionRadiobtn,
	insideImagebtn: selectorFile.css.editorTab.editorSettings.insideImagebtn,
	outsideImagebtn: selectorFile.css.editorTab.editorSettings.outsideImagebtn,
	selectPositionAnswerOptionbtn: selectorFile.css.editorTab.editorSettings.selectPositionAnswerOptionbtn,
	verticallybtn: selectorFile.css.editorTab.editorSettings.verticallybtn,
	horizontallybtn: selectorFile.css.editorTab.editorSettings.horizontallybtn,
	verticalLayoutbtn: selectorFile.css.editorTab.editorSettings.verticalLayoutbtn,
	sideBySideLayoutbtn: selectorFile.css.editorTab.editorSettings.sideBySideLayoutbtn,
	imagePlacementbtn: selectorFile.css.editorTab.editorSettings.imagePlacementbtn,
	leftRightbtn: selectorFile.css.editorTab.editorSettings.leftRightbtn,
	topBottombtn: selectorFile.css.editorTab.editorSettings.topBottombtn,
	responseAreaAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseAreaAlignmentbtn,
	responseAreaCenterAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseAreaCenterAlignmentbtn,
	responseAreaLeftAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseAreaLeftAlignmentbtn,
	answerOptionPlacementbtn: selectorFile.css.editorTab.editorSettings.answerOptionPlacementbtn,
	answerOptionBottomPlacementbtn: selectorFile.css.editorTab.editorSettings.answerOptionBottomPlacementbtn,
	answerOptionTopPlacementbtn: selectorFile.css.editorTab.editorSettings.answerOptionTopPlacementbtn,
	answerOptionRightPlacementbtn: selectorFile.css.editorTab.editorSettings.answerOptionRightPlacementbtn,
	responseInputTypebtn: selectorFile.css.editorTab.editorSettings.responseInputTypebtn,
	responseInputWordTypebtn: selectorFile.css.editorTab.editorSettings.responseInputWordTypebtn,
	responseInputCharacterTypebtn: selectorFile.css.editorTab.editorSettings.responseInputCharacterTypebtn,
	responseTextAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseTextAlignmentbtn,
	responseTextCenterAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseTextCenterAlignmentbtn,
	responseTextLeftAlignmentbtn: selectorFile.css.editorTab.editorSettings.responseTextLeftAlignmentbtn,
	dropdownWidthbtn: selectorFile.css.editorTab.editorSettings.dropdownWidthbtn,
	dropdownWidthfittoresponsebtn: selectorFile.css.editorTab.editorSettings.dropdownWidthfittoresponsebtn,
	dropdownWidthlongestresponsebtn: selectorFile.css.editorTab.editorSettings.dropdownWidthlongestresponsebtn,
	matchingDirectionbtn: selectorFile.css.editorTab.editorSettings.matchingDirectionbtn,
	matchingUniDirectionbtn: selectorFile.css.editorTab.editorSettings.matchingUniDirectionbtn,
	matchingBiDirectionbtn: selectorFile.css.editorTab.editorSettings.matchingBiDirectionbtn,
	allowcasedifferencesCheckBox: selectorFile.css.editorTab.textOption.allowcasedifferencesCheckBox,
	allowspellingmismatchCheckBox: selectorFile.css.editorTab.textOption.allowspellingmismatchCheckBox,
	allowextraspacesCheckBox: selectorFile.css.editorTab.textOption.allowextraspacesCheckBox,
	allowspacesCheckBox: selectorFile.css.editorTab.textOption.allowspacesCheckBox,
	allowpunctuationsCheckBox: selectorFile.css.editorTab.textOption.allowpunctuationsCheckBox,
	questionAreaLabel: selectorFile.css.editorTab.editorSettings.questionAreaLabel,
	titleAreaLabel: selectorFile.css.editorTab.editorSettings.titleAreaLabel,
	instructionsAreaLabel: selectorFile.css.editorTab.editorSettings.instructionsAreaLabel,
	promptAreaLabel: selectorFile.css.editorTab.editorSettings.promptAreaLabel,
	questionItemAreaLabel: selectorFile.css.editorTab.editorSettings.questionItemAreaLabel,
	answerOptionAreaLabel: selectorFile.css.editorTab.editorSettings.answerOptionAreaLabel,
	inThisActivityScreenLabel: selectorFile.css.editorTab.editorSettings.inThisActivityScreenLabel,
	selectOneScreenLabel: selectorFile.css.editorTab.editorSettings.selectOneScreenLabel,
	zoombuttonScreenLabel: selectorFile.css.editorTab.editorSettings.zoombuttonScreenLabel,
	tapActionScreenLabel: selectorFile.css.editorTab.editorSettings.tapActionScreenLabel,
	clearSelectionScreenLabel: selectorFile.css.editorTab.editorSettings.clearSelectionScreenLabel,
	selectFromDropdownScreenLabel: selectorFile.css.editorTab.editorSettings.selectFromDropdownScreenLabel,
	selectFromOptionMatchScreenLabel: selectorFile.css.editorTab.editorSettings.selectFromOptionMatchScreenLabel,
	matchingLeftScreenLabel: selectorFile.css.editorTab.editorSettings.matchingLeftScreenLabel,
	matchingRightScreenLabel: selectorFile.css.editorTab.editorSettings.matchingRightScreenLabel,
	selectGroupScreenLabel: selectorFile.css.editorTab.editorSettings.selectGroupScreenLabel,
	clearScreenLabel: selectorFile.css.editorTab.editorSettings.clearScreenLabel,
	alignAnswerOptiondropDown: selectorFile.css.editorTab.editorSettings.alignAnswerOptiondropDown,
	alignAnswerLeftOptionbtn: selectorFile.css.editorTab.editorSettings.alignAnswerLeftOptionbtn,
	alignAnswerRightOptionbtn: selectorFile.css.editorTab.editorSettings.alignAnswerRightOptionbtn,
	selectoptionImageAspectRatiobtn: selectorFile.css.editorTab.editorSettings.selectoptionImageAspectRatiobtn,
	selectoptionImageScaledtoFixedSizebtn: selectorFile.css.editorTab.editorSettings.selectoptionImageScaledtoFixedSizebtn,
	selectoptionImageScaledtoRelativeSizebtn: selectorFile.css.editorTab.editorSettings.selectoptionImageScaledtoRelativeSizebtn,
	alignAnswerOptionsbtn: selectorFile.css.editorTab.editorSettings.alignAnswerOptionsbtn,
	alignAnswerLeftOptionsbtn: selectorFile.css.editorTab.editorSettings.alignAnswerLeftOptionsbtn,
	alignAnswerCenterOptionsbtn: selectorFile.css.editorTab.editorSettings.alignAnswerCenterOptionsbtn,
	deleteSubQuestion: selectorFile.css.editorTab.deleteSubQuestion,
	dndLabel: selectorFile.css.editorTab.DND.dndLabel,
	deleteLabel: selectorFile.css.editorTab.DND.deleteLabel,
	deleteResponse: selectorFile.css.editorTab.deleteResponse,
	deleteOption: selectorFile.css.editorTab.deleteOption,
	confirmDialogBox: selectorFile.css.editorTab.confirmDialogBox,
	confirmYes: selectorFile.css.editorTab.confirmYes,

	//--MULTIPLE RESPONSE
	isInitialized1: async function (testdata) {
		for (var i = 0; i < testdata.length; i++) {
			for (var j = 0; j < testdata[i].length; j++) {
				var test = testdata[i][j]
				res = await action.waitForExist(this.editorsel[test])
				//console.log(testdata[i][j] + ":" + res)
			}
		}
	},
	setScorePlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());
		res = await action.waitForDisplayed(this.scoreInputBox);
		if (res == true)
			res = await action.setValue(this.scoreInputBox, testdata)
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Value is added in Score");
		}
		else {
			res = res + " -- Error in Value added in Score";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	deleteMediabtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.deleteMedia_btn);
		if (res == true) {
			await browser.pause(2000)
			res = await action.click(this.deleteMedia_btn);
			if (res == true) {
				res = await action.waitForDisplayed(this.addImage_btn);
				//browser.pause(5000)
			}
		}
		else {
			res = res + " -- next button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickNextBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.nextqun_btn);
		if (res == true) {
			// await browser.pause(2000)
			res = await action.click(this.nextqun_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				await browser.pause(2000)
			}
		}
		else {
			res = res + " -- next button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickUniqueOption: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.uniqueOption);
		if (res == true) {
			res = res + " -- unique Option button is not clickable";
			await browser.pause(2000)
			await action.click("div[class*=MuiDialogActions-spacing] button:nth-child(2)")
			await browser.pause(5000)
		}
		else {
			res = res + " -- unique Option button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickCommonOption: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.commonOption);
		if (res == true) {
			await browser.pause(2000)

			res = res + " -- common Option button is  clickable";
			res = await action.click("[data-tid=button-agree]")

		}
		else {
			res = res + " -- common Option button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setinputOptionText: async function (testdata) {
		await logger.logInto(stackTrace.get());
		console.log(testdata.length)
		for (var i = 0; i < testdata.length; i++) {
			var inputSelector = this.inputOption + testdata[i][0] + "] input "
			res = await action.setValue(inputSelector, testdata[i][1])
			if (res == true) {
				await logger.logInto(stackTrace.get(), " -- input Value Data is added");
			}
			else
				await logger.logInto(stackTrace.get(), " -- input Value Data is not added");
		}
		return res;
	},
	setresponseOptionText: async function (testdata) {
		await logger.logInto(stackTrace.get());
		for (var i = 0; i < testdata.length; i++) {
			var responseSelector = this.responseOption + testdata[i][0] + "] div[id=simple-select]"
			res = await action.click(responseSelector)
			if (res == true) {
				await action.click("li[data-value=" + testdata[i][1])
				await logger.logInto(stackTrace.get(), " -- input Value Data is added");
			}
			else
				await logger.logInto(stackTrace.get(), " -- input Value Data is not added");
		}
		return res;
	},
	clickEditPrompt_Btn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.editPrompt_btn);
		if (res == true) {
			await browser.pause(1000)
			res = await action.click(this.editPrompt_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				await browser.pause(2000);
			}
		}
		else {
			res = res + " -- Edit Prompt button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickEditHeaderbtn: async function () {
		await browser.pause(5000)
		await action.waitForClickable(this.headerEdit_btn)
		res = await action.click(this.headerEdit_btn);
		if (res == true) {
			await action.waitForDisplayed(this.done_btn)
			await logger.logInto(stackTrace.get(), " -- Edit Header Button is clicked");
		}
		else {
			await logger.logInto(stackTrace.get(), " -- Edit Header Button is clicked");
		}
		return res

	},
	setHeaderTextinPlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());
		if (res == true) {
			await browser.pause(1000)
			res = await action.setValue(this.placeHolderHeader_txt, testdata)
			await browser.pause(1000)
			await logger.logInto(stackTrace.get(), " -- Value is added");
		}
		else {
			res = res + " -- Error in Adding text";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickinstructionEditbtn: async function (testdata) {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.instructionEdit_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setInsTextinPlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await browser.pause(1000)
		//res = await action.clearValueDefault(this.placeHolderIns_txt)
		res = await action.click(this.placeHolderIns_txt);
		res = await action.clearValueDefault(this.placeHolderIns_txt)
		res = await action.addValue(this.placeHolderIns_txt, testdata)
		await browser.pause(1000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- text added");
		}

		return res;
	},
	setPromptTextPlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());
		// res = await action.clearValueDefault(this.placeHolderIns_txt)
		res = await action.addValue(this.placeHolderIns_txt, testdata)
		await browser.pause(1000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is not clicked");

		return res;
	},

	setSubQuestiontxt: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await action.clearValueDefault(this.placeHolderIns_txt)
		res = await action.addValue(this.placeHolderIns_txt, testdata)
		await browser.pause(1000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- sub question text added");
		}
		else
			await logger.logInto(stackTrace.get(), " -- sub question text added");

		return res;
	},
	clickOptionEditbutton: async function (testdata) {
		await logger.logInto(stackTrace.get());
		// console.log(this.editSubQuestion_btn + testdata[0] + this.subOptionValue + testdata[1] + "] ")
		// await browser.pause(2000);
		res = await action.click((this.editSubQuestion_btn + testdata[0] + this.subOptionValue + testdata[1] + "] "))
		//res = await action.setValue((this.subOptionIndex + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])
		await action.waitForDisplayed(this.done_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		return res;
	},
	setOptiontxt: async function (testdata) {
		// console.log(testdata[2])
		await logger.logInto(stackTrace.get());
		// console.log(this.subOptionIndex + testdata[0] + this.subOptionValue + testdata[1] + "] " + this.subOptiontext)
		await action.click(this.subOptionIndex + testdata[0] + this.subOptionValue + testdata[1] + "] " + this.subOptiontext)
		res = await action.clearValue((this.subOptionIndex + testdata[0] + this.subOptionValue + testdata[1] + "] " + this.subOptiontext))
		await browser.pause(2000)
		res = await action.addValue((this.subOptionIndex + testdata[0] + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])

		//res = await action.setValue((this.subOptionIndex + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		return res;
	},
	setOptionCheckbox: async function (testdata) {
		await logger.logInto(stackTrace.get());
		res = await action.click((this.subOptionCheckBoxIndex + testdata[0] + this.subOptionValue + testdata[1]) + "] input ")
		// console.log(res)
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		return res;
	},
	setOptionRadio: async function (testdata) {
		await logger.logInto(stackTrace.get());
		res = await action.click((this.subOptionRadioIndex + testdata[0] + this.subOptionValue + testdata[1]) + "] input ")
		// console.log(res)
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		return res;
	},

	clickeditSubQuestionbtn: async function (testdata) {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.editSubQuestion_btn + testdata + "]>span:nth-child(1)");
		if (res == true) {
			res = await action.click(this.editSubQuestion_btn + testdata + "]>span:nth-child(1)");
			if (res == true) {
				res = await action.waitForDisplayed(this.done_btn);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickDonebtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.done_btn);
		if (res == true) {
			res = await action.click(this.done_btn);
			if (res == true) {
				res = await action.waitForDisplayed(this.done_btn, undefined, true);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickAddSubquestion: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.addSubqun_btn);
		if (res == true) {
			res = await action.click(this.addSubqun_btn);
			if (res == true) {
				res = await action.waitForDisplayed(this.addSubqun_btn, true);
			}
		}
		else {
			res = res + " -- addSubqun_btn is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickTopBottombtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.topsbottomOption);
		if (res == true) {
			res = await action.click(this.topsbottomOption);
			if (res == true) {
				await browser.pause(5000)
				res = await action.waitForDisplayed(this.topsbottomOption);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickLeftRightbtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.leftRightOption);
		if (res == true) {
			res = await action.click(this.leftRightOption);
			if (res == true) {
				await browser.pause(5000)
				res = await action.waitForDisplayed(this.leftRightOption);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickSaveandReturnBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable("div:nth-child(2) [data-tid=button-saveandreturn]");
		if (res == true) {
			await browser.pause(5000)
			res = await action.click("div:nth-child(2) [data-tid=button-saveandreturn]");
			if (res == true) {
				// res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				await browser.pause(40000)
			}
		}
		else {
			res = res + " -- saveandreturn button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	selectCorrectOptions: async function (correctOptions) { // this function should be enhanced to support MCQ and True/False - akhil
		await logger.logInto(stackTrace.get());
		res = await action.click(this.checkboxOption_input + "1]");
		var optionsarr = [];
		for (var i = 0; i < correctOptions.length; i++) {
			var optionSelector = this.checkboxOption_input + correctOptions[i] + "] input";
			res = await action.click(optionSelector);
			optionsarr[i] = await action.getText(optionSelector)
		}
		// return the options selected - akhil
		// updated - Swati
		return optionsarr;
	},

	//MCQ, MCSR, TruFalse
	selectOptionStyle: async function (optionStyle) {
		await logger.logInto(stackTrace.get());
		let optionStyleSelector = this.optionStyle_radio + optionStyle + "]";
		res = await action.click(optionStyleSelector);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Option Style button is clicked");
		}
		else {
			res = res + " -- Error in clicking Option Style button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	clickAddLabelBtn: async function (labelOptions) { //why do we need the list of options, need to discuss - akhil
		await logger.logInto(stackTrace.get());
		var countLabel = labelOptions.length;
		// console.log(countLabel)
		var optionlength = await action.findElements("[data-tid*=container-label")
		// console.log(optionlength.length)
		if (labelOptions.length > optionlength.length) {
			countLabel = (labelOptions.length - optionlength.length)
		}
		// console.log(countLabel)
		for (var i = 0; i < countLabel; i++) {
			await action.waitForEnabled(this.addLabel_btn);
			await action.waitForClickable(this.addLabel_btn);
			res = await action.click(this.addLabel_btn);
		}

		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Label Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Label button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	dragLabel: async function () {
		res = await $("[data-tid=container-label-A]").dragAndDrop({ x: 100, y: 600 });
		// res = this.dragAndDrop_cordinates(this.container_labelB,100,10)
		// res = this.dragAndDrop_cordinates(this.container_labelC,600,0)
		// res = this.dragAndDrop_cordinates(this.container_labelD,650,100)
		// res = this.dragAndDrop_cordinates(this.container_labelE,700,100)
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	dragAndDrop_cordinates: async function (draggable, left, top) {  //need to discuss - akhil
		var location = await action.getLocation(draggable);
		// console.log("location of element:", location);
		// console.log("left passed - ", left);
		// console.log("top passed - ", top);
		// console.log("new x", location.x + left);
		// console.log("new y:", location.y + top);

		await logger.logInto(stackTrace.get());
		var message = "draggable:" + draggable + " left:" + left + "top:" + top;
		try {
			var actions1 = { // we can not use wdio functions directly, use functions from base action library - akhil
				// this fnction is not working by using even directly from wdio. There is some issue in performing drag in browser
				// will wrap it once it starts functioning. - Swati
				"type": "pointer",
				"id": "mouse1",
				"parameters": { "pointerType": "mouse" },
				"actions": [
					{ "type": "pointerMove", "duration": 0, "x": location.x, "y": parseInt(location.y) },
					{ "type": "pointerDown", "button": 0 },
					{ "type": "pointerMove", "duration": 1, "x": location.x + left, "y": parseInt(location.y + top) },
					{ "type": "pointerMove", "duration": 1, "x": location.x + left + 1, "y": parseInt(location.y + top + 1) },
					{ "type": "pointerUp", "button": 0 }
				]
			}
			await browser.performActions([actions1]);
			await logger.logInto(stackTrace.get(), message);
			return true;
		} catch (err) {
			await logger.logInto(stackTrace.get(), err.message, "error");
			return err;
		}
	},

	// function missing for inserting image in the DND question - akhil
	// images can be inserted in DND question using imageUpload function in editorTabCommon.page - Swati

	//--DND IMAGE
	clickAddBlank: async function (lines) { // not clear on this function, need to discuss - akhil
		await logger.logInto(stackTrace.get());
		var count = lines.length;
		res = await action.clearValue(this.questionInputField);
		for (var i = 0; i < count; i++) {
			if (lines[i] == "blank")
				res = await action.click(this.addBlank_btn);
			else
				res = await action.addValue(this.questionInputField, lines[i]);
		}
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Label Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Label button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--MATCHING
	clickAddPairBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.addPair);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--MATCHING
	/*old	setItems: async function (items) {
			await logger.logInto(stackTrace.get());
			var countLabel = items.length;
			console.log(countLabel)
			var optionlength = await action.findElements("[data-tid*=input-item")
			console.log(optionlength.length)
			//if (items.length > optionlength.length) {
			countLabel = (items.length - optionlength.length)
			console.log(countLabel)
			//}
			for (var i = 0; i < (countLabel); i++) {
				res = await action.click("[data-tid=button-add]");
			}
			var itemsArr = [];
			let getValueArray = []
			for (var i = 1; i <= items.length; i++) {
				var optionSelector = this.inputItem + i + "] textarea";
				var optionValue = items[i - 1];
				itemsArr[i - 1] = await action.setValue(optionSelector, optionValue);
				getValueArray[i - 1] = await action.getValue(optionSelector)
			}
			return getValueArray
		},*/
	addOption: async function (items) {
		await logger.logInto(stackTrace.get());
		var countLabel = items.length;
		var optionlength = await action.findElements(this.editMatchingItem)
		countLabel = (items.length - optionlength.length)
		//}
		for (var i = 0; i < (countLabel); i++) {
			res = await action.click("div[class*=libs-matching-item-editor-MuiBox-root ]>div[class*=libs-matching-item-editor-MuiBox-root]:nth-child(3)>button[data-tid=button-add]");
		}
		return res;
	},
	clickItems: async function (testdata) {
		await logger.logInto(stackTrace.get());
		// console.log(this.editMatchingItem + testdata[0])
		res = await action.click(this.editMatchingItem + testdata[0]);
		if (res == true) {
			action.waitForDisplayed(this.placeHolderIns_txt)
			await logger.logInto(stackTrace.get(), " -- Edit Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Edit Item button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//--MATCHING
	clickMatchedItems: async function (testdata) {
		await logger.logInto(stackTrace.get());
		// console.log(this.inputMatchedItem + testdata[0])
		res = await action.click(this.inputMatchedItem + testdata[0]);
		if (res == true) {
			action.waitForDisplayed(this.placeHolderIns_txt)
			await logger.logInto(stackTrace.get(), " -- Edit Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Edit Item button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	// function missing for re-ordering answer options - akhil
	// we insert the correct order only in the option list which is by default always shuffled in the preview
	// so the function setOptions(optionslist) in editorCommon.page would work here - Swati

	//functions for FIB editor are missing, need to decide which are required based on TCs - akhil
	// FIB editor needs question and options, which are already in editorCommon.page - swati 

	//--CLASSIFY
	clickAddGroupBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.addGroup_btn);
		// console.log("selector:", this.addGroup_btn)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Group Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Group button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--CLASSIFY
	clickAddOptionBtn: async function (options) {
		await logger.logInto(stackTrace.get());
		if (options.length > 2) {
			var countAddAnswer = (options.length - 2)
			for (var i = 0; i < countAddAnswer; i++) {
				res = await action.click(this.addOption_btn);
			}
		}
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Option Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Option button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--CLASSIFY
	setClassifyGroups: async function (groups) {
		await logger.logInto(stackTrace.get());
		var itemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= groups.length; i++) {
			var optionSelector = this.group_input + i + "] input";
			var optionValue = groups[i - 1];
			// console.log(optionValue)
			itemsArr[i - 1] = await action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = await action.getValue(optionSelector)
		}
		return getValueArray
	},

	//--CLASSIFY
	setClassifyOptions: async function (options) {
		await logger.logInto(stackTrace.get());
		var itemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= options.length; i++) {
			var optionSelector = this.options_input + i + "] input";
			var optionValue = options[i - 1];
			itemsArr[i - 1] = await action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = await action.getValue(optionSelector)
		}
		return getValueArray
	},

	//--CLASSIFY
	selectGroupsForOptions: async function (setGroups, groupIcon, groups) {
		await logger.logInto(stackTrace.get());
		let getValueArray = []
		for (var i = 0; i < setGroups.length; i++) {
			await action.click("div[data-rbd-draggable-id=" + groupIcon[i] + "] div[id=\"option-simple-select\"]")

			for (var j = 1; j <= groups.length; j++) {
				if ((await action.getAttribute("ul[role=\"listbox\"] li:nth-child(" + j + ")", "data-value")) == setGroups[i]) {
					await action.click("ul[role=\"listbox\"] li[data-value=" + setGroups[i] + "]")
					getValueArray[i] = await action.getAttribute("ul[role=\"listbox\"] li:nth-child(" + j + ")", "data-value")
					j = groups.length + 10;
				}
			}
		}
		return getValueArray;
	},
	isInitialized: async function () {
		await logger.logInto(stackTrace.get());
		let pageStatus = await action.waitForDocumentLoad();
		res = await this.getquizPageData();
		res.pageStatus = pageStatus;
		return res;
	},

	getquizPageData: async function () {
		var obj = {
			setup_tab: await action.getText(this.setup_tab),
			questions_tab: await action.getText(this.questions_tab),
			editor_tab: await action.getText(this.editor_tab),
			previewPublish_tab: await action.getText(this.previewPublish_tab)
		}
		return obj;
	},

	setQuizTitle: async function (title) {
		await logger.logInto(stackTrace.get());
		res = await action.setValue(this.title_txtbox, title);
		if (res == true) {
			res = await action.getValue(this.title_txtbox)
			await logger.logInto(stackTrace.get(), " -- Title is entered");
		}
		else {
			res = res + " -- title is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickNextbtn: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForClickable(this.nextbtn)
		res = await action.click(this.nextbtn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), res + " :Question Tab is clicked Succesfully");
			await action.waitForDisplayed(this.addQuestion_btn);
			res = await action.getAttribute(this.questions_tab, "aria-selected");
			//For now, question tab is selected or not is returned
		}
		else {
			res = res + " -- Error in clicking Questions Tab";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickQuestionTab: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.questions_tab);
		if (res == true) {
			await logger.logInto(stackTrace.get(), res + " :Question Tab is clicked Succesfully");
			res = await action.getText(this.addQuestion_btn);
			//For now, the text of the 'Add Question' button has been returned: Swati
		}
		else {
			res = res + " -- Error in clicking Questions Tab";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickEditorTab: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForEnabled(this.editor_tab);
		if (res == true) {
			await logger.logInto(stackTrace.get(), res + " -- Editor Tab is clicked");
			res = await action.click(this.editor_tab);
			//res = this.getEditorPageData();
		}
		else {
			res = res + " -- Error in clicking Editor Tab";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getEditorPageData: async function () {
		var obj = {
			//questionType_header: action.getText(this.questionType_header),
			questionAccordionText: await action.getText(this.questionAccordionText),
			answerAccordionText: await action.getText(this.answerAccordionText),
			scoringAccordionText: await action.getText(this.scoringAccordionText),
			addInstruction_btn: await action.getText(this.addInstruction_btn),
			hintAccordionText: await action.getText(this.hintAccordionText)
		}
		return obj;
	},


	// clickEditorTab: async function () {
	// 	logger.logInto(stackTrace.get());
	// 	let page = action.waitForDocumentLoad();
	// 	if (page == true) {
	// 		logger.logInto(stackTrace.get(), res + " -- Editor Tab is clicked");
	// 		res = action.click(this.editor_tab);
	// 		res = action.getText(this.questionType_header);
	// 	}
	// 	else {
	// 		res = res + " -- Error in clicking Editor Tab";
	// 		logger.logInto(stackTrace.get(), res, 'error');
	// 	}
	// 	console.log("clickEditorTab return type:",res)
	// 	return res;
	// },

	clickAddQuestionBtn: async function () {
		await logger.logInto(stackTrace.get());
		//res = action.waitForDisplayed(this.addQuestion_btn);
		let editorText = [];
		res = await action.click(this.addQuestion_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), res + " -- Add Question Button is clicked");
			var editorChoice = await action.findElements(this.addQuestionGrid);
			for (var i = 0; i < editorChoice.length; i++) {
				editorText[i] = await action.getText(editorChoice[i]);
			}
		}
		else {
			res = res + " -- Error in clicking Add Question button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		obj =
		{
			editorText: editorText,
			editorCount: editorChoice.length
		}
		return obj;
	},

	selectItemPlayerBtn: async function (itemPlayer) {
		await logger.logInto(stackTrace.get());
		var itemPlayerSelected = this.itemPlayer_btn + itemPlayer + "]";
		res = await action.waitForDisplayed(itemPlayerSelected)
		// console.log(itemPlayerSelected)
		res = await action.click(itemPlayerSelected);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Selected Question is clicked");
		}
		else {
			res = res + " -- Error in clicking True False Question button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_AddQuestion_Dialog_Ok_Button: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.createQuestion_btn);
		//swati - to be edited, browser.pause is temp
		//BhxBrowser.pause(10000); // remove this and add wait for loader to not display - akhil
		if (res == true) {
			browser.pause(2000)
			//action.waitForDisplayed(".//span[contains(@class, 'MuiSkeleton-wave')]", undefined, true)
			await logger.logInto(stackTrace.get(), " -- OK Button is clicked");
		}
		else {
			res = res + " -- Error in clicking OK Button button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_CreateQuestion_Button: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.createQuestion_btn);
		//swati - to be edited, browser.pause is temp
		//BhxBrowser.pause(10000); // remove this and add wait for loader to not display - akhil
		if (res == true) {
			await action.waitForDisplayed(".//span[contains(@class, 'MuiSkeleton-wave')]", undefined, true)
			await logger.logInto(stackTrace.get(), " -- OK Button is clicked");
		}
		else {
			res = res + " -- Error in clicking OK Button button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Editor Tab's common functions below:
	clickDrawerQuestionNumber: async function (questionIndex) {
		await logger.logInto(stackTrace.get());
		let QuestionNumber = this.drawerQuestion + questionIndex + "]";
		res = await action.click(QuestionNumber);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Drawer Question is clicked");
			// return type of editor opened - akhil
		}
		else {
			res = res + " -- Error in clicking Drawer Question button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Question Title
	setQuestionTitle: async function (questionTitle) {
		await logger.logInto(stackTrace.get());
		await action.waitForDisplayed(this.questionTitle_input)
		// action.clearValueDefault(this.questionTitle_input);
		await browser.pause(5000)
		res = await action.setValue(this.questionTitle_input, questionTitle);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Question Title is entered");
			res = await action.getValue(this.questionTitle_input)
		}
		else {
			res = res + " -- Question Title is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Instruction
	clickAddInstructionBtn: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForClickable(this.addInstruction_btn)
		res = await action.click(this.addInstruction_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Instruction Button is clicked");
			await browser.pause(2000)
			//res = action.click(this.addInstruction_btn);
			//res=action.waitForDisplayed(this.instruction_input)
		}
		else {
			res = res + " -- Error in clicking Add Instruction button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		// console.log("rm")
		return res;
	},

	setQuestionInstruction: async function (questionInstruction) {
		await logger.logInto(stackTrace.get());
		res = await action.addValue(this.instruction_input, questionInstruction); // use setValue instead of addValue - akhil
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Question Instruction is entered");
		}
		else {
			res = res + " -- Question Instruction is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Adding 'VIDEO' as media
	clickAddVideoBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.addVideo_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Video Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Video button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setVideoMediaURL: async function (videoURL) {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.videoType_btn)
		res = await action.click("[role=\"listbox\"]>li:nth-child(1)")
		await action.waitForDisplayed(this.videoURL_input)
		res = await action.setValue(this.videoURL_input, videoURL);
		await browser.pause(10000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Video Media URL is entered");
			// return status of the video preview - akhil
		}
		else {
			res = res + " -- Video Media URL is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setVideoCredit: async function (videoCredit) {
		await logger.logInto(stackTrace.get());
		res = await action.setValue(this.videoCredit_input, videoCredit);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Video Credit is entered");
		}
		else {
			res = res + " -- Video Credit is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//
	setQuestionTextinwriting: async function (questionTitle) {
		// console.log(questionTitle)
		await logger.logInto(stackTrace.get());
		// await browser.pause(2000)
		await action.click(this.responseEdit)
		await action.clearValueDefault(this.responseTextArea)
		// await browser.pause(2000)
		// await action.keyPress("\uE014")
		// await action.click(this.responseTextArea)
		res = await action.setValue(this.responseTextArea, questionTitle);
		// await browser.pause(2000)
		// //await action.keyPress("\uE008a\uE00F")
		await action.keyPress(['\uE008', '\uE00F'])
		await browser.pause(1000)
		await action.keyPress("\uE017")
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Question Title is entered");
			//action.click(this.textAreabtn)
		}
		else {
			res = res + " -- Question Title is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		await browser.pause(2000);
		return res;
	},
	clickAddBlankCKEditor: async function () {

		await logger.logInto(stackTrace.get());
		await browser.pause(2000)
	//	await action.waitForDisplayed(this.responseEdit)
		//await action.click(this.responseEdit)
	//	await browser.pause(2000)
		await action.click(this.responseTextArea)
		await action.keyPress("\uE008\uE00F")
		await action.click(this.textAreabtn)
		await action.keyPress("\uE014")
		await action.keyPress("\uE015")
		await browser.pause(2000)
		return res;
	},
	//Adding 'IMAGE' as media
	clickAddImageBtn: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForClickable(this.addImage_btn)
		res = await action.click(this.addImage_btn);
		// console.log(res)
		await action.waitForDisplayed("[data-tid='button-browseimage']")
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Image Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Image button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//----- textArea configuration Writing Player
	setRowsNumber: async function (i, rowNumber) {
		// console.log(rowNumber)

		await logger.logInto(stackTrace.get());
		res = await action.clearValue(this.rowNumber + i + "] input");
		res = await action.addValue(this.rowNumber + i + "] input", rowNumber);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- rowNumber is entered");
		}
		else {
			res = res + " -- rowNumber is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setCharacterLimit: async function (i, characterLimit) {

		await logger.logInto(stackTrace.get());
		res = await action.clearValue(this.characterLimit + i + "] input");
		res = await action.addValue(this.characterLimit + i + "] input", characterLimit);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- characterLimit is entered");
		}
		else {
			res = res + " -- characterLimit is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setPlaceHolderText: async function (i, placeHolderText) {

		await logger.logInto(stackTrace.get());
		res = await action.clearValue(this.placeHolderText + i + "] input");
		res = await action.addValue(this.placeHolderText + i + "] input", placeHolderText);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- placeHolderText is entered");
		}
		else {
			res = res + " -- placeHolderText is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_AllowRichTextMedia: async function (i) {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.allowrichTextMedia + i + "] input");
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- allowrichTextMedia is clicked");
		}
		else {
			res = res + " -- Error in clicking allowrichTextMedia";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_AllowFileAttachment: async function (i) {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.allowFileAttachment + i + "] input");
		await browser.pause(4000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- allowFileAttachment is clicked");
		}
		else {
			res = res + " -- Error in clicking allowFileAttachment";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	imageUpload: async function (imagePath) {
		//let filePath = path.join(tcDataDir, imagePath);
		// use browser.uploadFile to upload the test file
		let remoteFilePath = await browser.uploadFile(imagePath);
		// set file path value in the input field
		res = await action.addValue(this.media_input, remoteFilePath);
		// await action.waitForDisplayed(this.uploadedImage);
		await browser.pause(2000);
		return res;
	},


	setImageCredit: async function (imageCredit) {
		await logger.logInto(stackTrace.get());
		res = await action.setValue(this.imageCredit_input, imageCredit); // use setValue instead of addValue - akhil
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Image Credit is entered");
		}
		else {
			res = res + " -- Image Credit is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Adding 'AUDIO' as media
	clickAddAudioBtn: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.addAudio_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Audio Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Audio button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	audioUpload: async function (audioPath) { // this is duplicate, we should combine imageupload and audioupload - akhil
		// use browser.uploadFile to upload the test file
		let remoteFilePath = await browser.uploadFile(audioPath);
		// set file path value in the input field
		res = await action.addValue(this.media_input, remoteFilePath);
		await browser.pause(5000)
		await action.waitForDisplayed(this.uploadedAudio, 5000);
		//rupsi: return audio file
		return res;
	},

	videoUpload: async function (videoPath) { // this is duplicate, we should combine imageupload and audioupload - akhil
		// use browser.uploadFile to upload the test file
		let remoteFilePath = await browser.uploadFile(videoPath);
		// set file path value in the input field
		res = await action.addValue(this.media_input, remoteFilePath);
		await action.waitForDisplayed(this.uploadedAudio, 5000);
		//rupsi: return audio file
		return res;
	},

	setAudioCredit: async function (audioCredit) {
		await logger.logInto(stackTrace.get());
		await action.waitForDisplayed(this.audioCredit_input)
		await action.waitForEnabled(this.audioCredit_input)

		res = await action.setValue(this.audioCredit_input, audioCredit); // use setValue instead of addValue - akhil
		// console.log(res)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Audio Credit is entered");
		}
		else {
			res = res + " -- Audio Credit is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Question Text
	setQuestionText: async function (questionText) {
		await logger.logInto(stackTrace.get());
		//action.clearValue(this.questionInputField)
		//action.clearValueDefault(this.questionInputField)
		res = await action.addValue(this.questionInputField, questionText);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Question Text is entered");
		} else {
			res = res + " -- Question Text is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Click on Add Answer Button
	clickAddAnswerBtn: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await action.waitForDisplayed(this.addAnswer_btn);
		res = await action.click(this.addAnswer_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickAddAnswerBtnComman: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await action.waitForDisplayed(this.addAnswerbtn);
		res = await action.click(this.addAnswerbtn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickAddAnswerMCQSRBtn: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await action.waitForDisplayed(this.addAnswer_btn  + testdata);
		res = await action.click(this.addAnswer_btn  + testdata);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//Used by MCQ, MCSR, TruFalse, DND, FIB That's why kept in common file
	//Note that this function is not working for FIB for now
	//Logged ENG-5502 for the same
	setOptions: async function (options) { // this function should be part of itemPlayersFeature.page.js
		await logger.logInto(stackTrace.get());
		var countAddAnswer = 0
		var optionsarr = [];
		let getValueArray = []
		var optionlength = await action.findElements(this.inputOptions)
		if (options.length > optionlength.length) {
			countAddAnswer = (options.length - optionlength.length)
			for (var i = 0; i < countAddAnswer; i++) {
				await this.clickAddAnswerBtn();
			}
		}
		for (var i = 1; i <= options.length; i++) {

			var optionSelector = this.inputOptions + i + "] input";
			var optionValue = options[i - 1];
			optionsarr[i - 1] = await action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = await action.getValue(optionSelector)
		}
		return getValueArray
	},

	setAnswer: async function (options, optionValue) { // this function should be part of itemPlayersFeature.page.js
		await logger.logInto(stackTrace.get());
		var countAddAnswer = 0
		var optionsarr = [];
		let getValueArray = []
		var answerlength = await action.findElements(this.fibAnswerOption)

		for (var i = 0; i < options.length; i++) {

			var optionSelector = this.fibAnswerOption + options[i] + "] input";
			optionsarr[i] = await action.setValue(optionSelector, optionValue[i]);
			getValueArray[i] = await action.getValue(optionSelector)
		}
		return getValueArray
	},
	clickPreviewPublishTab: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.click(this.previewPublish_tab);
		if (res == true) {
			await browser.pause(2000);
			await logger.logInto(stackTrace.get(), " -- Preview and Publish Tab is clicked");
		}
		else {
			res = res + " -- Error in clicking Preview and Publish Tab";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickPreviewBtn: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForClickable(this.preview_btn);
		res = await action.click(this.preview_btn);
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Preview Button is clicked");
			//res = this.previewInitialized(); // here we should call testPlayer.page.js from engage experience app - akhil
		}
		else {
			res = res + " -- Error in clicking Preview button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	previewInitialized: async function () { // not clear on this function - akhil
		await logger.logInto(stackTrace.get());
		let pageStatus = await action.waitForDisplayed(this.setup_tab);
		await logger.logInto(stackTrace.get(), res);
		if (pageStatus == true) {
			res = await this.quizPageData(); // this appears incorrect, please recheck - akhil
			res.pageStatus = pageStatus;
			return res;
		}
		else
			res = res + "-- Set up tab is NOT availabe"
		return res;
	},
	clickshufflingCheckBox: async function () {
		await logger.logInto(stackTrace.get());
		res = await action.waitForClickable(this.shufflingCheckBox);
		if (res == true) {
			res = await action.click(this.shufflingCheckBox);
			if (res == true) {
				await logger.logInto(stackTrace.get(), " -- shufflingCheckBox is checked");
			}
		}
		else {
			res = res + " -- shufflingCheckBox is not checked";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_instruction_boldbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_boldbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_boldbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_boldbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_italicbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_italicbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_italicbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_italicbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_underlinebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_underlinebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_underlinebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_underlinebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_numberListmenudropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_numberListmenudropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_numberListmenudropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_numberListmenudropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_numbermenuList: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_numbermenuList);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_numbermenuList is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_numbermenuList is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_numbermenuItem: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		// console.log(this.instruction_numbermenuItem + testdata)
		res = await action.click(this.instruction_numbermenuItem + testdata);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_numbermenuItem is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_numbermenuItem is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_bulletListmenudropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_bulletListmenudropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_bulletListmenudropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_bulletListmenudropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_bulletmenuList: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_bulletmenuList);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_bulletmenuList is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_bulletmenuList is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_bulletmenuItem: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_bulletmenuItem);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_bulletmenuItem is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_bulletmenuItem is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_languagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_languagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_language Click is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_language Click is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_languagedropdownvalue: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_languagedropdoenvalue);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_languagedropdoenvalue is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_languagedropdoenvalue is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_langbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_langbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_langbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_langbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_undobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_undobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_undobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_undobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_instruction_redobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.instruction_redobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " instruction_redobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "instruction_redobtn is NOT clicked", 'error');
		}
		return res;
	},
	click_header_headingdropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_headingdropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_headingdropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_headingdropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_headingtoolbarvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_headingtoolbarvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_headingtoolbarvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_headingtoolbarvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_boldbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_boldbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_boldbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_boldbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_italicbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_italicbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_italicbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_italicbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_underlinebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_underlinebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_underlinebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_underlinebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_languagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_languagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_languagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_languagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_languagedropdownvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_languagedropdoenvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_languagedropdoenvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_languagedropdoenvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_langbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_langbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_langbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_langbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_undobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_undobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_undobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_undobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_header_redobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.header_redobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " header_redobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "header_redobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_headerdropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_headerdropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_headerdropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_headerdropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_headingtoolbarvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_headingtoolbarvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_headingtoolbarvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_headingtoolbarvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_boldbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_boldbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_boldbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_boldbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_italicbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_italicbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_italicbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_italicbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_underlinebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_underlinebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_underlinebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_underlinebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_numberListmenudropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_numberListmenudropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_numberListmenudropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_numberListmenudropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_numbermenuListbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_numbermenuListbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_numbermenuListbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_numbermenuListbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_numbermenuItembtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_numbermenuItembtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_numbermenuItembtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_numbermenuItembtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_bulletListmenudropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_bulletListmenudropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_bulletListmenudropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_bulletListmenudropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_bulletmenuListbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_bulletmenuListbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_bulletmenuListbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_bulletmenuListbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_bulletmenuItembtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_bulletmenuItembtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_bulletmenuItembtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_bulletmenuItembtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_languagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_languagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_languagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_languagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_languagedropdownvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_languagedropdownvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_languagedropdownvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_languagedropdownvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_langbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_langbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_langbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_langbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_imagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_imagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_imagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_imagebtn is NOT clicked", 'error');
		}
		return res;
	},
	// need to check this funtion workflow
	click_prompt_tabledropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_tabledropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_tabledropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_tabledropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_linebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_linebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_linebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_linebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_blockQuotebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_blockQuotebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_blockQuotebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_blockQuotebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_undobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_undobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_undobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_undobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_prompt_redobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.prompt_redobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " prompt_redobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "prompt_redobtn is NOT clicked", 'error');
		}
		return res;
	},
	clickCtrlA: async function () {
		await browser.pause(2000)
		//await action.keyPress("\uE008a\uE00F")
		await action.keyPress(['Control', 'a'])
		await browser.pause(2000)
		if (res == true) {
			await logger.logInto(stackTrace.get(), " -- Question Title is entered");
		}
		else {
			res = res + " -- Question Title is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_subQuestion_boldbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_boldbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_boldbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_boldbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_italicbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_italicbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_italicbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_italicbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_underlinebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_underlinebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_underlinebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_underlinebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_languagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_languagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_languagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_languagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_languagedropdownvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_languagedropdownvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_languagedropdownvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_languagedropdownvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_langbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_langbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_langbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_langbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_tabledropdownbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_tabledropdownbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_tabledropdownbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_tabledropdownbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_linebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_linebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_linebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_linebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_blockQuotebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_blockQuotebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_blockQuotebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_blockQuotebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_undobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_undobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_undobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_undobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestion_redobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestion_redobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestion_redobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestion_redobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_boldbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_boldbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_boldbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_boldbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_italicbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_italicbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_italicbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_italicbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_underlinebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_underlinebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_underlinebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_underlinebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_languagebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_languagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_languagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_languagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_languagedropdownvaluebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_languagedropdownvaluebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_languagedropdownvaluebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_languagedropdownvaluebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_langbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_langbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_langbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_langbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_undobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_undobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_undobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_undobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_subQuestionOption_redobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.subQuestionOption_redobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " subQuestionOption_redobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "subQuestionOption_redobtn is NOT clicked", 'error');
		}
		return res;
	},
	click_dndimagetopBottom_btn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.topBottom_btn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " topBottom_btn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "topBottom_btn is NOT clicked", 'error');
		}
		return res;
	},

	click_dndimagePlacement_btn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.imagePlacement_btn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " imagePlacement_btn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "imagePlacement_btn is NOT clicked", 'error');
		}
		return res;
	},

	click_dndimageleftRight_btn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.leftRight_btn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " leftRight_btn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "leftRight_btn is NOT clicked", 'error');
		}
		return res;
	},
	click_numberFormatingbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.numberFormatiingbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " numberFormatiingbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "numberFormatiingbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_numbertype1Optionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.numbertype1);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " numbertype1 is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "numbertype1 is NOT clicked", 'error');
		}
		return res;
	},

	click_numbertype2Optionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.numbertype2);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " numbertype2 is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "numbertype2 is NOT clicked", 'error');
		}
		return res;
	},

	click_numbertype3Optionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.numbertype3);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " numbertype3 is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "numbertype3 is NOT clicked", 'error');
		}
		return res;
	},

	click_selectPositionRadiobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.selectPositionRadiobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " selectPositionRadiobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "selectPositionRadiobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_insideImageOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.insideImagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " insideImagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "insideImagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_outsideImageOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.outsideImagebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " outsideImagebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "outsideImagebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_selectPositionAnswerOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.selectPositionAnswerOptionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " selectPositionAnswerOptionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "selectPositionAnswerOptionbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_verticallyOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.verticallybtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " verticallybtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "verticallybtn is NOT clicked", 'error');
		}
		return res;
	},

	click_horizontallyOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.horizontallybtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " horizontallybtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "horizontallybtn is NOT clicked", 'error');
		}
		return res;
	},

	click_verticalLayoutbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.verticalLayoutbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " verticalLayoutbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "verticalLayoutbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_sideBySideLayoutbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.sideBySideLayoutbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " sideBySideLayoutbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "sideBySideLayoutbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_imagePlacementbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.imagePlacementbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " imagePlacementbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "imagePlacementbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_leftRightOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.leftRightbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " leftRightbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "leftRightbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_topBottomOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.topBottombtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " topBottombtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "topBottombtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseAreaAlignmentbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseAreaAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseAreaAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseAreaAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseAreaCenterAlignmentOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.responseAreaCenterAlignmentbtn);
		res = await action.click(this.responseAreaCenterAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseAreaCenterAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseAreaCenterAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseAreaLeftAlignmentOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.responseAreaLeftAlignmentbtn);
		res = await action.click(this.responseAreaLeftAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseAreaLeftAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseAreaLeftAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_answerOptionPlacementbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.answerOptionPlacementbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " answerOptionPlacementbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "answerOptionPlacementbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_answerOptionBottomPlacementOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.answerOptionBottomPlacementbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " answerOptionBottomPlacementbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "answerOptionBottomPlacementbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_answerOptionTopPlacementOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.answerOptionTopPlacementbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " answerOptionTopPlacementbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "answerOptionTopPlacementbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_answerOptionRightPlacementOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.answerOptionRightPlacementbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " answerOptionRightPlacementbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "answerOptionRightPlacementbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseInputTypebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseInputTypebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseInputTypebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseInputTypebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseInputWordTypeOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseInputWordTypebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseInputWordTypebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseInputWordTypebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseInputCharacterTypeOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseInputCharacterTypebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseInputCharacterTypebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseInputCharacterTypebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseTextAlignmentbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseTextAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseTextAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseTextAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseTextCenterAlignmentOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseTextCenterAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseTextCenterAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseTextCenterAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_responseTextLeftAlignmentOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.responseTextLeftAlignmentbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " responseTextLeftAlignmentbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "responseTextLeftAlignmentbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_dropdownWidthbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.dropdownWidthbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " dropdownWidthbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "dropdownWidthbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_dropdownWidthfittoresponseOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.dropdownWidthfittoresponsebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " dropdownWidthfittoresponsebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "dropdownWidthfittoresponsebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_dropdownWidthlongestresponseOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.dropdownWidthlongestresponsebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " dropdownWidthlongestresponsebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "dropdownWidthlongestresponsebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_matchingDirectionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.matchingDirectionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " matchingDirectionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "matchingDirectionbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_matchingUniDirectionOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.matchingUniDirectionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " matchingUniDirectionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "matchingUniDirectionbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_matchingBiDirectionOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.matchingBiDirectionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " matchingBiDirectionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "matchingBiDirectionbtn is NOT clicked", 'error');
		}
		return res;
	},
	click_allowcasedifferencesCheckBox: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.allowcasedifferencesCheckBox + testdata + "] input");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " allowcasedifferencesCheckBox is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "allowcasedifferencesCheckBox is NOT clicked", 'error');
		}
		return res;
	},

	click_allowspellingmismatchCheckBox: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.allowspellingmismatchCheckBox + testdata + "] input");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " allowspellingmismatchCheckBox is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "allowspellingmismatchCheckBox is NOT clicked", 'error');
		}
		return res;
	},

	click_allowextraspacesCheckBox: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.allowextraspacesCheckBox + testdata + "] input");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " allowextraspacesCheckBox is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "allowextraspacesCheckBox is NOT clicked", 'error');
		}
		return res;
	},

	click_allowspacesCheckBox: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.allowspacesCheckBox + testdata + "] input");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " allowspacesCheckBox is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "allowspacesCheckBox is NOT clicked", 'error');
		}
		return res;
	},

	click_allowpunctuationsCheckBox: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.allowpunctuationsCheckBox + testdata + "] input");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " allowpunctuationsCheckBox is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "allowpunctuationsCheckBox is NOT clicked", 'error');
		}
		return res;
	},
	set_questionAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.questionAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in questionAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in questionAreaLabel", 'error');
		}
		return res;
	},

	set_titleAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.titleAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in titleAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in titleAreaLabel", 'error');
		}
		return res;
	},

	set_instructionsAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.instructionsAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in instructionsAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in instructionsAreaLabel", 'error');
		}
		return res;
	},

	set_promptAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.promptAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in promptAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in promptAreaLabel", 'error');
		}
		return res;
	},

	set_questionItemAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.questionItemAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in questionItemAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in questionItemAreaLabel", 'error');
		}
		return res;
	},

	set_answerOptionAreaLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.answerOptionAreaLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in answerOptionAreaLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in answerOptionAreaLabel", 'error');
		}
		return res;
	},

	set_inThisActivityScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.inThisActivityScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in inThisActivityScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in inThisActivityScreenLabel", 'error');
		}
		return res;
	},

	set_selectOneScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.selectOneScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in selectOneScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in selectOneScreenLabel", 'error');
		}
		return res;
	},

	set_zoombuttonScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.zoombuttonScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in zoombuttonScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in zoombuttonScreenLabel", 'error');
		}
		return res;
	},

	set_tapActionScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.tapActionScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in tapActionScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in tapActionScreenLabel", 'error');
		}
		return res;
	},

	set_clearSelectionScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.clearSelectionScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in clearSelectionScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in clearSelectionScreenLabel", 'error');
		}
		return res;
	},

	set_selectFromDropdownScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.selectFromDropdownScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in selectFromDropdownScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in selectFromDropdownScreenLabel", 'error');
		}
		return res;
	},

	set_selectFromOptionMatchScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.selectFromOptionMatchScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in selectFromOptionMatchScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in selectFromOptionMatchScreenLabel", 'error');
		}
		return res;
	},

	set_matchingLeftScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.matchingLeftScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in matchingLeftScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in matchingLeftScreenLabel", 'error');
		}
		return res;
	},

	set_matchingRightScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.matchingRightScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in matchingRightScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in matchingRightScreenLabel", 'error');
		}
		return res;
	},

	set_selectGroupScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.selectGroupScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in selectGroupScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in selectGroupScreenLabel", 'error');
		}
		return res;
	},

	set_clearScreenLabel: async function (value) {
		var res;
		await logger.logInto(await stackTrace.get());
		res = await action.setValue(this.clearScreenLabel, value);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "Value is entered in input-clearScreenLabel");
		} else {
			await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in input-clearScreenLabel", 'error');
		}
		return res;
	},
	click_alignAnswerOptiondropDown: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.alignAnswerOptiondropDown);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerOptiondropDown is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerOptiondropDown is NOT clicked", 'error');
		}
		return res;
	},

	click_alignAnswerLeftOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.alignAnswerLeftOptionbtn);
		res = await action.click(this.alignAnswerLeftOptionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerLeftOptionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerLeftOptionbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_alignAnswerCenterOptionbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.alignAnswerRightOptionbtn);
		res = await action.click(this.alignAnswerRightOptionbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerRightOptionbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerRightOptionbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_selectoptionImageAspectRatiobtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.selectoptionImageAspectRatiobtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " selectoptionImageAspectRatiobtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "selectoptionImageAspectRatiobtn is NOT clicked", 'error');
		}
		return res;
	},

	click_selectoptionImageScaledtoFixedSizebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.selectoptionImageScaledtoFixedSizebtn);
		res = await action.click(this.selectoptionImageScaledtoFixedSizebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " selectoptionImageScaledtoFixedSizebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "selectoptionImageScaledtoFixedSizebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_selectoptionImageScaledtoRelativeSizebtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		await action.waitForDisplayed(this.selectoptionImageScaledtoRelativeSizebtn);
		res = await action.click(this.selectoptionImageScaledtoRelativeSizebtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " selectoptionImageScaledtoRelativeSizebtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "selectoptionImageScaledtoRelativeSizebtn is NOT clicked", 'error');
		}
		return res;
	},

	click_alignAnswerOptionsbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.alignAnswerOptionsbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerOptionsbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerOptionsbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_alignAnswerLeftOptionsbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.alignAnswerLeftOptionsbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerLeftOptionsbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerLeftOptionsbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_alignAnswerCenterOptionsbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.alignAnswerCenterOptionsbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " alignAnswerCenterOptionsbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "alignAnswerCenterOptionsbtn is NOT clicked", 'error');
		}
		return res;
	},
	clickaddMoreButton: async function (testdata) {
		// console.log(testdata)
		await logger.logInto(stackTrace.get());
		res = await action.waitForDisplayed(this.addMoreButton + testdata);
		if (res == true) {
			res = await action.click(this.addMoreButton + testdata);
			if (res == true) {
				await logger.logInto(stackTrace.get(), res);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},


	click_deleteSubQuestion: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.deleteSubQuestion + testdata + "]");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " deleteSubQuestion is clicked");
			res = await action.waitForDisplayed(this.confirmDialogBox);
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "deleteSubQuestion is NOT clicked", 'error');
		}
		return res;
	},

	click_dndLabel: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.dndLabel + testdata + "]");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " dndLabel is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "dndLabel is NOT clicked", 'error');
		}
		return res;
	},

	click_deleteLabel: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.deleteLabel);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " deleteLabel is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "deleteLabel is NOT clicked", 'error');
		}
		return res;
	},

	click_deleteResponse: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.deleteResponse + testdata + "]");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " deleteResponse is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "deleteResponse is NOT clicked", 'error');
		}
		return res;
	},

	click_deleteOption: async function (testdata) {
		await logger.logInto(await stackTrace.get());
		var res;
		// console.log(this.deleteOption + testdata + "]");
		res = await action.click(this.deleteOption + testdata + "]");
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " deleteOption is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "deleteOption is NOT clicked", 'error');
		}
		return res;
	},

	click_confirmYes: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.confirmYes);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " confirmYes is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "confirmYes is NOT clicked", 'error');
		}
		return res;
	},
}