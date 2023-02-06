"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    devMaterialTab: selectorFile.css.ComproEngage.iccAssignment.devMaterialTab,
    activitiesAndResourseHeading: selectorFile.css.ComproEngage.iccAssignment.activitiesAndResourseHeading,
    activitieslbl: selectorFile.css.ComproEngage.iccAssignment.activitieslbl,
    resourceslbl: selectorFile.css.ComproEngage.iccAssignment.resourceslbl,
    activityIIcon: selectorFile.css.ComproEngage.iccAssignment.activityIIcon,
    activityName: selectorFile.css.ComproEngage.iccAssignment.activityName,
    activityTypeIcon: selectorFile.css.ComproEngage.iccAssignment.activityTypeIcon,
    activityTypeStatus: selectorFile.css.ComproEngage.iccAssignment.activityTypeStatus,
    activityTypeName: selectorFile.css.ComproEngage.iccAssignment.activityTypeName,
    activityTypeMorebtn: selectorFile.css.ComproEngage.iccAssignment.activityTypeMorebtn,
    activityEditbtn: selectorFile.css.ComproEngage.iccAssignment.activityEditbtn,
    activityMakeRestrictedbtn: selectorFile.css.ComproEngage.iccAssignment.activityMakeRestrictedbtn,
    activityAssignbtn: selectorFile.css.ComproEngage.iccAssignment.activityAssignbtn,
    resourceIcon: selectorFile.css.ComproEngage.iccAssignment.resourceIcon,
    resourceName: selectorFile.css.ComproEngage.iccAssignment.resourceName,
    resourceTypeIcon: selectorFile.css.ComproEngage.iccAssignment.resourceTypeIcon,
    resourceTypeStatus: selectorFile.css.ComproEngage.iccAssignment.resourceTypeStatus,
    resourceTypeName: selectorFile.css.ComproEngage.iccAssignment.resourceTypeName,
    resourceTypeMorebtn: selectorFile.css.ComproEngage.iccAssignment.resourceTypeMorebtn,
    resourceEditbtn: selectorFile.css.ComproEngage.iccAssignment.resourceEditbtn,
    resourceMakeRestrictedbtn: selectorFile.css.ComproEngage.iccAssignment.resourceMakeRestrictedbtn,
    resourceAssignbtn: selectorFile.css.ComproEngage.iccAssignment.resourceAssignbtn,
    createAssignmentSelectActivityHeader: selectorFile.css.ComproEngage.iccAssignment.createAssignmentSelectActivityHeader,
    libraryIcon: selectorFile.css.ComproEngage.iccAssignment.libraryIcon,
    className: selectorFile.css.ComproEngage.iccAssignment.className,
    devMaterial: selectorFile.css.ComproEngage.iccAssignment.devMaterial,
    searchTextbox: selectorFile.css.ComproEngage.iccAssignment.searchTextbox,
    materialHeading: selectorFile.css.ComproEngage.iccAssignment.materialHeading,
    whyCantIfindmyResources: selectorFile.css.ComproEngage.iccAssignment.whyCantIfindmyResources,
    materialSubHeading: selectorFile.css.ComproEngage.iccAssignment.materialSubHeading,
    materialOptionLbl: selectorFile.css.ComproEngage.iccAssignment.materialOptionLbl,
    TypeOptionLbl: selectorFile.css.ComproEngage.iccAssignment.TypeOptionLbl,
    AddedonOptionLbl: selectorFile.css.ComproEngage.iccAssignment.AddedonOptionLbl,
    materialCheckbox: selectorFile.css.ComproEngage.iccAssignment.materialCheckbox,
    materialName: selectorFile.css.ComproEngage.iccAssignment.materialName,
    materialTypeIcon: selectorFile.css.ComproEngage.iccAssignment.materialTypeIcon,
    materialTypeName: selectorFile.css.ComproEngage.iccAssignment.materialTypeName,
    modifiedDate: selectorFile.css.ComproEngage.iccAssignment.modifiedDate,
    moreOptionbtn: selectorFile.css.ComproEngage.iccAssignment.moreOptionbtn,
    previewOptionbtn: selectorFile.css.ComproEngage.iccAssignment.previewOptionbtn,
    cancelSelectActivityPagebtn: selectorFile.css.ComproEngage.iccAssignment.cancelSelectActivityPagebtn,
    closeSelectActivityPagebtn: selectorFile.css.ComproEngage.iccAssignment.closeSelectActivityPagebtn,
    continueToDetailsbtn: selectorFile.css.ComproEngage.iccAssignment.continueToDetailsbtn,
    makeRestrictedTitle: selectorFile.css.ComproEngage.iccAssignment.makeRestrictedTitle,
    makeRestrictedSubTitle: selectorFile.css.ComproEngage.iccAssignment.makeRestrictedSubTitle,
    yesbtn: selectorFile.css.ComproEngage.iccAssignment.yesbtn,
    Npbtn: selectorFile.css.ComproEngage.iccAssignment.Npbtn,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.devMaterialTab),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_devMaterialPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDocumentLoad();
       // await action.waitForDisplayed(this.activitieslbl)
        obj = {
            activitiesAndResourseHeading: ((await action.getElementCount(this.activitiesAndResourseHeading)) > 0) ? await action.getText(this.activitiesAndResourseHeading) : null,
           // activitieslbl: ((await action.getElementCount(this.activitieslbl)) > 0) ? await action.getText(this.activitieslbl) : null,
         //   resourceslbl: ((await action.getElementCount(this.resourceslbl)) > 0) ? await action.getText(this.resourceslbl) : null,
        }
        return obj;
    },

    getData_activitiesList: async function (activityNameName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.activityName);
        var list = await action.findElements(this.activityName);
        console.log(list.length)
        if (activityNameName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.activityName + i)) == activityNameName) {
                    obj[0] = {
                        activityIIcon: ((await action.getElementCount(this.activityIIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.activityIIcon + i + "]") : false,
                        activityName: ((await action.getElementCount(this.activityName + i + "]")) > 0) ? await action.getText(this.activityName + i + "]") : null,
                        activityTypeIcon: ((await action.getElementCount(this.activityTypeIcon + i + "]>span>div>div>div>div>svg")) > 0) ? await action.waitForDisplayed(this.activityTypeIcon + i + "]>span>div>div>div>div>svg") : null,
                        activityTypeStatus: ((await action.getElementCount(this.activityTypeStatus + i + "]>span>div>div>div>div:nth-child(1)>p")) > 0) ? await action.getText(this.activityTypeStatus + i + "]>span>div>div>div>div:nth-child(1)>p") : null,
                        activityTypeName: ((await action.getElementCount(this.activityTypeName + i + "]")) > 0) ? await action.getText(this.activityTypeName + i + "]") : null,
                        activityTypeMorebtn: ((await action.getElementCount(this.activityTypeMorebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.activityTypeMorebtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                console.log(this.activityTypeStatus + i + "]span>div>div>div>div:nth-child(1)>p")
                obj[i] = {
                 
                    activityIIcon: ((await action.getElementCount(this.activityIIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.activityIIcon + i + "]") : false,
                    activityName: ((await action.getElementCount(this.activityName + i + "]")) > 0) ? await action.getText(this.activityName + i + "]") : null,
                    activityTypeIcon: ((await action.getElementCount(this.activityTypeIcon + i + "]>span>div>div>div>div>svg")) > 0) ? await action.waitForDisplayed(this.activityTypeIcon + i + "]>span>div>div>div>div>svg") : null,
                    activityTypeStatus: ((await action.getElementCount(this.activityTypeStatus + i + "]>span>div>div>div>div:nth-child(1)>p")) > 0) ? await action.getText(this.activityTypeStatus + i + "]>span>div>div>div>div:nth-child(1)>p") : null,
                    activityTypeName: ((await action.getElementCount(this.activityTypeName + i + "]")) > 0) ? await action.getText(this.activityTypeName + i + "]") : null,
                    activityTypeMorebtn: ((await action.getElementCount(this.activityTypeMorebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.activityTypeMorebtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_activityMoreOptionList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            activityEditbtn: ((await action.getElementCount(this.activityEditbtn)) > 0) ? await action.getText(this.activityEditbtn) : null,
            activityMakeRestrictedbtn: ((await action.getElementCount(this.activityMakeRestrictedbtn)) > 0) ? await action.getText(this.activityMakeRestrictedbtn) : null,
            activityAssignbtn: ((await action.getElementCount(this.activityAssignbtn)) > 0) ? await action.getText(this.activityAssignbtn) : null,
        }
        return obj;
    },

    getData_resourcesList: async function (resourceNameName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.resourceName);
        var list = await action.findElements(this.resourceName);
        if (resourceNameName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.resourceName + i)) == resourceNameName) {
                    obj[0] = {
                        resourceIcon: ((await action.getElementCount(this.resourceIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.resourceIcon + i + "]") : false,
                        resourceName: ((await action.getElementCount(this.resourceName + i + "]")) > 0) ? await action.getText(this.resourceName + i + "]") : null,
                        resourceTypeIcon: ((await action.getElementCount(this.resourceTypeIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.resourceTypeIcon + i + "]") : null,
                        resourceTypeStatus: ((await action.getElementCount(this.resourceTypeStatus + i + "]")) > 0) ? await action.getText(this.resourceTypeStatus + i + "]") : null,
                        resourceTypeName: ((await action.getElementCount(this.resourceTypeName + i + "]")) > 0) ? await action.getText(this.resourceTypeName + i + "]") : null,
                        resourceTypeMorebtn: ((await action.getElementCount(this.resourceTypeMorebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.resourceTypeMorebtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    resourceIcon: ((await action.getElementCount(this.resourceIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.resourceIcon + i + "]") : false,
                    resourceName: ((await action.getElementCount(this.resourceName + i + "]")) > 0) ? await action.getText(this.resourceName + i + "]") : null,
                    resourceTypeIcon: ((await action.getElementCount(this.resourceTypeIcon + i + "]")) > 0) ? await action.getText(this.resourceTypeIcon + i + "]") : null,
                    resourceTypeStatus: ((await action.getElementCount(this.resourceTypeStatus + i + "]")) > 0) ? await action.getText(this.resourceTypeStatus + i + "]") : null,
                    resourceTypeName: ((await action.getElementCount(this.resourceTypeName + i + "]")) > 0) ? await action.getText(this.resourceTypeName + i + "]") : null,
                    resourceTypeMorebtn: ((await action.getElementCount(this.resourceTypeMorebtn + i + "]")) > 0) ? await action.getText(this.resourceTypeMorebtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_resourceMoreOptionList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            resourceEditbtn: ((await action.getElementCount(this.resourceEditbtn)) > 0) ? await action.getText(this.resourceEditbtn) : null,
            resourceMakeRestrictedbtn: ((await action.getElementCount(this.resourceMakeRestrictedbtn)) > 0) ? await action.getText(this.resourceMakeRestrictedbtn) : null,
            resourceAssignbtn: ((await action.getElementCount(this.resourceAssignbtn)) > 0) ? await action.getText(this.resourceAssignbtn) : null,
        }
        return obj;
    },

    getData_selectActivityPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            createAssignmentSelectActivityHeader: ((await action.getElementCount(this.createAssignmentSelectActivityHeader)) > 0) ? await action.getText(this.createAssignmentSelectActivityHeader) : null,
            libraryIcon: ((await action.getElementCount(this.libraryIcon)) > 0) ? await action.waitForDisplayed(this.libraryIcon) : false,
            className: ((await action.getElementCount(this.className)) > 0) ? await action.getText(this.className) : null,
            devMaterial: ((await action.getElementCount(this.devMaterial)) > 0) ? await action.getText(this.devMaterial) : null,
            searchTextbox: ((await action.getElementCount(this.searchTextbox)) > 0) ? await action.getText(this.searchTextbox) : null,
            materialHeading: ((await action.getElementCount(this.materialHeading)) > 0) ? await action.getText(this.materialHeading) : null,
            whyCantIfindmyResources: ((await action.getElementCount(this.whyCantIfindmyResources)) > 0) ? await action.getText(this.whyCantIfindmyResources) : null,
            materialSubHeading: ((await action.getElementCount(this.materialSubHeading)) > 0) ? await action.getText(this.materialSubHeading) : null,
            materialOptionLbl: ((await action.getElementCount(this.materialOptionLbl)) > 0) ? await action.getText(this.materialOptionLbl) : null,
            TypeOptionLbl: ((await action.getElementCount(this.TypeOptionLbl)) > 0) ? await action.getText(this.TypeOptionLbl) : null,
            AddedonOptionLbl: ((await action.getElementCount(this.AddedonOptionLbl)) > 0) ? await action.getText(this.AddedonOptionLbl) : null,
            cancelSelectActivityPagebtn: ((await action.getElementCount(this.cancelSelectActivityPagebtn)) > 0) ? await action.getText(this.cancelSelectActivityPagebtn) : null,
            closeSelectActivityPagebtn: ((await action.getElementCount(this.closeSelectActivityPagebtn)) > 0) ? await action.getText(this.closeSelectActivityPagebtn) : null,
            continueToDetailsbtn: ((await action.getElementCount(this.continueToDetailsbtn)) > 0) ? await action.getText(this.continueToDetailsbtn) : null,
        }
        return obj;
    },

    getData_materialList: async function (materialNameName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.materialName);
        var list = await action.findElements(this.materialName);
        if (materialNameName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.materialName + i)) == materialNameName) {
                    obj[0] = {
                        materialCheckbox: ((await action.getElementCount(this.materialCheckbox + i + "]")) > 0) ? await action.getText(this.materialCheckbox + i + "]") : null,
                        materialName: ((await action.getElementCount(this.materialName + i + "]")) > 0) ? await action.getText(this.materialName + i + "]") : null,
                        materialTypeIcon: ((await action.getElementCount(this.materialTypeIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.materialTypeIcon + i + "]") : false,
                        materialTypeName: ((await action.getElementCount(this.materialTypeName + i + "]")) > 0) ? await action.getText(this.materialTypeName + i + "]") : null,
                        modifiedDate: ((await action.getElementCount(this.modifiedDate + i + "]")) > 0) ? await action.getText(this.modifiedDate + i + "]") : null,
                    }
                    break;
                }
            }
            obj.moreOptionbtn = ((await action.getElementCount(this.moreOptionbtn)) > 0) ? await action.getText(this.moreOptionbtn) : null
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    materialCheckbox: ((await action.getElementCount(this.materialCheckbox + i + "]")) > 0) ? await action.getText(this.materialCheckbox + i + "]") : null,
                    materialName: ((await action.getElementCount(this.materialName + i + "]")) > 0) ? await action.getText(this.materialName + i + "]") : null,
                    materialTypeIcon: ((await action.getElementCount(this.materialTypeIcon + i + "]")) > 0) ? await action.waitForDisplayed(this.materialTypeIcon + i + "]") : false,
                    materialTypeName: ((await action.getElementCount(this.materialTypeName + i + "]")) > 0) ? await action.getText(this.materialTypeName + i + "]") : null,
                    modifiedDate: ((await action.getElementCount(this.modifiedDate + i + "]")) > 0) ? await action.getText(this.modifiedDate + i + "]") : null,
                }
            }
            obj.moreOptionbtn = ((await action.getElementCount(this.moreOptionbtn)) > 0) ? await action.getText(this.moreOptionbtn) : null
        }
        return obj;
    },

    getData_materialMoreOptionList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            previewOptionbtn: ((await action.getElementCount(this.previewOptionbtn)) > 0) ? await action.getText(this.previewOptionbtn) : null,
        }
        return obj;
    },


    click_devMaterialTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.devMaterialTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " devMaterialTab is clicked");
            res = await this.getData_devMaterialPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "devMaterialTab is NOT clicked", 'error');
        }
        return res;
    },

    click_activityName: async function (activityNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.activityName);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.activityName + i + "]"))) == activityNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --activityName clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --activityName NOT clicked", "error")
        return res;
    },

    click_activityTypeMorebtn: async function (activityNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        await action.waitForDisplayed(this.activityTypeMorebtn)
        list = await action.findElements(this.activityTypeMorebtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.activityName + i + "]"))) == activityNameName) {
                res = await action.click(list[i]);
                res = await this.getData_activityMoreOptionList()
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --activityTypeMorebtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --activityTypeMorebtn NOT clicked", "error")
        return res;
    },

    click_activityEditbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.activityEditbtn);
        if (true == res) {
            res = await require('./libraryEditor.page').getData_editMaterial_Modal();
            await logger.logInto(await stackTrace.get(), " activityEditbtn is clicked");

        }
        else {
            await logger.logInto(await stackTrace.get(), res + "activityEditbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_activityMakeRestrictedbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.activityMakeRestrictedbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " activityMakeRestrictedbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "activityMakeRestrictedbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_activityAssignbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.activityAssignbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " activityAssignbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "activityAssignbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_resourceName: async function (resourceNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.resourceName);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.resourceName + i + "]"))) == resourceNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --resourceName clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --resourceName NOT clicked", "error")
        return res;
    },

    click_resourceTypeMorebtn: async function (resourceNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.resourceTypeMorebtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.resourceName + i + "]"))) == resourceNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --resourceTypeMorebtn clicked");
            res = await this.getData_resourceMoreOptionList();
        }
        else
            await logger.logInto(await stackTrace.get(), " --resourceTypeMorebtn NOT clicked", "error")
        return res;
    },

    click_resourceEditbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.resourceEditbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " resourceEditbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "resourceEditbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_resourceMakeRestrictedbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.resourceMakeRestrictedbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " resourceMakeRestrictedbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "resourceMakeRestrictedbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_resourceAssignbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.resourceAssignbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " resourceAssignbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "resourceAssignbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_whyCantIfindmyResources: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.whyCantIfindmyResources);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " whyCan'tIfindmyResources is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "whyCan'tIfindmyResources is NOT clicked", 'error');
        }
        return res;
    },

    click_materialOptionLbl: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialOptionLbl);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialOptionLbl is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialOptionLbl is NOT clicked", 'error');
        }
        return res;
    },

    click_TypeOptionLbl: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.TypeOptionLbl);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " TypeOptionLbl is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "TypeOptionLbl is NOT clicked", 'error');
        }
        return res;
    },

    click_AddedonOptionLbl: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.AddedonOptionLbl);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " AddedonOptionLbl is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "AddedonOptionLbl is NOT clicked", 'error');
        }
        return res;
    },

    click_materialCheckbox: async function (materialNameName) {
        console.log(materialNameName)
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        await action.waitForDisplayed(this.materialCheckbox)
        list = await action.findElements(this.materialCheckbox);
        console.log(materialNameName)

        for (i = 0; i < list.length; i++) {
            console.log(this.materialName + materialNameName + "]")
            if (((await action.getText(this.materialName + materialNameName + "\"]"))) == materialNameName) {
                res = await action.click(this.materialName + materialNameName + "\"]");
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --materialCheckbox clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --materialCheckbox NOT clicked", "error")
        return res;
    },

    click_moreOptionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.moreOptionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " moreOptionbtn is clicked");
            res = await this.getData_materialMoreOptionList();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "moreOptionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_previewOptionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previewOptionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " previewOptionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previewOptionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancelSelectActivityPagebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelSelectActivityPagebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelSelectActivityPagebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelSelectActivityPagebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closeSelectActivityPagebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeSelectActivityPagebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeSelectActivityPagebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeSelectActivityPagebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_continueToDetailsbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.continueToDetailsbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " continueToDetailsbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "continueToDetailsbtn is NOT clicked", 'error');
        }
        return res;
    },

    set_searchTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.searchTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in searchTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in searchTextbox", 'error');
        }
        return res;
    },
    getData_restrictedGroup: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            makeRestrictedTitle: ((await action.getElementCount(this.makeRestrictedTitle)) > 0) ? await action.getText(this.makeRestrictedTitle) : null,
            makeRestrictedSubTitle: ((await action.getElementCount(this.makeRestrictedSubTitle)) > 0) ? await action.getText(this.makeRestrictedSubTitle) : null,
            yesbtn: ((await action.getElementCount(this.yesbtn)) > 0) ? await action.getText(this.yesbtn) : null,
            Npbtn: ((await action.getElementCount(this.Npbtn)) > 0) ? await action.getText(this.Npbtn) : null,
        }
        return obj;
    },


    click_yesbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.yesbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " yesbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "yesbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_Npbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.Npbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Npbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "Npbtn is NOT clicked", 'error');
        }
        return res;
    }
}

