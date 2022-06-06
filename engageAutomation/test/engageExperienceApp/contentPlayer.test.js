'use strict';
var contentPlayer = require('../../pages/engageExperienceApp/contentPlayer.page');
var sts;

module.exports = {

	//Validate that video player is launched on clicking the video activity
	ENG_CONT_TC_1: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.videoPlayerExists, true, "videoPlayerExists status mismatch");
	},

	//Validate that audio player is launched on clicking the audio activity
	ENG_CONT_TC_2: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.audioPlayerExists, true, "audioPlayerExists status mismatch");
	},

	//Validate that etext is launched on clicking the etext activity
	ENG_CONT_TC_3: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.etextExists, true, "etextExists status mismatch");
	},

	//Validate that html webbook is launched on clicking the html webbook activity
	ENG_CONT_TC_4: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.webbookExists, true, "webbookExists status mismatch");
	},

	//Validate that page is scrolled to top on clicking the scroll to top button
	ENG_CONT_TC_5: async function () {
		sts = await contentPlayer.click_scrollToTopBtn();
		await assertion.assertEqual(sts, true, "scrollToTopBtn status mismatch");
	},

	//Validate that video player with transcript is launched on clicking the video with subtitles activity
	ENG_CONT_TC_6: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.videoPlayerExists, true, "videoPlayerExists status mismatch");
		await assertion.assertEqual(sts.transcriptExists, true, "transcriptExists status mismatch");
	},

	//Validate that audio player with transcript is launched on clicking the audio with subtitles activity
	ENG_CONT_TC_7: async function () {
		await contentPlayer.isInitialized();
		sts = await contentPlayer.getData_contentPlayer();
		await assertion.assertEqual(sts.audioPlayerExists, true, "audioPlayerExists status mismatch");
		await assertion.assertEqual(sts.transcriptExists, true, "transcriptExists status mismatch");
	},

}