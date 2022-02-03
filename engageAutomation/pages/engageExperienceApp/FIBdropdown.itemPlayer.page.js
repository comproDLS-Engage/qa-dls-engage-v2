"use strict";
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    response: selectorFile.css.ComproEngage.FIBdropdown.response,
    responses: selectorFile.css.ComproEngage.FIBdropdown.responses,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		action.switchToFrame(0);
		let res = action.waitForExist(this.responses);
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
            targetArr[i] = [fibQuesData[i][0], action.getValue(ddSelector + " [class*=' mdc-select__selected-text']"), value];
        }
        action.switchToParentFrame();
        console.log(targetArr);
        return targetArr;
    },

    selectValue: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        action.switchToFrame(0);
        for (let i = 0; i < fibQuesData.length; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "]";
            res = action.selectByAttribute(ddSelector + " [class*=mdc-menu-surface--open] ul", "data-value", fibQuesData[i][1]);

            /*res = action.click(ddSelector);
            if (true == res) {
                res = action.click("[class*=mdc-menu-surface--open] ul li[data-value=" + fibQuesData[i][1]);
                logger.logInto(stackTrace.get(), res);
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }*/
        }
        action.switchToParentFrame();
        return res;
    }
}