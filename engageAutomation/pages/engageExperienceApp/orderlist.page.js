"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require("./itemPlayer.page");
var res, ret;

module.exports = {

    option: selectorFile.css.ComproEngage.orderList.option,
    listIndex: selectorFile.css.ComproEngage.orderList.listIndex,

    isInitialized: async function (oliData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        //res = action.getElementCount(option + " [class*='draghandle']");
        //ret = action.getElementCount(option + " [data-tid*=icon]");
        res = await action.waitForDisplayed(this.option);
        if (res == true) {
            res = await this.getorderlistData(oliData)
        }
        else {
            res = "Invalid format for Order list as drag handle or correct/incorrect icons are missing"
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    orderListChange: async function (oliData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        for (let i = 0; i < oliData.length; i++) {
            let srcPath = this.option + oliData[i][0] + "] div:nth-child(2)";
            let targetPath = this.listIndex + oliData[i][2] + ") div:nth-child(2)";
            ret = await action.dragAndDrop(srcPath, targetPath);
        }
        await action.switchToParentFrame();
        return ret;
    },

    getorderlistData: async function (oliData) {
        await logger.logInto(await stackTrace.get());
        let orderlistData = [];
        let i, j, orderlistSelector, optionText, indexText;
        var indexLength = await action.getElementCount(this.option);
        for (i = 0; i < oliData.length; i++) {
            orderlistSelector = this.option + oliData[i][0];
            optionText = await action.getText(orderlistSelector + "] div div div")
            for (j = 1; j <= indexLength; j++) {
                indexText = await action.getText(this.listIndex + j + ") div div div")
                if (indexText == optionText)
                    break;
            }
            orderlistData[i] = [
                oliData[i][0], 
                optionText, 
                j, 
                await itemplayer.getFeedbackIconDetails(orderlistSelector + "] ")
            ];
        }
        return orderlistData;
    }
}