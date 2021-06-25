"use strict";
let sts;
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    
    logout_from_app: function () {
        let header = require('../../pages/engageExperienceApp/header.page.js');
        sts = header.clickProfileMenuSignout();
    },

    
}