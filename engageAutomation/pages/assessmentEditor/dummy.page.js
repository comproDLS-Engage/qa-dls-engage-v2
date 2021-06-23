var action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir + 'engageSelectors.json');
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
    clickHere_btn: selectorFile.css.ComproEngage.joinCourse.clickHere_btn,
    enterDiffCourse_txt: selectorFile.css.ComproEngage.joinCourse.enterDiffCourse_txt,
    joinCourse_btn: selectorFile.css.ComproEngage.joinCourse.joinCourse_btn,
    close_btn: selectorFile.css.ComproEngage.joinCourse.close_btn,


    clickContinue: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.Continue_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " :Continue Button Clicked");
        } else
            logger.logInto(stackTrace.get(), res + " :Continue Button NOT Clicked", "error");

        return res;
    },

    clickStudent: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.student_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " :Student Button Clicked");
            res = this.clickContinue()
            if (res == true)
                res = this.studentOptionsPageData();
        } else
            logger.logInto(stackTrace.get(), res + " :Student Button NOT Clicked", "error");

        return res;
    },

    studentOptionsPageData: function () {
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.accessClass_txt)
        obj = {
            pageHeading: (action.getElementCount(this.accessClass_txt) == 1) ? action.getText(this.accessClass_txt) : null,
            subHeading: (action.getElementCount(this.accessClass_SelectOption_txt) == 1) ? action.getText(this.accessClass_SelectOption_txt) : null,
            heading1: (action.getElementCount(this.instructorLed_txt) == 1) ? action.getText(this.instructorLed_txt) : null,
            option1: (action.getElementCount(this.courseKey_btn) == 1) ? action.getText(this.courseKey_btn) : null,
            option2: (action.getElementCount(this.inviteLink_btn) == 1) ? action.getText(this.inviteLink_btn) : null,
            heading2: (action.getElementCount(this.selfStudy_txt) == 1) ? action.getText(this.selfStudy_txt) : null,
            option4: (action.getElementCount(this.selfLearning_btn) == 1) ? action.getText(this.selfLearning_btn) : null,
            continuebtn: (action.getElementCount(this.Continue_btn) == 1) ? action.getText(this.Continue_btn) : null,
            continuebtnIsEnabled: (action.getElementCount(this.Continue_btn) == 1) ? action.isEnabled(this.Continue_btn) : null,
            back_button: (action.getElementCount(this.back_button) == 1) ? action.getText(this.back_button) : null,
            comproDLSFooter: (action.getElementCount(this.comproDLSFooter) == 1) ? action.getText(this.comproDLSFooter) : null
        }
        logger.logInto(stackTrace.get(), "Student Options Page Data: " + JSON.stringify(obj));
        return obj;
    }
}