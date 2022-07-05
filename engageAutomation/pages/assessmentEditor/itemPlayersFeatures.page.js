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
	subOptionValue: selectorFile.css.editorTab.subOptionValue,
	subOptiontext: selectorFile.css.editorTab.subOptiontext,
	topsbottomOption: selectorFile.css.editorTab.topsbottomOption,
	leftRightOption: selectorFile.css.editorTab.leftRightOption,
	scoreInputBox: selectorFile.css.editorTab.scoreInputBox,
	addSubqun_btn:selectorFile.css.editorTab.addSubqun_btn,
	uniqueOption: selectorFile.css.editorTab.fibdropdown.uniqueOption,
	commonOption: selectorFile.css.editorTab.fibdropdown.commonOption,
	inputOption: selectorFile.css.editorTab.fibdropdown.inputOption,
	responseOption: selectorFile.css.editorTab.fibdropdown.responseOption,
	addAnswerbtn: selectorFile.css.editorTab.addAnswerbtn,
	rowNumber:selectorFile.css.editorTab.writing.rowNumber,
	characterLimit:selectorFile.css.editorTab.writing.characterLimit,
	placeHolderText:selectorFile.css.editorTab.writing.placeHolderText,
	allowrichTextMedia:selectorFile.css.editorTab.writing.allowrichTextMedia,
	allowFileAttachment:selectorFile.css.editorTab.writing.allowFileAttachment,
	responseEdit:selectorFile.css.editorTab.responseEdit,
	responseTextArea:selectorFile.css.editorTab.responseTextArea,
	textAreabtn:selectorFile.css.editorTab.textAreabtn,
	shufflingCheckBox:selectorFile.css.editorTab.shufflingCheckBox,
	//--MULTIPLE RESPONSE
	isInitialized1: async function (testdata) {
		for (var i = 0; i < testdata.length; i++) {
			for (var j = 0; j < testdata[i].length; j++) {
				var test = testdata[i][j]
				res = await action.waitForExist(this.editorsel[test])
				console.log(testdata[i][j] + ":" + res)
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
			await browser.pause(2000)
			res = await action.click(this.nextqun_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				await browser.pause(5000)
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
			await browser.pause(2000)
			res = await action.click(this.editPrompt_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				await browser.pause(5000)
			}
		}
		else {
			res = res + " -- Edit Prompt button is not clickable";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setHeaderTextinPlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());
		await browser.pause(5000)
		await action.waitForDisplayed(this.headerEdit_btn)
		res = await action.click(this.headerEdit_btn);
		await action.clearValueDefault(this.placeHolderHeader_txt);
		if (res == true) {
			await browser.pause(5000)
			res = await action.addValue(this.placeHolderHeader_txt, testdata)
			await browser.pause(2000)
			if (res == true) {
				await this.clickDonebtn();
			}
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
		res = await action.click(this.instructionEdit_btn);
		if (res == true) {
			await browser.pause(5000)
			res = await action.clearValueDefault(this.placeHolderIns_txt)
			res = await action.addValue(this.placeHolderIns_txt, testdata)
			await browser.pause(2000)
			if (res == true) {
				await this.clickDonebtn();
			}
			await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setPromptTextPlaceHolder: async function (testdata) {
		await logger.logInto(stackTrace.get());

		res = await action.addValue(this.placeHolderIns_txt, testdata)
		await browser.pause(2000)
		if (res == true) {
			await this.clickDonebtn();
		}
		await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");

		return res;
	},

	setSubQuestiontxt: async function (testdata) {
		await logger.logInto(stackTrace.get());

		res = await action.addValue(this.placeHolderIns_txt, testdata)
		await browser.pause(2000)
		if (res == true) {
			await this.clickDonebtn();
		}
		await logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");

		return res;
	},
	setOptiontxt: async function (testdata) {
		console.log(testdata[2])
		await logger.logInto(stackTrace.get());
		console.log(this.subOptionIndex + "\"" + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext)
		await action.click(this.subOptionIndex + "\"" + testdata[0] + "\"]>" + this.subOptionValue + testdata[1] + "] " + this.subOptiontext)
		res = await action.clearValue((this.subOptionIndex + "\"" + testdata[0] + "\"]>" + this.subOptionValue + testdata[1] + "] " + this.subOptiontext))
		await browser.pause(2000)
		res = await action.addValue((this.subOptionIndex + "\"" + testdata[0] + "\"]>" + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])
		
		//res = await action.setValue((this.subOptionIndex + "\"" + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])
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
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
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
		console.log(countLabel)
		var optionlength = await action.findElements("[data-tid*=container-label")
		console.log(optionlength.length)
		if (labelOptions.length > optionlength.length) {
			countLabel = (labelOptions.length - optionlength.length)
		}
		console.log(countLabel)
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
		console.log("location of element:", location);
		console.log("left passed - ", left);
		console.log("top passed - ", top);
		console.log("new x", location.x + left);
		console.log("new y:", location.y + top);

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
	setItems: async function (items) {
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
	},

	//--MATCHING
	setMatchedItems: async function (matchedItems) {
		await logger.logInto(stackTrace.get());
		var matchedItemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= matchedItems.length; i++) {
			var optionSelector = this.inputMatchedItem + i + "] textarea";
			var optionValue = matchedItems[i - 1];
			matchedItemsArr[i - 1] = await action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = await action.getValue(optionSelector)
		}
		return getValueArray
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
		console.log("selector:", this.addGroup_btn)
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
			console.log(optionValue)
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
	//	res = true;
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
		console.log(itemPlayerSelected)
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
		console.log("rm")
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
		console.log(questionTitle)

		await logger.logInto(stackTrace.get());
		await browser.pause(2000)
		await action.click(this.responseEdit)
		await action.clearValueDefault(this.responseTextArea)
		await browser.pause(2000)
		await action.keyPress("\uE014")
		await action.click(this.responseTextArea)
		res = await action.setValue(this.responseTextArea, questionTitle);
		await browser.pause(2000)
		//await action.keyPress("\uE008a\uE00F")
		await action.keyPress(['\uE008', '\uE00F'])
		await browser.pause(2000)
		await action.keyPress("\uE017")
		if (res == true) {

			await logger.logInto(stackTrace.get(), " -- Question Title is entered");
			//action.click(this.textAreabtn)

		}
		else {
			res = res + " -- Question Title is NOT entered";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		await browser.pause(10000)
		return res;
	},
	clickAddBlankCKEditor: async function () {
		
		await logger.logInto(stackTrace.get());
		await browser.pause(2000)
		await action.waitForDisplayed(this.responseEdit)
		await action.click(this.responseEdit)
		await browser.pause(2000)
		await action.click(this.responseTextArea)
		await action.keyPress("\uE008\uE00F")
		await action.click(this.textAreabtn)
		await action.keyPress("\uE014")
		await browser.pause(2000)
		return res;
	},
	//Adding 'IMAGE' as media
	clickAddImageBtn: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForClickable(this.addImage_btn)
		res = await action.click(this.addImage_btn);
		console.log(res)
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
		console.log(rowNumber)

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
		res = await action.clearValue(this.characterLimit + i+"] input");
		res = await action.addValue(this.characterLimit + i+"] input", characterLimit);
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
		res = await action.clearValue(this.placeHolderText + i +"] input");
		res = await action.addValue(this.placeHolderText + i +"] input", placeHolderText);
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
		res = await action.click(this.allowrichTextMedia + i +"] input");
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
		res = await action.click(this.allowFileAttachment + i +"] input");
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
		await action.waitForDisplayed(this.uploadedImage);
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
		console.log(res)
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
		await action.waitForDisplayed(this.addAnswer_btn + "-" + testdata);
		res = await action.click(this.addAnswer_btn + "-" + testdata);
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

}