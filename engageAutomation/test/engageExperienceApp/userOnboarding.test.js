"use strict";
var userOnboardingScreen = require(path.resolve(await process.cwd(), 'pages/engageExperienceApp/userOnboarding.page.js'));
var loginScreen = require(path.resolve(await process.cwd(), 'pages/engageExperienceApp/login.page.js'));
var sts;

module.exports = {

    //Validate that the welcome Screen appears when a new user login for onboarding
    ENG_ONBO_TC_1: async function (testdata) {

        sts = await loginScreen.set_UserName(testdata[0].email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginScreen.set_Password(testdata[0].password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginScreen.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");


        sts = await userOnboardingScreen.isInitialized()

        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.welcome_heading, testdata[1].welcomePage.pageHeading + testdata[0].name, "Welcome Screen heading Mismatch");
        await assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata[1].welcomePage. message, "Welcome Screen Message Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata[1].welcomePage.continueBtn, "Welcome Screen Continue button text Mismatch")
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Welcome Screen Continue button text Not Enabled")
        await assertion.assertEqual(sts.rolePage_heading, testdata[1].rolePage.pageHeading, "Welcome Screen 'Select Your Role' text Mismatch")
        await assertion.assertEqual(sts.studentBtn, testdata[1].rolePage.role1, "Welcome Screen 'studentBtn' text Mismatch")
        await assertion.assertEqual(sts.teacherBtn, testdata[1].rolePage.role2, "Welcome Screen 'teacherBtn' text Mismatch")
        await assertion.assertEqual(sts.signOut, testdata[1].welcomePage.signOut, "Welcome Screen 'Logout' text Mismatch")
        //assertion.assertEqual(sts.comproDLSFooter, testdata[1].comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that on selecting 'Student' role, user is directed to Student Options screen
    ENG_ONBO_TC_4: async function (testdata) {
        sts = await userOnboardingScreen.clickStudent();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.ScreenHeading, testdata.ScreenHeading, "Student Options Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Student Options Screen subHeading Mismatch");
        await assertion.assertEqual(sts.heading1, testdata.heading1, "Student Options Screen 'Teacher Led' text Mismatch");
        await assertion.assertEqual(sts.option1, testdata.option1, "Student Options Screen 'Course Key button' text Mismatch");
        await assertion.assertEqual(sts.option2, testdata.option2, "Student Options Screen 'invite Link button' text Mismatch");
        await assertion.assertEqual(sts.heading2, testdata.heading2, "Student Options Screen 'Self Study' text Mismatch");
        await assertion.assertEqual(sts.option4, testdata.option4, "Student Options Screen 'Self Learning' text Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Student Options Screen 'continuebtn' text Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Options Screen 'continuebtn' not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Student Options Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Student Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that selecting the Class Key option , user is directed to the Class key screen
    ENG_ONBO_TC_5: async function (testdata) {
        sts = await userOnboardingScreen.clickCourseKeyOption();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Course Key Screen Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Course Key Screen Heading Mismatch");
        await assertion.assertEqual(sts.message, testdata.message, "Course Key Screen message Mismatch");
        //assertion.assertEqual(sts.textboxMessage, testdata.textboxMessage, "Course Key Screen placeholder text Mismatch");
        await assertion.assertEqual(sts.textboxValue, "", "Course Key Screen CourseKey Value Not Blank");
        await assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Course Key Screen Continue Button Text Mismatch");
        await assertion.assertEqual(sts.submitBtnIsEnabled, false, "Course Key Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Course Key Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Course Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the error message on entering invalid or wrong Class Key
    ENG_ONBO_TC_6: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.invalidKeyMsg();
        await assertion.assertEqual(sts, testdata[0].invalidKeyMessage, "Course Key Screen Invalid Key message Mismatch");
    },

    //Validate that activation key page appears when the user enters a valid Class Key
    ENG_ONBO_TC_7: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.studentActivationCodeData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Activation Code Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading, "Activation Code Screen Sub-Heading Mismatch");
        await assertion.assertEqual(sts.heading1, testdata[0].heading1, "Activation Code Screen Heading1 Mismatch");
        await assertion.assertEqual(sts.accessCodeValue, "", "Activation Code Value Not Blank");
        await assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Activation Code Screen Continue Button Mismatch");
        await assertion.assertEqual(sts.submitBtnIsEnabled, false, "Activation Code Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata[0].back_button, "Activation Code Screen 'back Button' text Mismatch");
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Activation Code Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the error message when the Activation key with invalid format is entered
    ENG_ONBO_TC_8: async function (testdata) {
        sts = await userOnboardingScreen.submitAccessCode(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.invalidActivationKeyMsg();
        await assertion.assertEqual(sts, testdata[0].invalidAccessCodeMsg, "Invalid Key Message Mismatch");
    },

    //Validate the error message when already redeemed Activation key is entered
    ENG_ONBO_TC_9: async function (testdata) {
        sts = await userOnboardingScreen.submitAccessCode(testdata[1]);
        sts = await userOnboardingScreen.invalidActivationKeyMsg();
        await assertion.assertEqual(sts, testdata[0].invalidAccessCodeMsg, "Invalid Key Message Mismatch");
    },

    //Validate that the success screen appears when the user enters the correct Activation key
    ENG_ONBO_TC_10: async function (testdata) {
        sts = await userOnboardingScreen.submitAccessCode(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.studentSuccessOnboardingData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Student Success Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading1, testdata[0].pageSubHeading1, "Student Success Screen SubHeading1 Mismatch");
        await assertion.assertEqual(sts.classDates, testdata[2].startDate + " - " + testdata[2].endDate, "Student Success Screen Class Date Range Mismatch");
        await assertion.assertEqual((sts.courseName).trim(), (testdata[2].name).trim(), "Student Success Screen Class Name text Mismatch");
        await assertion.assertEqual((sts.schoolName).trim(), (testdata[3].schoolName).trim(), "Student Success Screen School Name text Mismatch");
        await assertion.assertEqual((sts.startLearning).trim(), (testdata[0].startLearning).trim(), "Student Success Screen Start Learning Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Success Screen Continue Btn Is Not Enabled");
        await assertion.assertEqual(sts.signOut, testdata[0].signOut, "Student Success Screen 'Logout' text Mismatch")
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Student Success Screen 'comproDLSFooter' text Mismatch")

    },

    //Validate that on Clicking Continue on Success Screen the user navigates to Dashboard
    ENG_ONBO_TC_11: async function (testdata) {
        sts = await userOnboardingScreen.clickContinueOnStudentSuccess();
        await assertion.assertEqual(sts, true);
        let dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
        sts = await dashboardPage.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "Student dashboard page status mismatch");
    },


    //Validate that back button (arrow) navigates to the Class Key Screen from Activation Key Screen
    ENG_ONBO_TC_13: async function (testdata) {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.courseKeyData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Course Key Screen Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata[0].subHeading, "Course Key Screen Heading Mismatch");
        await assertion.assertEqual(sts.message, testdata[0].message, "Course Key Screen message Mismatch");
        await assertion.assertEqual(sts.textboxValue, testdata[1], "Course Key Screen CourseKey Value Mismatch");
        await assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Course Key Screen Continue Button Text Mismatch");
        await assertion.assertEqual(sts.submitBtnIsEnabled, true, "Course Key Screen Submit Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata[0].back_button, "Course Key Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Course Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that back button (arrow) navigates to Student Options Screen from the Class key screen
    ENG_ONBO_TC_14: async function (testdata) {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.studentOptionsPageData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.ScreenHeading, testdata.ScreenHeading, "Student Options Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Student Options Screen subHeading Mismatch");
        await assertion.assertEqual(sts.heading1, testdata.heading1, "Student Options Screen 'Teacher Led' text Mismatch");
        await assertion.assertEqual(sts.option1, testdata.option1, "Student Options Screen 'Course Key button' text Mismatch");
        await assertion.assertEqual(sts.option2, testdata.option2, "Student Options Screen 'invite Link button' text Mismatch");
        await assertion.assertEqual(sts.heading2, testdata.heading2, "Student Options Screen 'Self Study' text Mismatch");
        await assertion.assertEqual(sts.option4, testdata.option4, "Student Options Screen 'Self Learning' text Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Student Options Screen 'continuebtn' text Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Options Screen 'continuebtn' not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Student Options Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Student Options Screen 'comproDLSFooter' text Mismatch")
    },


    //Validate that back button (arrow) navigates to the Welcome screen from  Student Options Screen
    ENG_ONBO_TC_16: async function (testdata) {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        // if (sts == true) {
        sts = await userOnboardingScreen.welcomePageData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.welcome_heading, testdata.welcome_heading, "Welcome Screen heading Mismatch");
        await assertion.assertEqual(sts.userName.trim(), testdata.userName, "Username Mismatch");
        await assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata.welcome_msg, "Welcome Screen Message Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Welcome Screen Continue button text Mismatch")
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Welcome Screen Continue button text Not Enabled")
        await assertion.assertEqual(sts.rolePage_heading, testdata.rolePage_heading, "Welcome Screen 'Select Your Role' text Mismatch")
        await assertion.assertEqual(sts.studentBtn, testdata.studentBtn, "Welcome Screen 'studentBtn' text Mismatch")
        await assertion.assertEqual(sts.teacherBtn, testdata.teacherBtn, "Welcome Screen 'teacherBtn' text Mismatch")
        await assertion.assertEqual(sts.signOut, testdata.signOut, "Welcome Screen 'Logout' text Mismatch")
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that on selecting 'Teacher' role, user is directed to Teacher Options screen
    ENG_ONBO_TC_17: async function (testdata) {
        sts = await userOnboardingScreen.clickTeacher();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Teacher Options Screen Heading Mismatch")
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Teacher Options Screen subHeading Mismatch")
        await assertion.assertEqual(sts.heading1, testdata.heading1, "Teacher Options Screen Heading1 Mismatch")
        await assertion.assertEqual(sts.option1, testdata.option1, "Teacher Options Screen Option1 Mismatch")
        await assertion.assertEqual(sts.option2, testdata.option2, "Teacher Options Screen Option2 Mismatch")
        await assertion.assertEqual(sts.heading2, testdata.heading2, "Teacher Options Screen Heading2 Mismatch")
        await assertion.assertEqual(sts.option3, testdata.option3, "Teacher Options Option3 Mismatch")
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Teacher Options Screen Continue Button Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Teacher Options Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Teacher Options Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Teacher Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that selecting on 'Enter School Key' option Enter your school key Screen is launched.
    ENG_ONBO_TC_18: async function (testdata) {
        sts = await userOnboardingScreen.clickSchoolKeyOption();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "School Key Screen Heading Mismatch")
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "School Key Screen subHeading Mismatch")
        await assertion.assertEqual(sts.message, testdata.message, "School Key Screen Messagee Mismatch")
        //assertion.assertEqual(sts.textboxMessage, testdata.textboxMessage, "School Key Screen TextBox Message Mismatch");
        await assertion.assertEqual(sts.textboxValue, "", "School Key Screen TextBox Value Not Blank");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "School Key Screen Continue Button Mismatch");
        await assertion.assertEqual(sts.submitBtnIsEnabled, false, "School Key Screen Continue Button Not Disabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "School Key Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "School Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate the error message appears on entering invalid or wrong school Key
    ENG_ONBO_TC_19: async function (testdata) {
        sts = await userOnboardingScreen.submitSchoolKey(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.invalidKeyMsg();
        await assertion.assertEqual(sts, testdata[0].invalidKeyMessage, "Invalid Key Message Mismatch");
    },

    //Teacher Onboarding - Validate that Success Page appears on entering a valid School Key
    ENG_ONBO_TC_20: async function (testdata) {
        sts = await userOnboardingScreen.submitSchoolKey(testdata[1].validSchoolKey);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.instructorSuccessOnboardingData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Teacher Success Screen Heading Mismatch");
        await assertion.assertEqual(sts.message1, testdata[0].message1, "Teacher Success Screen Message1 Mismatch");
        await assertion.assertEqual(sts.schoolName, testdata[1].schoolName, "Teacher Success Screen School Name Mismatch");
        await assertion.assertEqual(sts.instructorName, testdata[0].teacherTitle + ', ' + testdata[2].name, "Teacher Success Screen instructorName text Mismatch");
        await assertion.assertEqual(sts.proceedBtn, testdata[0].proceedBtn, "Teacher Success Screen Proceed Button Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Teacher Success Screen Continue button not Enabled");
        await assertion.assertEqual(sts.signOut, testdata[0].signOut, "Teacher Success Screen 'Logout' text Mismatch")
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Teacher Success Screen 'comproDLSFooter' text Mismatch")
    },

    //"Teacher Onboarding- Validate that on clicking Back Button on School Key Screen, the Teacher Options Screen appears
    ENG_ONBO_TC_21: async function (testdata) {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.teacherOptionsPageData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Teacher Options Screen Heading Mismatch")
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Teacher Options Screen subHeading Mismatch")
        await assertion.assertEqual(sts.heading1, testdata.heading1, "Teacher Options Screen Heading1 Mismatch")
        await assertion.assertEqual(sts.option1, testdata.option1, "Teacher Options Screen Option1 Mismatch")
        await assertion.assertEqual(sts.option2, testdata.option2, "Teacher Options Screen Option2 Mismatch")
        await assertion.assertEqual(sts.heading2, testdata.heading2, "Teacher Options Screen Heading2 Mismatch")
        await assertion.assertEqual(sts.option3, testdata.option3, "Teacher Options Option3 Mismatch")
        await assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Teacher Options Screen Continue Button Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Teacher Options Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Teacher Options Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Teacher Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that back button (arrow) on Teacher Options Screen navigates to the Welcome screen
    ENG_ONBO_TC_23: async function (testdata) {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.welcomePageData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.welcome_heading, testdata.welcome_heading, "Welcome Screen heading Mismatch");
        await assertion.assertEqual(sts.userName.trim(), testdata.userName, "Username Mismatch");
        await assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata.welcome_msg, "Welcome Screen Message Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Welcome Screen Continue button text Mismatch")
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Welcome Screen Continue button text Not Enabled")
        await assertion.assertEqual(sts.rolePage_heading, testdata.rolePage_heading, "Welcome Screen 'Select Your Role' text Mismatch")
        await assertion.assertEqual(sts.studentBtn, testdata.studentBtn, "Welcome Screen 'studentBtn' text Mismatch")
        await assertion.assertEqual(sts.teacherBtn, testdata.teacherBtn, "Welcome Screen 'teacherBtn' text Mismatch")
        await assertion.assertEqual(sts.signOut, testdata.signOut, "Welcome Screen 'Logout' text Mismatch")
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding -Validate that on clicking Continue button on the success screen, user navigates to My Course Dashboard
    ENG_ONBO_TC_40: async function () {
        sts = await userOnboardingScreen.clickContinueOnTeacherSuccess();
        await assertion.assertEqual(sts, true);

        let dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
        sts = await dashboardPage.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
    },

    //Validate that clicking on Logout button on Welcome Screen redirects the user to landing page
    ENG_ONBO_TC_46: async function () {
        sts = await userOnboardingScreen.clickSignOut();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageStatus, true, "Landing Screen status mismatch - " + sts);
        await assertion.assert((sts.iHaveAnAccount_btnText instanceof Error) === false, "I have an account button issue - " + sts.iHaveAnAccount_btnText);
        await assertion.assert((sts.getStarted_btnText instanceof Error) === false, "Get started button issue - " + sts.getStarted_btnText);
    },

    //Validate that the Student Options Screen is launched on clicking join course button
    ENG_ONBO_TC_49: async function (testdata) {
        sts = await userOnboardingScreen.clickJoinCourse();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Student Options Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Student Options Screen subHeading Mismatch");
        await assertion.assertEqual(sts.heading1, testdata.heading1, "Student Options Screen 'Teacher Led' text Mismatch");
        await assertion.assertEqual(sts.option1, testdata.option1, "Student Options Screen 'Course Key button' text Mismatch");
        await assertion.assertEqual(sts.option2, testdata.option2, "Student Options Screen 'invite Link button' text Mismatch");
        await assertion.assertEqual(sts.heading2, testdata.heading2, "Student Options Screen 'Self Study' text Mismatch");
        await assertion.assertEqual(sts.option4, testdata.option4, "Student Options Screen 'Self Learning' text Mismatch");
        await assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Student Options Screen 'continuebtn' text Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Options Screen 'continuebtn' not Enabled");
        await assertion.assertEqual(sts.back_button, testdata.back_button, "Student Options Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Student Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the scenario when user tries to enroll in a new course of the existing book which he/she already has with another course
    ENG_ONBO_TC_50: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[1].key);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.studentSuccessOnboardingData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Student Success Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading1, testdata[0].pageSubHeading1, "Student Success Screen SubHeading1 Mismatch");
        await assertion.assertEqual(sts.classDates, testdata[1].startDate + " - " + testdata[1].endDate, "Student Success Screen Class Date Range Mismatch");
        await assertion.assertEqual((sts.courseName).trim(), (testdata[1].name).trim(), "Student Success Screen Class Name text Mismatch");
        await assertion.assertEqual((sts.schoolName).trim(), (testdata[2].schoolName).trim(), "Student Success Screen School Name text Mismatch");
        await assertion.assertEqual((sts.startLearning).trim(), (testdata[0].startLearning).trim(), "Student Success Screen Start Learning Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Success Screen Continue Btn Is Not Enabled");
        await assertion.assertEqual(sts.signOut, testdata[0].signOut, "Student Success Screen 'Close' text Mismatch")
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Student Success Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that the access code Screen appears on submitting the course key of a new/different book of which Student does not have access yet
    ENG_ONBO_TC_52: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.studentActivationCodeData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Activation Code Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading, "Screen Sub-Heading Mismatch");
        await assertion.assertEqual(sts.heading1, testdata[0].heading1, "Activation Code Screen Heading1 Mismatch");
        await assertion.assertEqual(sts.accessCodeValue, "", "Access Code Value Not Blank");
        await assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Activation Code Screen Continue Button Mismatch");
        await assertion.assertEqual(sts.submitBtnIsEnabled, false, "Activation Code Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.back_button, testdata[0].back_button, "Activation Code Screen 'back Button' text Disabled");
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Activation Code Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the scenario where user enter Class key in which student is already enrolled
    ENG_ONBO_TC_53: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[1]);
        await assertion.assertEqual(sts, true);

        sts = await userOnboardingScreen.enterDiffCourseKeyMsg();
        await assertion.assertEqual(sts.replace("\n", " "), testdata[0].clickToExitMsg, "Course Key Screen Invalid Key message Mismatch");

        sts = await userOnboardingScreen.invalidKeyMsg();
        await assertion.assertEqual(sts, testdata[0].alreadyEnrolledMsg, "Course Key Screen Already Enrolled in Course message Mismatch");
    },

    //tbd-depends to Student dashboard
    //Validate the Back button functionality on Student Options Screen
    ENG_ONBO_TC_54: async function () {
        sts = await userOnboardingScreen.clickBack();
        await assertion.assertEqual(sts, true);
        // let myCoursesScreen = require('../../Screens/engage/studentMyCourses.Screen');
        // sts = myCoursesScreen.isInitialized();
        // assertion.assertEqual(sts.header.status, true, "My Courses Screen header status mismatch ")
        // assertion.assertEqual(sts.header.filterBtn_Exists, false, "My Courses Screen header filterBtn_Exists mismatch ")
        // assertion.assertEqual(sts.status, true, "My Courses Screen status mismatch ")
        // assertion.assertEqual(sts.footer.status, true, "My Courses Screen footer status mismatch ")
    },

    //tbd-depends to Student dashboard
    //Validate the functionality of 'Click Here' button on Class Key Screen to exit the workflow when user enter the duplicate key
    ENG_ONBO_TC_60: async function () {
        sts = await userOnboardingScreen.clickToExit();
        // if (typeof(sts) === "object") {
        //     assertion.assertEqual(sts.header.status, true, "My Courses Screen header status mismatch ")
        //     assertion.assertEqual(sts.header.filterBtn_Exists, false, "My Courses Screen header filterBtn_Exists mismatch ")
        //     assertion.assertEqual(sts.status, true, "My Courses Screen status mismatch ")
        //     assertion.assertEqual(sts.footer.status, true, "My Courses Screen footer status mismatch ")
        // } else
        //     assertion.assertFail(sts);
    },

    //tbd
    //Validate the functionality of Close button on Success Join Class Screen to navigate to My Courses Screen
    ENG_ONBO_TC_74: async function (testdata) {
        sts = await userOnboardingScreen.clickClose();
        //add my courses assertions
    },

    //tbd
    //Validate the scenario when the user enters an expired/Archived Class Key
    ENG_ONBO_TC_47: async function (testdata) {
        sts = await userOnboardingScreen.expiredClassSuccessPageData();
    },

    //Validate that on Logout button on Success Screen ,the user logs out of the application
    ENG_ONBO_TC_25: async function (testdata) {
        sts = await userOnboardingScreen.clickSignOut();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageStatus, true, "Landing Screen status mismatch - " + sts);
        await assertion.assert((sts.iHaveAnAccount_btnText instanceof Error) === false, "I have an account button issue - " + sts.iHaveAnAccount_btnText);
        await assertion.assert((sts.getStarted_btnText instanceof Error) === false, "Get started button issue - " + sts.getStarted_btnText);
    },

    //Validate the scenario when the user enters Activation key entitled to different products than the products in the class
    ENG_ONBO_TC_44: async function (testdata) {
        sts = await userOnboardingScreen.submitAccessCode(testdata[1]);
        await assertion.assertEqual(sts, true);
        sts = await userOnboardingScreen.productMismatchPageData();
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Products Mismatch Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading1 + '"' + testdata[2].name + '" ' + testdata[0].pageSubHeading2, "Products Mismatch Screen Sub Heading Mismatch");
        await assertion.assertEqual(sts.message, testdata[0].message, "Products Mismatch Screen Warning Message Mismatch");
        await assertion.assertEqual(sts.courseName, testdata[2].name, "Products Mismatch Screen Class Name Mismatch");
        await assertion.assertEqual(sts.classDates, testdata[2].startDate + " - " + testdata[2].endDate, "Products Mismatch Screen Class Date Range Mismatch");
        await assertion.assertEqual(sts.startLearning, testdata[0].startLearning, "Products Mismatch Screen Continue Button Text Mismatch");
        await assertion.assertEqual(sts.continuebtnIsEnabled, true, "Products Mismatch Screen Continue Button Not Enabled");
        await assertion.assertEqual(sts.schoolName, testdata[2].schoolName, "Products Mismatch Screen School Name Mismatch");
        await assertion.assertEqual(sts.signOut, testdata[0].signOut, "Products Mismatch Screen SignOut Button Text Mismatch");
        await assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Products Mismatch Screen comproDLSFooter Text Mismatch");
    },

    //Validate that on selecting 'Student' role, user is directed to Class Key Screen
    ENG_ONBO_TC_75: async function (testdata) {
        sts = await userOnboardingScreen.clickStudent();

        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Enter Class Code Screen Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Enter Class Code Screen Sub-Heading Mismatch");
        await assertion.assertEqual(sts.message, testdata.textboxMessage, "Enter Class Code Text Mismatch");
        await assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Enter Class Code Page -Continue Button Text Mismatch");
        await assertion.assertEqual(sts.back_button, testdata.back_btn, "Enter Class Code Page- Back Button Text Mismatch");
        await assertion.assertEqual(sts.skipForNow, testdata.skipForNow, "Enter Class Code Page- Skip For Now Text Mismatch");
        await assertion.assertEqual(sts.helper_txt, testdata.helper_txt, "Enter Class Code Page- Skip For Now Text Mismatch");
        
    },

    //Validate that clicking on 'Skip for Now', for role Student ,user is directed to Success Screen.
    ENG_ONBO_TC_76: async function (testdata) {

        sts = await userOnboardingScreen.clickSkipForNow();
        await assertion.assertEqual(sts, true);

        sts = await userOnboardingScreen.studentSuccessOnboardingData();
    
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Success Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading1, testdata.pageSubHeading1, "Success Screen Page Subheading Mismatch");
        await assertion.assertEqual(sts.startLearning, testdata.startLearning, "Success Screen Page Continue Mismatch");
        await assertion.assertEqual(sts.signOut, testdata.signOut, "Success Screen Page SignOut Mismatch");
        
    },

    //Validate that on submitting a valid class key, user is directed to Success Screen
    ENG_ONBO_TC_77: async function (testdata) {
        sts = await userOnboardingScreen.submitCourseKey(testdata[0]);
        console.log(sts);

        sts = await userOnboardingScreen.studentSuccessOnboardingData();
        console.log(sts);

        
    },

    //Validate that on selecting 'Teacher' role, user is directed to School Key Screen
    ENG_ONBO_TC_78: async function (testdata) {
        sts = await userOnboardingScreen.clickTeacher();

        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Join Your School Screen Heading Mismatch");
        await assertion.assertEqual(sts.subHeading, testdata.subHeading, "Join Your School Screen Sub-Heading Mismatch");
        await assertion.assertEqual(sts.message, testdata.message, "Join Your School Text Mismatch");
        await assertion.assertEqual(sts.helper_txt, testdata.helper_txt, "Join Your School Text Mismatch");
        await assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Join Your School Page -Continue Button Text Mismatch");
        await assertion.assertEqual(sts.back_button, testdata.back_btn, "Join Your School- Back Button Text Mismatch");
        await assertion.assertEqual(sts.skipForNow, testdata.skipForNow, "Join Your School- Skip For Now Text Mismatch"); 
        
    },

    //Validate that clicking on 'Skip for Now' , for role Teacher ,user is directed to Success Screen.
    ENG_ONBO_TC_79: async function (testdata) {
       sts = await userOnboardingScreen.clickSkipForNow();
       await assertion.assertEqual(sts, true);

        sts = await userOnboardingScreen.instructorSuccessOnboardingData();
        console.log(sts);
        console.log(testdata)
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Success Screen Heading Mismatch");
        await assertion.assertEqual(sts.pageSubHeading1, testdata.pageSubHeading1, "Success Screen Page Subheading Mismatch");
        await assertion.assertEqual(sts.proceedBtn, testdata.proceedBtn, "Success Screen Page Continue Mismatch");
        await assertion.assertEqual(sts.signOut, testdata.signOut, "Success Screen Page SignOut Mismatch");
        
    }
};