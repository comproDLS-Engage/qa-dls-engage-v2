"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

    classDrawerTitle: selectorFile.css.ComproEngage.classDrawer.classDrawerTitle,
    classDrawerHeader: selectorFile.css.ComproEngage.classDrawer.classDrawerHeader,
    classDrawerSubTitle: selectorFile.css.ComproEngage.classDrawer.classDrawerSubTitle,
    classDrawerCloseBtn: selectorFile.css.ComproEngage.classDrawer.classDrawerCloseBtn,
    isInitialized: async function () {
        var classDashboard = require('./classDashboard.page.js');
        var classDashboardData = await classDashboard.isInitialized();
        classDashboardData.pageStatus=await action.waitForDisplayed(this.classDrawerHeader)
        await action.scrollIntoView(this.classDrawerTitle)
        let obj = {
            classDrawerTitle: (await action.getElementCount(this.classDrawerTitle)) > 0 ? await action.getText(this.classDrawerTitle) : null,
            classDrawerHeader: (await action.getElementCount(this.classDrawerHeader)) > 0 ? await action.getText(this.classDrawerHeader) : null,
            classDrawerSubTitle: (await action.getElementCount(this.classDrawerSubTitle)) > 0 ? await action.getText(this.classDrawerSubTitle) : null,
            classDrawerCloseBtn: (await action.getElementCount(this.classDrawerCloseBtn)) > 0 ? await action.waitForExist(this.classDrawerCloseBtn) : false,
        }
        obj.classDashboardData = classDashboardData;
        return obj;
    },

    Click_classDrawerCloseBtn: async function () {
        res = await action.click(this.classDrawerCloseBtn);
        if (res == true) 
            await logger.logInto(await stackTrace.get(), res + "Drawer Pane button is clicked");
        else
            await logger.logInto(await stackTrace.get(), res + "Drawer Pane is NOT Clicked", "error");
        return res;
    }

    }

