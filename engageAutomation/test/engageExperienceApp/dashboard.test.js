"use strict";
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var browsePage = require('../../pages/engageExperienceApp/browse.page.js');
var sts;

module.exports = {

    //Validate on clicking "Interactive Activities" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_1: function () {
        sts = dashboardPage.clickResource("Interactive Activities");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Interactive Activities", "Active tab name status Mismatch");
    },

    //Validate on clicking "Videos" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_2: function () {
        sts = dashboardPage.clickResource("Videos");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Videos", "Active tab name status Mismatch");
    },

    //Validate on clicking "Online Classes" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_3: function () {
        sts = dashboardPage.clickResource("Online Classes");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Online Classes", "Active tab name status Mismatch");
    },

    //Validate on clicking "Teacher Training" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_4: function () {
        sts = dashboardPage.clickResource("Teacher Training");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Teacher Training", "Active tab name status Mismatch");
    },

    //Validate on clicking "Today in Class" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_5: function () {
        sts = dashboardPage.clickResource("Today in Class");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Today in Class", "Active tab name status Mismatch");
    },

    //Validate on clicking "Projectable" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_6: function () {
        sts = dashboardPage.clickResource("Projectable");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Projectable", "Active tab name status Mismatch");
    }
};
