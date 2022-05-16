'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const commonTest = require('../../test/engageExperienceApp/common.test.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, lastDate, currentDate, currentYear, currentMonth;

module.exports = {

    calenderYear: selectorFile.css.ComproEngage.Calender.calenderYear,
    calenderCurrentMonth: selectorFile.css.ComproEngage.Calender.calenderCurrentMonth,
    calenderLeftArrow: selectorFile.css.ComproEngage.Calender.calenderLeftArrow,
    calenderRightArrow: selectorFile.css.ComproEngage.Calender.calenderRightArrow,
    calenderMonthHeader: selectorFile.css.ComproEngage.Calender.calenderMonthHeader,
    calenderSelectedDate: selectorFile.css.ComproEngage.Calender.calenderSelectedDate,
    calenderDate: selectorFile.css.ComproEngage.Calender.calenderDate,
    calenderSelectedYear: selectorFile.css.ComproEngage.Calender.calenderSelectedYear,
    calenderYearList: selectorFile.css.ComproEngage.Calender.calenderYearList,
    calenderYearListCount: selectorFile.css.ComproEngage.Calender.calenderYearListCount,
    datePicker_okBtn: selectorFile.css.ComproEngage.createClassPage.datePicker_okBtn,
    test: async function () {
        await action.click("[data-tid=button-add]")
        await browser.pause(2000)
        await action.click("//*[@id=\"app\"]/div/div/div/main/div/div[3]/div[1]/div")
        console.log(await this.isInitialized())
        await this.clickCurrentYear();
        await this.selectUpcomingYear(3);
        await this.clickCurrentYear();
        await this.selectPreviousYear(2);
        await this.selectUpcomingMonth(6)
        await this.selectDate(parseInt(currentDate) + 15);
        await action.click(this.datePicker_okBtn)
    },

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.waitForDisplayed(this.loaderIcon, undefined, true);
        let pageStatus = await action.waitForDisplayed(this.calenderYear)
        res = await this.gettodayDateData();
        res.CalenderStatus = pageStatus;
        return res;

    },
    gettodayDateData: async function () {
        var obj = {
            currentDate: await this.getCurrentDate(),
            currentYear: await this.getCurrentMonth(),
            currentMonth: await this.getCurrentYear()
        }
        return obj;
    },


    getCurrentDate: async function () {
        currentDate = await action.getText(this.calenderSelectedDate);
        return currentDate;
    },
    getCurrentYear: async function () {
        currentYear = await action.getText(this.calenderYear);
        return currentYear;
    },
    getCurrentMonth: async function () {
        currentMonth = await action.getText(this.calenderCurrentMonth);
        return currentMonth;
    },

    selectDate: async function (date) {
        var lastDateOfMonth = await this.lastDateOfMonth();
        if (date > lastDateOfMonth) {
            var currentDate = (date - lastDateOfMonth)
            await this.selectUpcomingMonth(1)
            await this.clickDate(parseInt(currentDate))
        }
        else
            await this.clickDate(parseInt(date))
    },
    clickDate: async function (date) {
        var finished = false;
        for (var i = 1; i < 7 && !finished; i++) {
            for (var j = 1; j <= 7; j++) {
                if ((await action.getText("//div[" + i + "]/div[" + j + "]" + this.calenderDate)) == date) {
                    await action.click("//div[" + i + "]/div[" + j + "]" + this.calenderDate)
                    finished = true;
                    break;
                }
            }
        }
    },
    lastDateOfMonth: async function () {
        var finished = false;
        var updatedlastDate;
        for (var i = 5; i < 8 && !finished; i++) {
            for (var j = 1; j <= 7; j++) {
                updatedlastDate = lastDate;
                if ((await action.getElementCount("//div[" + i + "]/div[" + j + "]" + this.calenderDate)) > 0) {
                    lastDate = await action.getText("//div[" + i + "]/div[" + j + "]" + this.calenderDate, 1000)
                    if (lastDate == "") {
                        finished = true;
                        break;
                    }
                }
                else {
                    finished = true;
                    break;
                }
            }
        }
        return updatedlastDate;
    },

    selectPreviousMonth: async function (count) {
        for (var i = 1; i <= count; i++) {
            await action.click(this.calenderLeftArrow)
        }
    },
    selectUpcomingMonth: async function (count) {
        for (var i = 1; i <= count; i++) {
            await action.click(this.calenderRightArrow);
        }
    },
    selectUpcomingYear: async function (count) {
        var currentYear = await action.getText(this.calenderSelectedYear)
        var totalCount = await action.getElementCount(this.calenderYearListCount)
        for (var i = 1; i <= totalCount; i++) {
            await action.scrollIntoView("//div[" + i + "]" + this.calenderYearList);
            if ((await action.getText("//div[" + i + "]" + this.calenderYearList)) == currentYear) {
                await action.click("//div[" + (i + count) + "]" + this.calenderYearList)
                break;
            }

        }
    },
    selectPreviousYear: async function (count) {
        var currentYear = await action.getText(this.calenderSelectedYear)
        var totalCount = await action.getElementCount(this.calenderYearListCount)
        for (var i = 1; i <= totalCount; i++) {
            await action.scrollIntoView("//div[" + i + "]" + this.calenderYearList);
            if ((await action.getText("//div[" + i + "]" + this.calenderYearList)) == currentYear) {
                await action.click("//div[" + (i - count) + "]" + this.calenderYearList)
                break;
            }

        }
    },
    clickCurrentYear: async function () {
        await action.click(this.calenderYear);
    },
    clickOkBtn: async function () {
        res = await action.click(this.datePicker_okBtn)
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "--Current date is selected and OK button is clicked");
            res = await action.getAttribute(this.endDate_txtbox, "value");
        }
        else {
            res = res + "-- OK button is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
    }
}