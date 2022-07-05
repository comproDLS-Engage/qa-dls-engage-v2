"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');

module.exports = {
    createAssignmentsbtn_inbox: selectorFile.css.ComproEngage.assignmentList.createAssignmentsbtn_inbox,
    Assignment_title: selectorFile.css.ComproEngage.assignmentList.Assignment_title,
    Assignment_subtitle: selectorFile.css.ComproEngage.assignmentList.Assignment_subtitle,
    blankAssignment_img: selectorFile.css.ComproEngage.assignmentList.blankAssignment_img,
    blankAssignment_title: selectorFile.css.ComproEngage.assignmentList.blankAssignment_title,
    blankAssignment_subtitle: selectorFile.css.ComproEngage.assignmentList.blankAssignment_subtitle,
    createAssignments_btn: selectorFile.css.ComproEngage.assignmentList.createAssignments_btn,
    addNew_btn: selectorFile.css.ComproEngage.assignmentList.addNew_btn,
    inProgress_lbl: selectorFile.css.ComproEngage.assignmentList.inProgress_lbl,
    inProgress_count: selectorFile.css.ComproEngage.assignmentList.inProgress_count,
    inProgress_arrow: selectorFile.css.ComproEngage.assignmentList.inProgress_arrow,
    inProgress_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentList.inProgress_noAssignmentTitle,
    inProgress_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentList.inProgress_noAssignmentSubTitle,
    upcoming_lbl: selectorFile.css.ComproEngage.assignmentList.upcoming_lbl,
    upcoming_count: selectorFile.css.ComproEngage.assignmentList.upcoming_count,
    upcoming_arrow: selectorFile.css.ComproEngage.assignmentList.upcoming_arrow,
    upcoming_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentList.upcoming_noAssignmentTitle,
    upcoming_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentList.upcoming_noAssignmentSubTitle,
    past_lbl: selectorFile.css.ComproEngage.assignmentList.past_lbl,
    past_count: selectorFile.css.ComproEngage.assignmentList.past_count,
    past_arrow: selectorFile.css.ComproEngage.assignmentList.past_arrow,
    past_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentList.past_noAssignmentTitle,
    past_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentList.past_noAssignmentSubTitle,
    assignmentCard: selectorFile.css.ComproEngage.assignmentList.assignmentCard,
    assignmentName: selectorFile.css.ComproEngage.assignmentList.assignmentName,
    assignmentDueDate: selectorFile.css.ComproEngage.assignmentList.assignmentDueDate,
    assignmentTunedIn: selectorFile.css.ComproEngage.assignmentList.assignmentTunedIn,
    assignmentScoreIcon: selectorFile.css.ComproEngage.assignmentList.assignmentScoreIcon,
    assignmentScore: selectorFile.css.ComproEngage.assignmentList.assignmentScore,
    assignmentMoreOption: selectorFile.css.ComproEngage.assignmentList.assignmentMoreOption,
    dueDatepill: selectorFile.css.ComproEngage.assignmentList.dueDatepill,
    viewProgress_btn: selectorFile.css.ComproEngage.assignmentList.viewProgress_btn,
    editAssignment_btn: selectorFile.css.ComproEngage.assignmentList.editAssignment_btn,
    cloneAssignment_btn: selectorFile.css.ComproEngage.assignmentList.cloneAssignment_btn,
    deleteAssignment_btn: selectorFile.css.ComproEngage.assignmentList.deleteAssignment_btn,
    moreOptionListHeader: selectorFile.css.ComproEngage.assignmentList.moreOptionListHeader,
    viewProgressIcon: selectorFile.css.ComproEngage.assignmentList.viewProgressIcon,
    viewProgresslabel: selectorFile.css.ComproEngage.assignmentList.viewProgresslabel,
    editAssignmentIcon: selectorFile.css.ComproEngage.assignmentList.editAssignmentIcon,
    editAssignmentlabel: selectorFile.css.ComproEngage.assignmentList.editAssignmentlabel,
    cloneAssignmentIcon: selectorFile.css.ComproEngage.assignmentList.cloneAssignmentIcon,
    cloneAssignmentlabel: selectorFile.css.ComproEngage.assignmentList.cloneAssignmentlabel,
    deleteAssignmentIcon: selectorFile.css.ComproEngage.assignmentList.deleteAssignmentIcon,
    deleteAssignmentlabel: selectorFile.css.ComproEngage.assignmentList.deleteAssignmentlabel,
    viewAllbtn: selectorFile.css.ComproEngage.assignmentList.viewAllbtn,
    componentHeader: selectorFile.css.ComproEngage.assignmentList.componentHeader,
    componentTeacherOnlyIcon: selectorFile.css.ComproEngage.assignmentList.componentTeacherOnlyIcon,
    componentList: selectorFile.css.ComproEngage.assignmentList.componentList,
    deletedialogueHeader: selectorFile.css.ComproEngage.assignmentList.deletedialogueHeader,
    deletedialoguesubHeader1: selectorFile.css.ComproEngage.assignmentList.deletedialoguesubHeader1,
    deletedialoguesubHeader2: selectorFile.css.ComproEngage.assignmentList.deletedialoguesubHeader2,
    cancel_btn: selectorFile.css.ComproEngage.assignmentList.cancel_btn,
    delete_btn: selectorFile.css.ComproEngage.assignmentList.delete_btn,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.addNew_btn),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_Inbox: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            createAssignmentsbtn_inbox: ((await action.getElementCount(this.createAssignmentsbtn_inbox)) > 0) ? await action.getText(this.createAssignmentsbtn_inbox) : null,
        }
        return obj;
    },

    getData_assignmentListPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            blankAssignment_img: ((await action.getElementCount(this.blankAssignment_img)) > 0) ? await action.waitForDisplayed(this.blankAssignment_img) : false,
            blankAssignment_title: ((await action.getElementCount(this.blankAssignment_title)) > 0) ? await action.getText(this.blankAssignment_title) : null,
            blankAssignment_subtitle: ((await action.getElementCount(this.blankAssignment_subtitle)) > 0) ? await action.getText(this.blankAssignment_subtitle) : null,
            createAssignments_btn: ((await action.getElementCount(this.createAssignments_btn)) > 0) ? await action.getText(this.createAssignments_btn) : null,
            addNew_btn: ((await action.getElementCount(this.addNew_btn)) > 0) ? await action.getText(this.addNew_btn) : null,
            inProgress_lbl: ((await action.getElementCount(this.inProgress_lbl)) > 0) ? await action.getText(this.inProgress_lbl) : null,
            inProgress_count: ((await action.getElementCount(this.inProgress_count)) > 0) ? await action.getText(this.inProgress_count) : null,
            inProgress_arrow: ((await action.getElementCount(this.inProgress_arrow)) > 0) ? await action.waitForDisplayed(this.inProgress_arrow) : false,
            inProgress_noAssignmentTitle: ((await action.getElementCount(this.inProgress_noAssignmentTitle)) > 0) ? await action.getText(this.inProgress_noAssignmentTitle) : null,
            inProgress_noAssignmentSubTitle: ((await action.getElementCount(this.inProgress_noAssignmentSubTitle)) > 0) ? await action.getText(this.inProgress_noAssignmentSubTitle) : null,
            upcoming_lbl: ((await action.getElementCount(this.upcoming_lbl)) > 0) ? await action.getText(this.upcoming_lbl) : null,
            upcoming_count: ((await action.getElementCount(this.upcoming_count)) > 0) ? await action.getText(this.upcoming_count) : null,
            upcoming_arrow: ((await action.getElementCount(this.upcoming_arrow)) > 0) ? await action.waitForDisplayed(this.upcoming_arrow) : false,
            upcoming_noAssignmentTitle: ((await action.getElementCount(this.upcoming_noAssignmentTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentTitle) : null,
            upcoming_noAssignmentSubTitle: ((await action.getElementCount(this.upcoming_noAssignmentSubTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentSubTitle) : null,
            past_lbl: ((await action.getElementCount(this.past_lbl)) > 0) ? await action.getText(this.past_lbl) : null,
            past_count: ((await action.getElementCount(this.past_count)) > 0) ? await action.getText(this.past_count) : null,
            past_arrow: ((await action.getElementCount(this.past_arrow)) > 0) ? await action.waitForDisplayed(this.past_arrow) : false,
            past_noAssignmentTitle: ((await action.getElementCount(this.past_noAssignmentTitle)) > 0) ? await action.getText(this.past_noAssignmentTitle) : null,
            past_noAssignmentSubTitle: ((await action.getElementCount(this.past_noAssignmentSubTitle)) > 0) ? await action.getText(this.past_noAssignmentSubTitle) : null,
            viewAllbtn: ((await action.getElementCount(this.viewAllbtn)) > 0) ? await action.getText(this.viewAllbtn) : null,
        }
        return obj;
    },
    getData_assignmentCard: async function (assignmentCardName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.assignmentName);
        var list = await this.getResourceIndex();
        if (assignmentCardName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.assignmentName + list[i])) == assignmentCardName) {
                    obj[0] = {
                        assignmentCard: ((await action.getElementCount(this.assignmentCard + list[i])) > 0) ? await action.getText(this.assignmentCard + list[i]) : null,
                        assignmentName: ((await action.getElementCount(this.assignmentName + list[i])) > 0) ? await action.getText(this.assignmentName + list[i]) : null,
                        assignmentDueDate: ((await action.getElementCount(this.assignmentDueDate + list[i])) > 0) ? await action.getText(this.assignmentDueDate + list[i]) : null,
                        assignmentTunedIn: ((await action.getElementCount(this.assignmentTunedIn + list[i])) > 0) ? await action.getText(this.assignmentTunedIn + list[i]) : null,
                        assignmentScoreIcon: ((await action.getElementCount(this.assignmentScoreIcon + list[i])) > 0) ? await action.waitForDisplayed(this.assignmentScoreIcon + list[i]) : null,
                        assignmentScore: ((await action.getElementCount(this.assignmentScore + list[i])) > 0) ? await action.getText(this.assignmentScore + list[i]) : null,
                        assignmentMoreOption: ((await action.getElementCount(this.assignmentMoreOption + list[i])) > 0) ? await action.getText(this.assignmentMoreOption + list[i]) : null,
                        dueDatepill: ((await action.getElementCount(this.dueDatepill + list[i])) > 0) ? await action.getText(this.dueDatepill + list[i]) : null,
                         }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    assignmentCard: ((await action.getElementCount(this.assignmentCard + list[i])) > 0) ? await action.getText(this.assignmentCard + list[i]) : null,
                    assignmentName: ((await action.getElementCount(this.assignmentName + list[i])) > 0) ? await action.getText(this.assignmentName + list[i]) : null,
                    assignmentDueDate: ((await action.getElementCount(this.assignmentDueDate + list[i])) > 0) ? await action.getText(this.assignmentDueDate + list[i]) : null,
                    assignmentTunedIn: ((await action.getElementCount(this.assignmentTunedIn + list[i])) > 0) ? await action.getText(this.assignmentTunedIn + list[i]) : null,
                    assignmentScoreIcon: ((await action.getElementCount(this.assignmentScoreIcon + list[i])) > 0) ? await action.waitForDisplayed(this.assignmentScoreIcon + list[i]) : null,
                    assignmentScore: ((await action.getElementCount(this.assignmentScore + list[i])) > 0) ? await action.getText(this.assignmentScore + list[i]) : null,
                    assignmentMoreOption: ((await action.getElementCount(this.assignmentMoreOption + list[i])) > 0) ? await action.getText(this.assignmentMoreOption + list[i]) : null,
                    dueDatepill: ((await action.getElementCount(this.dueDatepill + list[i])) > 0) ? await action.getText(this.dueDatepill + list[i]) : null,
                    }
            }
        }
        return obj;
    },


    getData_assignmentMoreOption: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            moreOptionListHeader: ((await action.getElementCount(this.moreOptionListHeader)) > 0) ? await action.getText(this.moreOptionListHeader) : null,
            viewProgressIcon: ((await action.getElementCount(this.viewProgressIcon)) > 0) ? await action.waitForDisplayed(this.viewProgressIcon) : null,
            viewProgresslabel: ((await action.getElementCount(this.viewProgresslabel)) > 0) ? await action.getText(this.viewProgresslabel) : null,
            editAssignmentIcon: ((await action.getElementCount(this.editAssignmentIcon)) > 0) ? await action.waitForDisplayed(this.editAssignmentIcon) : null,
            editAssignmentlabel: ((await action.getElementCount(this.editAssignmentlabel)) > 0) ? await action.getText(this.editAssignmentlabel) : null,
            cloneAssignmentIcon: ((await action.getElementCount(this.cloneAssignmentIcon)) > 0) ? await action.waitForDisplayed(this.cloneAssignmentIcon) : null,
            cloneAssignmentlabel: ((await action.getElementCount(this.cloneAssignmentlabel)) > 0) ? await action.getText(this.cloneAssignmentlabel) : null,
            deleteAssignmentIcon: ((await action.getElementCount(this.deleteAssignmentIcon)) > 0) ? await action.waitForDisplayed(this.deleteAssignmentIcon) : null,
            deleteAssignmentlabel: ((await action.getElementCount(this.deleteAssignmentlabel)) > 0) ? await action.getText(this.deleteAssignmentlabel) : null,
        }
        return obj;
    },

    getData_componentList: async function (componentListName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.componentHeader);
        var list = await action.findElements(this.componentList);
        if (componentListName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.componentList + i)) == componentListName) {
                    obj[0] = {
                        componentTeacherOnlyIcon: ((await action.getElementCount(this.componentTeacherOnlyIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.componentTeacherOnlyIcon + i + "]") : null,
                        componentList: ((await action.getElementCount(this.componentList + i + "]")) > 0) ? await action.getText(this.componentList + i + "]") : null,
                    }
                    break;
                }
            }
            obj.componentHeader = ((await action.getElementCount(this.componentHeader)) > 0) ? await action.getText(this.componentHeader) : null
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    componentTeacherOnlyIcon: ((await action.getElementCount(this.componentTeacherOnlyIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.componentTeacherOnlyIcon + i + "]") : null,
                    componentList: ((await action.getElementCount(this.componentList + i + "]")) > 0) ? await action.getText(this.componentList + i + "]") : null,
                }
            }
            obj.componentHeader = ((await action.getElementCount(this.componentHeader)) > 0) ? await action.getText(this.componentHeader) : null
        }
        return obj;
    },

    getData_deleteDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            deletedialogueHeader: ((await action.getElementCount(this.deletedialogueHeader)) > 0) ? await action.getText(this.deletedialogueHeader) : null,
            deletedialoguesubHeader1: ((await action.getElementCount(this.deletedialoguesubHeader1)) > 0) ? await action.getText(this.deletedialoguesubHeader1) : null,
            deletedialoguesubHeader2: ((await action.getElementCount(this.deletedialoguesubHeader2)) > 0) ? await action.getText(this.deletedialoguesubHeader2) : null,
            cancel_btn: ((await action.getElementCount(this.cancel_btn)) > 0) ? await action.getText(this.cancel_btn) : null,
            delete_btn: ((await action.getElementCount(this.delete_btn)) > 0) ? await action.getText(this.delete_btn) : null,
        }
        return obj;
    },


    click_createAssignmentsbtn_inbox: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.createAssignmentsbtn_inbox);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " createAssignmentsbtn_inbox is clicked");
            res = await require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "createAssignmentsbtn_inbox is NOT clicked", 'error');
        }
        return res;
    },

    click_createAssignments_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.createAssignments_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " createAssignments_btn is clicked");
            res = await this.getData_componentList();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "createAssignments_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_addNew_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addNew_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addNew_btn is clicked");
            res = await this.getData_componentList();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addNew_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_inProgress_arrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.inProgress_arrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " inProgress_arrow is clicked");
            res = await require('./assignmentListDetails.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "inProgress_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_upcoming_arrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.upcoming_arrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " upcoming_arrow is clicked");
            res = await require('./assignmentListDetails.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "upcoming_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_past_arrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.past_arrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " past_arrow is clicked");
            res = await require('./assignmentListDetails.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "past_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_assignmentCard: async function (assignmentNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.assignmentName);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(list[i]))) == assignmentNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --assignmentCard clicked");
            res = await require('./assignmentDetails.page').isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), " --assignmentCard NOT clicked", "error")
        return res;
    },

    click_assignmentMoreOption: async function (assignmentNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res,list1;
        list = await action.findElements(this.assignmentMoreOption);
        list1 = await action.findElements(this.assignmentName);
        for (i = 0; i < list.length; i++) {
           
            if (((await action.getText(list1[i]))) == assignmentNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --assignmentCard clicked");
            res = await this.getData_assignmentMoreOption();
        }
        else
            await logger.logInto(await stackTrace.get(), " --assignmentCard NOT clicked", "error")
        return res;
    },

    click_viewProgresslabel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewProgresslabel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewProgresslabel is clicked");
            res = await require('./assignmentDetails.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewProgresslabel is NOT clicked", 'error');
        }
        return res;
    },

    click_editAssignmentlabel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.editAssignmentlabel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " editAssignmentlabel is clicked");
            res = await require('./editAssignment.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "editAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_cloneAssignmentlabel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cloneAssignmentlabel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cloneAssignmentlabel is clicked");
            res = await require('./cloneAssignment.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cloneAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteAssignmentlabel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteAssignmentlabel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteAssignmentlabel is clicked");
            res = await this.getData_deleteDialogue();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewAllbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewAllbtn is clicked");
            res = await require('./assignmentListDetails.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewAllbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_componentList: async function (componentListName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.componentList);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.componentList + i + "]"))) == componentListName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --componentList clicked");
            res = await require('./selectActivity.page').isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), " --componentList NOT clicked", "error")
        return res;
    },

    click_deletecancel_btn: async function () {
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

    click_delete_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.delete_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " delete_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "delete_btn is NOT clicked", 'error');
        }
        return res;
    },


    getResourceIndex: async function () { //manual edit
        await logger.logInto(await stackTrace.get());
        var assignmentName = await action.findElements(this.assignmentName);
        var rIndex = [], res;
        if (assignmentName.length > 0) {
            for (var i = 0; i < assignmentName.length; i++) {
                res = await action.getAttribute(assignmentName[i], "data-tid");
                res = res.split('-');
                rIndex[i] = res[2];
            }
        }
        return rIndex;
    }
}

