var orderlist = require("../../pages/engageExperienceApp/orderlist.page");

module.exports = {

    ENG_ITEM_OLI_TC_1: async function (testdata) {
        //Validate the unattempt state of the Order List player
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            await assertion.assertEqual(sts.length, testdata.length, "Options count mismatch");
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][3], null, "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    ENG_ITEM_OLI_TC_5: async function (testdata) {
        //Validate Order List Question For Correct Scenario
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);
    },
    /*ENG_ITEM_OLI_TC_6: async function (testdata) {
        //Validate Ordered List Question For Partial Scenario
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);

    },*/
    /*ENG_ITEM_OLI_TC_7: async function (testdata) {
        //Validate Order List Question For Complete Incorrect Scenario
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][3], testdata[i][3], "OrderList data for index " + i + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);
    },*/

    ENG_ITEM_OLI_TC_9: async function (testdata) {
        //Validate if user is able to drag the items from arrow in the Order List Question
        sts = await orderlist.orderListChange(testdata)
        await assertion.assertEqual(sts, true, "OrderList is " + sts);
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][1], testdata[i][1], "OrderList data for index " + (i + 1) + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + (i + 1) + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);
    },

    /*ENG_ITEM_OLI_TC_11: async function (testdata) {
        //Validate that the user responses are retained in Orderlist after clicking try again
        sts = await orderlist.isInitialized(testdata);
        if ((typeof (sts)) === "object") {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertEqual(sts[i][1], testdata[i][1], "OrderList data for index " + i + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][2], testdata[i][2], "OrderList data for index " + i + " is - " + sts[i]);
                await assertion.assertEqual(sts[i][3], "", "OrderList Feedback icon for index " + i + " is - " + sts[i]);
            }
        }
        else await assertion.assertFail(sts);
    }*/
}