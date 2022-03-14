"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');
const { confirmPassword_input } = require('./settings.page.js');

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


    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.addNew_btn),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    getData_Inbox: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            createAssignmentsbtn_inbox: (action.getElementCount(this.createAssignmentsbtn_inbox) > 0) ? action.getText(this.createAssignmentsbtn_inbox) : null,
        }
        return obj;
    },

    getData_assignmentListPage: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            blankAssignment_img: (action.getElementCount(this.blankAssignment_img) > 0) ? action.waitForDisplayed(this.blankAssignment_img) : false,
            blankAssignment_title: (action.getElementCount(this.blankAssignment_title) > 0) ? action.getText(this.blankAssignment_title) : null,
            blankAssignment_subtitle: (action.getElementCount(this.blankAssignment_subtitle) > 0) ? action.getText(this.blankAssignment_subtitle) : null,
            createAssignments_btn: (action.getElementCount(this.createAssignments_btn) > 0) ? action.getText(this.createAssignments_btn) : null,
            addNew_btn: (action.getElementCount(this.addNew_btn) > 0) ? action.getText(this.addNew_btn) : null,
            inProgress_lbl: (action.getElementCount(this.inProgress_lbl) > 0) ? action.getText(this.inProgress_lbl) : null,
            inProgress_count: (action.getElementCount(this.inProgress_count) > 0) ? action.getText(this.inProgress_count) : null,
            inProgress_arrow: (action.getElementCount(this.inProgress_arrow) > 0) ? action.waitForDisplayed(this.inProgress_arrow) : false,
            inProgress_noAssignmentTitle: (action.getElementCount(this.inProgress_noAssignmentTitle) > 0) ? action.getText(this.inProgress_noAssignmentTitle) : null,
            inProgress_noAssignmentSubTitle: (action.getElementCount(this.inProgress_noAssignmentSubTitle) > 0) ? action.getText(this.inProgress_noAssignmentSubTitle) : null,
            upcoming_lbl: (action.getElementCount(this.upcoming_lbl) > 0) ? action.getText(this.upcoming_lbl) : null,
            upcoming_count: (action.getElementCount(this.upcoming_count) > 0) ? action.getText(this.upcoming_count) : null,
            upcoming_arrow: (action.getElementCount(this.upcoming_arrow) > 0) ? action.waitForDisplayed(this.upcoming_arrow) : false,
            upcoming_noAssignmentTitle: (action.getElementCount(this.upcoming_noAssignmentTitle) > 0) ? action.getText(this.upcoming_noAssignmentTitle) : null,
            upcoming_noAssignmentSubTitle: (action.getElementCount(this.upcoming_noAssignmentSubTitle) > 0) ? action.getText(this.upcoming_noAssignmentSubTitle) : null,
            past_lbl: (action.getElementCount(this.past_lbl) > 0) ? action.getText(this.past_lbl) : null,
            past_count: (action.getElementCount(this.past_count) > 0) ? action.getText(this.past_count) : null,
            past_arrow: (action.getElementCount(this.past_arrow) > 0) ? action.waitForDisplayed(this.past_arrow) : false,
            past_noAssignmentTitle: (action.getElementCount(this.past_noAssignmentTitle) > 0) ? action.getText(this.past_noAssignmentTitle) : null,
            past_noAssignmentSubTitle: (action.getElementCount(this.past_noAssignmentSubTitle) > 0) ? action.getText(this.past_noAssignmentSubTitle) : null,
            viewAllbtn: (action.getElementCount(this.viewAllbtn) > 0) ? action.getText(this.viewAllbtn) : null,
        }
        return obj;
    },
    getData_assignmentCard: function (assignmentCardName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.assignmentName);
        var list = this.getResourceIndex();
        if (assignmentCardName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.assignmentName + list[i]) == assignmentCardName) {
                    obj[0] = {
                        assignmentCard: (action.getElementCount(this.assignmentCard + list[i]) > 0) ? action.getText(this.assignmentCard + list[i]) : null,
                        assignmentName: (action.getElementCount(this.assignmentName + list[i]) > 0) ? action.getText(this.assignmentName + list[i]) : null,
                        assignmentDueDate: (action.getElementCount(this.assignmentDueDate + list[i]) > 0) ? action.getText(this.assignmentDueDate + list[i]) : null,
                        assignmentTunedIn: (action.getElementCount(this.assignmentTunedIn + list[i]) > 0) ? action.getText(this.assignmentTunedIn + list[i]) : null,
                        assignmentScoreIcon: (action.getElementCount(this.assignmentScoreIcon + list[i]) > 0) ? action.waitForDisplayed(this.assignmentScoreIcon + list[i]) : null,
                        assignmentScore: (action.getElementCount(this.assignmentScore + list[i]) > 0) ? action.getText(this.assignmentScore + list[i]) : null,
                        assignmentMoreOption: (action.getElementCount(this.assignmentMoreOption + list[i]) > 0) ? action.getText(this.assignmentMoreOption + list[i]) : null,
                        dueDatepill: (action.getElementCount(this.dueDatepill + list[i]) > 0) ? action.getText(this.dueDatepill + list[i]) : null,
                         }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    assignmentCard: (action.getElementCount(this.assignmentCard + list[i]) > 0) ? action.getText(this.assignmentCard + list[i]) : null,
                    assignmentName: (action.getElementCount(this.assignmentName + list[i]) > 0) ? action.getText(this.assignmentName + list[i]) : null,
                    assignmentDueDate: (action.getElementCount(this.assignmentDueDate + list[i]) > 0) ? action.getText(this.assignmentDueDate + list[i]) : null,
                    assignmentTunedIn: (action.getElementCount(this.assignmentTunedIn + list[i]) > 0) ? action.getText(this.assignmentTunedIn + list[i]) : null,
                    assignmentScoreIcon: (action.getElementCount(this.assignmentScoreIcon + list[i]) > 0) ? action.waitForDisplayed(this.assignmentScoreIcon + list[i]) : null,
                    assignmentScore: (action.getElementCount(this.assignmentScore + list[i]) > 0) ? action.getText(this.assignmentScore + list[i]) : null,
                    assignmentMoreOption: (action.getElementCount(this.assignmentMoreOption + list[i]) > 0) ? action.getText(this.assignmentMoreOption + list[i]) : null,
                    dueDatepill: (action.getElementCount(this.dueDatepill + list[i]) > 0) ? action.getText(this.dueDatepill + list[i]) : null,
                    }
            }
        }
        return obj;
    },


    getData_assignmentMoreOption: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            moreOptionListHeader: (action.getElementCount(this.moreOptionListHeader) > 0) ? action.getText(this.moreOptionListHeader) : null,
            viewProgressIcon: (action.getElementCount(this.viewProgressIcon) > 0) ? action.waitForDisplayed(this.viewProgressIcon) : null,
            viewProgresslabel: (action.getElementCount(this.viewProgresslabel) > 0) ? action.getText(this.viewProgresslabel) : null,
            editAssignmentIcon: (action.getElementCount(this.editAssignmentIcon) > 0) ? action.waitForDisplayed(this.editAssignmentIcon) : null,
            editAssignmentlabel: (action.getElementCount(this.editAssignmentlabel) > 0) ? action.getText(this.editAssignmentlabel) : null,
            cloneAssignmentIcon: (action.getElementCount(this.cloneAssignmentIcon) > 0) ? action.waitForDisplayed(this.cloneAssignmentIcon) : null,
            cloneAssignmentlabel: (action.getElementCount(this.cloneAssignmentlabel) > 0) ? action.getText(this.cloneAssignmentlabel) : null,
            deleteAssignmentIcon: (action.getElementCount(this.deleteAssignmentIcon) > 0) ? action.waitForDisplayed(this.deleteAssignmentIcon) : null,
            deleteAssignmentlabel: (action.getElementCount(this.deleteAssignmentlabel) > 0) ? action.getText(this.deleteAssignmentlabel) : null,
        }
        return obj;
    },

    getData_componentList: function (componentListName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.componentList);
        var list = action.findElements(this.componentList);
        if (componentListName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.componentList + i) == componentListName) {
                    obj[0] = {
                        componentTeacherOnlyIcon: (action.getElementCount(this.componentTeacherOnlyIcon + i + "]") > 0) ? action.waitForDisplayed(this.componentTeacherOnlyIcon + i + "]") : null,
                        componentList: (action.getElementCount(this.componentList + i + "]") > 0) ? action.getText(this.componentList + i + "]") : null,
                    }
                    break;
                }
            }
            obj.componentHeader = (action.getElementCount(this.componentHeader) > 0) ? action.getText(this.componentHeader) : null
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    componentTeacherOnlyIcon: (action.getElementCount(this.componentTeacherOnlyIcon + i + "]") > 0) ? action.waitForDisplayed(this.componentTeacherOnlyIcon + i + "]") : null,
                    componentList: (action.getElementCount(this.componentList + i + "]") > 0) ? action.getText(this.componentList + i + "]") : null,
                }
            }
            obj.componentHeader = (action.getElementCount(this.componentHeader) > 0) ? action.getText(this.componentHeader) : null
        }
        return obj;
    },

    getData_deleteDialogue: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            deletedialogueHeader: (action.getElementCount(this.deletedialogueHeader) > 0) ? action.getText(this.deletedialogueHeader) : null,
            deletedialoguesubHeader1: (action.getElementCount(this.deletedialoguesubHeader1) > 0) ? action.getText(this.deletedialoguesubHeader1) : null,
            deletedialoguesubHeader2: (action.getElementCount(this.deletedialoguesubHeader2) > 0) ? action.getText(this.deletedialoguesubHeader2) : null,
            cancel_btn: (action.getElementCount(this.cancel_btn) > 0) ? action.getText(this.cancel_btn) : null,
            delete_btn: (action.getElementCount(this.delete_btn) > 0) ? action.getText(this.delete_btn) : null,
        }
        return obj;
    },


    click_createAssignmentsbtn_inbox: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.createAssignmentsbtn_inbox);
        if (true == res) {
            logger.logInto(stackTrace.get(), " createAssignmentsbtn_inbox is clicked");
            res = require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "createAssignmentsbtn_inbox is NOT clicked", 'error');
        }
        return res;
    },

    click_createAssignments_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.createAssignments_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " createAssignments_btn is clicked");
            res = this.getData_componentList();
        }
        else {
            logger.logInto(stackTrace.get(), res + "createAssignments_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_addNew_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.addNew_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addNew_btn is clicked");
            res = this.getData_componentList();
        }
        else {
            logger.logInto(stackTrace.get(), res + "addNew_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_inProgress_arrow: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.inProgress_arrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " inProgress_arrow is clicked");
            res = require('./assignmentListDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "inProgress_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_upcoming_arrow: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.upcoming_arrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " upcoming_arrow is clicked");
            res = require('./assignmentListDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "upcoming_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_past_arrow: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.past_arrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " past_arrow is clicked");
            res = require('./assignmentListDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "past_arrow is NOT clicked", 'error');
        }
        return res;
    },

    click_assignmentCard: function (assignmentNameName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.assignmentName);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(list[i])) == assignmentNameName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --assignmentCard clicked");
            res = require('./assignmentDetails.page').isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), " --assignmentCard NOT clicked", "error")
        return res;
    },

    click_assignmentMoreOption: function (assignmentNameName) {
        logger.logInto(stackTrace.get());
        var i, list, res,list1;
        list = action.findElements(this.assignmentMoreOption);
        list1 = action.findElements(this.assignmentName);
        for (i = 0; i < list.length; i++) {
           
            if ((action.getText(list1[i])) == assignmentNameName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --assignmentCard clicked");
            res = this.getData_assignmentMoreOption();
        }
        else
            logger.logInto(stackTrace.get(), " --assignmentCard NOT clicked", "error")
        return res;
    },

    click_viewProgresslabel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.viewProgresslabel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " viewProgresslabel is clicked");
            res = require('./assignmentDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "viewProgresslabel is NOT clicked", 'error');
        }
        return res;
    },

    click_editAssignmentlabel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.editAssignmentlabel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " editAssignmentlabel is clicked");
            res = require('./editAssignment.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "editAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_cloneAssignmentlabel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.cloneAssignmentlabel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " cloneAssignmentlabel is clicked");
            res = require('./cloneAssignment.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "cloneAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteAssignmentlabel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.deleteAssignmentlabel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " deleteAssignmentlabel is clicked");
            res = this.getData_deleteDialogue();
        }
        else {
            logger.logInto(stackTrace.get(), res + "deleteAssignmentlabel is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllbtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.viewAllbtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " viewAllbtn is clicked");
            res = require('./assignmentListDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "viewAllbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_componentList: function (componentListName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.componentList);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.componentList + i + "]")) == componentListName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --componentList clicked");
            res = require('./selectActivity.page').isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), " --componentList NOT clicked", "error")
        return res;
    },

    click_deletecancel_btn: function () {
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

    click_delete_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.delete_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " delete_btn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "delete_btn is NOT clicked", 'error');
        }
        return res;
    },


    getResourceIndex: function () { //manual edit
        logger.logInto(stackTrace.get());
        var assignmentName = action.findElements(this.assignmentName);
        var rIndex = [], res;
        if (assignmentName.length > 0) {
            for (var i = 0; i < assignmentName.length; i++) {
                res = action.getAttribute(assignmentName[i], "data-tid");
                res = res.split('-');
                rIndex[i] = res[2];
            }
        }
        return rIndex;
    }
}

