"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)

module.exports = {
    editAssignmentHeader: selectorFile.css.ComproEngage.editAssignment.editAssignmentHeader,
    close_btn: selectorFile.css.ComproEngage.editAssignment.close_btn,
    assignmentName_lbl: selectorFile.css.ComproEngage.editAssignment.assignmentName_lbl,
    assignmentName_txtbox: selectorFile.css.ComproEngage.editAssignment.assignmentName_txtbox,
    startDate_lbl: selectorFile.css.ComproEngage.editAssignment.startDate_lbl,
    startDate_txtbox: selectorFile.css.ComproEngage.editAssignment.startDate_txtbox,
    startDate_icon: selectorFile.css.ComproEngage.editAssignment.startDate_icon,
    dueDate_lbl: selectorFile.css.ComproEngage.editAssignment.dueDate_lbl,
    dueDate_txtbox: selectorFile.css.ComproEngage.editAssignment.dueDate_txtbox,
    dueDate_icon: selectorFile.css.ComproEngage.editAssignment.dueDate_icon,
    Cancel: selectorFile.css.ComproEngage.editAssignment.Cancel,
    SaveandClose: selectorFile.css.ComproEngage.editAssignment.SaveandClose,


        isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
        pageStatus: action.waitForDisplayed(this.editAssignmentHeader)
    };
    return res;
},

getData_editAssignmentPage: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
        editAssignmentHeader: (action.getElementCount(this.editAssignmentHeader) > 0) ? action.getText(this.editAssignmentHeader) : null,
        close_btn: (action.getElementCount(this.close_btn) > 0) ? action.getText(this.close_btn) : null,
        assignmentName_lbl: (action.getElementCount(this.assignmentName_lbl) > 0) ? action.getText(this.assignmentName_lbl) : null,
        assignmentName_txtbox: (action.getElementCount(this.assignmentName_txtbox) > 0) ? action.getText(this.assignmentName_txtbox) : null,
        startDate_lbl: (action.getElementCount(this.startDate_lbl) > 0) ? action.getText(this.startDate_lbl) : null,
        startDate_txtbox: (action.getElementCount(this.startDate_txtbox) > 0) ? action.getText(this.startDate_txtbox) : null,
        startDate_icon: (action.getElementCount(this.startDate_icon) > 0) ? action.getText(this.startDate_icon) : null,
        dueDate_lbl: (action.getElementCount(this.dueDate_lbl) > 0) ? action.getText(this.dueDate_lbl) : null,
        dueDate_txtbox: (action.getElementCount(this.dueDate_txtbox) > 0) ? action.getText(this.dueDate_txtbox) : null,
        dueDate_icon: (action.getElementCount(this.dueDate_icon) > 0) ? action.getText(this.dueDate_icon) : null,
        Cancel: (action.getElementCount(this.Cancel) > 0) ? action.getText(this.Cancel) : null,
        SaveandClose: (action.getElementCount(this.Save & Close) > 0) ? action.getText(this.SaveandClose) : null,
}
return obj; 
},


click_close_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.close_btn);
    if (true == res) {
        logger.logInto(stackTrace.get(), " close_btn is clicked");
        res = require('./assignmentDetails.page').isInitialized();
    }
    else {
        logger.logInto(stackTrace.get(), res + "close_btn is NOT clicked", 'error');
    }
    return res;
},

click_startDate_icon: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.startDate_icon);
    if (true == res) {
        logger.logInto(stackTrace.get(), " startDate_icon is clicked");
    }
    else {
        logger.logInto(stackTrace.get(), res + "startDate_icon is NOT clicked", 'error');
    }
    return res;
},

click_dueDate_icon: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.dueDate_icon);
    if (true == res) {
        logger.logInto(stackTrace.get(), " dueDate_icon is clicked");
    }
    else {
        logger.logInto(stackTrace.get(), res + "dueDate_icon is NOT clicked", 'error');
    }
    return res;
},

click_Cancel: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.Cancel);
    if (true == res) {
        logger.logInto(stackTrace.get(), " Cancel is clicked");
        res = require('./assignmentDetails.page').isInitialized();
    }
    else {
        logger.logInto(stackTrace.get(), res + "Cancel is NOT clicked", 'error');
    }
    return res;
},

click_SaveandClose: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.SaveandClose);
    if (true == res) {
        logger.logInto(stackTrace.get(), " Save & Close is clicked");
        res = require('./assignmentDetails.page').isInitialized();
    }
    else {
        logger.logInto(stackTrace.get(), res + "Save & Close is NOT clicked", 'error');
    }
    return res;
},

set_assignmentName_txtbox: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.assignmentName_txtbox, value);
    if (true == res) {
        logger.logInto(stackTrace.get(), "Value is entered in assignmentName_txtbox");
    } else {
        logger.logInto(stackTrace.get(), res + "Value is NOT entered in assignmentName_txtbox", 'error');
    }
    return res;
},

set_startDate_txtbox: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.startDate_txtbox, value);
    if (true == res) {
        logger.logInto(stackTrace.get(), "Value is entered in startDate_txtbox");
    } else {
        logger.logInto(stackTrace.get(), res + "Value is NOT entered in startDate_txtbox", 'error');
    }
    return res;
},

set_dueDate_txtbox: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.dueDate_txtbox, value);
    if (true == res) {
        logger.logInto(stackTrace.get(), "Value is entered in dueDate_txtbox");
    } else {
        logger.logInto(stackTrace.get(), res + "Value is NOT entered in dueDate_txtbox", 'error');
    }
    return res;
},

}

