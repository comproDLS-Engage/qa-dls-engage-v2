"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
// var summaryPage //= require('./summary.page.js');
var itemplayerPage //= require('./itemPlayer.page.js');
// var launchQuizPage = require('./launchQuiz.page.js');
var res, ret;

module.exports = {

	//player_header: selectorFile.css.ComproEngage.testPlayer.player_header,
	//closeItem_btn: selectorFile.css.ComproEngage.testPlayer.closeItem_btn,
	next_btn: selectorFile.css.ComproEngage.testPlayer.next_btn,
	previous_btn: selectorFile.css.ComproEngage.testPlayer.previous_btn,
	finish_btn: selectorFile.css.ComproEngage.testPlayer.finish_btn,
	checkMyWork_btn: selectorFile.css.ComproEngage.testPlayer.checkMyWork_btn,
	tryAgain_btn: selectorFile.css.ComproEngage.testPlayer.tryAgain_btn,
	reset_btn: selectorFile.css.ComproEngage.testPlayer.reset_btn,
	//closeReview_btn: selectorFile.css.ComproEngage.testPlayer.closeReview_btn,
	//loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
	//lo_container: selectorFile.css.ComproEngage.testPlayer.lo_container,
	showAnswer_btn: selectorFile.css.ComproEngage.testPlayer.showAnswer_btn,
	yourResponse_btn: selectorFile.css.ComproEngage.testPlayer.yourResponse_btn,
	feedbackText: selectorFile.css.ComproEngage.testPlayer.feedback_txt,
	//showingCorrectAnswerText: selectorFile.css.ComproEngage.testPlayer.showingCorrectAnswer_txt,
	//collapseBtn: selectorFile.css.ComproEngage.testPlayer.collapseBtn,
	//tpBottomPanelHidden: selectorFile.css.ComproEngage.testPlayer.tpBottomPanelHidden,
	//tpBottomPanelVisible: selectorFile.css.ComproEngage.testPlayer.tpBottomPanelVisible,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		//res = action.waitForDisplayed(this.loaderIcon, undefined, true);
		res = action.waitForDocumentLoad();
		if (res == true) {
			ret = this.getTestplayerInfo();
		}
		else {
			ret = res + " -- TestPlayer page is not loaded yet";
			logger.logInto(stackTrace.get(), res);
		}
		return ret;
	},

	getTestplayerInfo: function () {
		var testplayerInfo = {
			checkmyWork_isExists: action.getElementCount(this.checkMyWork_btn) == 1 ? true : false,
			checkmyWork_isDisabled: (action.getElementCount(this.checkMyWork_btn) == 1) ? action.getAttribute(this.checkMyWork_btn, 'disabled') : false,
			tryAgain_isExists: action.getElementCount(this.tryAgain_btn) == 1 ? true : false,
			tryAgain_isDisabled: (action.getElementCount(this.tryAgain_btn) == 1) ? action.getAttribute(this.tryAgain_btn, 'disabled') : false,
			reset_isExists: action.getElementCount(this.reset_btn) == 1 ? true : false,
			reset_isDisabled: (action.getElementCount(this.reset_btn) == 1) ? action.getAttribute(this.reset_btn, 'disabled') : false,
			previous_isExists: action.getElementCount(this.previous_btn) == 1 ? true : false,
			previous_isDisabled: (action.getElementCount(this.previous_btn) == 1) ? action.getAttribute(this.previous_btn, 'disabled') : false,
			next_isExists: action.getElementCount(this.next_btn) == 1 ? true : false,
			next_isDisabled: (action.getElementCount(this.next_btn) == 1) ? action.getAttribute(this.next_btn, 'disabled') : false,
		};
		return testplayerInfo;
	},

	click_CheckMyWork: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.checkMyWork_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- CheckmyWork Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking CheckmyWork Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_Skip: function () {
		logger.logInto(stackTrace.get());
		let btnName = action.getText(this.next_btn)
		res = action.click(this.next_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- " + btnName + " is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " --Error in clicking " + btnName;
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_Previous: function () {
		logger.logInto(stackTrace.get());
		let btnName = action.getText(this.previous_btn)
		res = action.click(this.previous_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- " + btnName + " is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " --Error in clicking " + btnName;
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_TryAgain: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.tryAgain_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- TryAgain Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking TryAgain Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_Reset: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.reset_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Reset Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking TryAgain Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},


	// click_CheckMyWork: function () {
	// 	logger.logInto(stackTrace.get());
	// 	// this.expandTestPlayer();
	// 	res = action.click(this.checkMyWork_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- CheckmyWork Button is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking CheckmyWork Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_Previous: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.previous_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Previous Button is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking Previous Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_Skip: function () {
	// 	logger.logInto(stackTrace.get());
	// 	// this.expandTestPlayer();
	// 	let btnName = action.getText(this.next_btn)
	// 	res = action.click(this.next_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- " + btnName + " is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " --Error in clicking " + btnName;
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_Finish: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.finish_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Finish Button is clicked");
	// 		summaryPage = require('./summary.page.js');
	// 		ret = summaryPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking Finish Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_CloseItem: function () {
	// 	logger.logInto(stackTrace.get());
	// 	res = action.click(this.closeItem_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Close Item Button is clicked");
	// 		// ret = launchQuizPage.isInitialized();
	// 	} else {
	// 		ret = res + " -- Error in clicking  closeItem_btn"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_TryAgain: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.tryAgain_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- TryAgain Button is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking TryAgain Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_closeReview: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.closeReview_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Close Review Button is clicked");
	// 		//summaryPage = require('./summary.page.js');
	// 		//ret = summaryPage.isInitialized();
	// 	}
	// 	else {
	// 		res = res + " -- Error in clicking Close Review Button"
	// 		logger.logInto(stackTrace.get(), res, "error");
	// 	}
	// 	return res;
	// },

	// click_showAnswer: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.showAnswer_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Show Answer Button is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking Show Answer Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	// click_yourResponse: function () {
	// 	logger.logInto(stackTrace.get());
	// 	this.expandTestPlayer();
	// 	res = action.click(this.yourResponse_btn);
	// 	if (res == true) {
	// 		logger.logInto(stackTrace.get(), " -- Your Response Button is clicked");
	// 		itemplayerPage = require('./itemPlayer.page.js');
	// 		ret = itemplayerPage.isInitialized();
	// 	}
	// 	else {
	// 		ret = res + " -- Error in clicking Your response Button"
	// 		logger.logInto(stackTrace.get(), ret, "error");
	// 	}
	// 	return ret;
	// },

	/*getTestplayerInfo: function () {
		var testplayerInfo = {
			headerText: "",
			activeQues: "",
			maxQues: "",
			centerBtn: {},
			leftBtn: {},
			rightBtn: {}
		};
		var quesInfo = this.getQuesInfo();
		testplayerInfo.maxQues = quesInfo.maxQues
		testplayerInfo.activeQues = quesInfo.activeQues
		testplayerInfo.headerText = quesInfo.headerText

		// var centerButtonArr = [this.checkMyWork_btn, this.next_btn, this.finish_btn, this.closeReview_btn]; //close_review to be added
		// for (var i = 0; i < centerButtonArr.length; i++) {
		// 	res = this.getBtnInfo(centerButtonArr[i]);
		// 	if (res.btn_datatid.includes('center')) {
		// 		testplayerInfo.centerBtn.btnText = res.btnText;
		// 		testplayerInfo.centerBtn.btnState = res.btnState;
		// 		testplayerInfo.centerBtn.btnDatatid = res.btn_datatid;
		// 		break;
		// 	}
		// }
		// var LeftButtonArr = [this.previous_btn];
		// for (var i = 0; i < LeftButtonArr.length; i++) {
		// 	res = this.getBtnInfo(LeftButtonArr[i]);
		// 	if (res.btn_datatid.includes('left')) {
		// 		testplayerInfo.leftBtn.btnText = res.btnText;
		// 		testplayerInfo.leftBtn.btnState = res.btnState;
		// 		testplayerInfo.leftBtn.btnDatatid = res.btn_datatid;
		// 		break;
		// 	}
		// }
		// var RightButtonArr = [this.next_btn, this.tryAgain_btn, this.finish_btn];
		// for (var i = 0; i < RightButtonArr.length; i++) {
		// 	res = this.getBtnInfo(RightButtonArr[i]);
		// 	if (res.btn_datatid.includes('right')) {
		// 		testplayerInfo.rightBtn.btnText = res.btnText;
		// 		testplayerInfo.rightBtn.btnState = res.btnState;
		// 		testplayerInfo.rightBtn.btnDatatid = res.btn_datatid;
		// 		break;
		// 	}
		// }
		// if (testplayerInfo.centerBtn.btnText == undefined || testplayerInfo.centerBtn.btnState == undefined)
		// 	logger.logInto(stackTrace.get(), "-- testplayer centerBtn is NOT available", "error");
		// if (testplayerInfo.leftBtn.btnText == undefined || testplayerInfo.leftBtn.btnState == undefined)
		// 	logger.logInto(stackTrace.get(), "-- testplayer leftBtn is NOT available", "error");
		// if (testplayerInfo.rightBtn.btnText == undefined || testplayerInfo.rightBtn.btnState == undefined)
		// 	logger.logInto(stackTrace.get(), "-- testplayer rightBtn is NOT available", "error");

		// if (action.getElementCount(this.tpBottomPanelHidden) == 0 && action.isDisplayed(this.collapseBtn)) {
		// 	res = action.click(this.collapseBtn);
		// 	action.waitForDisplayed(this.tpBottomPanelHidden, undefined, true);
		// }

		return testplayerInfo;
	},

	getBtnInfo: function (selector) {
		var btnInfo = {
			btnText: "",
			btnState: "",
			btn_datatid: ""
		}
		this.expandTestPlayer();
		if (action.getElementCount(selector) == 1) {
			logger.logInto(stackTrace.get(), " -- " + selector + " Button is available");
			action.waitForDisplayed(selector);
			btnInfo.btn_datatid = action.getAttribute(selector, 'data-tid');
			btnInfo.btnText = action.getText(selector);
			let disabled = action.getAttribute(selector, 'disabled');
			if (disabled == 'true')
				btnInfo.btnState = "disabled";
			else
				btnInfo.btnState = "enabled";
		}
		return btnInfo;
	},

	getQuesInfo: function () {
		var quesInfo = {
			headerText: "",
			activeQues: undefined,
			maxQues: undefined
		};
		res = action.waitForDisplayed(this.player_header);
		if (res == true) {
			ret = res;
			logger.logInto(stackTrace.get(), " -- player_header is available");
			action.scrollIntoView(this.player_header)
			let ques_header = action.getText(this.player_header);
			//console.log(ques_header)
			ques_header = ques_header.trim();
			ques_header = ques_header.split('/');
			quesInfo.maxQues = Number(ques_header[1]);
			let headerText = ques_header[0].replace(/\d+/g, "");
			quesInfo.headerText = headerText.trim();
			// quesInfo.activeQues = Number((ques_header[0].replace(/\D+/g, "")));
			quesInfo.activeQues = "0";
			ret = quesInfo;
		}
		else {
			ret = res + " -- player_header is NOT available"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	getFeedbackInfo: function () {
		var feedbackinfo = {
			fdbackText: "",
			buttonText: "",
			showAnswerText: ""
		}
		//this.switchParentFrame();
		this.expandTestPlayer();
		res = action.getElementCount(this.feedbackText);
		if (res != 0) {
			logger.logInto(stackTrace.get(), " -- Feedback text is available");
			action.waitForDisplayed(this.feedbackText);
			feedbackinfo.fdbackText = action.getText(this.feedbackText);
		}
		else {
			res = res + " -- Feedback text is NOT available";
			logger.logInto(stackTrace.get(), res, "error");
		}
		res = action.getElementCount(this.showAnswer_btn);
		if (res == 1) {
			feedbackinfo.buttonText = action.getText(this.showAnswer_btn);
			res = feedbackinfo;
		}
		else if (res == 0) {
			res = action.getElementCount(this.yourResponse_btn);
			if (res == 1) {
				feedbackinfo.buttonText = action.getText(this.yourResponse_btn);
				feedbackinfo.showAnswerText = action.getText(this.showingCorrectAnswerText);
			}
			res = res + " times 'Your Response' button is displayed and 'Show Answer' button is not displayed";
			logger.logInto(stackTrace.get(), res);
			res = feedbackinfo;
		}
		else {
			res = res + " times 'Show Answer' button is displayed";
			logger.logInto(stackTrace.get(), res);
		}

		//this.switchMainFrame(0);
		return res;
	},

	expandTestPlayer: function () {
		let panelHidden = action.getElementCount(this.tpBottomPanelHidden)
		if (panelHidden == 1) {
			if (global.resolution.width < 1024 && global.resolution.width > global.resolution.height) {
				browser.execute(() => {
					const elem = document.querySelector('[data-tid="button-togglebuttonpanel"]');
					elem.style.display = "flex";
				});
				//console.log("handle displayed - expand")
			}
			res = action.click(this.collapseBtn);
			browser.pause(200);
			res = action.waitForDisplayed(this.tpBottomPanelHidden, undefined, true, undefined, 500);
			//res = action.click(this.player_header);
		}
	},

	collapseTestPlayer: function () {
		let panelHidden = action.getElementCount(this.tpBottomPanelHidden)
		if (global.resolution.width < 1024 && global.resolution.width > global.resolution.height) {
			browser.execute(() => {
				const elem = document.querySelector('[data-tid="button-togglebuttonpanel"]');
				elem.style.display = "flex";
			});
			//console.log("handle displayed - collapse")
		}

		if (panelHidden == 0 && action.isDisplayed(this.collapseBtn)) {
			res = action.click(this.collapseBtn);
			browser.pause(200);
			res = action.waitForDisplayed(this.tpBottomPanelVisible, undefined, true, undefined, 500);
			browser.execute(() => {
				const elem = document.querySelector('[data-tid="button-togglebuttonpanel"]');
				elem.style.display = "none";
			});
			//res = action.click(this.player_header);
			//console.log("handle hidden")
		}
	}*/
};