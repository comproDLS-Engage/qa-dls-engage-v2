var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;
module.exports = {

    logo: selectorFile.css.ComproEngage.OnboardingUser.logo,
    logout: selectorFile.css.ComproEngage.OnboardingUser.logout,
    back_button: selectorFile.css.ComproEngage.OnboardingUser.back_button,
    invalidKey_txt: selectorFile.css.ComproEngage.OnboardingUser.invalidKey_txt,
    Welcome_txt: selectorFile.css.ComproEngage.OnboardingUser.Welcome_txt,
    Onboardingmsg_txt: selectorFile.css.ComproEngage.OnboardingUser.Onboardingmsg_txt,
    Continue_btn: selectorFile.css.ComproEngage.OnboardingUser.Continue_btn,
    role_txt: selectorFile.css.ComproEngage.OnboardingUser.role_txt,
    student_btn: selectorFile.css.ComproEngage.OnboardingUser.student_btn,
    teacher_btn: selectorFile.css.ComproEngage.OnboardingUser.teacher_btn,
    comproDLSFooter: selectorFile.css.ComproEngage.OnboardingUser.comproDLSFooter,
    skipForNow_btn : selectorFile.css.ComproEngage.OnboardingUser.skipForNow_btn,
    helper_txt: selectorFile.css.ComproEngage.OnboardingUser.helper_txt,
    //student level,
    accessClass_txt: selectorFile.css.ComproEngage.OnboardingUser.accessClass_txt,
    accessClass_SelectOption_txt: selectorFile.css.ComproEngage.OnboardingUser.accessClass_SelectOption_txt,
    instructorLed_txt: selectorFile.css.ComproEngage.OnboardingUser.instructorLed_txt,
    courseKey_btn: selectorFile.css.ComproEngage.OnboardingUser.courseKey_btn,
    inviteLink_btn: selectorFile.css.ComproEngage.OnboardingUser.inviteLink_btn,
    selfStudy_txt: selectorFile.css.ComproEngage.OnboardingUser.selfStudy_txt,
    selfLearning_btn: selectorFile.css.ComproEngage.OnboardingUser.selfLearning_btn,
    enterClassKey_Heading_txt: selectorFile.css.ComproEngage.OnboardingUser.enterClassKey_Heading_txt,
    enterClassKey_subHeading_txt: selectorFile.css.ComproEngage.OnboardingUser.enterClassKey_subHeading_txt,
    enterClassKey_txt: selectorFile.css.ComproEngage.OnboardingUser.enterClassKey_txt,
    classKey_textBox: selectorFile.css.ComproEngage.OnboardingUser.classKey_textBox,
    activateClass_txt: selectorFile.css.ComproEngage.OnboardingUser.activateClass_txt,
    activateClass_subHeading_txt: selectorFile.css.ComproEngage.OnboardingUser.activateClass_subHeading_txt,
    enterActivationKey_txt: selectorFile.css.ComproEngage.OnboardingUser.enterActivationKey_txt,
    accessCode_textBox: selectorFile.css.ComproEngage.OnboardingUser.accessCode_textBox,
    invalidAccessCode: selectorFile.css.ComproEngage.OnboardingUser.invalidAccessCode,
    activateClass_btn: selectorFile.css.ComproEngage.OnboardingUser.activateClass_btn,
    success_Heading_txt: selectorFile.css.ComproEngage.OnboardingUser.success_Heading_txt,
    studentSuccess_pageSubHeading1: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_pageSubHeading1,
    studentSuccess_Class_txt: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_Class_txt,
    studentSuccess_schoolName_txt: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_schoolName_txt,
    studentSuccess_ClassDates_txt: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_ClassDates_txt,
    studentSuccess_classExpired: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_classExpired,
    studentSuccess_productMismatch: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_productMismatch,
    studentSuccess_productMismatch_msg: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_productMismatch_msg,
    studentSuccess_proceedToClass_btn: selectorFile.css.ComproEngage.OnboardingUser.studentSuccess_proceedToClass_btn,
    //teacher level,
    startTeaching_txt: selectorFile.css.ComproEngage.OnboardingUser.startTeaching_txt,
    startTeaching_selectOption_txt: selectorFile.css.ComproEngage.OnboardingUser.startTeaching_selectOption_txt,
    associatedWithSchool_txt: selectorFile.css.ComproEngage.OnboardingUser.associatedWithSchool_txt,
    schoolKey_btn: selectorFile.css.ComproEngage.OnboardingUser.schoolKey_btn,
    joinSchool_btn: selectorFile.css.ComproEngage.OnboardingUser.joinSchool_btn,
    privateTeaching_txt: selectorFile.css.ComproEngage.OnboardingUser.privateTeaching_txt,
    activationCode_btn: selectorFile.css.ComproEngage.OnboardingUser.activationCode_btn,
    enterSchoolKey_Heading_txt: selectorFile.css.ComproEngage.OnboardingUser.enterSchoolKey_Heading_txt,
    enterSchoolKey_subHeading_txt: selectorFile.css.ComproEngage.OnboardingUser.enterSchoolKey_subHeading_txt,
    enterSchoolKey_txt: selectorFile.css.ComproEngage.OnboardingUser.enterSchoolKey_txt,
    enterSchoolKey_txtBox: selectorFile.css.ComproEngage.OnboardingUser.enterSchoolKey_txtBox,
    insSuccuess_pageHeading: selectorFile.css.ComproEngage.OnboardingUser.insSuccuess_pageHeading,
    insSuccess_pageSubHeading1: selectorFile.css.ComproEngage.OnboardingUser.insSuccess_pageSubHeading1,
    insSuccess_schoolName: selectorFile.css.ComproEngage.OnboardingUser.insSuccess_schoolName,
    insSuccess_name_txt: selectorFile.css.ComproEngage.OnboardingUser.insSuccess_name_txt,
    insSuccess_proceedCreateClass_btn: selectorFile.css.ComproEngage.OnboardingUser.insSuccess_proceedCreateClass_btn,
    //join Class
    // clickHere_btn: selectorFile.css.ComproEngage.joinCourse.clickHere_btn,
    // enterDiffCourse_txt: selectorFile.css.ComproEngage.joinCourse.enterDiffCourse_txt,
    // joinCourse_btn: selectorFile.css.ComproEngage.joinCourse.joinCourse_btn,
    // close_btn: selectorFile.css.ComproEngage.joinCourse.close_btn,


    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        res = await action.waitForDisplayed(this.Welcome_txt);
        if (res == true) {
            res = await action.waitForDisplayed(this.Continue_btn)
            if (res == true) {
                await logger.logInto(stackTrace.get(), res + "User Onboarding is Initialized");
                res = await this.welcomePageData();
            } else
                await logger.logInto(stackTrace.get(), res + "Continue Button Not Displayed", "error");
        } else
            await logger.logInto(stackTrace.get(), res + "User Onboarding Not Initialized", "error");

        return res;
    },

    welcomePageData: async function () {
        await action.waitForDocumentLoad();
        obj = {
            welcome_heading: ((await action.getElementCount(this.Welcome_txt)) == 1) ? await action.getText(this.Welcome_txt) : null,
            userName: ((await action.getElementCount(this.Welcome_txt)) == 1) ? (await action.getText(this.Welcome_txt)).split(",")[1] : null,
            welcome_msg: ((await action.getElementCount(this.Onboardingmsg_txt)) == 1) ? await action.getText(this.Onboardingmsg_txt) : null,
            continuebtn: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.getText(this.Continue_btn) : null,
            continuebtnIsEnabled: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.isEnabled(this.Continue_btn) : null,
            rolePage_heading: ((await action.getElementCount(this.role_txt)) == 1) ? await action.getText(this.role_txt) : null,
            studentBtn: ((await action.getElementCount(this.student_btn)) == 1) ? await action.getText(this.student_btn) : null,
            teacherBtn: ((await action.getElementCount(this.teacher_btn)) == 1) ? await action.getText(this.teacher_btn) : null,
            signOut: ((await action.getElementCount(this.logout)) == 1) ? await action.getText(this.logout) : null,
            comproDLSFooter: ((await action.getElementCount(this.comproDLSFooter)) == 1) ? await action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Welcome Page Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    // rolePageData: function() {
    //     action.waitForDocumentLoad();
    //     obj = {
    //         rolePage_heading: action.getText(this.role_txt),
    //             studentBtn: action.getText(this.student_btn_txt),
    //             teacherBtn: action.getText(this.teacher_btn_txt),
    //         greyPager: action.waitForDisplayed(this.greyPager)
    //     }
    //     logger.logInto(stackTrace.get(), "Role Page Data: " + JSON.stringify(obj));
    //     return obj;
    // },

    // studentOptionsPageData: async function () {
    //     action.waitForDocumentLoad();
    //     action.waitForDisplayed(this.accessClass_txt)
    //     obj = {
    //         pageHeading: (action.getElementCount(this.accessClass_txt) == 1) ? action.getText(this.accessClass_txt) : null,
    //         subHeading: (action.getElementCount(this.accessClass_SelectOption_txt) == 1) ? action.getText(this.accessClass_SelectOption_txt) : null,
    //         heading1: (action.getElementCount(this.instructorLed_txt) == 1) ? action.getText(this.instructorLed_txt) : null,
    //         option1: (action.getElementCount(this.courseKey_btn) == 1) ? action.getText(this.courseKey_btn) : null,
    //         option2: (action.getElementCount(this.inviteLink_btn) == 1) ? action.getText(this.inviteLink_btn) : null,
    //         heading2: (action.getElementCount(this.selfStudy_txt) == 1) ? action.getText(this.selfStudy_txt) : null,
    //         option4: (action.getElementCount(this.selfLearning_btn) == 1) ? action.getText(this.selfLearning_btn) : null,
    //         continuebtn: (action.getElementCount(this.Continue_btn) == 1) ? action.getText(this.Continue_btn) : null,
    //         continuebtnIsEnabled: (action.getElementCount(this.Continue_btn) == 1) ? action.isEnabled(this.Continue_btn) : null,
    //         back_button: (action.getElementCount(this.back_button) == 1) ? action.getText(this.back_button) : null,
    //         comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
    //     }
    //     logger.logInto(stackTrace.get(), "Student Options Page Data: " + JSON.stringify(obj));
    //     return obj;
    // },

    courseKeyData: async function () {
        await action.waitForDocumentLoad();
        obj = {
            pageHeading: ((await action.getElementCount(this.enterClassKey_Heading_txt)) == 1) ? await action.getText(this.enterClassKey_Heading_txt) : null,
            subHeading: ((await action.getElementCount(this.enterClassKey_subHeading_txt)) == 1) ? await action.getText(this.enterClassKey_subHeading_txt) : null,
            message: ((await action.getElementCount(this.enterClassKey_txt)) == 1) ? await action.getText(this.enterClassKey_txt) : null,
            //textboxMessage: (action.getElementCount(this.classKey_textBox) == 1) ? action.getAttribute(this.classKey_textBox, "placeholder") : null,
            //textboxValue: (action.getElementCount(this.classKey_textBox) == 1) ? action.getAttribute(this.classKey_textBox, "value") : null,
            submitBtn: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.getText(this.Continue_btn) : null,
            submitBtnIsEnabled: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.isEnabled(this.Continue_btn) : null,
            back_button: ((await action.getElementCount(this.back_button)) == 1) ? await action.getText(this.back_button) : null,
            skipForNow: ((await action.getElementCount(this.skipForNow_btn)) == 1) ? await action.getText(this.skipForNow_btn) : null,
            helper_txt: ((await action.getElementCount(this.helper_txt)) == 1) ? await action.getText(this.helper_txt) : null,
            comproDLSFooter: ((await action.getElementCount(this.comproDLSFooter)) == 1) ? await action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Course Key Page Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    // teacherOptionsPageData: async function () {
    //     action.waitForDocumentLoad();
    //     obj = {
    //         pageHeading: (action.getElementCount(this.startTeaching_txt) == 1) ? action.getText(this.startTeaching_txt) : null,
    //         subHeading: (action.getElementCount(this.startTeaching_selectOption_txt) == 1) ? action.getText(this.startTeaching_selectOption_txt) : null,
    //         heading1: (action.getElementCount(this.associatedWithSchool_txt) == 1) ? action.getText(this.associatedWithSchool_txt) : null,
    //         option1: (action.getElementCount(this.schoolKey_btn) == 1) ? action.getText(this.schoolKey_btn) : null,
    //         option2: (action.getElementCount(this.joinSchool_btn) == 1) ? action.getText(this.joinSchool_btn) : null,
    //         heading2: (action.getElementCount(this.privateTeaching_txt) == 1) ? action.getText(this.privateTeaching_txt) : null,
    //         option3: (action.getElementCount(this.activationCode_btn) == 1) ? action.getText(this.activationCode_btn) : null,
    //         continuebtn: (action.getElementCount(this.Continue_btn) == 1) ? action.getText(this.Continue_btn) : null,
    //         continuebtnIsEnabled: (action.getElementCount(this.Continue_btn) == 1) ? action.isEnabled(this.Continue_btn) : null,
    //         back_button: (action.getElementCount(this.back_button) == 1) ? action.getText(this.back_button) : null,
    //         comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
    //     }
    //     //console.log(obj)
    //     logger.logInto(stackTrace.get(), "Teacher Options Page Data: " + JSON.stringify(obj));
    //     return obj;
    // },

    studentActivationCodeData: async function () {
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.activateClass_subHeading_txt)
        obj = {
            pageSubHeading: ((await action.getElementCount(this.activateClass_subHeading_txt)) == 1) ? await action.getText(this.activateClass_subHeading_txt) : null,
            pageHeading: ((await action.getElementCount(this.activateClass_txt)) == 1) ? await action.getText(this.activateClass_txt) : null,
            heading1: ((await action.getElementCount(this.enterActivationKey_txt)) == 1) ? await action.getText(this.enterActivationKey_txt) : null,
            accessCodeValue: ((await action.getElementCount(this.accessCode_textBox)) == 1) ? await action.getAttribute(this.accessCode_textBox, "value") : '',
            submitBtn: ((await action.getElementCount(this.activateClass_btn)) == 1) ? await action.getText(this.activateClass_btn) : null,
            submitBtnIsEnabled: ((await action.getElementCount(this.activateClass_btn)) == 1) ? await action.isEnabled(this.activateClass_btn) : null,
            back_button: ((await action.getElementCount(this.back_button)) == 1) ? await action.getText(this.back_button) : null,
            comproDLSFooter: ((await action.getElementCount(this.comproDLSFooter)) == 1) ? await action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Student Activation Code Page Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    studentSuccessOnboardingData: async function () {
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.success_Heading_txt)
        obj = {
            pageHeading: ((await action.getElementCount(this.success_Heading_txt)) == 1) ? await action.getText(this.success_Heading_txt) : null,
            pageSubHeading1: ((await action.getElementCount(this.studentSuccess_pageSubHeading1)) == 1) ? await action.getText(this.studentSuccess_pageSubHeading1) : null,
            //courseName: (action.getElementCount(this.studentSuccess_Class_txt) == 1) ? action.getText(this.studentSuccess_Class_txt) : null,
            //classDates: (action.getElementCount(this.studentSuccess_ClassDates_txt) == 1) ? action.getText(this.studentSuccess_ClassDates_txt) : null,
            startLearning: ((await action.getElementCount(this.studentSuccess_proceedToClass_btn)) == 1) ? await action.getText(this.studentSuccess_proceedToClass_btn) : null,
            continuebtnIsEnabled: ((await action.getElementCount(this.studentSuccess_proceedToClass_btn)) == 1) ? await action.isEnabled(this.studentSuccess_proceedToClass_btn) : null,
            //schoolName: (action.getElementCount(this.studentSuccess_schoolName_txt) == 1) ? action.getText(this.studentSuccess_schoolName_txt) : null,
            signOut: ((await action.getElementCount(this.logout)) == 1) ? await action.getText(this.logout) : null,
            //comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Successful Student Onboarding Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    expiredClassSuccessPageData: async function () {
        await action.waitForDocumentLoad();
        obj = {
            pageHeading: ((await action.getElementCount(this.success_Heading_txt)) == 1) ? await action.getText(this.success_Heading_txt) : null,
            pageSubHeading: ((await action.getElementCount(this.studentSuccess_classExpired)) == 1) ? await action.getText(this.studentSuccess_classExpired) : null,
            courseName: ((await action.getElementCount(this.studentSuccess_Class_txt)) == 1) ? await action.getText(this.studentSuccess_Class_txt) : null,
            classDates: ((await action.getElementCount(this.studentSuccess_ClassDates_txt)) == 1) ? await action.getText(this.studentSuccess_ClassDates_txt) : null,
            startLearning: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.getText(this.Continue_btn) : null,
            continuebtnIsEnabled: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.isEnabled(this.Continue_btn) : null,
            schoolName: ((await action.getElementCount(this.studentSuccess_schoolName_txt)) == 1) ? await action.getText(this.studentSuccess_schoolName_txt) : null,
            signOut: ((await action.getElementCount(this.logout)) == 1) ? await action.getText(this.logout) : null,
            comproDLSFooter: ((await action.getElementCount(this.comproDLSFooter)) == 1) ? await action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Class Expired Screen Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    productMismatchPageData: async function () {
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.success_Heading_txt);
        obj = {
            pageHeading: ((await action.getElementCount(this.success_Heading_txt)) == 1) ? await action.getText(this.success_Heading_txt) : null,
            pageSubHeading: ((await action.getElementCount(this.studentSuccess_productMismatch)) == 1) ? await action.getText(this.studentSuccess_productMismatch) : null,
            message: ((await action.getElementCount(this.studentSuccess_productMismatch_msg)) == 1) ? await action.getText(this.studentSuccess_productMismatch_msg) : null,
            courseName: ((await action.getElementCount(this.studentSuccess_Class_txt)) == 1) ? await action.getText(this.studentSuccess_Class_txt) : null,
            classDates: ((await action.getElementCount(this.studentSuccess_ClassDates_txt)) == 1) ? await action.getText(this.studentSuccess_ClassDates_txt) : null,
            startLearning: ((await action.getElementCount(this.studentSuccess_proceedToClass_btn)) == 1) ? await action.getText(this.studentSuccess_proceedToClass_btn) : null,
            continuebtnIsEnabled: ((await action.getElementCount(this.studentSuccess_proceedToClass_btn)) == 1) ? await action.isEnabled(this.studentSuccess_proceedToClass_btn) : null,
            schoolName: ((await action.getElementCount(this.studentSuccess_schoolName_txt)) == 1) ? await action.getText(this.studentSuccess_schoolName_txt) : null,
            signOut: ((await action.getElementCount(this.logout)) == 1) ? await action.getText(this.logout) : null,
            comproDLSFooter: ((await action.getElementCount(this.comproDLSFooter)) == 1) ? await action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Product Mismatch Screen Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    instructorSuccessOnboardingData: async function () {
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.insSuccuess_pageHeading)
        obj = {
            pageHeading: ((await action.getElementCount(this.insSuccuess_pageHeading)) == 1) ? await action.getText(this.insSuccuess_pageHeading) : null,
            pageSubHeading1: ((await action.getElementCount(this.insSuccess_pageSubHeading1)) == 1) ? await action.getText(this.insSuccess_pageSubHeading1) : null,
            //schoolName: (action.getElementCount(this.insSuccess_schoolName) == 1) ? action.getText(this.insSuccess_schoolName) : null,
            //instructorName: (action.getElementCount(this.insSuccess_name_txt) == 1) ? action.getText(this.insSuccess_name_txt) : null,
            proceedBtn: ((await action.getElementCount(this.insSuccess_proceedCreateClass_btn)) == 1) ? await action.getText(this.insSuccess_proceedCreateClass_btn) : null,
            continuebtnIsEnabled: ((await action.getElementCount(this.insSuccess_proceedCreateClass_btn)) == 1) ? await action.isEnabled(this.insSuccess_proceedCreateClass_btn) : null,
            signOut: ((await action.getElementCount(this.logout)) == 1) ? await action.getText(this.logout) : null,
            //comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "Successful Teacher Onboarding Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    invalidKeyMsg: async function () {
        await logger.logInto(stackTrace.get());
        let msg = await action.waitForDisplayed(this.invalidKey_txt)
        if (msg == true)
            res = await action.getText(this.invalidKey_txt);
        else
            res = msg.message;

        return res;
    },

    invalidActivationKeyMsg: async function () {
        await logger.logInto(stackTrace.get());
        let msg = await action.waitForDisplayed(this.invalidAccessCode)
        if (msg == true)
            res = await action.getText(this.invalidAccessCode);
        else
            res = msg.message;

        return res;
    },

    enterDiffCourseKeyMsg: async function () {
        await logger.logInto(stackTrace.get());
        let msg = await action.waitForDisplayed(this.enterDiffCourse_txt)
        if (msg == true)
            res = await action.getText(this.enterDiffCourse_txt);
        else
            res = msg.message;

        return res;
    },

    schoolKeyData: async function () {
        await action.waitForDocumentLoad();
        obj = {
            pageHeading: ((await action.getElementCount(this.enterSchoolKey_Heading_txt)) == 1) ? await action.getText(this.enterSchoolKey_Heading_txt) : null,
            subHeading: ((await action.getElementCount(this.enterSchoolKey_subHeading_txt)) == 1) ? await action.getText(this.enterSchoolKey_subHeading_txt) : null,
            message: ((await action.getElementCount(this.enterSchoolKey_txt)) == 1) ? await action.getText(this.enterSchoolKey_txt) : null,
            //textboxMessage: (action.getElementCount(this.enterSchoolKey_txtBox) == 1) ? action.getAttribute(this.enterSchoolKey_txtBox, "placeholder") : null,
            //textboxValue: (action.getElementCount(this.enterSchoolKey_txtBox) == 1) ? action.getAttribute(this.enterSchoolKey_txtBox, "value") : "",
            submitBtn: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.getText(this.Continue_btn) : null,
            submitBtnIsEnabled: ((await action.getElementCount(this.Continue_btn)) == 1) ? await action.isEnabled(this.Continue_btn) : null,
            skipForNow: ((await action.getElementCount(this.skipForNow_btn)) == 1) ? await action.getText(this.skipForNow_btn) : null,
            helper_txt: ((await action.getElementCount(this.helper_txt)) == 1) ? await action.getText(this.helper_txt) : null,
            back_button: ((await action.getElementCount(this.back_button)) == 1) ? await action.getText(this.back_button) : null,
            //comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
        }
        await logger.logInto(stackTrace.get(), "School Key Page Data: " + (await JSON.stringify(obj)));
        return obj;
    },

    clickContinue: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.Continue_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Continue Button Clicked");
        } else
            await logger.logInto(stackTrace.get(), res + " :Continue Button NOT Clicked", "error");

        return res;
    },

    clickStudent: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.student_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Student Button Clicked");
            res = await this.clickContinue()
            if (res == true)
                res = await this.courseKeyData();
                //res = this.studentOptionsPageData();
        } else
            await logger.logInto(stackTrace.get(), res + " :Student Button NOT Clicked", "error");

        return res;
    },

    clickCourseKeyOption: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.courseKey_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Course Key Option Clicked");
            res = await this.clickContinue()
            if (res == true)
                res = await this.courseKeyData();
        } else
            await logger.logInto(stackTrace.get(), res + " :Course Key Option NOT Clicked", "error");

        return res;
    },

    submitCourseKey: async function (CourseKey) {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.classKey_textBox);
        if (res == true) {
            res = await action.setValue(this.classKey_textBox, CourseKey);
            if (res == true) {
                await logger.logInto(stackTrace.get(), res + " :Course Key Set Succesfully");
                res = await action.waitForClickable(this.Continue_btn);
                if (res == true) {
                    await logger.logInto(stackTrace.get(), res + " :Submit Button is clickable");
                    res = await this.clickContinue();
                    if (res == true)
                        await logger.logInto(stackTrace.get(), res + " :Submit Button Clicked");
                    else {
                        res = res + " :Submit Button Not Clicked";
                        await logger.logInto(stackTrace.get(), res, "error");
                    }
                } else {
                    res = res + " :Submit Button is not clickable";
                    await logger.logInto(stackTrace.get(), res, "error");
                }
            } else {
                res = res + " :Course Key NOT Set";
                await logger.logInto(stackTrace.get(), res, "error");
            }
        } else {
            res = res + " :Course Key Field Not Clicked";
            await logger.logInto(stackTrace.get(), res, "error");
        }

        return res;
    },

    // submitAccessCode: async function (AccessCode) {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.accessCode_textBox)
    //     if (res == true) {
    //         res = action.setValue(this.accessCode_textBox, AccessCode);
    //         if (res == true) {
    //             logger.logInto(stackTrace.get(), res + " :Access Code Set Succesfully");
    //             res = action.waitForClickable(this.activateClass_btn);
    //             if (res == true) {
    //                 logger.logInto(stackTrace.get(), res + " :Submit Access Code Button is clickable");
    //                 res = action.click(this.activateClass_btn);
    //                 if (res == true)
    //                     logger.logInto(stackTrace.get(), res + " :Submit Access Code Button Clicked");
    //                 else {
    //                     res = res + " :Submit Access Code Button Not Clicked";
    //                     logger.logInto(stackTrace.get(), res, "error");
    //                 }
    //             } else {
    //                 res = res + " :Submit Access Code Button is not clickable";
    //                 logger.logInto(stackTrace.get(), res, "error");
    //             }
    //         } else {
    //             res = res + " :Access Code NOT Set";
    //             logger.logInto(stackTrace.get(), res, "error");
    //         }
    //     } else {
    //         res = res + " :Access Code Field Not Clicked";
    //         logger.logInto(stackTrace.get(), res, "error");
    //     }
    //     return res;
    // },

    clickTeacher: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.teacher_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Teacher Button Clicked");
            res = await this.clickContinue()
            if (res == true)
                //res = this.teacherOptionsPageData();
                res = await this.schoolKeyData();
        } else
            await logger.logInto(stackTrace.get(), res + " :Teacher Button NOT Clicked", "error");

        return res;
    },

    clickBack: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.back_button)
        res = await action.click(this.back_button);
        if (res == true)
            await logger.logInto(stackTrace.get(), res + " :Back Button Clicked");
        else
            await logger.logInto(stackTrace.get(), res + " :Back Button NOT Clicked", "error");

        return res;
    },

    clickSchoolKeyOption: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.schoolKey_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :School Key Option Clicked");
            res = await this.clickContinue()
            if (res == true)
                res = await this.schoolKeyData();
        } else
            await logger.logInto(stackTrace.get(), res + " :School Key Option NOT Clicked", "error");

        return res;
    },

    submitSchoolKey: async function (SchoolKey) {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.enterSchoolKey_txtBox)
        if (res == true) {
            //action.clearValue(this.schoolKey_inputbox);
            res = await action.setValue(this.enterSchoolKey_txtBox, SchoolKey);
            if (res == true) {
                await logger.logInto(stackTrace.get(), res + " :School Key Set Succesfully");
                res = await action.waitForClickable(this.Continue_btn);
                if (res == true) {
                    await logger.logInto(stackTrace.get(), res + " :Submit Button is clickable");
                    res = await action.click(this.Continue_btn);
                    if (res == true)
                        await logger.logInto(stackTrace.get(), res + " :Submit Button Clicked");
                    else {
                        res = res + " :Submit Button Not Clicked";
                        await logger.logInto(stackTrace.get(), res, "error");
                    }
                }
                else {
                    res = res + " :Submit Button is not clickable";
                    await logger.logInto(stackTrace.get(), res, "error");
                }
            }
            else {
                res = res + " :School Key NOT Set";
                await logger.logInto(stackTrace.get(), res, "error");
            }
        }
        else {
            res = res + " :School Key NOT Clicked";
            await logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    clickContinueOnStudentSuccess: async function () { 
        await logger.logInto(stackTrace.get());
        res = await action.click(this.studentSuccess_proceedToClass_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Start Learning Clicked");
        }
        else
            await logger.logInto(stackTrace.get(), res + " :Start Learing Not Clicked", 'error');
        return res;
    },

    clickContinueOnTeacherSuccess: async function () { 
        await logger.logInto(stackTrace.get());
        //action.waitForDisplayed(this.proceed_btn)
        res = await action.click(this.insSuccess_proceedCreateClass_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " : Proceed button clicked on the Instructor success page");
        }
        else
            await logger.logInto(stackTrace.get(), res + " : Proceed button NOT clicked on the Instructor success page", 'error');

        return res;
    },

    clickSignOut: async function () {
        await logger.logInto(stackTrace.get());
        //action.waitForDisplayed(this.signOut)
        res = await action.click(this.logout);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Sign Out Button Clicked onlanding Welcome page");
            let landingPage = require('../../pages/engageExperienceApp/landing.page');
            res = await landingPage.isInitialized();
        }
        else
            await logger.logInto(stackTrace.get(), res + " :Sign Out Button NOT Clicked on Welcome page", 'errpr');
        //console.log(res)   
        return res;
    },

    clickToExit: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDisplayed(this.clickHere_btn)
        res = await action.click(this.clickHere_btn)
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Click Here To Exit Button Clicked on Course Key Page");
            // let myCoursesPage = require('../../pages/engage/studentMyCourses.page');
            // res = myCoursesPage.isInitialized();
        }
        else {
            await logger.logInto(stackTrace.get(), res + " :Click Here To Exit Button NOT Clicked on Course Key Page", 'error');
        }
        return res;
    },

    clickJoinCourse: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        //action.waitForDisplayed(this.joinCourse_btn)
        res = await action.click(this.joinCourse_btn)
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Join Course Button Clicked on My Courses");
            res = await this.studentOptionsPageData();
        } else {
            await logger.logInto(stackTrace.get(), res + " :Join Course Button Button NOT Clicked on My Courses", 'error');
        }
        return res;
    },

    //tbd
    clickClose: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.close_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Close button on Join Class Success Screen Clicked");
            // let myCoursesPage = require('../../pages/engage/studentMyCourses.page');
            // res = myCoursesPage.isInitialized();
        } else {
            await logger.logInto(stackTrace.get(), res + " :Close button on Join Class Success Screen Not Clicked", 'error');
        }
        return res;
    },

    clickSkipForNow : function(){
         await logger.logInto(stackTrace.get());
        res = await action.click(this.skipForNow_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), res + " :Skip for Now button Clicked");
        } else {
            await logger.logInto(stackTrace.get(), res + " :Skip for Now button Not Clicked", 'error');
        }
        return res;
    }

}