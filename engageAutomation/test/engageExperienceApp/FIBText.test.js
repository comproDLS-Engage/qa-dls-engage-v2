'use strict';
var fibtext = require('../../pages/engageExperienceApp/fibtext.itemplayer.page.js');
var sts;

module.exports = {

    //Validate the fib text question in unattempted state
    ENG_ITEM_FIBTEXT_TC_1: async function (testdata) {
        sts = await fibtext.isInitialized();
		await assertion.assertEqual(sts, true, "FIB text question not loaded");
		sts = await fibtext.getData_responses(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][1], "", "Response text for index " + i);
				await assertion.assertEqual(sts[i][2], null, "Response status for index " + i);
			}
		}
		else await assertion.assertFail(sts);
    },

    //Validate that user can enter text value in each blank
    ENG_ITEM_FIBTEXT_TC_2: async function (testdata) {
        sts = await fibtext.inputValues(testdata);
        await assertion.assertEqual(sts, true);
        sts = await fibtext.getData_responses(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < testdata.length; i++) {
                await assertion.assertEqual(sts[i][1], testdata[i][1], "Response text mismatch for index " + i);
                await assertion.assertEqual(sts[i][2], null, "Response status mismatch for index " + i);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate the fib text question in attempted state after submission
    ENG_ITEM_FIBTEXT_TC_3: async function (testdata) {
        sts = await fibtext.getData_responses(testdata);
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.length; i++) {
				await assertion.assertEqual(sts[i][1], testdata[i][1], "Response text mismatch for index " + i);
                await assertion.assertEqual(sts[i][2], testdata[i][2], "Response status mismatch for index " + i);
			}
		}
		else await assertion.assertFail(sts);
    }
}