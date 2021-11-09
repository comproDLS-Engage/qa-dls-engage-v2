var express = require("express");
var fs = require('fs');
const PageTemplate = require('./PageTemplate.json');
const cssProperty = require('./property.json');
var file, pageSelectorFile, arr = [], pageSelectorGroup = [], k;
var parse = require('csv-parse');

var parser = parse({ columns: true }, function (err, records) {
    pageSelectorFile = records;
});
fs.createReadStream(__dirname + '/GlobalResources1.csv').pipe(parser);


//use the application off of express.
var app = express();


//define the route for "/"
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/pageObject.html");
});

app.get("/getvalue", function (request, response) {
    var inputFile = request.query.inputFile;
    var isInitializedcheck = request.query.isInitialized;
    var getDataCheck = request.query.getData;
    var selectorJsonCheck = request.query.selectorJson;
    var pageHeaderCheck = request.query.pageHeader;
    var param1Check = request.query.baseAction;
    var param2Check = request.query.selectorFile;
    var selectorDeclartionCheck = request.query.selectorDeclartion;
    var clickFunctionsCheck = request.query.clickFunction;
    var setValueFunctionsCheck = request.query.setValueFunction;
    var appShellPageCheck = request.query.appShellPage;

    if (inputFile != "") {
        try {
            response.send("Your Page  is generated with " + inputFile + ".js");
            // Traverse the selector json
            //Create the output Page
            file = fs.createWriteStream(inputFile + '.js');
            for (let i = 1; i < pageSelectorFile.length; i++) {
                for (let j = 1; j < pageSelectorFile.length; j++) {
                    pageSelectorGroup[i] = [];
                }
            }
            for (var i = 0; i < pageSelectorFile.length; i++) {
                arr[i] = pageSelectorFile[i].group

            }
            let unique = [...new Set(arr)]
            for (var j = 1; j <= unique.length; j++) {
                k = 0;
                for (var i = 0; i < pageSelectorFile.length; i++) {
                    if (unique[j - 1] == pageSelectorFile[i].group) {
                        pageSelectorGroup[j][k] = pageSelectorFile[i]
                        k++;
                    }

                }
            }
            if (selectorJsonCheck) {
                generatePageSelectorJson(pageSelectorFile, inputFile);
            }
            if (pageHeaderCheck) {

                // Generate Page Header
                if (param1Check)
                    if (param2Check)
                        if (appShellPageCheck)
                            generatePageHeader(PageTemplate, param1Check, param2Check, appShellPageCheck);
                        else
                            generatePageHeader(PageTemplate, param1Check, param2Check);
                    else
                        generatePageHeader(PageTemplate, param1Check);
                else
                    generatePageHeader(PageTemplate);
            }

            if (selectorDeclartionCheck) {
                //Travserse the Selector of a page     
                generatePageSelector(pageSelectorFile, inputFile);
            }

            if (isInitializedcheck) {
                if (appShellPageCheck)

                    generateIsinitiazeFunction(pageSelectorFile, PageTemplate, appShellPageCheck);
                else
                    generateIsinitiazeFunction(pageSelectorFile, PageTemplate);
            }

            if (getDataCheck) {
                //Basic Data function
                console.log("Data function is generated")
                generategetCssPropertyData(pageSelectorFile, inputFile, cssProperty)
                if (pageSelectorFile[0].group == "")
                    generateGetDatafunction(pageSelectorFile, inputFile)
                else
                    generateGroupGetDatafunction(pageSelectorGroup, inputFile)
            }

            if (clickFunctionsCheck) {
                // Basic Click functions
                console.log("Click Function is generated")
                generateClickFunctions(pageSelectorFile, inputFile, pageSelectorGroup)
            }

            if (setValueFunctionsCheck) {
                // Basic SetData functions
                console.log("Set Value Function is generated")
                generateSetValueFunctions(pageSelectorFile, inputFile)
            }
            file.write("\n}\n\n")


            file.end();
        }
        catch (err) {
            console.log(err)
        }

    }
    else {
        response.send("Please provide us input File");
    }
});

//start the server
app.listen(8080);

console.log("Please launch http://localhost:8080 in your browser url");

function generatePageSelectorJson(pageSelectorFile, inputFile) {
    file1 = fs.createWriteStream('selector.json');
    file1.write("{\"" + inputFile + "\": \n{\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        file1.write("\"" + pageSelectorFile[i].Label + "\" : \"" + pageSelectorFile[i].cssSelector + "\",\n")
    }
    file1.write("\n}\n}")
}
//Genrate header of the page
function generatePageHeader(PageTemplate, param1, param2, appShellPageCheck) {
    file.write("\"use strict\";\n")

    if (param1)
        file.write(PageTemplate.header[param1])
    if (param2)
        file.write(PageTemplate.header[param2])
    if (appShellPageCheck)
        file.write(PageTemplate.isInitialized.appShellPageDeclartion)
    //file.write("\nlet obj;\n")
    file.write("\n\nmodule.exports = {\n");

}

//Generate Selector of a page
function generatePageSelector(pageSelectorFile, inputFile) {
    for (var i = 0; i < pageSelectorFile.length; i++) {
        file.write(pageSelectorFile[i].Label + ": selectorFile.css.ComproEngage." + inputFile + "." + pageSelectorFile[i].Label + ",\n");
    }
}

//Basic isinitialize fucntion  
function generateIsinitiazeFunction(pageSelectorFile, PageTemplate, param1) {
    var flag = false;
    file.write("\n\nisInitialized: function ()\n{ \n" +
        "var res;\n" +
        "logger.logInto(stackTrace.get());\n" +
        "action.waitForDocumentLoad();\nres = {\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        // console.log(pageSelectorFile[i].extraInfo)
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("isinitialization")) {
            //   console.log(pageSelectorFile[i].Label)
            file.write("pageStatus: action.waitForDisplayed(this." + pageSelectorFile[i].Label + "),\n")
            flag = true;
            break;
        }
    }
    if (flag == false) {
        file.write("pageStatus:  action.waitForDisplayed(this." + pageSelectorFile[0].Label + "),\n")// to be decided about the by default label to be selected
    }
    if (param1)
        file.write(PageTemplate.isInitialized[param1])
    file.write("};\n")

    //  if (param1)
    //    file.write(PageTemplate.isInitialized.appShellPagecall)
    file.write("return res; \n},\n\n")
}

function generateGetDatafunction(pageSelectorFile, key) {
    file.write(key + "_Data: function ()\n  \n")
    file.write("logger.logInto(stackTrace.get());\n var obj;\n obj = {\n")

    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) {
            file.write(pageSelectorFile[i].Label + ": this." + pageSelectorFile[i].Label + "_Data(),\n")
        }
        else {
            if (pageSelectorFile[i].tagName.toLowerCase().includes("img") || pageSelectorFile[i].tagName.toLowerCase().includes("svg")) {
                file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.waitForExist(this." + pageSelectorFile[i].Label + ") : false,\n");
            } else {
                if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea"))
                    file.write(pageSelectorFile[i].Label + ": (action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.getAttribute(this." + pageSelectorFile[i].Label + ", \"placeholder\") : null,\n")
                else
                    file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.getText(this." + pageSelectorFile[i].Label + ") : null,\n");
            }
        }
    }
    file.write("}\n return obj; \n},\n\n")
    listDataGenerate1(pageSelectorFile);
}


function generategetCssPropertyData(pageSelectorFile, key, cssProperty) {

    var cssPropertyState = false;
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("cssproperty")) {
            cssPropertyState = true;
            break;
        }
    }
        if (cssPropertyState == true) {
            file.write("getCssPropertyData: function ()\n{\n  logger.logInto(stackTrace.get()); \nvar obj;\n obj = {\n")

            for (var i = 0; i < pageSelectorFile.length; i++) {
                if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("cssproperty")) {
                    var cssSelectorTag = pageSelectorFile[i].tagName
                    var cssSelectorTagGroup = cssProperty.elements[cssSelectorTag];
                    //console.log(cssProperty.cssProperty[cssSelectorTagGroup])
                    for (var j = 0; j < cssProperty.cssProperty[cssSelectorTagGroup].length; j++) {
                        var labelValue = cssProperty.cssProperty[cssSelectorTagGroup][j]
                        labelValue = labelValue.replace(/-|\s/g, "")
                        file.write(pageSelectorFile[i].Label + "_" + labelValue + ": action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0 ? action.getCSSProperty(this." + pageSelectorFile[i].Label + ", '" + cssProperty.cssProperty[cssSelectorTagGroup][j] + "').value : null,\n")
                    }

                }
            }

            file.write("}\n return obj; \n},\n\n")
        }
    }


    function generateGroupGetDatafunction(pageSelectorGroup) {
        for (var i = 1; i < pageSelectorGroup.length; i++) {
            //console.log(pageSelectorGroup[i].length)
            if (pageSelectorGroup[i] != '') {
                generategroupDatafunction(pageSelectorGroup[i], pageSelectorGroup[i][0].group)
            }
        }
    }

    /*function listDataGenerate(pageSelectorFile) {
        for (var i = 0; i < pageSelectorFile.length; i++) {
            if (pageSelectorFile[i].group == "") {
                if (((pageSelectorFile[i].extraInfo).includes("pattern"))) {
                    file.write(pageSelectorFile[i].Label + "_Data: function ()\n {\n")
                    file.write("let i, list;\n" +
                        "let " + pageSelectorFile[i].Label + "_Arr = [];\n" +
                        "list = action.findElements(this." + pageSelectorFile[i].Label + ");\n" +
                        "for (i = 0; i < list.length; i++) {\n" +
                        pageSelectorFile[i].Label + "_Arr[i] = action.getText(list[i])\n" +
                        "}\n" +
                        "logger.logInto(stackTrace.get(), componentArr);\n" +
                        "return " + pageSelectorFile[i].Label + "_Arr;\n},\n\n")
                }
            }
        }
    }*/
    function listDataGenerate1(pageSelectorFile) {

        for (var i = 0; i < pageSelectorFile.length; i++) {
            if (((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern"))) {
                file.write(pageSelectorFile[i].Label + "_Data: function ()\n {\n")
                file.write("logger.logInto(stackTrace.get());\n")
                file.write("var i, list;\n" +
                    "var " + pageSelectorFile[i].Label + "_Arr = [];\n" +
                    "list = action.findElements(this." + pageSelectorFile[i].Label + ");\n" +
                    "for (i = 0; i < list.length; i++) {\n" +
                    pageSelectorFile[i].Label + "_Arr[i] = action.getText(list[i])\n" +
                    "}\n" +
                    "logger.logInto(stackTrace.get(), "+ pageSelectorFile[i].Label + "_Arr);\n" +
                    "return " + pageSelectorFile[i].Label + "_Arr;\n},\n\n")
            }

        }
    }

    function generateClickFunctions(pageSelectorFile, key, pageSelectorGroup) {
        var selectedText = null;
        for (var i = 0; i < pageSelectorFile.length; i++) {
            selectedText = null;
            if (((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) && ((pageSelectorFile[i].tagName).toLowerCase().includes("button"))) {
                //   var groupName = pageSelectorFile[i].group
                //console.log(groupName)
                for (let i = 1; i < pageSelectorGroup.length; i++) {

                    for (var j = 0; j < pageSelectorGroup[i].length; j++) {
                        if (((pageSelectorGroup[i][j].relation).toLowerCase().includes("condition"))) {
                            selectedText = pageSelectorGroup[i][j].Label;
                            break;
                        }
                    }
                }
                if (selectedText == null) {
                    selectedText = pageSelectorFile[i].Label;
                }
                file.write("\nclick_" + pageSelectorFile[i].Label + ": function (" + selectedText + "Name) {\n" +
                    "logger.logInto(stackTrace.get());\n" +
                    "var i, list, res;\n" +
                    "list = action.findElements(this." + pageSelectorFile[i].Label + ");\n" +
                    "for (i = 0; i < list.length; i++) {\n" +
                    "if ((action.getText(this." + selectedText + "+i+\"]\"))== " + selectedText + "Name) {\n " +
                    "res = action.click(list[i]);\n" +
                    "break;\n}\n" +
                    "}\nif (res == true) {\n" +
                    "logger.logInto(stackTrace.get(), \" --" + pageSelectorFile[i].Label + " clicked\");\n" +
                    "} \nelse\n" +
                    "logger.logInto(stackTrace.get(), \" --" + pageSelectorFile[i].Label + " NOT clicked\", \"error\")\n" +
                    "logger.logInto(stackTrace.get(), res);\n" +
                    "return res;\n},\n")
            }


            else {
                if ((pageSelectorFile[i].tagName).toLowerCase().includes("button")) {
                    file.write("\nclick_" + pageSelectorFile[i].Label + ": function () {\n" +
                        "logger.logInto(stackTrace.get());\n" +
                        "var res;\n" +
                        "res = action.click(this." + pageSelectorFile[i].Label + ");\n" +
                        "if (true == res) {\n logger.logInto(stackTrace.get(), \" " + pageSelectorFile[i].Label + " button is clicked\");\n}" +
                        "else {\nlogger.logInto(stackTrace.get(), res, 'error');\n}\n" +
                        "return res;\n},\n")
                }
            }
        }
    }
    function generateSetValueFunctions(pageSelectorFile) {
        for (var i = 0; i < pageSelectorFile.length; i++) {
            if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea")) {
                file.write("\nset_" + pageSelectorFile[i].Label + ": function (value)" + "{\nvar res;" +
                    "\nlogger.logInto(stackTrace.get());\n" +
                    "res = action.setValue(this." + pageSelectorFile[i].Label + ",value);\n" +
                    "if (true == res) {\nlogger.logInto(stackTrace.get(), \"Value is entered in " + pageSelectorFile[i].Label + "\");\n}" +
                    "else {\nlogger.logInto(stackTrace.get(), res, 'error');\n}\n" +
                    "return res;\n},\n")
            }
        }
    }
    function generategroupDatafunction(group, groupName) {

        var generate = false;
        if (groupName != "") {
            for (var i = 0; i < group.length; i++) {
                if ((group[i].relation).toLowerCase().includes("parent")) {
                    // console.log("groupName" + groupName)
                    dataPatternGenerateWithParent(group, groupName, i)
                    generate = true;
                    break;

                }
            }
            if (generate == false) {
                dataPatternGenerate(group, groupName);
            }
        }
    }

    function dataPatternGenerate(pageSelectorFile, groupName) {
        file.write("getData_" + groupName + ": function ()\n{\n")
        file.write("logger.logInto(stackTrace.get());\n")
        file.write("var obj;\n")
        file.write("obj = {\n")
        for (var i = 0; i < pageSelectorFile.length; i++) {
            if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) {
                file.write(pageSelectorFile[i].Label + ": this." + pageSelectorFile[i].Label + "_Data(),\n")
            }
            else {
                if ((pageSelectorFile[i].tagName).toLowerCase().includes("img") || (pageSelectorFile[i].tagName).toLowerCase().includes("svg")) {
                    file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.waitForExist(this." + pageSelectorFile[i].Label + ") : false,\n");
                } else
                    file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.getText(this." + pageSelectorFile[i].Label + ") : null,\n");
            }
        }
        file.write("}\n return obj; \n},\n\n")
        listDataGenerate1(pageSelectorFile);
    }
    function dataPatternGenerateWithParent(groupSelectorData, groupName, key) {
        selectedText = "";
        for (var j = 0; j < groupSelectorData.length; j++) {
            if (((groupSelectorData[j].relation).toLowerCase().includes("condition"))) {
                selectedText = groupSelectorData[j].Label;
                break;
            }
        }
        if (selectedText)
            file.write("getData_" + groupName + ": function (" + selectedText + "Name)\n{\n")
        else
            file.write("getData_" + groupName + ": function ()\n{\n")
        file.write("logger.logInto(stackTrace.get());\n")
        file.write("var obj;\n")
        file.write("action.waitForDisplayed(this." + groupSelectorData[key].Label + ");\n" +
            "var list = action.findElements(this." + groupSelectorData[key].Label + ");\n");


        if (selectedText) {
            file.write(" if (" + selectedText + "Name) {" +
                "for (var i=0;i<=list.length;i++){\n" +
                "if (action.getText(this." + selectedText + " + i) == " + selectedText + "Name) {\n")

            file.write("obj[0] = {\n")
            for (var i = 0; i < groupSelectorData.length; i++) {
                if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
                    if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                        file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\") > 0) ? action.waitForExist(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
                    } else
                        file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")  > 0) ? action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");

                }
            }
            file.write("}\n}\n} \n")
            for (var i = 0; i < groupSelectorData.length; i++) {
                if (!(groupSelectorData[i].extraInfo).toLowerCase().includes( "pattern")) {
                    if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                        file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ") > 0) ? action.waitForExist(this." + groupSelectorData[i].Label + ")  : false\n");
                    } else
                        file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ")  > 0) ? action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

                }
            }
            file.write("}else{\n ")
        }


        file.write("for (var i=0;i<=list.length;i++){\n obj[i] = {\n")
        for (var i = 0; i < groupSelectorData.length; i++) {

            if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")){
                // console.log("groupName" + groupSelectorData[i].Label)
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\") > 0) ? action.waitForExist(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
                } else
                    file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")  > 0) ? action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");
            }
        }
        file.write("}\n}\n")
        if (selectedText) {
            file.write(" }\n")
        }
        for (var i = 0; i < groupSelectorData.length; i++) {
            if (!(groupSelectorData[i].extraInfo).toLowerCase().includes( "pattern")) {
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ") > 0) ? action.waitForExist(this." + groupSelectorData[i].Label + ")  : false\n");
                } else
                    file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ")  > 0) ? action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

            }
        }
        //file.write("}\n")
        file.write("return obj; \n},\n\n")
    }