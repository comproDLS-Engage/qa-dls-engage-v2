"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    assignmentDetailPageTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.assignmentDetailPageTitle,
    assignmentDetailPageSubtitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.assignmentDetailPageSubtitle,
    dueAssignmentBtn: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.dueAssignmentBtn,
    dueAssignmentCount: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.dueAssignmentCount,
    due_noAssignmentTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.due_noAssignmentTitle,
    due_noAssignmentSubTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.due_noAssignmentSubTitle,
    upcomingAssignmentBtn: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.upcomingAssignmentBtn,
    upcoming_noAssignmentTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.upcoming_noAssignmentTitle,
    upcoming_noAssignmentSubTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.upcoming_noAssignmentSubTitle,
    completedAssignmentBtn: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completedAssignmentBtn,
    completed_noAssignmentTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completed_noAssignmentTitle,
    completed_noAssignmentSubTitle: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completed_noAssignmentSubTitle,
    completeSearchIcon: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completeSearchIcon,
    completeSearchTextBox: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completeSearchTextBox,
    completeResultLbl: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.completeResultLbl,
    assignmentName: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.assignmentName,
    activityIcon: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityIcon,
    assignmentActivityCount: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.assignmentActivityCount,
    scoreIcon: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.scoreIcon,
    scoreLabel: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.scoreLabel,
    dateIcon: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.dateIcon,
    dateLabel: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.dateLabel,
    dueDaysPill: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.dueDaysPill,
    activityProgressText: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityProgressText,
    showActivitiesBtn: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.showActivitiesBtn,
    collapsibleActvitiesLbl: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.collapsibleActvitiesLbl,
    collapsibleScoreLbl: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.collapsibleScoreLbl,
    collapsibleAttemptsLbl: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.collapsibleAttemptsLbl,
    activityName: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityName,
    activityStatus: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityStatus,
    activityScore: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityScore,
    activityAttempt: selectorFile.css.ComproEngage.AssignmentListDetailsPage_student.activityAttempt,


    isInitialized: function () { 
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus:  action.waitForDisplayed(this.assignmentDetailPageTitle),
            appShellPage:appShellPage.isInitialized()};
        return res; 
    },

    getData_assignmentListPage: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            assignmentDetailPageTitle:(action.getElementCount(this.assignmentDetailPageTitle) > 0) ? action.getText(this.assignmentDetailPageTitle) : null,
            assignmentDetailPageSubtitle:(action.getElementCount(this.assignmentDetailPageSubtitle) > 0) ? action.getText(this.assignmentDetailPageSubtitle) : null,
            dueAssignmentBtn:(action.getElementCount(this.dueAssignmentBtn) > 0) ? action.getText(this.dueAssignmentBtn) : null,
            dueAssignmentCount:(action.getElementCount(this.dueAssignmentCount) > 0) ? action.getText(this.dueAssignmentCount) : null,
            due_noAssignmentTitle:(action.getElementCount(this.due_noAssignmentTitle) > 0) ? action.getText(this.due_noAssignmentTitle) : null,
            due_noAssignmentSubTitle:(action.getElementCount(this.due_noAssignmentSubTitle) > 0) ? action.getText(this.due_noAssignmentSubTitle) : null,
            upcomingAssignmentBtn:(action.getElementCount(this.upcomingAssignmentBtn) > 0) ? action.getText(this.upcomingAssignmentBtn) : null,
            upcoming_noAssignmentTitle:(action.getElementCount(this.upcoming_noAssignmentTitle) > 0) ? action.getText(this.upcoming_noAssignmentTitle) : null,
            upcoming_noAssignmentSubTitle:(action.getElementCount(this.upcoming_noAssignmentSubTitle) > 0) ? action.getText(this.upcoming_noAssignmentSubTitle) : null,
            completedAssignmentBtn:(action.getElementCount(this.completedAssignmentBtn) > 0) ? action.getText(this.completedAssignmentBtn) : null,
            completed_noAssignmentTitle:(action.getElementCount(this.completed_noAssignmentTitle) > 0) ? action.getText(this.completed_noAssignmentTitle) : null,
            completed_noAssignmentSubTitle:(action.getElementCount(this.completed_noAssignmentSubTitle) > 0) ? action.getText(this.completed_noAssignmentSubTitle) : null,
            completeSearchIcon:(action.getElementCount(this.completeSearchIcon) > 0) ? action.waitForDisplayed(this.completeSearchIcon) : false,
            completeSearchTextBox:(action.getElementCount(this.completeSearchTextBox) > 0) ? action.getText(this.completeSearchTextBox) : null,
            completeResultLbl:(action.getElementCount(this.completeResultLbl) > 0) ? action.getText(this.completeResultLbl) : null,
        }
        return obj; 
    },

    getData_assignmentList: function (assignmentNameName) {
        logger.logInto(stackTrace.get());
        var obj=[];
        action.waitForDisplayed(this.assignmentName);
        var list = action.findElements(this.assignmentName);
        if (assignmentNameName) {
            for (var i=0;i<list.length;i++) {
                if (action.getText(this.assignmentName + i) == assignmentNameName) {
                    obj[0] = {
                        assignmentName:(action.getElementCount(this.assignmentName+i+"]")  > 0) ? action.getText(this.assignmentName+i+"]")  : null,
                        activityIcon:(action.getElementCount(this.activityIcon+i+"]") > 0) ? action.waitForDisplayed(this.activityIcon+i+"]")  : false,
                        assignmentActivityCount:(action.getElementCount(this.assignmentActivityCount+i+"]")  > 0) ? action.getText(this.assignmentActivityCount+i+"]")  : null,
                        scoreIcon:(action.getElementCount(this.scoreIcon+i+"]") > 0) ? action.waitForDisplayed(this.scoreIcon+i+"]")  : false,
                        scoreLabel:(action.getElementCount(this.scoreLabel+i+"]")  > 0) ? action.getText(this.scoreLabel+i+"]")  : null,
                        dateIcon:(action.getElementCount(this.dateIcon+i+"]") > 0) ? action.waitForDisplayed(this.dateIcon+i+"]")  : false,
                        dateLabel:(action.getElementCount(this.dateLabel+i+"]")  > 0) ? action.getText(this.dateLabel+i+"]")  : null,
                        dueDaysPill:(action.getElementCount(this.dueDaysPill+i+"]")  > 0) ? action.getText(this.dueDaysPill+i+"]")  : null,
                        activityProgressText:(action.getElementCount(this.activityProgressText+i+"]")  > 0) ? action.getText(this.activityProgressText+i+"]")  : null,
                        showActivitiesBtn:(action.getElementCount(this.showActivitiesBtn+i+"]")  > 0) ? action.getText(this.showActivitiesBtn+i+"]")  : null,
                        collapsibleActvitiesLbl:(action.getElementCount(this.collapsibleActvitiesLbl+i+"]")  > 0) ? action.getText(this.collapsibleActvitiesLbl+i+"]")  : null,
                        collapsibleScoreLbl:(action.getElementCount(this.collapsibleScoreLbl+i+"]")  > 0) ? action.getText(this.collapsibleScoreLbl+i+"]")  : null,
                        collapsibleAttemptsLbl:(action.getElementCount(this.collapsibleAttemptsLbl+i+"]")  > 0) ? action.getText(this.collapsibleAttemptsLbl+i+"]")  : null,

                    }
                break; 
                }
            } 
        }
        else {
            for (var i=0;i<list.length;i++) {
                obj[i] = {
                    assignmentName:(action.getElementCount(this.assignmentName+i+"]")  > 0) ? action.getText(this.assignmentName+i+"]")  : null,
                    activityIcon:(action.getElementCount(this.activityIcon+i+"]") > 0) ? action.waitForDisplayed(this.activityIcon+i+"]")  : false,
                    assignmentActivityCount:(action.getElementCount(this.assignmentActivityCount+i+"]")  > 0) ? action.getText(this.assignmentActivityCount+i+"]")  : null,
                    scoreIcon:(action.getElementCount(this.scoreIcon+i+"]") > 0) ? action.waitForDisplayed(this.scoreIcon+i+"]")  : false,
                    scoreLabel:(action.getElementCount(this.scoreLabel+i+"]")  > 0) ? action.getText(this.scoreLabel+i+"]")  : null,
                    dateIcon:(action.getElementCount(this.dateIcon+i+"]") > 0) ? action.waitForDisplayed(this.dateIcon+i+"]")  : false,
                    dateLabel:(action.getElementCount(this.dateLabel+i+"]")  > 0) ? action.getText(this.dateLabel+i+"]")  : null,
                    dueDaysPill:(action.getElementCount(this.dueDaysPill+i+"]")  > 0) ? action.getText(this.dueDaysPill+i+"]")  : null,
                    activityProgressText:(action.getElementCount(this.activityProgressText+i+"]")  > 0) ? action.getText(this.activityProgressText+i+"]")  : null,
                    showActivitiesBtn:(action.getElementCount(this.showActivitiesBtn+i+"]")  > 0) ? action.getText(this.showActivitiesBtn+i+"]")  : null,
                    collapsibleActvitiesLbl:(action.getElementCount(this.collapsibleActvitiesLbl+i+"]")  > 0) ? action.getText(this.collapsibleActvitiesLbl+i+"]")  : null,
                    collapsibleScoreLbl:(action.getElementCount(this.collapsibleScoreLbl+i+"]")  > 0) ? action.getText(this.collapsibleScoreLbl+i+"]")  : null,
                    collapsibleAttemptsLbl:(action.getElementCount(this.collapsibleAttemptsLbl+i+"]")  > 0) ? action.getText(this.collapsibleAttemptsLbl+i+"]")  : null,

                }
            }
        }
        return obj; 
    },

    //Click function for Due Assignment button
    click_dueAssignmentBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.dueAssignmentBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " dueAssignmentBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res +"dueAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
      
    //Click function for Upcoming Assignment button
    click_upcomingAssignmentBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.upcomingAssignmentBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " upcomingAssignmentBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res +"upcomingAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
        
    //Click function for Completed Assignment button
    click_completedAssignmentBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.completedAssignmentBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " completedAssignmentBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res +"completedAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
        
    //Click function for 'Show Acivities' button
    click_showActivitiesBtn: function (assignmentNameName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.showActivitiesBtn);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.assignmentName+i+"]"))== assignmentNameName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --showActivitiesBtn clicked");
            res = this.getData_activityList(i)
        } 
        else
            logger.logInto(stackTrace.get(), " --showActivitiesBtn NOT clicked", "error")
        return res;
    },

    //Function to get Activity List in an Assignment
    getData_activityList: function (index) {
        logger.logInto(stackTrace.get());
        var obj=[];
        browser.pause(2000);
        var list = action.findElements(this.activityName+index);
        for (var i=0; i<list.length; i++) {
            obj[i] = {
                activityName: (action.getElementCount(this.activityName+index+"-"+i+"]")  > 0) ? action.getText(this.activityName+index+"-"+i+"]")  : null,
                activityStatus: (action.getElementCount(this.activityStatus+index+"-"+i+"]")  > 0) ? action.getText(this.activityStatus+index+"-"+i+"]")  : null,
                activityScore: (action.getElementCount(this.activityScore+index+"-"+i+"]")  > 0) ? action.getText(this.activityScore+index+"-"+i+"]")  : null,
                activityAttempts: (action.getElementCount(this.activityAttempt+index+"-"+i+"]")  > 0) ? action.getText(this.activityAttempt+index+"-"+i+"]")  : null,

            }
        }
        return obj; 
    },

    //Click function for Clicking selected activity
    click_activityName: function (activityNameName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.activityName);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.activityName+i+"]"))== activityNameName) {
                res = action.click(this.activityName+i+"]");
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --activityName clicked");
            res =require ('./activityPlayer.page').isInitialized();
        } 
        else
            logger.logInto(stackTrace.get(), " --activityName NOT clicked", "error")
        return res;
    }


}

