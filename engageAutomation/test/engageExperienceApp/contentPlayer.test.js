'use strict';
var contentPlayer = require('../../pages/engageExperienceApp/contentPlayer.page');
var sts;

module.exports = {

	//Validate that video player is launched on clicking the video activity
	ENG_CONT_TC_1: function () {
		contentPlayer.isInitialized();
		sts = contentPlayer.getData_contentPlayer();
		assertion.assertEqual(sts.videoPlayerExists, true, "videoPlayerExists status mismatch");
	},

	//Validate that audio player is launched on clicking the audio activity
	ENG_CONT_TC_2: function () {
		contentPlayer.isInitialized();
		sts = contentPlayer.getData_contentPlayer();
		assertion.assertEqual(sts.audioPlayerExists, true, "audioPlayerExists status mismatch");
	},

	//Validate that etext is launched on clicking the etext activity
	ENG_CONT_TC_3: function () {
		contentPlayer.isInitialized();
		sts = contentPlayer.getData_contentPlayer();
		assertion.assertEqual(sts.etextExists, true, "etextExists status mismatch");
	},

	//Validate that html webbook is launched on clicking the html webbook activity
	ENG_CONT_TC_4: function () {
		contentPlayer.isInitialized();
		sts = contentPlayer.getData_contentPlayer();
		assertion.assertEqual(sts.webbookExists, true, "webbookExists status mismatch");
	},

	//Validate that page is scrolled to top on clicking the scroll to top button
	ENG_CONT_TC_5: function () {
		sts = contentPlayer.click_scrollToTopBtn();
		assertion.assertEqual(sts, true, "scrollToTopBtn status mismatch");
	}

}