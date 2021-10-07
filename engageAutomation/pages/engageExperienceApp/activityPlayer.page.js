"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const basePlayerPage = require('./basePlayer.page.js');
var res;

module.exports = {

    infoTOC: selectorFile.css.ComproEngage.activitiyPlayer.infoTOC,
    previousActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.previousActivity_btn,
    nextActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.nextActivity_btn,
    questionInfo: selectorFile.css.ComproEngage.activitiyPlayer.questionInfo,
    submitActivity_btn: selectorFile.css.ComproEngage.activitiyPlayer.submitActivity_btn,
    feedback_txt: selectorFile.css.ComproEngage.activitiyPlayer.feedback_txt,
    showingCorrectAnswer_txt: selectorFile.css.ComproEngage.activitiyPlayer.showingCorrectAnswer_txt,
    restart_btn: selectorFile.css.ComproEngage.activitiyPlayer.restart_btn,

    
    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.infoTOC);
        res = this.getActivityPlayerData();
        return res;
    },

    getActivityPlayerData: function () {
        let data = basePlayerPage.getBasePlayerInfo();
        data.infoTOC = (action.getElementCount(this.infoTOC) > 0) ? action.waitForDisplayed(this.infoTOC) : null;
        data.checkAnswer_txt = (action.getElementCount(basePlayerPage.checkMyWork_btn) > 0) ? action.getText(basePlayerPage.checkMyWork_btn) : null;
        data.questionInfo = (action.getElementCount(this.questionInfo) > 0) ? action.getText(this.questionInfo) : null;
        data.submitActivity_isDisabled = (action.getElementCount(this.submitActivity_btn) > 0) ? action.getAttribute(this.submitActivity_btn, 'disabled') : null;
        data.submitActivity_txt = (action.getElementCount(this.submitActivity_btn) > 0) ? action.getText(this.submitActivity_btn) : null;
        data.previousActivity_txt = (action.getElementCount(this.previousActivity_btn) > 0) ? action.getText(this.previousActivity_btn) : null;
        data.nextActivity_txt = (action.getElementCount(this.nextActivity_btn) > 0) ? action.getText(this.nextActivity_btn) : null;
        data.showAnswer_txt = (action.getElementCount(basePlayerPage.showAnswer_btn) > 0) ? action.getText(basePlayerPage.showAnswer_btn) : null;
        data.yourResponse_txt = (action.getElementCount(basePlayerPage.yourResponse_btn) > 0) ? action.getText(basePlayerPage.yourResponse_btn) : null;
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

    getFeedbackInfo: function () {
        var feedbackinfo = {
            fdbackText: "",
            buttonText: "",
            showCorrectAnswerText: ""
        }

        res = action.getElementCount(this.feedback_txt);
        if (res != 0) {
            logger.logInto(stackTrace.get(), " -- Feedback text is available");
            action.waitForDisplayed(this.feedback_txt);
            feedbackinfo.fdbackText = action.getText(this.feedback_txt);
            res = feedbackinfo;
        } else {
            res = res + " -- Feedback text is NOT available";
            logger.logInto(stackTrace.get(), res, "error");
        }
        //showAnswer + feedback text
        if (action.getElementCount(basePlayerPage.showAnswer_btn) == 1) {
            feedbackinfo.buttonText = action.getText(basePlayerPage.showAnswer_btn);
            res = feedbackinfo;
        }
        //showResponse + feedback text + Showing Correct Answer text
        if (action.getElementCount(basePlayerPage.yourResponse_btn) == 1) {
            feedbackinfo.buttonText = action.getText(basePlayerPage.yourResponse_btn);
            feedbackinfo.showCorrectAnswerText = action.getText(this.showingCorrectAnswer_txt);
            res = feedbackinfo;
        }
        return res;
    },

    clickRestartButton: function(){
        logger.logInto(stackTrace.get());
        //updated selector for running the acceptance test only (Rupsi)
       // action.click("footer > div > div:nth-child(1)> div:nth-child(2)> div > button > span.containerApp-MuiButton-label > p");
        action.waitForDisplayed(this.restart_btn)
        res = action.click(this.restart_btn);
        if (true == res) {
            res = this.isInitialized();
        } else {
            res = res + " -- Error in clicking Restart button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    ClickShowDetailsButton:function()
    {
         //updated selector for running the acceptance test only (Rupsi)
        res= action.click("footer > div > div:nth-child(1)> div:nth-child(2)> div > button > span.containerApp-MuiButton-label > p");
         if (true == res) {
            browser.pause(5000);
            action.waitForDisplayed(this.restart_btn)
            res =  (action.getElementCount(this.restart_btn) > 0) ? action.getText(this.restart_btn) : null;
        } else {
            res = res + " -- Error in clicking Restart button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }



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

}