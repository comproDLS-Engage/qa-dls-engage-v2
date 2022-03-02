"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    assignment_title: selectorFile.css.ComproEngage.createAssignment.assignment_title,
    activity_lbl: selectorFile.css.ComproEngage.createAssignment.activity_lbl,
    activityCount_icon: selectorFile.css.ComproEngage.createAssignment.activityCount_icon,
    activityCount_lbl: selectorFile.css.ComproEngage.createAssignment.activityCount_lbl,
    addActivity_icon: selectorFile.css.ComproEngage.createAssignment.addActivity_icon,
    addActivity_lbl: selectorFile.css.ComproEngage.createAssignment.addActivity_lbl,
    activity_number: selectorFile.css.ComproEngage.createAssignment.activity_number,
    activitylist_lbl: selectorFile.css.ComproEngage.createAssignment.activitylist_lbl,
    activityUnit_lbl: selectorFile.css.ComproEngage.createAssignment.activityUnit_lbl,
    activity_card: selectorFile.css.ComproEngage.createAssignment.activity_card,
    activityNumber: selectorFile.css.ComproEngage.createAssignment.activityNumber,
    activity_name_icon: selectorFile.css.ComproEngage.createAssignment.activity_name_icon,
    activity_name: selectorFile.css.ComproEngage.createAssignment.activity_name,
    activity_unit: selectorFile.css.ComproEngage.createAssignment.activity_unit,
    activity_delete_icon: selectorFile.css.ComproEngage.createAssignment.activity_delete_icon,
    assignment_lbl: selectorFile.css.ComproEngage.createAssignment.assignment_lbl,
    assignment_txtbox: selectorFile.css.ComproEngage.createAssignment.assignment_txtbox,
    startDate_lbl: selectorFile.css.ComproEngage.createAssignment.startDate_lbl,
    startDate_icon: selectorFile.css.ComproEngage.createAssignment.startDate_icon,
    startDate_txtBox: selectorFile.css.ComproEngage.createAssignment.startDate_txtBox,
    endDate_lbl: selectorFile.css.ComproEngage.createAssignment.endDate_lbl,
    endDate_icon: selectorFile.css.ComproEngage.createAssignment.endDate_icon,
    endDate_txtBox: selectorFile.css.ComproEngage.createAssignment.endDate_txtBox,
    showAdvanceOption: selectorFile.css.ComproEngage.createAssignment.showAdvanceOption,
    advancedOption: selectorFile.css.ComproEngage.createAssignment.advancedOption,
    allowLateSubmission_lbl: selectorFile.css.ComproEngage.createAssignment.allowLateSubmission_lbl,
    allowLateSubmission_btn: selectorFile.css.ComproEngage.createAssignment.allowLateSubmission_btn,
    allowLateSubmission_info: selectorFile.css.ComproEngage.createAssignment.allowLateSubmission_info,
    preventfromSkipping_lbl: selectorFile.css.ComproEngage.createAssignment.preventfromSkipping_lbl,
    preventfromSkipping_btn: selectorFile.css.ComproEngage.createAssignment.preventfromSkipping_btn,
    preventfromSkipping_info: selectorFile.css.ComproEngage.createAssignment.preventfromSkipping_info,
    disableShowAnswers_lbl: selectorFile.css.ComproEngage.createAssignment.disableShowAnswers_lbl,
    disableShowAnswers_btn: selectorFile.css.ComproEngage.createAssignment.disableShowAnswers_btn,
    disableShowAnswers_info: selectorFile.css.ComproEngage.createAssignment.disableShowAnswers_info,
    includeProgressBar_lbl: selectorFile.css.ComproEngage.createAssignment.includeProgressBar_lbl,
    includeProgressBar_btn: selectorFile.css.ComproEngage.createAssignment.includeProgressBar_btn,
    futureEditNotSupported_icon: selectorFile.css.ComproEngage.createAssignment.futureEditNotSupported_icon,
    futureEditNotSupportedHeading: selectorFile.css.ComproEngage.createAssignment.futureEditNotSupportedHeading,
    futureEditNotSupportedSubHeading: selectorFile.css.ComproEngage.createAssignment.futureEditNotSupportedSubHeading,
    hideAdvancedOption: selectorFile.css.ComproEngage.createAssignment.hideAdvancedOption,
    cancel_btn: selectorFile.css.ComproEngage.createAssignment.cancel_btn,
    assign_btn: selectorFile.css.ComproEngage.createAssignment.assign_btn,
    close_btn: selectorFile.css.ComproEngage.createAssignment.close_btn,
    deleteActivity_header: selectorFile.css.ComproEngage.createAssignment.deleteActivity_header,
    deleteActivity_subheader: selectorFile.css.ComproEngage.createAssignment.deleteActivity_subheader,
    deleteActivity_btn: selectorFile.css.ComproEngage.createAssignment.deleteActivity_btn,
    cancelActivityDialogue_btn: selectorFile.css.ComproEngage.createAssignment.cancelActivityDialogue_btn,
    assignmentSubmitDialogueHeader: selectorFile.css.ComproEngage.createAssignment.assignmentSubmitDialogueHeader,
    assignmentSubmitDialogueSubHeader: selectorFile.css.ComproEngage.createAssignment.assignmentSubmitDialogueSubHeader,
    activityIcon: selectorFile.css.ComproEngage.createAssignment.activityIcon,
    activitylbl: selectorFile.css.ComproEngage.createAssignment.activitylbl,
    activityCount: selectorFile.css.ComproEngage.createAssignment.activityCount,
    classToAssignIcon: selectorFile.css.ComproEngage.createAssignment.classToAssignIcon,
    classToAssignlbl: selectorFile.css.ComproEngage.createAssignment.classToAssignlbl,
    classToAssignCount: selectorFile.css.ComproEngage.createAssignment.classToAssignCount,
    startDateIcon: selectorFile.css.ComproEngage.createAssignment.startDateIcon,
    startDatelbl: selectorFile.css.ComproEngage.createAssignment.startDatelbl,
    startDateCount: selectorFile.css.ComproEngage.createAssignment.startDateCount,
    endDateIcon: selectorFile.css.ComproEngage.createAssignment.endDateIcon,
    endDatelbl: selectorFile.css.ComproEngage.createAssignment.endDatelbl,
    endDateCount: selectorFile.css.ComproEngage.createAssignment.endDateCount,
    cancel: selectorFile.css.ComproEngage.createAssignment.cancel,
    confirmAssign: selectorFile.css.ComproEngage.createAssignment.confirmAssign,
    showHideActivities: selectorFile.css.ComproEngage.createAssignment.showHideActivities,
    classList: selectorFile.css.ComproEngage.createAssignment.classList,

    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.activity_lbl),
            getData_createAssignment: this.getData_createAssignment()
        };
        return res;
    },

    getData_createAssignment: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            assignment_title: (action.getElementCount(this.assignment_title) > 0) ? action.getText(this.assignment_title) : null,
            activity_lbl: (action.getElementCount(this.activity_lbl) > 0) ? action.getText(this.activity_lbl) : null,
            activityCount_icon: (action.getElementCount(this.activityCount_icon) > 0) ? action.waitForDisplayed(this.activityCount_icon) : false,
            activityCount_lbl: (action.getElementCount(this.activityCount_lbl) > 0) ? action.getText(this.activityCount_lbl) : null,
            addActivity_icon: (action.getElementCount(this.addActivity_icon) > 0) ? action.waitForDisplayed(this.addActivity_icon) : false,
            addActivity_lbl: (action.getElementCount(this.addActivity_lbl) > 0) ? action.getText(this.addActivity_lbl) : null,
            activity_number: (action.getElementCount(this.activity_number) > 0) ? action.getText(this.activity_number) : null,
            activitylist_lbl: (action.getElementCount(this.activitylist_lbl) > 0) ? action.getText(this.activitylist_lbl) : null,
            activityUnit_lbl: (action.getElementCount(this.activityUnit_lbl) > 0) ? action.getText(this.activityUnit_lbl) : null,
            assignment_lbl: (action.getElementCount(this.assignment_lbl) > 0) ? action.getText(this.assignment_lbl) : null,
            assignment_txtbox: (action.getElementCount(this.assignment_txtbox) > 0) ? action.getText(this.assignment_txtbox) : null,
            startDate_lbl: (action.getElementCount(this.startDate_lbl) > 0) ? action.getText(this.startDate_lbl) : null,
            startDate_icon: (action.getElementCount(this.startDate_icon) > 0) ? action.waitForDisplayed(this.startDate_icon) : null,
            startDate_txtBox: (action.getElementCount(this.startDate_txtBox) > 0) ? action.getText(this.startDate_txtBox) : null,
            endDate_lbl: (action.getElementCount(this.endDate_lbl) > 0) ? action.getText(this.endDate_lbl) : null,
            endDate_icon: (action.getElementCount(this.endDate_icon) > 0) ? action.waitForDisplayed(this.endDate_icon) : null,
            endDate_txtBox: (action.getElementCount(this.endDate_txtBox) > 0) ? action.getText(this.endDate_txtBox) : null,
            showAdvanceOption: (action.getElementCount(this.showAdvanceOption) > 0) ? action.getText(this.showAdvanceOption) : null,
            cancel_btn: (action.getElementCount(this.cancel_btn) > 0) ? action.getText(this.cancel_btn) : null,
            assign_btn: (action.getElementCount(this.assign_btn) > 0) ? action.getText(this.assign_btn) : null,
            close_btn: (action.getElementCount(this.close_btn) > 0) ? action.waitForDisplayed(this.close_btn) : null,
        }
        return obj;
    },

    getData_activitList: function (activity_cardName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.activity_card);
        var list = action.findElements(this.activity_card);
        if (activity_cardName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.activity_card + i) == activity_cardName) {
                    obj[0] = {
                        activity_card: (action.getElementCount(this.activity_card + i + "]") > 0) ? action.getText(this.activity_card + i + "]") : null,
                        activityNumber: (action.getElementCount(this.activityNumber + i + "]") > 0) ? action.getText(this.activityNumber + i + "]") : null,
                        activity_name_icon: (action.getElementCount(this.activity_name_icon + i + "]") > 0) ? action.waitForDisplayed(this.activity_name_icon + i + "]") : false,
                        activity_name: (action.getElementCount(this.activity_name + i + "]") > 0) ? action.getText(this.activity_name + i + "]") : null,
                        activity_unit: (action.getElementCount(this.activity_unit + i + "]") > 0) ? action.getText(this.activity_unit + i + "]") : null,
                        activity_delete_icon: (action.getElementCount(this.activity_delete_icon + i + "]") > 0) ? action.getText(this.activity_delete_icon + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    activity_card: (action.getElementCount(this.activity_card + i + "]") > 0) ? action.getText(this.activity_card + i + "]") : null,
                    activityNumber: (action.getElementCount(this.activityNumber + i + "]") > 0) ? action.getText(this.activityNumber + i + "]") : null,
                    activity_name_icon: (action.getElementCount(this.activity_name_icon + i + "]") > 0) ? action.waitForDisplayed(this.activity_name_icon + i + "]") : false,
                    activity_name: (action.getElementCount(this.activity_name + i + "]") > 0) ? action.getText(this.activity_name + i + "]") : null,
                    activity_unit: (action.getElementCount(this.activity_unit + i + "]") > 0) ? action.getText(this.activity_unit + i + "]") : null,
                    activity_delete_icon: (action.getElementCount(this.activity_delete_icon + i + "]") > 0) ? action.getText(this.activity_delete_icon + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_advanceOption: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            advancedOption: (action.getElementCount(this.advancedOption) > 0) ? action.getText(this.advancedOption) : null,
            allowLateSubmission_lbl: (action.getElementCount(this.allowLateSubmission_lbl) > 0) ? action.getText(this.allowLateSubmission_lbl) : null,
            allowLateSubmission_btn: (action.getElementCount(this.allowLateSubmission_btn) > 0) ? action.waitForExist(this.allowLateSubmission_btn) : null,
            allowLateSubmission_info: (action.getElementCount(this.allowLateSubmission_info) > 0) ? action.waitForExist(this.allowLateSubmission_info) : null,
            preventfromSkipping_lbl: (action.getElementCount(this.preventfromSkipping_lbl) > 0) ? action.getText(this.preventfromSkipping_lbl) : null,
            preventfromSkipping_btn: (action.getElementCount(this.preventfromSkipping_btn) > 0) ? action.waitForExist(this.preventfromSkipping_btn) : null,
            preventfromSkipping_info: (action.getElementCount(this.preventfromSkipping_info) > 0) ? action.waitForDisplayed(this.preventfromSkipping_info) : false,
            disableShowAnswers_lbl: (action.getElementCount(this.disableShowAnswers_lbl) > 0) ? action.getText(this.disableShowAnswers_lbl) : null,
            disableShowAnswers_btn: (action.getElementCount(this.disableShowAnswers_btn) > 0) ? action.waitForExist(this.disableShowAnswers_btn) : null,
            disableShowAnswers_info: (action.getElementCount(this.disableShowAnswers_info) > 0) ? action.waitForDisplayed(this.disableShowAnswers_info) : false,
            includeProgressBar_lbl: (action.getElementCount(this.includeProgressBar_lbl) > 0) ? action.getText(this.includeProgressBar_lbl) : null,
            includeProgressBar_btn: (action.getElementCount(this.includeProgressBar_btn) > 0) ? action.waitForExist(this.includeProgressBar_btn) : null,
            futureEditNotSupported_icon: (action.getElementCount(this.futureEditNotSupported_icon) > 0) ? action.waitForExist(this.futureEditNotSupported_icon) : null,
            futureEditNotSupportedHeading: (action.getElementCount(this.futureEditNotSupportedHeading) > 0) ? action.getText(this.futureEditNotSupportedHeading) : null,
            futureEditNotSupportedSubHeading: (action.getElementCount(this.futureEditNotSupportedSubHeading) > 0) ? action.getText(this.futureEditNotSupportedSubHeading) : null,
            hideAdvancedOption: (action.getElementCount(this.hideAdvancedOption) > 0) ? action.getText(this.hideAdvancedOption) : null,
        }
        return obj;
    },

    getData_deleteDialogue: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            deleteActivity_header: (action.getElementCount(this.deleteActivity_header) > 0) ? action.getText(this.deleteActivity_header) : null,
            deleteActivity_subheader: (action.getElementCount(this.deleteActivity_subheader) > 0) ? action.getText(this.deleteActivity_subheader) : null,
            deleteActivity_btn: (action.getElementCount(this.deleteActivity_btn) > 0) ? action.getText(this.deleteActivity_btn) : null,
            cancelActivityDialogue_btn: (action.getElementCount(this.cancelActivityDialogue_btn) > 0) ? action.getText(this.cancelActivityDialogue_btn) : null,
        }
        return obj;
    },
    getData_submitDialogue: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            assignmentSubmitDialogueHeader: (action.getElementCount(this.assignmentSubmitDialogueHeader) > 0) ? action.getText(this.assignmentSubmitDialogueHeader) : null,
            assignmentSubmitDialogueSubHeader: (action.getElementCount(this.assignmentSubmitDialogueSubHeader) > 0) ? action.getText(this.assignmentSubmitDialogueSubHeader) : null,
            activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.getText(this.activityIcon) : null,
            activitylbl: (action.getElementCount(this.activitylbl) > 0) ? action.getText(this.activitylbl) : null,
            activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount) : null,
            classToAssignIcon: (action.getElementCount(this.classToAssignIcon) > 0) ? action.waitForDisplayed(this.classToAssignIcon) : null,
            classToAssignlbl: (action.getElementCount(this.classToAssignlbl) > 0) ? action.getText(this.classToAssignlbl) : null,
            classToAssignCount: (action.getElementCount(this.classToAssignCount) > 0) ? action.getText(this.classToAssignCount) : null,
            startDateIcon: (action.getElementCount(this.startDateIcon) > 0) ? action.waitForDisplayed(this.startDateIcon) : null,
            startDatelbl: (action.getElementCount(this.startDatelbl) > 0) ? action.getText(this.startDatelbl) : null,
            startDateCount: (action.getElementCount(this.startDateCount) > 0) ? action.getText(this.startDateCount) : null,
            endDateIcon: (action.getElementCount(this.endDateIcon) > 0) ? action.waitForDisplayed(this.endDateIcon) : null,
            endDatelbl: (action.getElementCount(this.endDatelbl) > 0) ? action.getText(this.endDatelbl) : null,
            endDateCount: (action.getElementCount(this.endDateCount) > 0) ? action.getText(this.endDateCount) : null,
            cancel: (action.getElementCount(this.cancel) > 0) ? action.getText(this.cancel) : null,
            confirmAssign: (action.getElementCount(this.confirmAssign) > 0) ? action.getText(this.confirmAssign) : null
        }
        return obj;
    },

    getData_classList: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            classList: this.classList_Data(),
        }
        return obj;
    },

    classList_Data: function () {
        logger.logInto(stackTrace.get());
        var i, list;
        var classList_Arr = [];
        list = action.findElements(this.classList);
        for (i = 0; i < list.length; i++) {
            classList_Arr[i] = action.getText(list[i])
        }
        logger.logInto(stackTrace.get(), classList_Arr);
        return classList_Arr;
    },
    click_showHideActivities: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showHideActivities);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addActivity_lbl is clicked");
            res = this.getData_activitList();
        }
        else {
            logger.logInto(stackTrace.get(), res + "addActivity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_addActivity_lbl: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.addActivity_lbl);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addActivity_lbl is clicked");
            res = require('./selectActivity.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "addActivity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_activity_delete_icon: function (activity_nameName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.activity_delete_icon);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.activity_name + i + "]")) == activity_nameName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --activity_delete_icon clicked");
            res = this.getData_deleteDialogue();
        }
        else
            logger.logInto(stackTrace.get(), " --activity_delete_icon NOT clicked", "error")
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

    click_endDate_icon: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.endDate_icon);
        if (true == res) {
            logger.logInto(stackTrace.get(), " endDate_icon is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "endDate_icon is NOT clicked", 'error');
        }
        return res;
    },

    click_showAdvanceOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showAdvanceOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showAdvanceOption is clicked");
            res = this.getData_advanceOption();
        }
        else {
            logger.logInto(stackTrace.get(), res + "showAdvanceOption is NOT clicked", 'error');
        }
        return res;
    },

    click_cancel_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.cancel_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " cancel_btn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "cancel_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_assign_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.assign_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " assign_btn is clicked");
            res = this.getData_submitDialogue();
        }
        else {
            logger.logInto(stackTrace.get(), res + "assign_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_close_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.close_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " close_btn is clicked");
            res = require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "close_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteActivity_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.deleteActivity_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " deleteActivity_btn is clicked");
            res = action.waitForDisplayed(this.this.isinitialized);
        }
        else {
            logger.logInto(stackTrace.get(), res + "deleteActivity_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancelActivityDialogue_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.cancelActivityDialogue_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " cancelActivityDialogue_btn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "cancelActivityDialogue_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.cancel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " cancel is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "cancel is NOT clicked", 'error');
        }
        return res;
    },

    click_confirmAssign: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.confirmAssign);
        if (true == res) {
            logger.logInto(stackTrace.get(), " confirm&Assign is clicked");
            res = require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "confirm&Assign is NOT clicked", 'error');
        }
        return res;
    },

    set_assignment_txtbox: function (value) {
        var res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.assignment_txtbox, value);
        if (true == res) {
            logger.logInto(stackTrace.get(), "Value is entered in assignment_txtbox");
        } else {
            logger.logInto(stackTrace.get(), res + "Value is NOT entered in assignment_txtbox", 'error');
        }
        return res;
    },

    set_startDate_txtBox: function (value) {
        var res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.startDate_txtBox, value);
        if (true == res) {
            logger.logInto(stackTrace.get(), "Value is entered in startDate_txtBox");
        } else {
            logger.logInto(stackTrace.get(), res + "Value is NOT entered in startDate_txtBox", 'error');
        }
        return res;
    },

    set_endDate_txtBox: function (value) {
        var res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.endDate_txtBox, value);
        if (true == res) {
            logger.logInto(stackTrace.get(), "Value is entered in endDate_txtBox");
        } else {
            logger.logInto(stackTrace.get(), res + "Value is NOT entered in endDate_txtBox", 'error');
        }
        return res;
    },
    click_classList: function (classListName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.classList);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(list[i])) == classListName) {
                console.log(classListName)
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --classList clicked");
        }
        else
            logger.logInto(stackTrace.get(), " --classList NOT clicked", "error")
        return res;
    },

}

