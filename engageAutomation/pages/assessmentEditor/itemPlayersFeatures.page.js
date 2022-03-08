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
	uniqueOption: selectorFile.css.editorTab.fibdropdown.uniqueOption,
	commonOption: selectorFile.css.editorTab.fibdropdown.commonOption,
	inputOption: selectorFile.css.editorTab.fibdropdown.inputOption,
	responseOption: selectorFile.css.editorTab.fibdropdown.responseOption,
	addAnswerbtn:selectorFile.css.editorTab.addAnswerbtn,
	//--MULTIPLE RESPONSE
	isInitialized1: function (testdata) {
		for (var i = 0; i < testdata.length; i++) {
			for (var j = 0; j < testdata[i].length; j++) {
				var test = testdata[i][j]
				res = action.waitForExist(this.editorsel[test])
				console.log(testdata[i][j] + ":" + res)
			}
		}
	},
	setScorePlaceHolder: function (testdata) {
		logger.logInto(stackTrace.get());
		res = action.waitForDisplayed(this.scoreInputBox);
		if (res == true)
			res = action.setValue(this.scoreInputBox, testdata)
		browser.pause(2000)
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Value is added in Score");
		}
		else {
			res = res + " -- Error in Value added in Score";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	deleteMediabtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.deleteMedia_btn);
		if (res == true) {
			browser.pause(2000)
			res = action.click(this.deleteMedia_btn);
			if (res == true) {
				res = action.waitForDisplayed(this.addImage_btn);
				//browser.pause(5000)
			}
		}
		else {
			res = res + " -- next button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickNextBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.nextqun_btn);
		if (res == true) {
			browser.pause(2000)
			res = action.click(this.nextqun_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				browser.pause(5000)
			}
		}
		else {
			res = res + " -- next button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickUniqueOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.uniqueOption);
		if (res == true) {
			res = res + " -- unique Option button is not clickable";
			browser.pause(2000)
			action.click("div[class*=MuiDialogActions-spacing] button:nth-child(2)")
			browser.pause(5000)
		}
		else {
			res = res + " -- unique Option button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickCommonOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.commonOption);
		if (res == true) {
			browser.pause(2000)
			
			res = res + " -- common Option button is  clickable";
			res=action.click("[data-tid=button-agree]")
			
		}
		else {
			res = res + " -- common Option button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setinputOptionText: function (testdata) {
		logger.logInto(stackTrace.get());
		for (var i = 0; i < testdata.length; i++) {
			var inputSelector = this.inputOption + testdata[i][0] +"] input "
			res = action.setValue(inputSelector, testdata[i][1])
			if (res == true) {
				logger.logInto(stackTrace.get(), " -- input Value Data is added");
			}
			else
				logger.logInto(stackTrace.get(), " -- input Value Data is not added");
		}
		return res;
	},
	setresponseOptionText: function (testdata) {
		logger.logInto(stackTrace.get());
		for (var i = 0; i < testdata.length; i++) {
			var responseSelector = this.responseOption + testdata[i][0] +"] div[id=simple-select]"
			res = action.click(responseSelector)
			if (res == true) {
				action.click("li[data-value="+testdata[i][1])
				logger.logInto(stackTrace.get(), " -- input Value Data is added");
			}
			else
				logger.logInto(stackTrace.get(), " -- input Value Data is not added");
		}
		return res;
	},
	clickEditPrompt_Btn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.editPrompt_btn);
		if (res == true) {
			browser.pause(2000)
			res = action.click(this.editPrompt_btn);
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				browser.pause(5000)
			}
		}
		else {
			res = res + " -- Edit Prompt button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setHeaderTextinPlaceHolder: function (testdata) {
		logger.logInto(stackTrace.get());
		browser.pause(5000)
		action.waitForDisplayed(this.headerEdit_btn)
		res = action.click(this.headerEdit_btn);
		action.clearValueDefault(this.placeHolderHeader_txt);
		if (res == true) {
			browser.pause(5000)
			res = action.addValue(this.placeHolderHeader_txt, testdata)
			browser.pause(2000)
			if (res == true) {
				this.clickDonebtn();
			}
			logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setInsTextinPlaceHolder: function (testdata) {
		logger.logInto(stackTrace.get());
		res = action.click(this.instructionEdit_btn);
		if (res == true) {
			browser.pause(5000)
			res = action.addValue(this.placeHolderIns_txt, testdata)
			browser.pause(2000)
			if (res == true) {
				this.clickDonebtn();
			}
			logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	setPromptTextPlaceHolder: function (testdata) {
		logger.logInto(stackTrace.get());

		res = action.addValue(this.placeHolderIns_txt, testdata)
		browser.pause(2000)
		if (res == true) {
			this.clickDonebtn();
		}
		logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");

		return res;
	},

	setSubQuestiontxt: function (testdata) {
		logger.logInto(stackTrace.get());

		res = action.addValue(this.placeHolderIns_txt, testdata)
		browser.pause(2000)
		if (res == true) {
			this.clickDonebtn();
		}
		logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");

		return res;
	},
	setOptiontxt: function (testdata) {
		console.log(testdata[2])
		logger.logInto(stackTrace.get());
		console.log(this.subOptionIndex + "\"" + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext)
		res = action.setValue((this.subOptionIndex + "\"" + testdata[0] + "\"] " + this.subOptionValue + testdata[1] + "] " + this.subOptiontext), testdata[2])
		browser.pause(2000)
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		return res;
	},
	clickeditSubQuestionbtn: function (testdata) {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.editSubQuestion_btn + testdata + "]>span:nth-child(1)");
		if (res == true) {
			res = action.click(this.editSubQuestion_btn + testdata + "]>span:nth-child(1)");
			if (res == true) {
				res = action.waitForDisplayed(this.done_btn);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickDonebtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.done_btn);
		if (res == true) {
			res = action.click(this.done_btn);
			if (res == true) {
				res = action.waitForDisplayed(this.done_btn, undefined, true);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickTopBottombtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.topsbottomOption);
		if (res == true) {
			res = action.click(this.topsbottomOption);
			if (res == true) {
				browser.pause(5000)
				res = action.waitForDisplayed(this.topsbottomOption);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickLeftRightbtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable(this.leftRightOption);
		if (res == true) {
			res = action.click(this.leftRightOption);
			if (res == true) {
				browser.pause(5000)
				res = action.waitForDisplayed(this.leftRightOption);
			}
		}
		else {
			res = res + " -- done button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickSaveandReturnBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForClickable("div:nth-child(2) [data-tid=button-saveandreturn]");
		if (res == true) {
			browser.pause(5000)
			res = action.click("div:nth-child(2) [data-tid=button-saveandreturn]");
			if (res == true) {
				//res = action.waitForDisplayed("[role=progressbar]", undefined, true);
				browser.pause(40000)
			}
		}
		else {
			res = res + " -- saveandreturn button is not clickable";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	selectCorrectOptions: function (correctOptions) { // this function should be enhanced to support MCQ and True/False - akhil
		logger.logInto(stackTrace.get());
		res = action.click(this.checkboxOption_input + "1]");
		var optionsarr = [];
		for (var i = 0; i < correctOptions.length; i++) {
			var optionSelector = this.checkboxOption_input + correctOptions[i] + "] input";
			res = action.click(optionSelector);
			optionsarr[i] = action.getText(optionSelector)
		}
		// return the options selected - akhil
		// updated - Swati
		return optionsarr;
	},

	//MCQ, MCSR, TruFalse
	selectOptionStyle: function (optionStyle) {
		logger.logInto(stackTrace.get());
		let optionStyleSelector = this.optionStyle_radio + optionStyle + "]";
		res = action.click(optionStyleSelector);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Option Style button is clicked");
		}
		else {
			res = res + " -- Error in clicking Option Style button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	clickAddLabelBtn: function (labelOptions) { //why do we need the list of options, need to discuss - akhil
		logger.logInto(stackTrace.get());
		var countLabel = labelOptions.length;
		var optionlength = action.findElements("[data-tid*=container-label")
		if (labelOptions.length > optionlength.length) {
			countLabel = (labelOptions.length - optionlength.length)
		}
		for (var i = 0; i < countLabel; i++) {
			res = action.click(this.addLabel_btn);
		}

		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Label Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Label button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	dragLabel: function () {
		res = $("[data-tid=container-label-A]").dragAndDrop({ x: 100, y: 600 });
		// res = this.dragAndDrop_cordinates(this.container_labelB,100,10)
		// res = this.dragAndDrop_cordinates(this.container_labelC,600,0)
		// res = this.dragAndDrop_cordinates(this.container_labelD,650,100)
		// res = this.dragAndDrop_cordinates(this.container_labelE,700,100)
		return res;
	},

	//--DRAG AND DRAG ONTO IMAGE
	dragAndDrop_cordinates: function (draggable, left, top) {  //need to discuss - akhil
		var location = action.getLocation(draggable);
		console.log("location of element:", location);
		console.log("left passed - ", left);
		console.log("top passed - ", top);
		console.log("new x", location.x + left);
		console.log("new y:", location.y + top);

		logger.logInto(stackTrace.get());
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
			browser.performActions([actions1]);
			logger.logInto(stackTrace.get(), message);
			return true;
		} catch (err) {
			logger.logInto(stackTrace.get(), err.message, "error");
			return err;
		}
	},

	// function missing for inserting image in the DND question - akhil
	// images can be inserted in DND question using imageUpload function in editorTabCommon.page - Swati

	//--DND IMAGE
	clickAddBlank: function (lines) { // not clear on this function, need to discuss - akhil
		logger.logInto(stackTrace.get());
		var count = lines.length;
		res = action.clearValue(this.questionInputField);
		for (var i = 0; i < count; i++) {
			if (lines[i] == "blank")
				res = action.click(this.addBlank_btn);
			else
				res = action.addValue(this.questionInputField, lines[i]);
		}
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Label Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Label button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--MATCHING
	clickAddPairBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.addPair);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Pair Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Pir button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--MATCHING
	setItems: function (items) {
		logger.logInto(stackTrace.get());
		var countLabel = items.length;
		console.log(countLabel)
		var optionlength = action.findElements("[data-tid*=input-item")
		console.log(optionlength.length)
		//if (items.length > optionlength.length) {
		countLabel = (items.length - optionlength.length)
		console.log(countLabel)
		//}
		for (var i = 0; i < (countLabel); i++) {
			res = action.click("[data-tid=button-add]");
		}
		var itemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= items.length; i++) {
			var optionSelector = this.inputItem + i + "] textarea";
			var optionValue = items[i - 1];
			itemsArr[i - 1] = action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = action.getValue(optionSelector)
		}
		return getValueArray
	},

	//--MATCHING
	setMatchedItems: function (matchedItems) {
		logger.logInto(stackTrace.get());
		var matchedItemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= matchedItems.length; i++) {
			var optionSelector = this.inputMatchedItem + i + "] textarea";
			var optionValue = matchedItems[i - 1];
			matchedItemsArr[i - 1] = action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = action.getValue(optionSelector)
		}
		return getValueArray
	},

	// function missing for re-ordering answer options - akhil
	// we insert the correct order only in the option list which is by default always shuffled in the preview
	// so the function setOptions(optionslist) in editorCommon.page would work here - Swati

	//functions for FIB editor are missing, need to decide which are required based on TCs - akhil
	// FIB editor needs question and options, which are already in editorCommon.page - swati 

	//--CLASSIFY
	clickAddGroupBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.addGroup_btn);
		console.log("selector:", this.addGroup_btn)
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Group Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Group button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--CLASSIFY
	clickAddOptionBtn: function (options) {
		logger.logInto(stackTrace.get());
		if (options.length > 2) {
			var countAddAnswer = (options.length - 2)
			for (var i = 0; i < countAddAnswer; i++) {
				res = action.click(this.addOption_btn);
			}
		}
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Option Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Option button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//--CLASSIFY
	setClassifyGroups: function (groups) {
		logger.logInto(stackTrace.get());
		var itemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= groups.length; i++) {
			var optionSelector = this.group_input + i + "] input";
			var optionValue = groups[i - 1];
			console.log(optionValue)
			itemsArr[i - 1] = action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = action.getValue(optionSelector)
		}
		return getValueArray
	},

	//--CLASSIFY
	setClassifyOptions: function (options) {
		logger.logInto(stackTrace.get());
		var itemsArr = [];
		let getValueArray = []
		for (var i = 1; i <= options.length; i++) {
			var optionSelector = this.options_input + i + "] input";
			var optionValue = options[i - 1];
			itemsArr[i - 1] = action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = action.getValue(optionSelector)
		}
		return getValueArray
	},

	//--CLASSIFY
	selectGroupsForOptions: function (setGroups, groupIcon, groups) {
		logger.logInto(stackTrace.get());
		let getValueArray = []
		for (var i = 0; i < setGroups.length; i++) {
			action.click("div[data-rbd-draggable-id=" + groupIcon[i] + "] div[id=\"option-simple-select\"]")

			for (var j = 1; j <= groups.length; j++) {
				if (action.getAttribute("ul[role=\"listbox\"] li:nth-child(" + j + ")", "data-value") == setGroups[i]) {
					action.click("ul[role=\"listbox\"] li[data-value=" + setGroups[i] + "]")
					getValueArray[i] = action.getAttribute("ul[role=\"listbox\"] li:nth-child(" + j + ")", "data-value")
					j = groups.length + 10;
				}
			}
		}
		return getValueArray;
	},
	isInitialized: function () {
		logger.logInto(stackTrace.get());
		let pageStatus = action.waitForDocumentLoad();
		res = this.getquizPageData();
		res.pageStatus = pageStatus;
		return res;
	},

	getquizPageData: function () {
		var obj = {
			setup_tab: action.getText(this.setup_tab),
			questions_tab: action.getText(this.questions_tab),
			editor_tab: action.getText(this.editor_tab),
			previewPublish_tab: action.getText(this.previewPublish_tab)
		}
		return obj;
	},

	setQuizTitle: function (title) {
		logger.logInto(stackTrace.get());
		res = action.setValue(this.title_txtbox, title);
		if (res == true) {
			res = action.getValue(this.title_txtbox)
			logger.logInto(stackTrace.get(), " -- Title is entered");
		}
		else {
			res = res + " -- title is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickNextbtn: function () {
		logger.logInto(stackTrace.get());
		action.waitForClickable(this.nextbtn)
		res = action.click(this.nextbtn);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " :Question Tab is clicked Succesfully");
			action.waitForDisplayed(this.addQuestion_btn);
			res = action.getAttribute(this.questions_tab, "aria-selected");
			//For now, question tab is selected or not is returned
		}
		else {
			res = res + " -- Error in clicking Questions Tab";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickQuestionTab: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.questions_tab);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " :Question Tab is clicked Succesfully");
			res = action.getText(this.addQuestion_btn);
			//For now, the text of the 'Add Question' button has been returned: Swati
		}
		else {
			res = res + " -- Error in clicking Questions Tab";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickEditorTab: function () {
		logger.logInto(stackTrace.get());
		//res = action.waitForClickable(this.addQuestion_btn);
		res = true;
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " -- Editor Tab is clicked");
			res = action.click(this.editor_tab);
			//res = this.getEditorPageData();
		}
		else {
			res = res + " -- Error in clicking Editor Tab";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getEditorPageData: function () {
		var obj = {
			//questionType_header: action.getText(this.questionType_header),
			questionAccordionText: action.getText(this.questionAccordionText),
			answerAccordionText: action.getText(this.answerAccordionText),
			scoringAccordionText: action.getText(this.scoringAccordionText),
			addInstruction_btn: action.getText(this.addInstruction_btn),
			hintAccordionText: action.getText(this.hintAccordionText)
		}
		return obj;
	},


	// clickEditorTab: function () {
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

	clickAddQuestionBtn: function () {
		logger.logInto(stackTrace.get());
		//res = action.waitForDisplayed(this.addQuestion_btn);
		let editorText = [];
		res = action.click(this.addQuestion_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " -- Add Question Button is clicked");
			var editorChoice = action.findElements(this.addQuestionGrid);
			for (var i = 0; i < editorChoice.length; i++) {
				editorText[i] = action.getText(editorChoice[i]);
			}
		}
		else {
			res = res + " -- Error in clicking Add Question button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		obj =
		{
			editorText: editorText,
			editorCount: editorChoice.length
		}
		return obj;
	},

	selectItemPlayerBtn: function (itemPlayer) {
		logger.logInto(stackTrace.get());
		var itemPlayerSelected = this.itemPlayer_btn + itemPlayer + "]";
		res = action.waitForDisplayed(itemPlayerSelected)
		console.log(itemPlayerSelected)
		res = action.click(itemPlayerSelected);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Selected Question is clicked");
		}
		else {
			res = res + " -- Error in clicking True False Question button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_AddQuestion_Dialog_Ok_Button: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.createQuestion_btn);
		//swati - to be edited, browser.pause is temp
		//BhxBrowser.pause(10000); // remove this and add wait for loader to not display - akhil
		if (res == true) {
			//action.waitForDisplayed(".//span[contains(@class, 'MuiSkeleton-wave')]", undefined, true)
			logger.logInto(stackTrace.get(), " -- OK Button is clicked");
		}
		else {
			res = res + " -- Error in clicking OK Button button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_CreateQuestion_Button: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.createQuestion_btn);
		//swati - to be edited, browser.pause is temp
		//BhxBrowser.pause(10000); // remove this and add wait for loader to not display - akhil
		if (res == true) {
			action.waitForDisplayed(".//span[contains(@class, 'MuiSkeleton-wave')]", undefined, true)
			logger.logInto(stackTrace.get(), " -- OK Button is clicked");
		}
		else {
			res = res + " -- Error in clicking OK Button button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Editor Tab's common functions below:
	clickDrawerQuestionNumber: function (questionIndex) {
		logger.logInto(stackTrace.get());
		let QuestionNumber = this.drawerQuestion + questionIndex + "]";
		res = action.click(QuestionNumber);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Drawer Question is clicked");
			// return type of editor opened - akhil
		}
		else {
			res = res + " -- Error in clicking Drawer Question button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Question Title
	setQuestionTitle: function (questionTitle) {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.questionTitle_input)
		// action.clearValueDefault(this.questionTitle_input);
		browser.pause(5000)
		res = action.setValue(this.questionTitle_input, questionTitle);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Question Title is entered");
			res = action.getValue(this.questionTitle_input)
		}
		else {
			res = res + " -- Question Title is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Instruction
	clickAddInstructionBtn: function () {
		logger.logInto(stackTrace.get());
		action.waitForClickable(this.addInstruction_btn)
		res = action.click(this.addInstruction_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Instruction Button is clicked");
			browser.pause(2000)
			//res = action.click(this.addInstruction_btn);
			//res=action.waitForDisplayed(this.instruction_input)
		}
		else {
			res = res + " -- Error in clicking Add Instruction button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		console.log("rm")
		return res;
	},

	setQuestionInstruction: function (questionInstruction) {
		logger.logInto(stackTrace.get());
		res = action.addValue(this.instruction_input, questionInstruction); // use setValue instead of addValue - akhil
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Question Instruction is entered");
		}
		else {
			res = res + " -- Question Instruction is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Adding 'VIDEO' as media
	clickAddVideoBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.addVideo_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Video Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Video button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setVideoMediaURL: function (videoURL) {
		logger.logInto(stackTrace.get());
		res = action.click(this.videoType_btn)
		res = action.click("[role=\"listbox\"]>li:nth-child(1)")
		action.waitForDisplayed(this.videoURL_input)
		res = action.setValue(this.videoURL_input, videoURL);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Video Media URL is entered");
			// return status of the video preview - akhil
		}
		else {
			res = res + " -- Video Media URL is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	setVideoCredit: function (videoCredit) {
		logger.logInto(stackTrace.get());
		res = action.setValue(this.videoCredit_input, videoCredit);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Video Credit is entered");
		}
		else {
			res = res + " -- Video Credit is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//
	setQuestionTextinwriting: function (questionTitle) {
		console.log(questionTitle)

		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.questionText_input)
		browser.pause(2000)
		res = action.clearValueDefault(this.questionText_input);
		res = action.clearValue(this.questionText_input);
		res = action.addValue(this.questionText_input, questionTitle);
		if (res == true) {

			logger.logInto(stackTrace.get(), " -- Question Title is entered");

		}
		else {
			res = res + " -- Question Title is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		browser.pause(10000)
		return res;
	},
	//Adding 'IMAGE' as media
	clickAddImageBtn: function () {
		logger.logInto(stackTrace.get());
		action.waitForClickable(this.addImage_btn)
		res = action.click(this.addImage_btn);
		console.log(res)
		action.waitForDisplayed("[data-tid='button-browseimage']")
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Image Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Image button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	imageUpload: function (imagePath) {
		//let filePath = path.join(tcDataDir, imagePath);
		// use browser.uploadFile to upload the test file
		let remoteFilePath = browser.uploadFile(imagePath);
		// set file path value in the input field
		res = action.addValue(this.media_input, remoteFilePath);
		action.waitForDisplayed(this.uploadedImage, 5000);
		return res;
	},


	setImageCredit: function (imageCredit) {
		logger.logInto(stackTrace.get());
		res = action.setValue(this.imageCredit_input, imageCredit); // use setValue instead of addValue - akhil
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Image Credit is entered");
		}
		else {
			res = res + " -- Image Credit is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Adding 'AUDIO' as media
	clickAddAudioBtn: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.addAudio_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Audio Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Audio button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	audioUpload: function (audioPath) { // this is duplicate, we should combine imageupload and audioupload - akhil
		// use browser.uploadFile to upload the test file
		let remoteFilePath = browser.uploadFile(audioPath);
		// set file path value in the input field
		res = action.addValue(this.media_input, remoteFilePath);
		action.waitForDisplayed(this.uploadedAudio, 5000);
		//rupsi: return audio file
		return res;
	},

	videoUpload: function (videoPath) { // this is duplicate, we should combine imageupload and audioupload - akhil
		// use browser.uploadFile to upload the test file
		let remoteFilePath = browser.uploadFile(videoPath);
		// set file path value in the input field
		res = action.addValue(this.media_input, remoteFilePath);
		action.waitForDisplayed(this.uploadedAudio, 5000);
		//rupsi: return audio file
		return res;
	},

	setAudioCredit: function (audioCredit) {
		logger.logInto(stackTrace.get());
		res = action.setValue(this.audioCredit_input, audioCredit); // use setValue instead of addValue - akhil
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Audio Credit is entered");
		}
		else {
			res = res + " -- Audio Credit is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Set Question Text
	setQuestionText: function (questionText) {
		logger.logInto(stackTrace.get());
		//action.clearValue(this.questionInputField)
		//action.clearValueDefault(this.questionInputField)
		res = action.addValue(this.questionInputField, questionText);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Question Text is entered");
		} else {
			res = res + " -- Question Text is NOT entered";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	//Click on Add Answer Button
	clickAddAnswerBtn: function (testdata) {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.addAnswer_btn);
		res = action.click(this.addAnswer_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickAddAnswerBtnComman: function (testdata) {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.addAnswerbtn);
		res = action.click(this.addAnswerbtn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickAddAnswerMCQSRBtn: function (testdata) {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.addAnswer_btn + "-" + testdata);
		res = action.click(this.addAnswer_btn + "-" + testdata);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Add Answer Button is clicked");
		}
		else {
			res = res + " -- Error in clicking Add Answer button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	//Used by MCQ, MCSR, TruFalse, DND, FIB That's why kept in common file
	//Note that this function is not working for FIB for now
	//Logged ENG-5502 for the same
	setOptions: function (options) { // this function should be part of itemPlayersFeature.page.js
		logger.logInto(stackTrace.get());
		var countAddAnswer = 0
		var optionsarr = [];
		let getValueArray = []
		var optionlength = action.findElements(this.inputOptions)
		if (options.length > optionlength.length) {
			countAddAnswer = (options.length - optionlength.length)
			for (var i = 0; i < countAddAnswer; i++) {
				this.clickAddAnswerBtn();
			}
		}
		for (var i = 1; i <= options.length; i++) {

			var optionSelector = this.inputOptions + i + "] input";
			var optionValue = options[i - 1];
			optionsarr[i - 1] = action.setValue(optionSelector, optionValue);
			getValueArray[i - 1] = action.getValue(optionSelector)
		}
		return getValueArray
	},

	setAnswer: function (options, optionValue) { // this function should be part of itemPlayersFeature.page.js
		logger.logInto(stackTrace.get());
		var countAddAnswer = 0
		var optionsarr = [];
		let getValueArray = []
		var answerlength = action.findElements(this.fibAnswerOption)

		for (var i = 0; i < options.length; i++) {

			var optionSelector = this.fibAnswerOption + options[i] + "] input";
			console.log(optionSelector)
			console.log(optionValue[i])
			optionsarr[i] = action.setValue(optionSelector, optionValue[i]);
			getValueArray[i] = action.getValue(optionSelector)
		}
		return getValueArray
	},
	clickPreviewPublishTab: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.previewPublish_tab);
		if (res == true) {
			browser.pause(2000);
			logger.logInto(stackTrace.get(), " -- Preview and Publish Tab is clicked");
		}
		else {
			res = res + " -- Error in clicking Preview and Publish Tab";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickPreviewBtn: function () {
		logger.logInto(stackTrace.get());
		action.waitForClickable(this.preview_btn);
		res = action.click(this.preview_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Preview Button is clicked");
			//res = this.previewInitialized(); // here we should call testPlayer.page.js from engage experience app - akhil
		}
		else {
			res = res + " -- Error in clicking Preview button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	previewInitialized: function () { // not clear on this function - akhil
		logger.logInto(stackTrace.get());
		let pageStatus = action.waitForDisplayed(this.setup_tab);
		logger.logInto(stackTrace.get(), res);
		if (pageStatus == true) {
			res = this.quizPageData(); // this appears incorrect, please recheck - akhil
			res.pageStatus = pageStatus;
			return res;
		}
		else
			res = res + "-- Set up tab is NOT availabe"
		return res;
	}

}