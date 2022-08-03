'use strict';
var matching = require('../../pages/engageExperienceApp/matching.itemPlayer.page.js');
var sts, sts1;

module.exports = {

     //Validate the matching question in unattempted state
     ENG_ITEM_MATCH_TC_1: async function (testdata) {
        sts = await matching.isInitialized(testdata);
        for (var i = 0; i < sts.leftData.length; i++) {
            await assertion.assertEqual(sts.leftData[i][1], testdata[i][1], "left text mismatch for " + sts.rightData[i]);
            await assertion.assertEqual(sts.leftData[i][2], null, "Status mismatch for " + sts.rightData[i]);
        }
    },

    //Validate that user is able to match left column item with a right column item if the matching is unidirectional
    ENG_ITEM_MATCH_TC_2: async function (testdata) {
        sts = await matching.matchingClick(testdata);
        await assertion.assertEqual(sts, true, sts);
        sts1 = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts1.leftData.length; i++) {
                await assertion.assertEqual(sts1.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts1.rightData[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    //Validate the matching question in attempted state after submission
    ENG_ITEM_MATCH_TC_5: async function (testdata) {
        sts = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.leftData.length; i++) {
                await assertion.assertEqual(sts.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts.rightData[i]);
                await assertion.assertEqual(sts.leftData[i][2], testdata[i][4], "Status mismatch for " + sts.rightData[i]);
            }
        }
        else await assertion.assertFail(sts);
    }
    
}