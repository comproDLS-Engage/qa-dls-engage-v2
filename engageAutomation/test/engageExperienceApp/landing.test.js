"use strict";
var landing = require('../../pages/engageExperienceApp/landing.page.js');
var sts;

module.exports = {

	ENG_LAND_TC_1: async function () {
		sts = await landing.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Landing page status mismatch");
		await assertion.assert((sts.signup_btnText instanceof Error) === false, "Get started button issue - " + sts.signup_btnText);
		await assertion.assert((sts.login_btnText instanceof Error) === false, "I have an account button issue - " + sts.login_btnText);
		await assertion.assertEqual(sts.brandLogo_img_exists, true, "Brand logo does not exist");
		await assertion.assertEqual(sts.selectedLangImg_exists, true, "Language image does not exist");
	},

	ENG_LAND_TC_2: async function () {
		sts = await landing.click_Signup_Button();
		await assertion.assertEqual(sts, true, "Sign up page status mismatch");
	},

	ENG_LAND_TC_3: async function () {
		sts = await landing.click_Signin_Button();
		await assertion.assertEqual(sts.pageStatus, true, "Sign in page status mismatch");
	},

	ENG_LAND_TC_4: async function (testdata) {
		sts = await landing.select_Language_from_dropdown(testdata);
		await assertion.assertEqual(sts, true, "Language not selected");
	},

	ENG_LAND_TC_5: async function (testdata) {
		sts = await landing.isInitialized();
		await assertion.assertEqual(sts.headingText, testdata.headingText, "Headline text mismatch");
		await assertion.assertEqual(sts.subheadingText, testdata.subheadingText, "subheading text mismatch");
		await assertion.assertEqual(sts.signup_btnText, testdata.signup_btnText, "SignUp button text mismatch");
		await assertion.assertEqual(sts.login_lblText, testdata.login_lblText, "Login label text mismatch");
		await assertion.assertEqual(sts.login_btnText, testdata.login_btnText, "Login button text mismatch");
		await assertion.assertEqual(sts.footerLabel, testdata.footerLabel, "Footer label text mismatch");
	}
}
