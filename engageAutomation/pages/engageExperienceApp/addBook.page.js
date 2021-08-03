"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');

var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {
	
    clickOnBook : function (bookTitle) {
        console.log("[title='"+bookTitle+"']")
        action.scrollIntoView("[title='"+bookTitle+"']");
        res = action.click("[title='"+bookTitle+"']")
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Book Title Clicked clicked");
            let bookViewTOC = require('./bookDetail.page.js');
            res = bookViewTOC.isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --Book Title NOT clicked", "error");
        return res;

    }
};