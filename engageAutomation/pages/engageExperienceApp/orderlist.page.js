"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var itemplayer = require("./itemPlayer.page");
var testplayer = require('./testPlayer.page');
var res, ret;

module.exports = {

    optionSelector: selectorFile.css.ComproEngage.orderList.option,
    options: selectorFile.css.ComproEngage.orderList.options,
    listIndex: selectorFile.css.ComproEngage.orderList.listIndex,

    isInitialized: function (oliData) {
        logger.logInto(stackTrace.get(), "");
        var quesNo = (testplayer.getQuesInfo()).activeQues - 1;
        itemplayer.switchMainFrame(0);
        var option = "div[index='" + (quesNo) + "']";
        res = action.getElementCount(option + " [class*='draghandle']");
        ret = action.getElementCount(option + " [data-tid*=icon]");
        if (res > 0 || ret > 0) {
            res = this.getorderlistData(quesNo, oliData)
        }
        else {
            res = "Invalid format for Order list as drag handle or correct/incorrect icons are missing"
            logger.logInto(stackTrace.get(), res, 'error');
        }
       itemplayer.switchParentFrame();
        return res;
    },

    orderListChange: function (oliData) {
        logger.logInto(stackTrace.get());
        var quesNo = (testplayer.getQuesInfo()).activeQues - 1;
       itemplayer.switchMainFrame(0);
        for (let i = 0; i < oliData.length; i++) {
            let srcPath = "div[index='" + (quesNo) + "'] " + this.optionSelector + oliData[i][0] + "] div:nth-child(2)";
            let targetPath = "div[index='" + (quesNo) + "'] " + this.listIndex + oliData[i][2] + ") div:nth-child(2)";
           // itemplayer.switchParentFrame();
            //testplayer.collapseTestPlayer();
           // itemplayer.switchMainFrame(0);
            ret = action.dragAndDrop(srcPath, targetPath);
        }
       itemplayer.switchParentFrame();
        return ret;
    },

    getorderlistData: function (qIndex, oliData) {
        let orderlistData = [];
        let i, j, orderlistSelector, value, optionText, indexText;
        var indexLength = action.getElementCount("div[index='" + (qIndex) + "'] " + this.options);
        for (i = 0; i < oliData.length; i++) {
            orderlistSelector = "div[index='" + (qIndex) + "'] " + this.optionSelector + oliData[i][0] + "]";
            optionText = action.getText(orderlistSelector + " div div div")
            for (j = 1; j <= indexLength; j++) {
                indexText = action.getText(this.listIndex + j + ") div div div")
                if (indexText == optionText)
                    break;
            }
            value = itemplayer.getFeedbackIconDetails(orderlistSelector);
            orderlistData[i] = [oliData[i][0], optionText, j, value];
        }
        return orderlistData;
    }
}