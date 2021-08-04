"use strict";
var userOnboardingScreen = require(path.resolve(process.cwd(), 'pages/engageExperienceApp/userOnboarding.page.js'));
var loginScreen = require(path.resolve(process.cwd(), 'pages/engageExperienceApp/login.page.js'));
var sts;

module.exports = {

    //Validate that the welcome Screen appears when a new user login for onboarding
    ENG_ONBO_TC_1: function (testdata) {

        sts = loginScreen.set_UserName(testdata[0].email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginScreen.set_Password(testdata[0].password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginScreen.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");


        sts = userOnboardingScreen.isInitialized()

        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.welcome_heading, testdata[1].welcome_heading, "Welcome Screen heading Mismatch");
        assertion.assertEqual(sts.userName.trim(), testdata[0].name, "Username Mismatch");
        assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata[1].welcome_msg, "Welcome Screen Message Mismatch");
        assertion.assertEqual(sts.continuebtn, testdata[1].continuebtn, "Welcome Screen Continue button text Mismatch")
        assertion.assertEqual(sts.continuebtnIsEnabled, false, "Welcome Screen Continue button text Not Disabled")
        assertion.assertEqual(sts.rolePage_heading, testdata[1].rolePage_heading, "Welcome Screen 'Select Your Role' text Mismatch")
        assertion.assertEqual(sts.studentBtn, testdata[1].studentBtn, "Welcome Screen 'studentBtn' text Mismatch")
        assertion.assertEqual(sts.teacherBtn, testdata[1].teacherBtn, "Welcome Screen 'teacherBtn' text Mismatch")
        assertion.assertEqual(sts.signOut, testdata[1].signOut, "Welcome Screen 'Logout' text Mismatch")
        //assertion.assertEqual(sts.comproDLSFooter, testdata[1].comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that on selecting 'Student' role, user is directed to Student Options screen
    ENG_ONBO_TC_4: function (testdata) {
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

    //Validate that selecting the Class Key option , user is directed to the Class key screen
    ENG_ONBO_TC_5: function (testdata) {
        sts = userOnboardingScreen.clickCourseKeyOption();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Course Key Screen Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Course Key Screen Heading Mismatch");
        assertion.assertEqual(sts.message, testdata.message, "Course Key Screen message Mismatch");
        //assertion.assertEqual(sts.textboxMessage, testdata.textboxMessage, "Course Key Screen placeholder text Mismatch");
        assertion.assertEqual(sts.textboxValue, "", "Course Key Screen CourseKey Value Not Blank");
        assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Course Key Screen Continue Button Text Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "Course Key Screen Continue Button Not Enabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "Course Key Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Course Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the error message on entering invalid or wrong Class Key
    ENG_ONBO_TC_6: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.invalidKeyMsg();
        assertion.assertEqual(sts, testdata[0].invalidKeyMessage, "Course Key Screen Invalid Key message Mismatch");
    },

    //Validate that activation key page appears when the user enters a valid Class Key
    ENG_ONBO_TC_7: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.studentActivationCodeData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Activation Code Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading, "Activation Code Screen Sub-Heading Mismatch");
        assertion.assertEqual(sts.heading1, testdata[0].heading1, "Activation Code Screen Heading1 Mismatch");
        assertion.assertEqual(sts.accessCodeValue, "", "Activation Code Value Not Blank");
        assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Activation Code Screen Continue Button Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "Activation Code Screen Continue Button Not Enabled");
        assertion.assertEqual(sts.back_button, testdata[0].back_button, "Activation Code Screen 'back Button' text Mismatch");
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Activation Code Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the error message when the Activation key with invalid format is entered
    ENG_ONBO_TC_8: function (testdata) {
        sts = userOnboardingScreen.submitAccessCode(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.invalidActivationKeyMsg();
        assertion.assertEqual(sts, testdata[0].invalidAccessCodeMsg, "Invalid Key Message Mismatch");
    },

    //Validate the error message when already redeemed Activation key is entered
    ENG_ONBO_TC_9: function (testdata) {
        sts = userOnboardingScreen.submitAccessCode(testdata[1]);
        sts = userOnboardingScreen.invalidActivationKeyMsg();
        assertion.assertEqual(sts, testdata[0].invalidAccessCodeMsg, "Invalid Key Message Mismatch");
    },

    //Validate that the success screen appears when the user enters the correct Activation key
    ENG_ONBO_TC_10: function (testdata) {
        sts = userOnboardingScreen.submitAccessCode(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.studentSuccessOnboardingData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Student Success Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading1, testdata[0].pageSubHeading1, "Student Success Screen SubHeading1 Mismatch");
        assertion.assertEqual(sts.classDates, testdata[2].startDate + " - " + testdata[2].endDate, "Student Success Screen Class Date Range Mismatch");
        assertion.assertEqual((sts.courseName).trim(), (testdata[2].name).trim(), "Student Success Screen Class Name text Mismatch");
        assertion.assertEqual((sts.schoolName).trim(), (testdata[3].schoolName).trim(), "Student Success Screen School Name text Mismatch");
        assertion.assertEqual((sts.startLearning).trim(), (testdata[0].startLearning).trim(), "Student Success Screen Start Learning Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Success Screen Continue Btn Is Not Enabled");
        assertion.assertEqual(sts.signOut, testdata[0].signOut, "Student Success Screen 'Logout' text Mismatch")
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Student Success Screen 'comproDLSFooter' text Mismatch")

    },

    //Validate that on Clicking Continue on Success Screen the user navigates to Dashboard
    ENG_ONBO_TC_11: function (testdata) {
        sts = userOnboardingScreen.clickContinueOnStudentSuccess();
        assertion.assertEqual(sts, true);
        let dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts, true, "Student dashboard page status mismatch");
    },


    //Validate that back button (arrow) navigates to the Class Key Screen from Activation Key Screen
    ENG_ONBO_TC_13: function (testdata) {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.courseKeyData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Course Key Screen Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata[0].subHeading, "Course Key Screen Heading Mismatch");
        assertion.assertEqual(sts.message, testdata[0].message, "Course Key Screen message Mismatch");
        assertion.assertEqual(sts.textboxValue, testdata[1], "Course Key Screen CourseKey Value Mismatch");
        assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Course Key Screen Continue Button Text Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, true, "Course Key Screen Submit Button Not Enabled");
        assertion.assertEqual(sts.back_button, testdata[0].back_button, "Course Key Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Course Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that back button (arrow) navigates to Student Options Screen from the Class key screen
    ENG_ONBO_TC_14: function (testdata) {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.studentOptionsPageData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.ScreenHeading, testdata.ScreenHeading, "Student Options Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Student Options Screen subHeading Mismatch");
        assertion.assertEqual(sts.heading1, testdata.heading1, "Student Options Screen 'Teacher Led' text Mismatch");
        assertion.assertEqual(sts.option1, testdata.option1, "Student Options Screen 'Course Key button' text Mismatch");
        assertion.assertEqual(sts.option2, testdata.option2, "Student Options Screen 'invite Link button' text Mismatch");
        assertion.assertEqual(sts.heading2, testdata.heading2, "Student Options Screen 'Self Study' text Mismatch");
        assertion.assertEqual(sts.option4, testdata.option4, "Student Options Screen 'Self Learning' text Mismatch");
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Student Options Screen 'continuebtn' text Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Options Screen 'continuebtn' not Enabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "Student Options Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Student Options Screen 'comproDLSFooter' text Mismatch")
    },


    //Validate that back button (arrow) navigates to the Welcome screen from  Student Options Screen
    ENG_ONBO_TC_16: function (testdata) {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        // if (sts == true) {
        sts = userOnboardingScreen.welcomePageData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.welcome_heading, testdata.welcome_heading, "Welcome Screen heading Mismatch");
        assertion.assertEqual(sts.userName.trim(), testdata.userName, "Username Mismatch");
        assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata.welcome_msg, "Welcome Screen Message Mismatch");
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Welcome Screen Continue button text Mismatch")
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Welcome Screen Continue button text Not Enabled")
        assertion.assertEqual(sts.rolePage_heading, testdata.rolePage_heading, "Welcome Screen 'Select Your Role' text Mismatch")
        assertion.assertEqual(sts.studentBtn, testdata.studentBtn, "Welcome Screen 'studentBtn' text Mismatch")
        assertion.assertEqual(sts.teacherBtn, testdata.teacherBtn, "Welcome Screen 'teacherBtn' text Mismatch")
        assertion.assertEqual(sts.signOut, testdata.signOut, "Welcome Screen 'Logout' text Mismatch")
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that on selecting 'Teacher' role, user is directed to Teacher Options screen
    ENG_ONBO_TC_17: function (testdata) {
        sts = userOnboardingScreen.clickTeacher();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Teacher Options Screen Heading Mismatch")
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Teacher Options Screen subHeading Mismatch")
        assertion.assertEqual(sts.heading1, testdata.heading1, "Teacher Options Screen Heading1 Mismatch")
        assertion.assertEqual(sts.option1, testdata.option1, "Teacher Options Screen Option1 Mismatch")
        assertion.assertEqual(sts.option2, testdata.option2, "Teacher Options Screen Option2 Mismatch")
        assertion.assertEqual(sts.heading2, testdata.heading2, "Teacher Options Screen Heading2 Mismatch")
        assertion.assertEqual(sts.option3, testdata.option3, "Teacher Options Option3 Mismatch")
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Teacher Options Screen Continue Button Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, false, "Teacher Options Screen Continue Button Not Disabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "Teacher Options Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Teacher Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that selecting on 'Enter School Key' option Enter your school key Screen is launched.
    ENG_ONBO_TC_18: function (testdata) {
        sts = userOnboardingScreen.clickSchoolKeyOption();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "School Key Screen Heading Mismatch")
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "School Key Screen subHeading Mismatch")
        assertion.assertEqual(sts.message, testdata.message, "School Key Screen Messagee Mismatch")
        //assertion.assertEqual(sts.textboxMessage, testdata.textboxMessage, "School Key Screen TextBox Message Mismatch");
        assertion.assertEqual(sts.textboxValue, "", "School Key Screen TextBox Value Not Blank");
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "School Key Screen Continue Button Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "School Key Screen Continue Button Not Disabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "School Key Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "School Key Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate the error message appears on entering invalid or wrong school Key
    ENG_ONBO_TC_19: function (testdata) {
        sts = userOnboardingScreen.submitSchoolKey(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.invalidKeyMsg();
        assertion.assertEqual(sts, testdata[0].invalidKeyMessage, "Invalid Key Message Mismatch");
    },

    //Teacher Onboarding - Validate that Success Page appears on entering a valid School Key
    ENG_ONBO_TC_20: function (testdata) {
        sts = userOnboardingScreen.submitSchoolKey(testdata[1].validSchoolKey);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.instructorSuccessOnboardingData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Teacher Success Screen Heading Mismatch");
        assertion.assertEqual(sts.message1, testdata[0].message1, "Teacher Success Screen Message1 Mismatch");
        assertion.assertEqual(sts.schoolName, testdata[1].schoolName, "Teacher Success Screen School Name Mismatch");
        assertion.assertEqual(sts.instructorName, testdata[0].teacherTitle + ', ' + testdata[2].name, "Teacher Success Screen instructorName text Mismatch");
        assertion.assertEqual(sts.proceedBtn, testdata[0].proceedBtn, "Teacher Success Screen Proceed Button Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Teacher Success Screen Continue button not Enabled");
        assertion.assertEqual(sts.signOut, testdata[0].signOut, "Teacher Success Screen 'Logout' text Mismatch")
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Teacher Success Screen 'comproDLSFooter' text Mismatch")
    },

    //"Teacher Onboarding- Validate that on clicking Back Button on School Key Screen, the Teacher Options Screen appears
    ENG_ONBO_TC_21: function (testdata) {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.teacherOptionsPageData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Teacher Options Screen Heading Mismatch")
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Teacher Options Screen subHeading Mismatch")
        assertion.assertEqual(sts.heading1, testdata.heading1, "Teacher Options Screen Heading1 Mismatch")
        assertion.assertEqual(sts.option1, testdata.option1, "Teacher Options Screen Option1 Mismatch")
        assertion.assertEqual(sts.option2, testdata.option2, "Teacher Options Screen Option2 Mismatch")
        assertion.assertEqual(sts.heading2, testdata.heading2, "Teacher Options Screen Heading2 Mismatch")
        assertion.assertEqual(sts.option3, testdata.option3, "Teacher Options Option3 Mismatch")
        assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Teacher Options Screen Continue Button Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Teacher Options Screen Continue Button Not Enabled");
        assertion.assertEqual(sts.back_button, testdata.back_button, "Teacher Options Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Teacher Options Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding - Validate that back button (arrow) on Teacher Options Screen navigates to the Welcome screen
    ENG_ONBO_TC_23: function (testdata) {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.welcomePageData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.welcome_heading, testdata.welcome_heading, "Welcome Screen heading Mismatch");
        assertion.assertEqual(sts.userName.trim(), testdata.userName, "Username Mismatch");
        assertion.assertEqual((sts.welcome_msg).replace("\n", ""), testdata.welcome_msg, "Welcome Screen Message Mismatch");
        assertion.assertEqual(sts.continuebtn, testdata.continuebtn, "Welcome Screen Continue button text Mismatch")
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Welcome Screen Continue button text Not Enabled")
        assertion.assertEqual(sts.rolePage_heading, testdata.rolePage_heading, "Welcome Screen 'Select Your Role' text Mismatch")
        assertion.assertEqual(sts.studentBtn, testdata.studentBtn, "Welcome Screen 'studentBtn' text Mismatch")
        assertion.assertEqual(sts.teacherBtn, testdata.teacherBtn, "Welcome Screen 'teacherBtn' text Mismatch")
        assertion.assertEqual(sts.signOut, testdata.signOut, "Welcome Screen 'Logout' text Mismatch")
        assertion.assertEqual(sts.comproDLSFooter, testdata.comproDLSFooter, "Welcome Screen 'comproDLSFooter' text Mismatch")
    },

    //Teacher Onboarding -Validate that on clicking Continue button on the success screen, user navigates to My Course Dashboard
    ENG_ONBO_TC_40: function (testdata) {
        sts = userOnboardingScreen.clickContinueOnTeacherSuccess();
        assertion.assertEqual(sts, true);

        let dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
    },

    //Validate that clicking on Logout button on Welcome Screen redirects the user to landing page
    ENG_ONBO_TC_46: function () {
        sts = userOnboardingScreen.clickSignOut();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageStatus, true, "Landing Screen status mismatch - " + sts);
        assertion.assert((sts.iHaveAnAccount_btnText instanceof Error) === false, "I have an account button issue - " + sts.iHaveAnAccount_btnText);
        assertion.assert((sts.getStarted_btnText instanceof Error) === false, "Get started button issue - " + sts.getStarted_btnText);
    },

    //Validate that the Student Options Screen is launched on clicking join course button
    ENG_ONBO_TC_49: function (testdata) {
        sts = userOnboardingScreen.clickJoinCourse();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Student Options Heading Mismatch");
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

    //Validate the scenario when user tries to enroll in a new course of the existing book which he/she already has with another course
    ENG_ONBO_TC_50: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[1].key);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.studentSuccessOnboardingData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Student Success Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading1, testdata[0].pageSubHeading1, "Student Success Screen SubHeading1 Mismatch");
        assertion.assertEqual(sts.classDates, testdata[1].startDate + " - " + testdata[1].endDate, "Student Success Screen Class Date Range Mismatch");
        assertion.assertEqual((sts.courseName).trim(), (testdata[1].name).trim(), "Student Success Screen Class Name text Mismatch");
        assertion.assertEqual((sts.schoolName).trim(), (testdata[2].schoolName).trim(), "Student Success Screen School Name text Mismatch");
        assertion.assertEqual((sts.startLearning).trim(), (testdata[0].startLearning).trim(), "Student Success Screen Start Learning Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Student Success Screen Continue Btn Is Not Enabled");
        assertion.assertEqual(sts.signOut, testdata[0].signOut, "Student Success Screen 'Close' text Mismatch")
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Student Success Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate that the access code Screen appears on submitting the course key of a new/different book of which Student does not have access yet
    ENG_ONBO_TC_52: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.studentActivationCodeData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Activation Code Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading, "Screen Sub-Heading Mismatch");
        assertion.assertEqual(sts.heading1, testdata[0].heading1, "Activation Code Screen Heading1 Mismatch");
        assertion.assertEqual(sts.accessCodeValue, "", "Access Code Value Not Blank");
        assertion.assertEqual(sts.submitBtn, testdata[0].submitBtn, "Activation Code Screen Continue Button Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "Activation Code Screen Continue Button Not Enabled");
        assertion.assertEqual(sts.back_button, testdata[0].back_button, "Activation Code Screen 'back Button' text Disabled");
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Activation Code Screen 'comproDLSFooter' text Mismatch")
    },

    //Validate the scenario where user enter Class key in which student is already enrolled
    ENG_ONBO_TC_53: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[1]);
        assertion.assertEqual(sts, true);

        sts = userOnboardingScreen.enterDiffCourseKeyMsg();
        assertion.assertEqual(sts.replace("\n", " "), testdata[0].clickToExitMsg, "Course Key Screen Invalid Key message Mismatch");

        sts = userOnboardingScreen.invalidKeyMsg();
        assertion.assertEqual(sts, testdata[0].alreadyEnrolledMsg, "Course Key Screen Already Enrolled in Course message Mismatch");
    },

    //tbd-depends to Student dashboard
    //Validate the Back button functionality on Student Options Screen
    ENG_ONBO_TC_54: function () {
        sts = userOnboardingScreen.clickBack();
        assertion.assertEqual(sts, true);
        // let myCoursesScreen = require('../../Screens/engage/studentMyCourses.Screen');
        // sts = myCoursesScreen.isInitialized();
        // assertion.assertEqual(sts.header.status, true, "My Courses Screen header status mismatch ")
        // assertion.assertEqual(sts.header.filterBtn_Exists, false, "My Courses Screen header filterBtn_Exists mismatch ")
        // assertion.assertEqual(sts.status, true, "My Courses Screen status mismatch ")
        // assertion.assertEqual(sts.footer.status, true, "My Courses Screen footer status mismatch ")
    },

    //tbd-depends to Student dashboard
    //Validate the functionality of 'Click Here' button on Class Key Screen to exit the workflow when user enter the duplicate key
    ENG_ONBO_TC_60: function () {
        sts = userOnboardingScreen.clickToExit();
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
    ENG_ONBO_TC_74: function (testdata) {
        sts = userOnboardingScreen.clickClose();
        //add my courses assertions
    },

    //tbd
    //Validate the scenario when the user enters an expired/Archived Class Key
    ENG_ONBO_TC_47: function (testdata) {
        sts = userOnboardingScreen.expiredClassSuccessPageData();
    },

    //Validate that on Logout button on Success Screen ,the user logs out of the application
    ENG_ONBO_TC_25: function (testdata) {
        sts = userOnboardingScreen.clickSignOut();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageStatus, true, "Landing Screen status mismatch - " + sts);
        assertion.assert((sts.iHaveAnAccount_btnText instanceof Error) === false, "I have an account button issue - " + sts.iHaveAnAccount_btnText);
        assertion.assert((sts.getStarted_btnText instanceof Error) === false, "Get started button issue - " + sts.getStarted_btnText);
    },

    //Validate the scenario when the user enters Activation key entitled to different products than the products in the class
    ENG_ONBO_TC_44: function (testdata) {
        sts = userOnboardingScreen.submitAccessCode(testdata[1]);
        assertion.assertEqual(sts, true);
        sts = userOnboardingScreen.productMismatchPageData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].pageHeading, "Products Mismatch Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading, testdata[0].pageSubHeading1 + '"' + testdata[2].name + '" ' + testdata[0].pageSubHeading2, "Products Mismatch Screen Sub Heading Mismatch");
        assertion.assertEqual(sts.message, testdata[0].message, "Products Mismatch Screen Warning Message Mismatch");
        assertion.assertEqual(sts.courseName, testdata[2].name, "Products Mismatch Screen Class Name Mismatch");
        assertion.assertEqual(sts.classDates, testdata[2].startDate + " - " + testdata[2].endDate, "Products Mismatch Screen Class Date Range Mismatch");
        assertion.assertEqual(sts.startLearning, testdata[0].startLearning, "Products Mismatch Screen Continue Button Text Mismatch");
        assertion.assertEqual(sts.continuebtnIsEnabled, true, "Products Mismatch Screen Continue Button Not Enabled");
        assertion.assertEqual(sts.schoolName, testdata[2].schoolName, "Products Mismatch Screen School Name Mismatch");
        assertion.assertEqual(sts.signOut, testdata[0].signOut, "Products Mismatch Screen SignOut Button Text Mismatch");
        assertion.assertEqual(sts.comproDLSFooter, testdata[0].comproDLSFooter, "Products Mismatch Screen comproDLSFooter Text Mismatch");
    },

    //Validate that on selecting 'Student' role, user is directed to Class Key Screen
    ENG_ONBO_TC_75: function (testdata) {
        sts = userOnboardingScreen.clickStudent();

        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Enter Class Code Screen Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Enter Class Code Screen Sub-Heading Mismatch");
        assertion.assertEqual(sts.message, testdata.message, "Enter Class Code Text Mismatch");
        assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Enter Class Code Page -Continue Button Text Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "Enter Class Code Page -Continue Button Enabled");
        assertion.assertEqual(sts.back_button, testdata.back_btn, "Enter Class Code Page- Back Button Text Mismatch");
        assertion.assertEqual(sts.skipForNow, testdata.skipForNow, "Enter Class Code Page- Skip For Now Text Mismatch");
        assertion.assertEqual(sts.helper_txt, testdata.helper_txt, "Enter Class Code Page- Skip For Now Text Mismatch");
        
    },

    //Validate that clicking on 'Skip for Now', for role Student ,user is directed to Success Screen.
    ENG_ONBO_TC_76: function (testdata) {

        sts = userOnboardingScreen.clickSkipForNow();
        assertion.assertEqual(sts, true);

        sts = userOnboardingScreen.studentSuccessOnboardingData();
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Success Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading1, testdata.pageSubHeading1, "Success Screen Page Subheading Mismatch");
        assertion.assertEqual(sts.startLearning, testdata.startLearning, "Success Screen Page Continue Mismatch");
        assertion.assertEqual(sts.signOut, testdata.signOut, "Success Screen Page SignOut Mismatch");
        
    },

    //Validate that on submitting a valid class key, user is directed to Success Screen
    ENG_ONBO_TC_77: function (testdata) {
        sts = userOnboardingScreen.submitCourseKey(testdata[0]);
        console.log(sts);

        sts = userOnboardingScreen.studentSuccessOnboardingData();
        console.log(sts);

        
    },

    //Validate that on selecting 'Teacher' role, user is directed to School Key Screen
    ENG_ONBO_TC_78: function (testdata) {
        sts = userOnboardingScreen.clickTeacher();
        console.log(sts);

        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Join Your School Screen Heading Mismatch");
        assertion.assertEqual(sts.subHeading, testdata.subHeading, "Join Your School Screen Sub-Heading Mismatch");
        assertion.assertEqual(sts.message, testdata.message, "Join Your School Text Mismatch");
        assertion.assertEqual(sts.submitBtn, testdata.submitBtn, "Join Your School Page -Continue Button Text Mismatch");
        assertion.assertEqual(sts.submitBtnIsEnabled, false, "Join Your School -Continue Button Enabled");
        assertion.assertEqual(sts.back_button, testdata.back_btn, "Join Your School- Back Button Text Mismatch");
        assertion.assertEqual(sts.skipForNow, testdata.skipForNow, "Join Your School- Skip For Now Text Mismatch");
        assertion.assertEqual(sts.helper_txt, testdata.helper_txt, "Join Your School- Skip For Now Text Mismatch");   
        
    },

    //Validate that clicking on 'Skip for Now' , for role Teacher ,user is directed to Success Screen.
    ENG_ONBO_TC_79: function (testdata) {
       sts = userOnboardingScreen.clickSkipForNow();
       assertion.assertEqual(sts, true);

        sts = userOnboardingScreen.instructorSuccessOnboardingData();
        console.log(sts);
        assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Success Screen Heading Mismatch");
        assertion.assertEqual(sts.pageSubHeading1, testdata.pageSubHeading1, "Success Screen Page Subheading Mismatch");
        assertion.assertEqual(sts.proceedBtn, testdata.proceedBtn, "Success Screen Page Continue Mismatch");
        assertion.assertEqual(sts.signOut, testdata.signOut, "Success Screen Page SignOut Mismatch");
        
    }
};