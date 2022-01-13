var orderlist = require("../../pages/engageExperienceApp/orderlist.page");
const itemPlayerPage = require('../../pages/engageExperienceApp/itemPlayer.page.js');

module.exports = {

    ENG_ITEM_OLI_TC_1: function (testdata) {
        //Validate the unattempt state of the Order List player
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][3], "", "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);
        // sts = itemPlayerPage.getItemplayerInfo();
		// assertion.assertEqual(sts.mediaType, testdata[1].mediaType, "Media type mismatch");
		// assertion.assertEqual(sts.quesText, testdata[1].text, "Question text mismatch");
		// assertion.assertEqual(sts.instructionText, testdata[1].instruction, "Instruction text mismatch");
    },

    ENG_ITEM_OLI_TC_5: function (testdata) {
        //Validate Order List Question For Correct Scenario
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);
    },
    ENG_ITEM_OLI_TC_6: function (testdata) {
        //Validate Ordered List Question For Partial Scenario
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);

    },
    ENG_ITEM_OLI_TC_7: function (testdata) {
        //Validate Order List Question For Complete Incorrect Scenario
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    ENG_ITEM_OLI_TC_9: function (testdata) {
        //Validate if user is able to drag the items from arrow in the Order List Question
        sts = orderlist.orderListChange(testdata)
        assertion.assertEqual(sts, true, "OrderList is " + sts);
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][1], testdata[i][1], "OrderList data for index " + (i+1) + " is - " + sts[i]);
                assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + (i+1) + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);
    },

    ENG_ITEM_OLI_TC_11: function (testdata) {
        //Validate that the user responses are retained in Orderlist after clicking try again
        sts = orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertEqual(sts[i][1], testdata[i][1], "OrderList data for index " + i + " is - " + sts[i]);
                assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                assertion.assertEqual(sts[i][3], "", "OrderList Feedback icon for index " + i + " is - " + sts[i]);
            }
        }
        else assertion.assertFail(sts);
    }
}