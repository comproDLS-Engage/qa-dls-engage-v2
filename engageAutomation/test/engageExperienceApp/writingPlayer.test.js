"use strict";
var writingPlayer = require('../../pages/engageExperienceApp/writingPlayer.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

   //Click on activity
   ENG_WRITEPLYR_TC_0: function (testdata) {
      sts = writingPlayer.click_activity()
   },

   //Validate the writing Player Page is launched
   ENG_WRITEPLYR_TC_1: function (testdata) {
      sts = writingPlayer.isInitialized()
      assertion.assertEqual(sts.pageStatus, true, "Writing Player status mismatch")
   }
}