"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require("./itemPlayer.page");
var res, ret;

module.exports = {

    optionSelector: selectorFile.css.ComproEngage.orderList.option,
    options: selectorFile.css.ComproEngage.orderList.options,
    listIndex: selectorFile.css.ComproEngage.orderList.listIndex,

    isInitialized: async function (oliData) {
        await logger.logInto(stackTrace.get());
        var qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        var option = "div[index='" + (qIndex) + "'] " + this.options;
        //res = action.getElementCount(option + " [class*='draghandle']");
        //ret = action.getElementCount(option + " [data-tid*=icon]");
        res = await action.waitForDisplayed(option);
        if (res == true) {
            res = await this.getorderlistData(qIndex, oliData)
        }
        else {
            res = "Invalid format for Order list as drag handle or correct/incorrect icons are missing"
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    orderListChange: async function (oliData) {
        await logger.logInto(stackTrace.get());
        var qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        for (let i = 0; i < oliData.length; i++) {
            let srcPath = "div[index='" + (qIndex) + "'] " + this.optionSelector + oliData[i][0] + "] div:nth-child(2)";
            let targetPath = "div[index='" + (qIndex) + "'] " + this.listIndex + oliData[i][2] + ") div:nth-child(2)";
            ret = await action.dragAndDrop(srcPath, targetPath);
        }
        await action.switchToParentFrame();
        return ret;
    },

    getorderlistData: async function (qIndex, oliData) {
        await logger.logInto(stackTrace.get());
        let orderlistData = [];
        let i, j, orderlistSelector, value, optionText, indexText;
        var indexLength = await action.getElementCount("div[index='" + (qIndex) + "'] " + this.options);
        for (i = 0; i < oliData.length; i++) {
            orderlistSelector = "div[index='" + (qIndex) + "'] " + this.optionSelector + oliData[i][0] + "]";
            optionText = await action.getText(orderlistSelector + " div div div")
            for (j = 1; j <= indexLength; j++) {
                indexText = await action.getText(this.listIndex + j + ") div div div")
                if (indexText == optionText)
                    break;
            }
            value = await itemplayer.getFeedbackIconDetails(orderlistSelector);
            orderlistData[i] = [oliData[i][0], optionText, j, value];
        }
        return orderlistData;
    }
}