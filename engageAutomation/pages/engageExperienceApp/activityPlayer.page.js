"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const basePlayerPage = require('./basePlayer.page.js');
var res, obj, ret;

module.exports = {

    breadCrumbTitle: selectorFile.css.ComproEngage.activitiyPlayer.breadCrumbTitle,
    index_btn: selectorFile.css.ComproEngage.activitiyPlayer.index_btn,
    infoTOC: selectorFile.css.ComproEngage.activitiyPlayer.infoTOC,
    checkAnswer: selectorFile.css.ComproEngage.activitiyPlayer.checkAnswer,
    previousActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.previousActivity_btn,
    nextActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.nextActivity_btn,
    // next_btn: selectorFile.css.ComproEngage.activitiyPlayer.next_btn,
    // previous_btn: selectorFile.css.ComproEngage.activitiyPlayer.previous_btn,
    questionInfo: selectorFile.css.ComproEngage.activitiyPlayer.questionInfo,
    submitActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.submitActivity_btn,
    showAnswer_btn: selectorFile.css.ComproEngage.activitiyPlayer.showAnswer_btn,
    showResponse_btn: selectorFile.css.ComproEngage.activitiyPlayer.showResponse_btn,
    feedback_txt: selectorFile.css.ComproEngage.activitiyPlayer.feedback_txt,
    showingCorrectAnswer_txt: selectorFile.css.ComproEngage.activitiyPlayer.showingCorrectAnswer_txt,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.breadCrumbTitle);
        res = this.getActivityPlayerData();
        return res;
    },

    // getBreadcrumbHeaderData: function () {
    //     obj = {
    //         breadCrumbTitle: (action.getElementCount(this.breadCrumbTitle) > 0) ? action.getText(this.breadCrumbTitle) : null,
    //         index_btn: (action.getElementCount(this.index_btn) > 0) ? action.getText(this.index_btn) : null
    //     }
    //     logger.logInto(stackTrace.get(), JSON.stringify(obj));
    //     return obj;
    // },

    getActivityPlayerData: function () {
        let data = basePlayerPage.getBasePlayerInfo();
        data.infoTOC = (action.getElementCount(this.infoTOC) > 0) ? action.waitForDisplayed(this.infoTOC) : null;
        data.checkAnswer_txt = (action.getElementCount(this.checkAnswer) > 0) ? action.getText(this.checkAnswer) : null;
        data.questionInfo = (action.getElementCount(this.questionInfo) > 0) ? action.getText(this.questionInfo) : null;
        data.submitActivity_isDisabled = (action.getElementCount(this.submitActivity_btn) > 0) ? action.getAttribute(this.submitActivity_btn, 'disabled') : null;
        data.submitActivity_txt = (action.getElementCount(this.submitActivity_btn) > 0) ? action.getText(this.submitActivity_btn) : null;
        data.previousActivity_txt = (action.getElementCount(this.previousActivity_btn) > 0) ? action.getText(this.previousActivity_btn) : null;
        data.nextActivity_txt = (action.getElementCount(this.nextActivity_btn) > 0) ? action.getText(this.nextActivity_btn) : null;
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return data;
    },

    clickPreviousQuestion: function () {
        logger.logInto(stackTrace.get());
        return basePlayerPage.click_Previous();
    },

    clickNextQuestion: function () {
        logger.logInto(stackTrace.get());
        return basePlayerPage.click_Skip();
    },

    clickCheckAnswer: function () {
        logger.logInto(stackTrace.get());
        return basePlayerPage.click_CheckMyWork();
    },

    clickShowAnswer: function () {
        logger.logInto(stackTrace.get());
        return basePlayerPage.click_ShowAnswer();
    },

    clickYourResponse: function () {
        logger.logInto(stackTrace.get());
        return basePlayerPage.click_YourResponse();
    },

    clickPreviousActivity: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.previousActivity_btn);
        if (true == res) {
            res = this.getActivityPlayerData();
        } else {
            res = res + " -- Error in clicking Previous Activity button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    clickNextActivity: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.nextActivity_btn);
        if (true == res) {
            res = this.getActivityPlayerData();
        } else {
            res = res + " -- Error in clicking Next Activity button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    clickSubmitActivity: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.submitActivity_btn);
        if (true == res) {
            res = this.getActivityPlayerData();
        } else {
            res = res + " -- Error in clicking Next Question button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },


    // Not Required currently, may be used later
    /*getQuestionInfo: function () {
        var quesInfo = {
            activeQues: undefined,
            maxQues: undefined
        };
        res = action.waitForDisplayed(this.questionInfo);
        if (res == true) {
            let quesData = action.getText(this.questionInfo);
            if (quesData.indexOf("of") > 0)
                quesData = quesData.trim().split('of')
            else if (quesData.indexOf("de") > 0)
                quesData = quesData.trim().split('de')
            else
                quesData = [];

            quesInfo.activeQues = Number(quesData[0]);
            quesInfo.maxQues = Number(quesData[1]);
        } else {
            logger.logInto(stackTrace.get(), "Question Information Not available", "error");
        }
        return quesInfo;
    },*/

    getFeedbackInfo: function () {
        let insideFrame = basePlayerPage.enterFrame(this.fdbackText);
        console.log("Inside Frame : " + insideFrame);
        var feedbackinfo = {
            fdbackText: "",
            buttonText: "",
            showCorrectAnswerText: ""
        }

        ret = action.getElementCount(this.feedback_txt);
        console.log("ret : " + ret);
        if (ret != 0) {
            logger.logInto(stackTrace.get(), " -- Feedback text is available");
            action.waitForDisplayed(this.feedbackText);
            feedbackinfo.fdbackText = action.getText(this.feedbackText);
            res = feedbackinfo;
            console.log("INFO1: " +JSON.stringify(res));
        } else {
            res = res + " -- Feedback text is NOT available";
            logger.logInto(stackTrace.get(), res, "error");
        }

        //showAnswer + feedback text
        if (action.getElementCount(this.showAnswer_btn) == 1) {

            feedbackinfo.buttonText = action.getText(this.showAnswer_btn);
            res = feedbackinfo;
            console.log("INFO2: " +JSON.stringify(res));
        }

        //showResponse + feedback text + Showing Correct Answer text
        if (action.getElementCount(this.showResponse_btn) == 1) {

            feedbackinfo.buttonText = action.getText(this.showResponse_btn);
            feedbackinfo.showCorrectAnswerText = action.getText(this.showingCorrectAnswer_txt);
            res = feedbackinfo;
        }
        if (insideFrame)
			action.switchToParentFrame();
        return res;
    },


    // Not Required currently, may be used later
    /*skipToQuestion: function (questionNumber) {
        var quesItr;
        res = this.getQuestionInfo();

        if (res.activeQues < 0 || res.maxQues < 0) {
            logger.logInto(stackTrace.get(), "Question Information Not available. Cannot Skip to questionNumber:" + questionNumber, "error");
            return res;
        } else {
            if (res.activeQues == questionNumber) {
                logger.logInto(stackTrace.get(), "Currently on :" + questionNumber);
                return res;
            } else if (questionNumber > res.activeQues) {
                for (quesItr = res.activeQues; quesItr < questionNumber; quesItr++) {
                    res = this.clickNextQuestion();
                }
            } else {
                for (quesItr = questionNumber; quesItr < res.activeQues; quesItr++) {
                    res = this.clickPreviousQuestion();
                }
            }

            return res;
        }
    },*/

    clickOnBreadcrumb: function () {
        res = action.click(this.breadCrumbTitle)
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Breadcrumb Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Breadcrumb Button NOT clicked", "error");
        return res;

    },

}