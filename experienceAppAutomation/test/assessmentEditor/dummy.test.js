"use strict";
var userOnboardingScreen = require(path.resolve(process.cwd(),'pages/assessmentEditor/dummy.page.js'));
var sts;

module.exports = {


    //Validate that on selecting 'Student' role, user is directed to Student Options screen
    EDT_DEMO_TC_1: function(testdata) {
        sts = userOnboardingScreen.clickStudent();

        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.ScreenHeading, testdata.ScreenHeading, "Student Options Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Student Options Screen subHeading Mismatch");
        assertion.assertEqual(sts.heading1, testdata.heading1, "Student Options Screen 'Teacher Led' text Mismatch");
        assertion.assertEqual(sts.option1, testdata.option1, "Student Options Screen 'Course Key button' text Mismatch");
        assertion.assertEqual(sts.option2, testdata.option2, "Student Options Screen 'invite Link button' text Mismatch");
        assertion.assertEqual(sts.heading2, testdata.heading2, "Student Options Screen 'Self Study' text Mismatch");
        assertion.assertEqual(sts.option4, testdata.option4, "Student Options Screen 'Self Learning' text Mismatch");
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Student Options Screen 'continuebtn' text Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, false, "Student Options Screen 'continuebtn' not Disabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "Student Options Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Student Options Screen 'comproDLSFooter' text Mismatch")

    },
};