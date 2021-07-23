'use strict';

var FIBText = require('../../pages/engageExperienceApp/FIBText.ItemPlayer.page.js');
var sts, sts1;
module.exports = {

    //Validate FIB text question is launched
    ENG_ITEM_FIBTEXT_TC_2: function (testdata) {
        sts = FIBText.isInitialized(testdata.answerKey);
        assertion.assertEqual(sts.targetData.length, testdata.maxOptions, "Text placeholders count mismatch");
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], "", "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    },
    
    //Validate that user is able to click in the text placeholders and type the desired text in the FIB text question
    ENG_ITEM_FIBTEXT_TC_3: function (testdata) {
        sts = FIBText.inputValues(testdata);
        assertion.assertEqual(sts, true);
        sts = FIBText.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate that the user responses are retained in the FIB text question after clicking try again
    ENG_ITEM_FIBTEXT_TC_4: function (testdata) {
        //sts = FIBText.inputValues(testdata);
        //assertion.assertEqual(sts, true);
        //check my work
        //try again
        //isInitialized
        sts = FIBText.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], "", "Status mismatch for " + sts.targetData[i]);
        }
    },
    
    //Validate FIB Text Question for correct scenario
    ENG_ITEM_FIBTEXT_TC_5: function (testdata) {
        sts = FIBText.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate FIB Text Question for partial scenario
    ENG_ITEM_FIBTEXT_TC_6: function (testdata) {
        sts = FIBText.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
        }
    },

    //Validate FIB Text Question for complete incorrect scenario
    ENG_ITEM_FIBTEXT_TC_7: function (testdata) {
        sts = FIBText.isInitialized(testdata);
        for (var i = 0; i < sts.targetData.length; i++) {
            assertion.assertEqual(sts.targetData[i][1], testdata[i][1], "Target text mismatch for " + sts.targetData[i]);
            assertion.assertEqual(sts.targetData[i][2], testdata[i][2], "Status mismatch for " + sts.targetData[i]);
        }
    }
}