"use strict";
//hTML-dnd module required
//var dragAndDrop = require('html-dnd').codeForSelectors;

var res, res2;
var message;
//base action
module.exports = {

    click: function (selector, options) {
        message = "element:" + selector;
        try {
            this.scrollIntoView(selector, { block: "center" });
            let result = $(selector).click(options);
            if (result == null) {
                logger.logInto(stackTrace.get(), message);
                return true;
            }
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    doubleClick: function (selector) {
        message = "element:" + selector;
        try {
            $(selector).isClickable();
            $(selector).doubleClick();
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isEnabled: function (selector) {
        message = "element:" + selector;
        try {
            let result = $(selector).isEnabled();
            logger.logInto(stackTrace.get(), message);
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isClickable: function (selector) {
        try {
            let result = $(selector).isClickable();
            logger.logInto(stackTrace.get(), message);
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isDisplayed: function (selector) {
        try {
            let result = $(selector).isDisplayed();
            logger.logInto(stackTrace.get(), message);
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    setValue: function (selector, value) {
        message = "element:" + selector + " value:" + value;
        try {
            this.clearValue(selector);
            $(selector).setValue(value);
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    addValue: function (selector, value) {
        message = "element:" + selector + "value:" + value;
        try {
            let result = $(selector).addValue(value);
            if (result == null) {
                logger.logInto(stackTrace.get(), message);
                return true;
            }
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getValue: function (selector, value) {
        message = "element:" + selector + "value:" + value;
        try {
            let result = $(selector).getValue(value);
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },
    clearValueDefault: function (selector) {
        message = "element:" + selector + "value:";
        try {
            let result = $(selector).clearValue();
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },
    
    clearValue: function (selector) {
        message = "element:" + selector;
        try {
            browser.execute((selector) => {
                var elem = document.querySelector(selector);
                var event = new Event('input', { bubbles: true });
                elem.value = null;
                elem.dispatchEvent(event);
                elem.focus();
            }, selector);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    moveTo: function (selector, xOffset, yOffset) { //this function needs to be enhanced to support offsets in percentages
        message = "element:" + selector + " xoffset:" + xOffset + " yoffset:" + yOffset;
        try {
            $(selector).moveTo({ xOffset, yOffset });
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    dragAndDrop: function (draggable, droppable) {
        logger.logInto(stackTrace.get());
        message = "draggable:" + draggable + " droppable:" + draggable;
        try {
            var actions = {
                "type": "pointer",
                "id": "mouse1",
                "parameters": { "pointerType": "touch" },
                "actions": [
                    { "type": "pointerMove", "duration": 100, "origin": $(draggable), "x": 0, "y": 0 },
                    { "type": "pointerDown", "button": 0 },
                    { "type": "pointerMove", "duration": 1000, "origin": $(droppable), "x": 0, "y": 0 },
                    { "type": "pointerUp", "button": 0 }
                ]
            }
            browser.performActions([actions]);
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    dragAndDrop2: function (draggable, droppable) {
        //drag and drop using perform actions
        logger.logInto(stackTrace.get());
        message = "draggable:" + draggable + " droppable:" + droppable;
        try {
            var actions1 = {
                "type": "pointer",
                "id": "mouse1",
                "parameters": { "pointerType": "touch" },
                "actions": [
                    { "type": "pointerMove", "duration": 100, "origin": $(draggable), "x": 0, "y": 0 },
                    { "type": "pointerDown", "button": 0 },
                    { "type": "pointerMove", "duration": 0, "origin": $(droppable), "x": 0, "y": 0 },
                    { "type": "pointerMove", "duration": 100, "origin": $(droppable), "x": 1, "y": 0 },
                    { "type": "pointerUp", "button": 0 }
                ]
            }

            browser.performActions([actions1]);
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    waitForDisplayed: function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            $(selector).waitForDisplayed({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    waitForExist: function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            $(selector).waitForExist({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    waitForClickable: function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            $(selector).waitForClickable({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getText: function (selector) {
        message = "element:" + selector;
        try {
            res = $(selector).getText();
            logger.logInto(stackTrace.get(), message + ":" + res);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getAttribute: function (selector, attributeValue) {
        try {
            res = $(selector).getAttribute(attributeValue);
            message = "element:" + selector + " attributeValue:" + attributeValue + " value:" + res;
            logger.logInto(stackTrace.get(), message);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getElementCount: function (selector) {
        message = "element:" + selector;
        try {
            logger.logInto(stackTrace.get(), message);
            res = $$(selector).length;
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getCSSProperty: function (selector, propertyname) {
        try {
            res = $(selector).getCSSProperty(propertyname);
            message = "element:" + selector + " propertyname:" + propertyname + " value:" + res;
            logger.logInto(stackTrace.get(), message);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    findElements: function (selector) {
        message = "element:" + selector;
        try {
            logger.logInto(stackTrace.get(), message);
            res = $$(selector);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    scrollIntoView: function (selector, options) {
        message = "element:" + selector;
        try {
            res = $(selector).scrollIntoView(options)
            logger.logInto(stackTrace.get(), message);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    switchToFrame: function (id) {
        message = "frameID:" + id;
        try {
            res = browser.switchToFrame(id);
            logger.logInto(stackTrace.get(), message);
            if (res == null)
                return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    switchToParentFrame: function () {
        try {
            res = browser.switchToFrame(null)
            logger.logInto(stackTrace.get(), res);
            if (res == null)
                return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    hideKeyboard: function () {
        if (driver.isKeyboardShown() == true) {
            // console.log("Keyboard is visible");
            driver.hideKeyboard();
        }
    },

    waitForDocumentLoad: function () {
        logger.logInto(stackTrace.get());
        res = this.waitForDisplayed("[data-tid=image-loader]", undefined, true);
        res2 = this.waitForDisplayed("[class*=rogress][class*=indeterminate]", undefined, true);
        if (!res)
            console.log("Loader (image-loader) still exists after 30s - " + res)
        else if (!res2)
            console.log("Loader (CircularProgress) still exists after 30s - " + res2)
        else {
            res = browser.waitUntil(function () {
                return browser.execute(function () {
                    var imagesLoad;
                    let imgs = document.getElementsByTagName("img");
                    if (imgs.length > 0) {
                        imagesLoad = Array.prototype.every.call(imgs, img => {
                            //console.log("img.tid:-" + img["dataset"]["tid"] + "  img.complete:-" + img.complete)
                            //console.log("document.readyState:-" + document.readyState)
                            return img.complete;
                        }) && document.readyState === 'complete'
                    }
                    else {
                        //console.log("NO Image :document.readyState:-" + document.readyState)
                        imagesLoad = (document.readyState === 'complete');
                    }
                    return imagesLoad === true && document.readyState === 'complete'
                })
            }, {
                timeout: 60000,
                timeoutMsg: "Oops! Page did not load in 60s"
            })
        }
        return res;
    },

    selectByAttribute: function (selector, attribute, value) {
        message = "element:" + selector;
        try {
            res = $(selector).selectByAttribute(attribute, value);
            logger.logInto(stackTrace.get(), message);
            return res;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    uploadFile: function (localPath) {
        try {
            let remoteFilePath = browser.uploadFile(localPath);
            logger.logInto(stackTrace.get(), message);
            return remoteFilePath;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    parentElement: function (selector) {
        message = "element:" + selector;
        try {
            let result = $(selector).parentElement();
            logger.logInto(stackTrace.get(), message);
            return result;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    },

    keyPress: function (value) {
        message = "key:" + value;
        try {
            res = browser.keys(value);
            logger.logInto(stackTrace.get(), message);
            return true;
        } catch (err) {
            logger.logInto(stackTrace.get(), err.message, "error");
            return err;
        }
    }
}