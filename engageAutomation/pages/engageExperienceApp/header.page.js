'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {
   
  
    clickProfileMenuSignout: async function () {// for student and instructor
        await logger.logInto(await stackTrace.get());

        //tbd headerpage not implemented
        if(global.view == 'desktop')
        {
            await action.click("[data-tid=button-user-profile]")
        }
        else
        {   await action.waitForDisplayed("//span[text()='More']")
            await action.click("//span[text()='More']")

        }
        res = await action.click('//span[contains(text(),"Logout")]')

        return res;
    }

   
}