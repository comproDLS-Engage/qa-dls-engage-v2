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


    isInitialized: async function () { 
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus:  await action.waitForDisplayed(this.assignmentDetailPageTitle),
            appShellPage:await appShellPage.isInitialized()};
        return res; 
    },

    getData_assignmentListPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            assignmentDetailPageTitle:((await action.getElementCount(this.assignmentDetailPageTitle)) > 0) ? await action.getText(this.assignmentDetailPageTitle) : null,
            assignmentDetailPageSubtitle:((await action.getElementCount(this.assignmentDetailPageSubtitle)) > 0) ? await action.getText(this.assignmentDetailPageSubtitle) : null,
            dueAssignmentBtn:((await action.getElementCount(this.dueAssignmentBtn)) > 0) ? await action.getText(this.dueAssignmentBtn) : null,
            dueAssignmentCount:((await action.getElementCount(this.dueAssignmentCount)) > 0) ? await action.getText(this.dueAssignmentCount) : null,
            due_noAssignmentTitle:((await action.getElementCount(this.due_noAssignmentTitle)) > 0) ? await action.getText(this.due_noAssignmentTitle) : null,
            due_noAssignmentSubTitle:((await action.getElementCount(this.due_noAssignmentSubTitle)) > 0) ? await action.getText(this.due_noAssignmentSubTitle) : null,
            upcomingAssignmentBtn:((await action.getElementCount(this.upcomingAssignmentBtn)) > 0) ? await action.getText(this.upcomingAssignmentBtn) : null,
            upcoming_noAssignmentTitle:((await action.getElementCount(this.upcoming_noAssignmentTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentTitle) : null,
            upcoming_noAssignmentSubTitle:((await action.getElementCount(this.upcoming_noAssignmentSubTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentSubTitle) : null,
            completedAssignmentBtn:((await action.getElementCount(this.completedAssignmentBtn)) > 0) ? await action.getText(this.completedAssignmentBtn) : null,
            completed_noAssignmentTitle:((await action.getElementCount(this.completed_noAssignmentTitle)) > 0) ? await action.getText(this.completed_noAssignmentTitle) : null,
            completed_noAssignmentSubTitle:((await action.getElementCount(this.completed_noAssignmentSubTitle)) > 0) ? await action.getText(this.completed_noAssignmentSubTitle) : null,
            completeSearchIcon:((await action.getElementCount(this.completeSearchIcon)) > 0) ? await action.waitForDisplayed(this.completeSearchIcon) : false,
            completeSearchTextBox:((await action.getElementCount(this.completeSearchTextBox)) > 0) ? await action.getText(this.completeSearchTextBox) : null,
            completeResultLbl:((await action.getElementCount(this.completeResultLbl)) > 0) ? await action.getText(this.completeResultLbl) : null,
        }
        return obj; 
    },

    getData_assignmentList: async function (assignmentNameName) {
        await logger.logInto(await stackTrace.get());
        var obj=[];
        await action.waitForDisplayed(this.assignmentName);
        var list = await action.findElements(this.assignmentName);
        if (assignmentNameName) {
            for (var i=0;i<list.length;i++) {
                if ((await action.getText(this.assignmentName + i)) == assignmentNameName) {
                    obj[0] = {
                        assignmentName:((await action.getElementCount(this.assignmentName+i+"]"))  > 0) ? await action.getText(this.assignmentName+i+"]")  : null,
                        activityIcon:((await action.getElementCount(this.activityIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.activityIcon+i+"]")  : false,
                        assignmentActivityCount:((await action.getElementCount(this.assignmentActivityCount+i+"]"))  > 0) ? await action.getText(this.assignmentActivityCount+i+"]")  : null,
                        scoreIcon:((await action.getElementCount(this.scoreIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.scoreIcon+i+"]")  : false,
                        scoreLabel:((await action.getElementCount(this.scoreLabel+i+"]"))  > 0) ? await action.getText(this.scoreLabel+i+"]")  : null,
                        dateIcon:((await action.getElementCount(this.dateIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.dateIcon+i+"]")  : false,
                        dateLabel:((await action.getElementCount(this.dateLabel+i+"]"))  > 0) ? await action.getText(this.dateLabel+i+"]")  : null,
                        dueDaysPill:((await action.getElementCount(this.dueDaysPill+i+"]"))  > 0) ? await action.getText(this.dueDaysPill+i+"]")  : null,
                        activityProgressText:((await action.getElementCount(this.activityProgressText+i+"]"))  > 0) ? await action.getText(this.activityProgressText+i+"]")  : null,
                        showActivitiesBtn:((await action.getElementCount(this.showActivitiesBtn+i+"]"))  > 0) ? await action.getText(this.showActivitiesBtn+i+"]")  : null,
                        collapsibleActvitiesLbl:((await action.getElementCount(this.collapsibleActvitiesLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleActvitiesLbl+i+"]")  : null,
                        collapsibleScoreLbl:((await action.getElementCount(this.collapsibleScoreLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleScoreLbl+i+"]")  : null,
                        collapsibleAttemptsLbl:((await action.getElementCount(this.collapsibleAttemptsLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleAttemptsLbl+i+"]")  : null,

                    }
                break; 
                }
            } 
        }
        else {
            for (var i=0;i<list.length;i++) {
                obj[i] = {
                    assignmentName:((await action.getElementCount(this.assignmentName+i+"]"))  > 0) ? await action.getText(this.assignmentName+i+"]")  : null,
                    activityIcon:((await action.getElementCount(this.activityIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.activityIcon+i+"]")  : false,
                    assignmentActivityCount:((await action.getElementCount(this.assignmentActivityCount+i+"]"))  > 0) ? await action.getText(this.assignmentActivityCount+i+"]")  : null,
                    scoreIcon:((await action.getElementCount(this.scoreIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.scoreIcon+i+"]")  : false,
                    scoreLabel:((await action.getElementCount(this.scoreLabel+i+"]"))  > 0) ? await action.getText(this.scoreLabel+i+"]")  : null,
                    dateIcon:((await action.getElementCount(this.dateIcon+i+"]")) > 0) ? await action.waitForDisplayed(this.dateIcon+i+"]")  : false,
                    dateLabel:((await action.getElementCount(this.dateLabel+i+"]"))  > 0) ? await action.getText(this.dateLabel+i+"]")  : null,
                    dueDaysPill:((await action.getElementCount(this.dueDaysPill+i+"]"))  > 0) ? await action.getText(this.dueDaysPill+i+"]")  : null,
                    activityProgressText:((await action.getElementCount(this.activityProgressText+i+"]"))  > 0) ? await action.getText(this.activityProgressText+i+"]")  : null,
                    showActivitiesBtn:((await action.getElementCount(this.showActivitiesBtn+i+"]"))  > 0) ? await action.getText(this.showActivitiesBtn+i+"]")  : null,
                    collapsibleActvitiesLbl:((await action.getElementCount(this.collapsibleActvitiesLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleActvitiesLbl+i+"]")  : null,
                    collapsibleScoreLbl:((await action.getElementCount(this.collapsibleScoreLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleScoreLbl+i+"]")  : null,
                    collapsibleAttemptsLbl:((await action.getElementCount(this.collapsibleAttemptsLbl+i+"]"))  > 0) ? await action.getText(this.collapsibleAttemptsLbl+i+"]")  : null,

                }
            }
        }
        return obj; 
    },

    //Click function for Due Assignment button
    click_dueAssignmentBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.dueAssignmentBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dueAssignmentBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"dueAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
      
    //Click function for Upcoming Assignment button
    click_upcomingAssignmentBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.upcomingAssignmentBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " upcomingAssignmentBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"upcomingAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
        
    //Click function for Completed Assignment button
    click_completedAssignmentBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.completedAssignmentBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " completedAssignmentBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"completedAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },
        
    //Click function for 'Show Acivities' button
    click_showActivitiesBtn: async function (assignmentNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.showActivitiesBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.assignmentName+i+"]")))== assignmentNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --showActivitiesBtn clicked");
            res = await this.getData_activityList(i)
        } 
        else
            await logger.logInto(await stackTrace.get(), " --showActivitiesBtn NOT clicked", "error")
        return res;
    },

    //Function to get Activity List in an Assignment
    getData_activityList: async function (index) {
        await logger.logInto(await stackTrace.get());
        var obj=[];
        await browser.pause(2000);
        var list = await action.findElements(this.activityName+index);
        for (var i=0; i<list.length; i++) {
            obj[i] = {
                activityName: ((await action.getElementCount(this.activityName+index+"-"+i+"]"))  > 0) ? await action.getText(this.activityName+index+"-"+i+"]")  : null,
                activityStatus: ((await action.getElementCount(this.activityStatus+index+"-"+i+"]"))  > 0) ? await action.getText(this.activityStatus+index+"-"+i+"]")  : null,
                activityScore: ((await action.getElementCount(this.activityScore+index+"-"+i+"]"))  > 0) ? await action.getText(this.activityScore+index+"-"+i+"]")  : null,
                activityAttempts: ((await action.getElementCount(this.activityAttempt+index+"-"+i+"]"))  > 0) ? await action.getText(this.activityAttempt+index+"-"+i+"]")  : null,

            }
        }
        return obj; 
    },

    //Click function for Clicking selected activity
    click_activityName: async function (activityNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.activityName);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.activityName+i+"]")))== activityNameName) {
                res = await action.click(this.activityName+i+"]");
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --activityName clicked");
            res =await require ('./activityPlayer.page').isInitialized();
        } 
        else
            await logger.logInto(await stackTrace.get(), " --activityName NOT clicked", "error")
        return res;
    }


}

