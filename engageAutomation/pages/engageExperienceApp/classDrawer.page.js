"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

    classDrawerTitle: selectorFile.css.ComproEngage.classDrawer.classDrawerTitle,
    classDrawerHeader: selectorFile.css.ComproEngage.classDrawer.classDrawerHeader,
    classDrawerSubTitle: selectorFile.css.ComproEngage.classDrawer.classDrawerSubTitle,
    classDrawerCloseBtn: selectorFile.css.ComproEngage.classDrawer.classDrawerCloseBtn,
    isInitialized: function () {
        var instructorMyClass = require('./instructorMyClass.page.js');
        var instructorMyClassData = instructorMyClass.isInitialized();
        action.scrollIntoView(this.classDrawerTitle)
        let obj = {
            classDrawerTitle: action.getElementCount(this.classDrawerTitle) > 0 ? action.getText(this.classDrawerTitle) : null,
            classDrawerHeader: action.getElementCount(this.classDrawerHeader) > 0 ? action.getText(this.classDrawerHeader) : null,
            classDrawerSubTitle: action.getElementCount(this.classDrawerSubTitle) > 0 ? action.getText(this.classDrawerSubTitle) : null,
            classDrawerCloseBtn: action.getElementCount(this.classDrawerCloseBtn) > 0 ? action.waitForExist(this.classDrawerCloseBtn) : false,
        }
        obj.instructorMyClassData = instructorMyClassData;
        return obj;
    },
  


}