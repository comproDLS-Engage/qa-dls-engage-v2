'use strict';
var matching = require('../../pages/engageExperienceApp/matching.itemPlayer.page.js');
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page.js');
var sts, sts1;

module.exports = {

    //Validate Matching Question for correct scenario
    ENG_ITEM_MATCH_TC_5: async function (testdata) {
        sts = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.leftData.length; i++) {
                await assertion.assertEqual(sts.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts.rightData[i]);
                await assertion.assertEqual(sts.leftData[i][2], testdata[i][4], "Status mismatch for " + sts.rightData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate Matching Question for incorrect scenario
    ENG_ITEM_MATCH_TC_7: async function (testdata) {
        sts = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.leftData.length; i++) {
                await assertion.assertEqual(sts.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts.rightData[i]);
                await assertion.assertEqual(sts.leftData[i][2], testdata[i][4], "Status mismatch for " + sts.rightData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },
    //Validate Matching Question for partial scenario
    ENG_ITEM_MATCH_TC_6: async function (testdata) {
        sts = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.leftData.length; i++) {
                await assertion.assertEqual(sts.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts.rightData[i]);
                await assertion.assertEqual(sts.leftData[i][2], testdata[i][4], "Status mismatch for " + sts.rightData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate the behaviour of matching player when user match the left item with right item (Mobile)
    ENG_ITEM_MATCH_TC_2: async function (testdata) {
        sts = await matching.matchingClick(testdata);
        sts1 = await matching.isInitialized(testdata);
        //if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts1.leftData.length; i++) {
                await assertion.assertEqual(sts1.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts1.rightData[i]);
            }
        //}
        //else assertion.assertFail(sts);
    },

    //Validate that the behaviour in the Matching player when try again is clicked
    ENG_ITEM_MATCH_TC_4: async function (testdata) {
        // need to add action for clicking try again and get the matching before tryagain and then match it after clicking try again
        sts = await matching.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.leftData.length; i++) {
                await assertion.assertEqual(sts1.rightData[i][1], testdata[i][3], "Right text mismatch for " + sts1.rightData[i]);
                await assertion.assertEqual(sts.leftData[i][2], "", "Status mismatch for " + sts.rightData[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    //Validate the UI of the Matching player in the default mode
    ENG_ITEM_MATCH_TC_1: async function (testdata) {
        sts = await matching.isInitialized(testdata.answerKey);
        await assertion.assertEqual(sts.leftData.length, testdata.maxOptions, "Draggable option count mismatch");
        for (var i = 0; i < sts.leftData.length; i++) {
            await assertion.assertEqual(sts.leftData[i][1], testdata.answerKey[i][1], "left text mismatch for " + sts.rightData[i]);
            await assertion.assertEqual(sts.leftData[i][2], "", "Status mismatch for " + sts.rightData[i]);
        }
        sts = await itemPlayerPage.getItemplayerInfo();
        await assertion.assertEqual(sts.mediaType, testdata.mediaType, "Media type mismatch");
        //assertion.assertEqual(sts.quesText, testdata.text, "Question text mismatch");
        //assertion.assertEqual(sts.instructionText, testdata.instruction, "Instruction text mismatch");
    },

}