"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    folderList: selectorFile.viewLearningPathPage.folderList,
    activityList: selectorFile.viewLearningPathPage.activityList,
    addFolderBtn: selectorFile.viewLearningPathPage.addFolderBtn,
    addActivityBtn: selectorFile.viewLearningPathPage.addActivityBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    dialogContent: selectorFile.common.dialogContent,
    deleteComponentBtn: selectorFile.viewLearningPathPage.deleteComponentBtn,
    activityTypeList: selectorFile.viewLearningPathPage.activityTypeList,
    proceedBtn: selectorFile.common.proceedBtn,
    activityMenuBtn: selectorFile.viewLearningPathPage.activityMenuBtn,
    activityMenuDeleteBtn: selectorFile.viewLearningPathPage.activityMenuDeleteBtn,
    emptyStateBtn: selectorFile.common.emptyStateBtn,
    deleteItemBtn: selectorFile.viewLearningPathPage.deleteItemBtn,
    itemCheckboxes: selectorFile.viewLearningPathPage.itemCheckboxes,
    activityMenuActivityAuthorBtn: selectorFile.viewLearningPathPage.activityMenuActivityAuthorBtn,
    modifyFolderOptionsBtn: selectorFile.viewLearningPathPage.modifyFolderOptionsBtn,
    levels: selectorFile.viewLearningPathPage.levels,
    autonumbering: selectorFile.viewLearningPathPage.autonumbering,
    category: selectorFile.viewLearningPathPage.category,
    visibility: selectorFile.viewLearningPathPage.visibility,
    targetRole: selectorFile.viewLearningPathPage.targetRole,
    assignable: selectorFile.viewLearningPathPage.assignable,
    seeMoreLessBtn: selectorFile.common.seeMoreLessBtn,
    modifyCompOptionsBtn: selectorFile.viewLearningPathPage.modifyCompOptionsBtn,
    freelyAvailable: selectorFile.viewLearningPathPage.freelyAvailable,
    selectAllBtn: selectorFile.viewLearningPathPage.selectAllBtn,
    activityMenuModifyBtn: selectorFile.viewLearningPathPage.activityMenuModifyBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        let res = await action.waitForDisplayed(this.deleteComponentBtn);
        return res;
    },

    getComponentParamDetails: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.click(this.seeMoreLessBtn);
        var obj = {
            levels: ((await action.getElementCount(this.levels)) > 0) ? await action.getText(this.levels) : null,
            autonumbering: ((await action.getElementCount(this.autonumbering)) > 0) ? await action.getText(this.autonumbering) : null,
            category: ((await action.getElementCount(this.category)) > 0) ? await action.getText(this.category) : null,
            visibility: ((await action.getElementCount(this.visibility)) > 0) ? await action.getText(this.visibility) : null,
            targetRole: ((await action.getElementCount(this.targetRole)) > 0) ? await action.getText(this.targetRole) : null,
            assignable: ((await action.getElementCount(this.assignable)) > 0) ? await action.getText(this.assignable) : null,
            freelyAvailable: ((await action.getElementCount(this.freelyAvailable)) > 0) ? await action.getText(this.freelyAvailable) : null
        };
        return obj;
    },

    click_AddFolder_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (await action.isClickable(this.emptyStateBtn)) {
            res = await action.click(this.emptyStateBtn);
        }
        else {
            res = await action.click(this.addFolderBtn);
        }
        if (res == true) {
            res = await require('./addFolder.page.js').isInitialized();
            await browser.pause(3000);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_AddActivity_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (await action.isClickable(this.emptyStateBtn)) {
            res = await action.click(this.emptyStateBtn);
        }
        else {
            res = await action.click(this.addActivityBtn);
        }
        if (res == true) {
            res = await action.waitForDisplayed(this.proceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Folder: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        let i, list;
        list = await action.findElements(this.folderList);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])) == name) {
                res = await action.click(list[i]);
                if (res == true) {
                    res = await action.waitForDisplayed(this.loadingContainer, undefined, true);
                    await browser.pause(3000);
                }
                break;
            }
            res = "folder \"" + name + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Activity: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        let i, list;
        list = await action.findElements(this.activityList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list[i]);
                if (res == true) {
                    await action.waitForDisplayed(this.loadingContainer, undefined, true);
                    res = await action.waitForDisplayed("iframe[id*=iframe], iframe");
                    await browser.pause(2000)
                }
                break;
            }
            res = "activity \"" + name + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        // action.switchToFrame(0);
        return res;
    },

    select_ActivityType_and_Proceed: async function (id) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        res = await action.click("[data-tid=input-" + id);
        if (res == true) {
            res = await action.click(this.proceedBtn);
            if (res == true) {
                if (id == "category-4-option-0")
                    res = await require('./linkFromLibrary.page.js').isInitialized();
                else
                    res = await require('./addActivity.page.js').isInitialized();
                await browser.pause(3000);
            }
        }
        //res = "activity type \"" + type + "\" not found";
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DeleteComponent_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.deleteComponentBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Delete_Button_in_ActivityMenu: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        let i, list, list2;
        list = await action.findElements(this.activityList);
        list2 = await action.findElements(this.activityMenuBtn);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list2[i]);
                if (res == true) {
                    res = await action.click(this.activityMenuDeleteBtn);
                    if (res == true) {
                        await action.waitForDisplayed(this.dialogContent);
                        res = await action.getText(this.dialogContent);
                    }
                }
                break;
            }
            res = "activity \"" + name + "\" not found";
        }

        // let res = action.click(this.activityMenuBtn);
        // if (res == true) {
        //     res = action.click(this.activityMenuDeleteBtn);
        //     if (res == true) {
        //         action.waitForDisplayed(this.dialogContent);
        //         res = action.getText(this.dialogContent);
        //     }
        // }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ActivityAuthor_Button_in_ActivityMenu: async function (name) {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.activityList);
        let res = null;
        let i, list, list2;
        list = await action.findElements(this.activityList);
        list2 = await action.findElements(this.activityMenuBtn);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list2[i]);
                if (res == true) {
                    res = await action.click(this.activityMenuActivityAuthorBtn);
                    if (res == true) {
                        await browser.pause(5000);
                        await browser.switchWindow("paint.backoffice.comprodls.com");
                        // action.waitForDisplayed(this.dialogContent);
                        // res = action.getText(this.dialogContent);
                    }
                }
                break;
            }
            res = "activity \"" + name + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Modify_Button_in_ActivityMenu: async function (name) {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.activityList);
        let res = null;
        let i, list, list2;
        list = await action.findElements(this.activityList);
        list2 = await action.findElements(this.activityMenuBtn);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list2[i]);
                if (res == true) {
                    res = await action.click(this.activityMenuModifyBtn);
                    if (res == true) {
                        res = await require('./addActivity.page.js').isInitialized();
                        await browser.pause(5000);
                    }
                }
                break;
            }
            res = "activity \"" + name + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_Item_and_Click_Delete: async function (item) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        let i, list, checkboxes;
        list = await action.findElements(this.folderList);
        checkboxes = await action.findElements(this.itemCheckboxes);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])) == item) {
                res = await action.click(checkboxes[i]);
                if (res == true) {
                    res = await action.click(this.deleteItemBtn);
                    if (res == true) {
                        await action.waitForDisplayed(this.dialogContent);
                        res = await action.getText(this.dialogContent);
                    }
                }
                break;
            }
            res = "Item \"" + item + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ModifyFolderOptions_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.click(this.modifyFolderOptionsBtn);
        if (res == true) {
            res = await require('./addFolder.page.js').isInitialized();
            await browser.pause(5000);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ModifyCompOptions_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res, res2;
        res = await action.click(this.modifyCompOptionsBtn);
        res2 = await action.waitForDisplayed(this.snackbarLbl, 3000);
        if (res2 == true) {
            await browser.refresh();
            await action.waitForDisplayed(this.modifyCompOptionsBtn);
            await browser.pause(5000);
            res = await action.click(this.modifyCompOptionsBtn);
        }
        if (res == true) {
            res = await require('./addComponent.page.js').isInitialized();
            await browser.pause(5000);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_SelectAll_And_Click_Delete_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.click(this.selectAllBtn);
        if (res == true) {
            res = await action.click(this.deleteItemBtn);
            if (res == true) {
                await action.waitForDisplayed(this.dialogContent);
                res = await action.getText(this.dialogContent);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    }
}