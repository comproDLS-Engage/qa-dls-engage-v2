'use strict';
var downloadPlayer = require('../../pages/engageExperienceApp/downloadPlayer.page.js');
var sts;

module.exports = {

	//Validate that clicking on the download button downloads the resource file
	ENG_DOWN_TC_1: async function () {
		sts = await downloadPlayer.click_downloadBtn();
		await assertion.assertEqual(sts, true, "Download button status mismatch");
	},

	//Validate the content of download player for Word Resource
	ENG_DOWN_TC_2: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayerImg, testdata[0].downPlayerImg, "downPlayerImg status mismatch");
		await assertion.assertEqual(sts.downPlayerTitle, testdata[1].downPlayerTitle, "downPlayerTitle mismatch");
		await assertion.assertEqual(sts.downPlayerSubtitle, testdata[1].downPlayerSubtitle, "downPlayerSubtitle mismatch");
		await assertion.assertEqual(sts.downResHeading, testdata[0].downResHeading, "downResHeading mismatch");
		await assertion.assertEqual(sts.downResSubheading, testdata[0].downResSubheading, "downResSubheading mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.openWithBrowserBtn, null, "openWithBrowserBtn mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
	},

	//Validate the content of download player for ZIP Resource
	ENG_DOWN_TC_3: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayerImg, testdata[0].downPlayerImg, "downPlayerImg status mismatch");
		await assertion.assertEqual(sts.downPlayerTitle, testdata[1].downPlayerTitle, "downPlayerTitle mismatch");
		await assertion.assertEqual(sts.downPlayerSubtitle, testdata[1].downPlayerSubtitle, "downPlayerSubtitle mismatch");
		await assertion.assertEqual(sts.downResHeading, testdata[0].downResHeading, "downResHeading mismatch");
		await assertion.assertEqual(sts.downResSubheading, testdata[0].downResSubheading, "downResSubheading mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.openWithBrowserBtn, null, "openWithBrowserBtn mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
	},

	//Validate the content of download player for PDF Resource
	ENG_DOWN_TC_4: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayerImg, testdata[0].downPlayerImg, "downPlayerImg status mismatch");
		await assertion.assertEqual(sts.downPlayerTitle, testdata[1].downPlayerTitle, "downPlayerTitle mismatch");
		await assertion.assertEqual(sts.downPlayerSubtitle, testdata[1].downPlayerSubtitle, "downPlayerSubtitle mismatch");
		await assertion.assertEqual(sts.downResHeading, testdata[0].downResHeading, "downResHeading mismatch");
		await assertion.assertEqual(sts.downResSubheading, testdata[0].downResSubheading, "downResSubheading mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.openWithBrowserBtn, testdata[0].openWithBrowserBtn, "openWithBrowserBtn mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
	},

	//Validate the content of download player for Spreadsheet Resource
	ENG_DOWN_TC_5: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayerImg, testdata[0].downPlayerImg, "downPlayerImg status mismatch");
		await assertion.assertEqual(sts.downPlayerTitle, testdata[1].downPlayerTitle, "downPlayerTitle mismatch");
		await assertion.assertEqual(sts.downPlayerSubtitle, testdata[1].downPlayerSubtitle, "downPlayerSubtitle mismatch");
		await assertion.assertEqual(sts.downResHeading, testdata[0].downResHeading, "downResHeading mismatch");
		await assertion.assertEqual(sts.downResSubheading, testdata[0].downResSubheading, "downResSubheading mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.openWithBrowserBtn, null, "openWithBrowserBtn mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
	}

}