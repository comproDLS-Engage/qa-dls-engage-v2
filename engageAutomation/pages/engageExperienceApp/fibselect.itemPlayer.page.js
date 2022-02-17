"use strict";
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    response: selectorFile.css.ComproEngage.FIBSelect.response,
    responses: selectorFile.css.ComproEngage.FIBSelect.responses,
    responseOption: selectorFile.css.ComproEngage.FIBSelect.responseOption,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		action.switchToFrame(0);
		let res = action.waitForClickable(this.responses);
		action.switchToParentFrame();
		return res;
    },

    getTargetData: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        action.switchToFrame(0);
        var targetArr = [];
        let optionLength = action.findElements(this.responses).length;
        for (let i = 0; i < optionLength; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "]";
            var value = itemplayer.getFeedbackIconDetails(ddSelector);
            targetArr[i] = [fibQuesData[i][0], action.getText(ddSelector + " [class*=' mdc-select__selected-text']"), value];
        }
        action.switchToParentFrame();
        return targetArr;
    },

    selectValue: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        action.switchToFrame(0);
        let res, i;
        for (i = 0; i < fibQuesData.length; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "] div";
            res = action.click(ddSelector);
            if (true == res) {
                res = action.click(this.responseOption + fibQuesData[i][1]);
                logger.logInto(stackTrace.get(), res);
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        action.switchToParentFrame();
        return res;
    }
}