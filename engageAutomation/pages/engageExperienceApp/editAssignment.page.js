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


        isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
        pageStatus: await action.waitForDisplayed(this.editAssignmentHeader)
    };
    return res;
},

getData_editAssignmentPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
        editAssignmentHeader: ((await action.getElementCount(this.editAssignmentHeader)) > 0) ? await action.getText(this.editAssignmentHeader) : null,
        close_btn: ((await action.getElementCount(this.close_btn)) > 0) ? await action.getText(this.close_btn) : null,
        assignmentName_lbl: ((await action.getElementCount(this.assignmentName_lbl)) > 0) ? await action.getText(this.assignmentName_lbl) : null,
        assignmentName_txtbox: ((await action.getElementCount(this.assignmentName_txtbox)) > 0) ? await action.getText(this.assignmentName_txtbox) : null,
        startDate_lbl: ((await action.getElementCount(this.startDate_lbl)) > 0) ? await action.getText(this.startDate_lbl) : null,
        startDate_txtbox: ((await action.getElementCount(this.startDate_txtbox)) > 0) ? await action.getText(this.startDate_txtbox) : null,
        startDate_icon: ((await action.getElementCount(this.startDate_icon)) > 0) ? await action.getText(this.startDate_icon) : null,
        dueDate_lbl: ((await action.getElementCount(this.dueDate_lbl)) > 0) ? await action.getText(this.dueDate_lbl) : null,
        dueDate_txtbox: ((await action.getElementCount(this.dueDate_txtbox)) > 0) ? await action.getText(this.dueDate_txtbox) : null,
        dueDate_icon: ((await action.getElementCount(this.dueDate_icon)) > 0) ? await action.getText(this.dueDate_icon) : null,
        Cancel: ((await action.getElementCount(this.Cancel)) > 0) ? await action.getText(this.Cancel) : null,
        SaveandClose: ((await action.getElementCount(this.Save & Close)) > 0) ? await action.getText(this.SaveandClose) : null,
}
return obj; 
},


click_close_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.close_btn);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), " close_btn is clicked");
        res = await require('./assignmentDetails.page').isInitialized();
    }
    else {
        await logger.logInto(await stackTrace.get(), res + "close_btn is NOT clicked", 'error');
    }
    return res;
},

click_startDate_icon: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.startDate_icon);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), " startDate_icon is clicked");
    }
    else {
        await logger.logInto(await stackTrace.get(), res + "startDate_icon is NOT clicked", 'error');
    }
    return res;
},

click_dueDate_icon: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.dueDate_icon);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), " dueDate_icon is clicked");
    }
    else {
        await logger.logInto(await stackTrace.get(), res + "dueDate_icon is NOT clicked", 'error');
    }
    return res;
},

click_Cancel: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.Cancel);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), " Cancel is clicked");
        res = await require('./assignmentDetails.page').isInitialized();
    }
    else {
        await logger.logInto(await stackTrace.get(), res + "Cancel is NOT clicked", 'error');
    }
    return res;
},

click_SaveandClose: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.SaveandClose);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), " Save & Close is clicked");
        res = await require('./assignmentDetails.page').isInitialized();
    }
    else {
        await logger.logInto(await stackTrace.get(), res + "Save & Close is NOT clicked", 'error');
    }
    return res;
},

set_assignmentName_txtbox: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.assignmentName_txtbox, value);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), "Value is entered in assignmentName_txtbox");
    } else {
        await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in assignmentName_txtbox", 'error');
    }
    return res;
},

set_startDate_txtbox: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.startDate_txtbox, value);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), "Value is entered in startDate_txtbox");
    } else {
        await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in startDate_txtbox", 'error');
    }
    return res;
},

set_dueDate_txtbox: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.dueDate_txtbox, value);
    if (true == res) {
        await logger.logInto(await stackTrace.get(), "Value is entered in dueDate_txtbox");
    } else {
        await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in dueDate_txtbox", 'error');
    }
    return res;
},

}

