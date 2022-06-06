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

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.activity_lbl),
            getData_createAssignment: await this.getData_createAssignment()
        };
        return res;
    },

    getData_createAssignment: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            assignment_title: ((await action.getElementCount(this.assignment_title)) > 0) ? await action.getText(this.assignment_title) : null,
            activity_lbl: ((await action.getElementCount(this.activity_lbl)) > 0) ? await action.getText(this.activity_lbl) : null,
            activityCount_icon: ((await action.getElementCount(this.activityCount_icon)) > 0) ? await action.waitForDisplayed(this.activityCount_icon) : false,
            activityCount_lbl: ((await action.getElementCount(this.activityCount_lbl)) > 0) ? await action.getText(this.activityCount_lbl) : null,
            addActivity_icon: ((await action.getElementCount(this.addActivity_icon)) > 0) ? await action.waitForDisplayed(this.addActivity_icon) : false,
            addActivity_lbl: ((await action.getElementCount(this.addActivity_lbl)) > 0) ? await action.getText(this.addActivity_lbl) : null,
            activity_number: ((await action.getElementCount(this.activity_number)) > 0) ? await action.getText(this.activity_number) : null,
            activitylist_lbl: ((await action.getElementCount(this.activitylist_lbl)) > 0) ? await action.getText(this.activitylist_lbl) : null,
            activityUnit_lbl: ((await action.getElementCount(this.activityUnit_lbl)) > 0) ? await action.getText(this.activityUnit_lbl) : null,
            assignment_lbl: ((await action.getElementCount(this.assignment_lbl)) > 0) ? await action.getText(this.assignment_lbl) : null,
            assignment_txtbox: ((await action.getElementCount(this.assignment_txtbox)) > 0) ? await action.getText(this.assignment_txtbox) : null,
            startDate_lbl: ((await action.getElementCount(this.startDate_lbl)) > 0) ? await action.getText(this.startDate_lbl) : null,
            startDate_icon: ((await action.getElementCount(this.startDate_icon)) > 0) ? await action.waitForDisplayed(this.startDate_icon) : null,
            startDate_txtBox: ((await action.getElementCount(this.startDate_txtBox)) > 0) ? await action.getText(this.startDate_txtBox) : null,
            endDate_lbl: ((await action.getElementCount(this.endDate_lbl)) > 0) ? await action.getText(this.endDate_lbl) : null,
            endDate_icon: ((await action.getElementCount(this.endDate_icon)) > 0) ? await action.waitForDisplayed(this.endDate_icon) : null,
            endDate_txtBox: ((await action.getElementCount(this.endDate_txtBox)) > 0) ? await action.getText(this.endDate_txtBox) : null,
            showAdvanceOption: ((await action.getElementCount(this.showAdvanceOption)) > 0) ? await action.getText(this.showAdvanceOption) : null,
            cancel_btn: ((await action.getElementCount(this.cancel_btn)) > 0) ? await action.getText(this.cancel_btn) : null,
            assign_btn: ((await action.getElementCount(this.assign_btn)) > 0) ? await action.getText(this.assign_btn) : null,
            close_btn: ((await action.getElementCount(this.close_btn)) > 0) ? await action.waitForDisplayed(this.close_btn) : null,
        }
        return obj;
    },

    getData_activitList: async function (activity_cardName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.activity_card);
        var list = await action.findElements(this.activity_card);
        if (activity_cardName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.activity_card + i)) == activity_cardName) {
                    obj[0] = {
                        activity_card: ((await action.getElementCount(this.activity_card + i + "]")) > 0) ? await action.getText(this.activity_card + i + "]") : null,
                        activityNumber: ((await action.getElementCount(this.activityNumber + i + "]")) > 0) ? await action.getText(this.activityNumber + i + "]") : null,
                        activity_name_icon: ((await action.getElementCount(this.activity_name_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.activity_name_icon + i + "]") : false,
                        activity_name: ((await action.getElementCount(this.activity_name + i + "]")) > 0) ? await action.getText(this.activity_name + i + "]") : null,
                        activity_unit: ((await action.getElementCount(this.activity_unit + i + "]")) > 0) ? await action.getText(this.activity_unit + i + "]") : null,
                        activity_delete_icon: ((await action.getElementCount(this.activity_delete_icon + i + "]")) > 0) ? await action.getText(this.activity_delete_icon + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    activity_card: ((await action.getElementCount(this.activity_card + i + "]")) > 0) ? await action.getText(this.activity_card + i + "]") : null,
                    activityNumber: ((await action.getElementCount(this.activityNumber + i + "]")) > 0) ? await action.getText(this.activityNumber + i + "]") : null,
                    activity_name_icon: ((await action.getElementCount(this.activity_name_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.activity_name_icon + i + "]") : false,
                    activity_name: ((await action.getElementCount(this.activity_name + i + "]")) > 0) ? await action.getText(this.activity_name + i + "]") : null,
                    activity_unit: ((await action.getElementCount(this.activity_unit + i + "]")) > 0) ? await action.getText(this.activity_unit + i + "]") : null,
                    activity_delete_icon: ((await action.getElementCount(this.activity_delete_icon + i + "]")) > 0) ? await action.getText(this.activity_delete_icon + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_advanceOption: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            advancedOption: ((await action.getElementCount(this.advancedOption)) > 0) ? await action.getText(this.advancedOption) : null,
            allowLateSubmission_lbl: ((await action.getElementCount(this.allowLateSubmission_lbl)) > 0) ? await action.getText(this.allowLateSubmission_lbl) : null,
            allowLateSubmission_btn: ((await action.getElementCount(this.allowLateSubmission_btn)) > 0) ? await action.waitForExist(this.allowLateSubmission_btn) : null,
            allowLateSubmission_info: ((await action.getElementCount(this.allowLateSubmission_info)) > 0) ? await action.waitForExist(this.allowLateSubmission_info) : null,
            preventfromSkipping_lbl: ((await action.getElementCount(this.preventfromSkipping_lbl)) > 0) ? await action.getText(this.preventfromSkipping_lbl) : null,
            preventfromSkipping_btn: ((await action.getElementCount(this.preventfromSkipping_btn)) > 0) ? await action.waitForExist(this.preventfromSkipping_btn) : null,
            preventfromSkipping_info: ((await action.getElementCount(this.preventfromSkipping_info)) > 0) ? await action.waitForDisplayed(this.preventfromSkipping_info) : false,
            disableShowAnswers_lbl: ((await action.getElementCount(this.disableShowAnswers_lbl)) > 0) ? await action.getText(this.disableShowAnswers_lbl) : null,
            disableShowAnswers_btn: ((await action.getElementCount(this.disableShowAnswers_btn)) > 0) ? await action.waitForExist(this.disableShowAnswers_btn) : null,
            disableShowAnswers_info: ((await action.getElementCount(this.disableShowAnswers_info)) > 0) ? await action.waitForDisplayed(this.disableShowAnswers_info) : false,
            includeProgressBar_lbl: ((await action.getElementCount(this.includeProgressBar_lbl)) > 0) ? await action.getText(this.includeProgressBar_lbl) : null,
            includeProgressBar_btn: ((await action.getElementCount(this.includeProgressBar_btn)) > 0) ? await action.waitForExist(this.includeProgressBar_btn) : null,
            futureEditNotSupported_icon: ((await action.getElementCount(this.futureEditNotSupported_icon)) > 0) ? await action.waitForExist(this.futureEditNotSupported_icon) : null,
            futureEditNotSupportedHeading: ((await action.getElementCount(this.futureEditNotSupportedHeading)) > 0) ? await action.getText(this.futureEditNotSupportedHeading) : null,
            futureEditNotSupportedSubHeading: ((await action.getElementCount(this.futureEditNotSupportedSubHeading)) > 0) ? await action.getText(this.futureEditNotSupportedSubHeading) : null,
            hideAdvancedOption: ((await action.getElementCount(this.hideAdvancedOption)) > 0) ? await action.getText(this.hideAdvancedOption) : null,
        }
        return obj;
    },

    getData_deleteDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            deleteActivity_header: ((await action.getElementCount(this.deleteActivity_header)) > 0) ? await action.getText(this.deleteActivity_header) : null,
            deleteActivity_subheader: ((await action.getElementCount(this.deleteActivity_subheader)) > 0) ? await action.getText(this.deleteActivity_subheader) : null,
            deleteActivity_btn: ((await action.getElementCount(this.deleteActivity_btn)) > 0) ? await action.getText(this.deleteActivity_btn) : null,
            cancelActivityDialogue_btn: ((await action.getElementCount(this.cancelActivityDialogue_btn)) > 0) ? await action.getText(this.cancelActivityDialogue_btn) : null,
        }
        return obj;
    },
    getData_submitDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            assignmentSubmitDialogueHeader: ((await action.getElementCount(this.assignmentSubmitDialogueHeader)) > 0) ? await action.getText(this.assignmentSubmitDialogueHeader) : null,
            assignmentSubmitDialogueSubHeader: ((await action.getElementCount(this.assignmentSubmitDialogueSubHeader)) > 0) ? await action.getText(this.assignmentSubmitDialogueSubHeader) : null,
            activityIcon: ((await action.getElementCount(this.activityIcon)) > 0) ? await action.getText(this.activityIcon) : null,
            activitylbl: ((await action.getElementCount(this.activitylbl)) > 0) ? await action.getText(this.activitylbl) : null,
            activityCount: ((await action.getElementCount(this.activityCount)) > 0) ? await action.getText(this.activityCount) : null,
            classToAssignIcon: ((await action.getElementCount(this.classToAssignIcon)) > 0) ? await action.waitForDisplayed(this.classToAssignIcon) : null,
            classToAssignlbl: ((await action.getElementCount(this.classToAssignlbl)) > 0) ? await action.getText(this.classToAssignlbl) : null,
            classToAssignCount: ((await action.getElementCount(this.classToAssignCount)) > 0) ? await action.getText(this.classToAssignCount) : null,
            startDateIcon: ((await action.getElementCount(this.startDateIcon)) > 0) ? await action.waitForDisplayed(this.startDateIcon) : null,
            startDatelbl: ((await action.getElementCount(this.startDatelbl)) > 0) ? await action.getText(this.startDatelbl) : null,
            startDateCount: ((await action.getElementCount(this.startDateCount)) > 0) ? await action.getText(this.startDateCount) : null,
            endDateIcon: ((await action.getElementCount(this.endDateIcon)) > 0) ? await action.waitForDisplayed(this.endDateIcon) : null,
            endDatelbl: ((await action.getElementCount(this.endDatelbl)) > 0) ? await action.getText(this.endDatelbl) : null,
            endDateCount: ((await action.getElementCount(this.endDateCount)) > 0) ? await action.getText(this.endDateCount) : null,
            cancel: ((await action.getElementCount(this.cancel)) > 0) ? await action.getText(this.cancel) : null,
            confirmAssign: ((await action.getElementCount(this.confirmAssign)) > 0) ? await action.getText(this.confirmAssign) : null
        }
        return obj;
    },

    getData_classList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            classList: await this.classList_Data(),
        }
        return obj;
    },

    classList_Data: async function () {
        await logger.logInto(await stackTrace.get());
        var i, list;
        var classList_Arr = [];
        list = await action.findElements(this.classList);
        for (i = 0; i < list.length; i++) {
            classList_Arr[i] = await action.getText(list[i])
        }
        await logger.logInto(await stackTrace.get(), classList_Arr);
        return classList_Arr;
    },
    click_showHideActivities: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showHideActivities);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addActivity_lbl is clicked");
            res = await this.getData_activitList();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addActivity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_addActivity_lbl: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addActivity_lbl);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addActivity_lbl is clicked");
            res = await require('./selectActivity.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addActivity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_activity_delete_icon: async function (activity_nameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.activity_delete_icon);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.activity_name + i + "]"))) == activity_nameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --activity_delete_icon clicked");
            res = await this.getData_deleteDialogue();
        }
        else
            await logger.logInto(await stackTrace.get(), " --activity_delete_icon NOT clicked", "error")
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

    click_endDate_icon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.endDate_icon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " endDate_icon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "endDate_icon is NOT clicked", 'error');
        }
        return res;
    },

    click_showAdvanceOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showAdvanceOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showAdvanceOption is clicked");
            res = await this.getData_advanceOption();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showAdvanceOption is NOT clicked", 'error');
        }
        return res;
    },

    click_cancel_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancel_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancel_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancel_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_assign_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.assign_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " assign_btn is clicked");
            res = await this.getData_submitDialogue();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "assign_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_close_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.close_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " close_btn is clicked");
            res = await require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "close_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteActivity_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteActivity_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteActivity_btn is clicked");
            res = await action.waitForDisplayed(this.this.isinitialized);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteActivity_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancelActivityDialogue_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelActivityDialogue_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelActivityDialogue_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelActivityDialogue_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancel is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancel is NOT clicked", 'error');
        }
        return res;
    },

    click_confirmAssign: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.confirmAssign);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " confirm&Assign is clicked");
            res = await require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "confirm&Assign is NOT clicked", 'error');
        }
        return res;
    },

    set_assignment_txtbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.assignment_txtbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in assignment_txtbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in assignment_txtbox", 'error');
        }
        return res;
    },

    set_startDate_txtBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.startDate_txtBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in startDate_txtBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in startDate_txtBox", 'error');
        }
        return res;
    },

    set_endDate_txtBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.endDate_txtBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in endDate_txtBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in endDate_txtBox", 'error');
        }
        return res;
    },
    click_classList: async function (classListName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.classList);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(list[i])).split("\n")[0]) == classListName) {
                console.log(classListName)
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --classList clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --classList NOT clicked", "error")
        return res;
    },

}

