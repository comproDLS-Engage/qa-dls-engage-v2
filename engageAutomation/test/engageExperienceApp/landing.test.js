"use strict";
var landing = require('../../pages/engageExperienceApp/landing.page.js');
var sts;

module.exports = {

	ENG_LAND_TC_1: function () {
		sts = landing.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "Landing page status mismatch");
		assertion.assert((sts.signup_btnText instanceof Error) === false, "Get started button issue - " + sts.signup_btnText);
		assertion.assert((sts.login_btnText instanceof Error) === false, "I have an account button issue - " + sts.login_btnText);
		assertion.assertEqual(sts.brandLogo_img_exists, true, "Brand logo does not exist");
		assertion.assertEqual(sts.selectedLangImg_exists, true, "Language image does not exist");
	},

	ENG_LAND_TC_2: function () {
		sts = landing.click_Signup_Button();
		assertion.assertEqual(sts, true, "Sign up page status mismatch");
	},

	ENG_LAND_TC_3: function () {
		sts = landing.click_Signin_Button();
		assertion.assertEqual(sts.pageStatus, true, "Sign in page status mismatch");
	},

	ENG_LAND_TC_4: function (testdata) {
		sts = landing.select_Language_from_dropdown(testdata);
		assertion.assertEqual(sts, true, "Language not selected");
	},

	ENG_LAND_TC_5: function (testdata) {
		sts = landing.isInitialized();
		assertion.assertEqual(sts.headingText, testdata.headingText, "Headline text mismatch");
		assertion.assertEqual(sts.subheadingText, testdata.subheadingText, "subheading text mismatch");
		assertion.assertEqual(sts.signup_btnText, testdata.signup_btnText, "SignUp button text mismatch");
		assertion.assertEqual(sts.login_lblText, testdata.login_lblText, "Login label text mismatch");
		assertion.assertEqual(sts.login_btnText, testdata.login_btnText, "Login button text mismatch");
		assertion.assertEqual(sts.footerLabel, testdata.footerLabel, "Footer label text mismatch");
	}
}
