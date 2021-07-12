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
    test: function () {
        action.click("[data-tid=button-add]")
        browser.pause(2000)
        action.click("//*[@id=\"app\"]/div/div/div/main/div/div[3]/div[1]/div")
        console.log(this.isInitialized())
        this.clickCurrentYear();
        this.selectUpcomingYear(3);
        this.clickCurrentYear();
        this.selectPreviousYear(2);
        this.selectUpcomingMonth(6)
        this.selectDate(parseInt(currentDate) + 15);
        action.click(this.datePicker_okBtn)
    },

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForDisplayed(this.loaderIcon, undefined, true);
        let pageStatus = action.waitForDisplayed(this.calenderYear)
        res = this.gettodayDateData();
        res.CalenderStatus = pageStatus;
        return res;

    },
    gettodayDateData: function () {
        var obj = {
            currentDate: this.getCurrentDate(),
            currentYear: this.getCurrentMonth(),
            currentMonth: this.getCurrentYear()
        }
        return obj;
    },


    getCurrentDate: function () {
        currentDate = action.getText(this.calenderSelectedDate);
        return currentDate;
    },
    getCurrentYear: function () {
        currentYear = action.getText(this.calenderYear);
        return currentYear;
    },
    getCurrentMonth: function () {
        currentMonth = action.getText(this.calenderCurrentMonth);
        return currentMonth;
    },

    selectDate: function (date) {
        var lastDateOfMonth = this.lastDateOfMonth();
        if (date > lastDateOfMonth) {
            var currentDate = (date - lastDateOfMonth)
            this.selectUpcomingMonth(1)
            this.clickDate(parseInt(currentDate))
        }
        else
            this.clickDate(parseInt(date))
    },
    clickDate: function (date) {
        var finished = false;
        for (var i = 1; i < 7 && !finished; i++) {
            for (var j = 1; j <= 7; j++) {
                if (action.getText("//div[" + i + "]/div[" + j + "]" + this.calenderDate) == date) {
                    action.click("//div[" + i + "]/div[" + j + "]" + this.calenderDate)
                    finished = true;
                    break;
                }
            }
        }
    },
    lastDateOfMonth: function () {
        var finished = false;
        var updatedlastDate;
        for (var i = 5; i < 8 && !finished; i++) {
            for (var j = 1; j <= 7; j++) {
                updatedlastDate = lastDate;
                if (action.getElementCount("//div[" + i + "]/div[" + j + "]" + this.calenderDate) > 0) {
                    lastDate = action.getText("//div[" + i + "]/div[" + j + "]" + this.calenderDate, 1000)
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

    selectPreviousMonth: function (count) {
        for (var i = 1; i <= count; i++) {
            action.click(this.calenderLeftArrow)
        }
    },
    selectUpcomingMonth: function (count) {
        for (var i = 1; i <= count; i++) {
            action.click(this.calenderRightArrow);
        }
    },
    selectUpcomingYear: function (count) {
        var currentYear = action.getText(this.calenderSelectedYear)
        var totalCount = action.getElementCount(this.calenderYearListCount)
        for (var i = 1; i <= totalCount; i++) {
            action.scrollIntoView("//div[" + i + "]" + this.calenderYearList);
            if (action.getText("//div[" + i + "]" + this.calenderYearList) == currentYear) {
                action.click("//div[" + (i + count) + "]" + this.calenderYearList)
                break;
            }

        }
    },
    selectPreviousYear: function (count) {
        var currentYear = action.getText(this.calenderSelectedYear)
        var totalCount = action.getElementCount(this.calenderYearListCount)
        for (var i = 1; i <= totalCount; i++) {
            action.scrollIntoView("//div[" + i + "]" + this.calenderYearList);
            if (action.getText("//div[" + i + "]" + this.calenderYearList) == currentYear) {
                action.click("//div[" + (i - count) + "]" + this.calenderYearList)
                break;
            }

        }
    },
    clickCurrentYear: function () {
        action.click(this.calenderYear);
    },
    clickOkBtn: function () {
        res = action.click(this.datePicker_okBtn)
        if (res == true) {
            logger.logInto(stackTrace.get(), "--Current date is selected and OK button is clicked");
            res = action.getAttribute(this.endDate_txtbox, "value");
        }
        else {
            res = res + "-- OK button is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
    }
}