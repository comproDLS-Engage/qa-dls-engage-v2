'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {
   
  
    clickProfileMenuSignout: function () {// for student and instructor
        logger.logInto(stackTrace.get());

        //tbd headerpage not implemented
        if(global.view == 'desktop')
        {
            action.click("[data-tid=button-user-profile]")
        }
        else
        {   action.waitForDisplayed("//span[text()='More']")
            action.click("//span[text()='More']")

        }
        res = action.click('//span[contains(text(),"Logout")]')

        return res;
    }

   
}