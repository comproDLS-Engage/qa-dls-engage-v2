var express = require("express");
var fs = require('fs');
const PageTemplate = require('./PageTemplate.json');
const cssProperty = require('./property.json');
var file, pageSelectorFile, arr = [], pageSelectorGroup = [], k , columnName;
var parse = require('csv-parse');
const fileUpload = require('express-fileupload');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
const PORT = 8000;
var sampleFile;
var uploadPath;


//use the application off of express.
var app = express();
app.use(fileUpload());

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index1.html");
});
app.post('/upload', function (req, res) {


    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    console.log('req.files >>>', req.files); // eslint-disable-line

    sampleFile = req.files.sampleFile;

    uploadPath = __dirname + '/uploads/' + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.sendFile(__dirname + "/pageObject.html");
        var parser = parse({ columns: true }, function (err, records) {
            pageSelectorFile = records;
            columnName = parser.options.columns;
        });
        fs.createReadStream(uploadPath).pipe(parser);
    });
});

app.listen(PORT, function () {
    console.log('Express server listening on port ', PORT); // eslint-disable-line
});
//define the route for "/"


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
            response.send("Your PageObject \"" + inputFile + ".page.js\" is genrated at \"" + __dirname + "\\outputFile\\" + inputFile + '.page.js\"');
            // Traverse the selector json
            //Create the output Page

            file = fs.createWriteStream(__dirname + "/outputFile/" + inputFile + '.page.js');
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
                generateAppDataJson(pageSelectorFile, inputFile) //for app data generation
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
                //console.log(pageSelectorGroup.length)
                getDatafunction(pageSelectorFile, pageSelectorGroup, inputFile)
                /*    if (pageSelectorFile[0].group == "")
                        generateGetDatafunction(pageSelectorFile, inputFile)
                    else
                        generateGroupGetDatafunction(pageSelectorGroup, inputFile)*/
            }

            if (clickFunctionsCheck) {
                // Basic Click functions
                console.log("Click Function is generated")
                generateClickFunctions(pageSelectorFile, inputFile, pageSelectorGroup, PageTemplate)
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
    file1 = fs.createWriteStream(__dirname + "/outputFile/" + 'selector.json');
    file1.write("{\"" + inputFile + "\": \n{\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        file1.write("\"" + pageSelectorFile[i].Label + "\" : \"" + pageSelectorFile[i].cssSelector + "\",\n")
    }
    file1.write("\n}\n}")
}

//test app data generator
function generateAppDataJson(pageSelectorFile, inputFile) {
    var fileEN, fileES;

    if (typeof(columnName.find(o => o.name.includes('AppLangEN'))) == "object") { //check for AppLangEng
        fileEN = fs.createWriteStream(__dirname + "/outputFile/" + 'appLangEN.json');
         fileEN.write("{\"" + inputFile + "\": \n{");

        if (typeof(columnName.find(o => o.name.includes('teacherAppLangEN'))) == "object") {

            fileEN.write("\n" + "\"" + "teacher" + "\": \n{\n");
            console.log(pageSelectorFile.length)
            for (var i = 0; i < pageSelectorFile.length; i++) {
                if (pageSelectorFile[i].teacherAppLangEN == '')
                    continue;

                else if(i == pageSelectorFile.length-2 ) //last record excluding header
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangEN + "\n")
                
                else
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangEN + ",\n")
            }
            fileEN.write("\n}")
        }

        if (typeof(columnName.find(o => o.name.includes('studentAppLangEN'))) == "object") { 

            fileEN.write(",\n" + "\"" + "student" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].studentAppLangEN == '')
                    continue;

                else if(i == pageSelectorFile.length-2 ) //last record excluding header
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangEN + "\n")                 
                
                else
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangEN + ",\n")
            }
            fileEN.write("\n}")

        }
        fileEN.write("\n}\n}")
    }


    if (typeof(columnName.find(o => o.name.includes('AppLangES'))) == "object") { //check for AppLang Spanish
        fileES = fs.createWriteStream(__dirname + "/outputFile/" + 'appLangES.json');
        fileES.write("{\"" + inputFile + "\": \n{");

        if (typeof(columnName.find(o => o.name.includes('teacherAppLangES'))) == "object") {

            fileES.write("\n" + "\"" + "teacher" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].teacherAppLangES == '')
                    continue;

                 else if(i == pageSelectorFile.length-2 ) //last record excluding header
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangES + "\n") 
                
                else
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangES + ",\n")
            }
            fileES.write("\n}")

        }

        if (typeof(columnName.find(o => o.name.includes('studentAppLangES'))) == "object") { 

            fileES.write(",\n" + "\"" + "student" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].studentAppLangES == '')
                    continue;

                else if(i == pageSelectorFile.length-2 ) //last record excluding header
                   fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangES + "\n")                       
               
                else
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangES + ",\n")
            }
            fileES.write("\n}")
        }
        fileES.write("\n}\n}")
    }
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

function getDatafunction(pageSelectorFile, pageSelectorGroup, inputFile) {
    var groupCheck = null;
    for (var i = 1; i < pageSelectorGroup.length; i++) {
        for (let j = 0; j < pageSelectorGroup[i].length; j++) {
            if ((pageSelectorGroup[i][j].group) != "") {
                groupCheck == true;
                generateGroupGetDatafunction(pageSelectorGroup, inputFile)
                return;
            }
        }
    }
    if (groupCheck == null)
        generateGetDatafunction(pageSelectorFile, inputFile)
    //generateGroupGetDatafunction(pageSelectorGroup, inputFile)
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
    file.write(key + "_Data: function ()\n{  \n")
    file.write("logger.logInto(stackTrace.get());\n var obj;\n obj = {\n")

    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) {
            file.write(pageSelectorFile[i].Label + ": this." + pageSelectorFile[i].Label + "_Data(),\n")
        }
        else {
            if (pageSelectorFile[i].tagName.toLowerCase().includes("img") || pageSelectorFile[i].tagName.toLowerCase().includes("svg")) {
                file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.waitForDisplayed(this." + pageSelectorFile[i].Label + ") : false,\n");
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
                "logger.logInto(stackTrace.get(), " + pageSelectorFile[i].Label + "_Arr);\n" +
                "return " + pageSelectorFile[i].Label + "_Arr;\n},\n\n")
        }

    }
}


function generateClickFunctions(pageSelectorFile, key, pageSelectorGroup, PageTemplate) {
    for (var k = 0; k < pageSelectorFile.length; k++) {
        if (((pageSelectorFile[k].extraInfo).toLowerCase().includes("pattern")) && ((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && ((pageSelectorFile[k].group) != "")) {
            //   console.log("sdafd" + pageSelectorFile[k].Label)
            for (var i = 1; i < pageSelectorGroup.length; i++) {
                //   console.log(pageSelectorGroup[i].length)
                for (var j = 0; j < pageSelectorGroup[i].length; j++) {

                    if ((pageSelectorGroup[i][j].length) != 0) {

                        if (pageSelectorGroup[i][j].Label == pageSelectorFile[k].Label) {
                            generategroupClickfunction(pageSelectorGroup[i], pageSelectorFile[k].Label, pageSelectorFile[k], PageTemplate)
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && ((pageSelectorFile[k].extraInfo).toLowerCase().includes("pattern")) && ((pageSelectorFile[k].group) == "")) {
                Clickfunction(pageSelectorFile[k].Label, pageSelectorFile[k].Label, pageSelectorFile[k], PageTemplate)
            }


            if (((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && (!(pageSelectorFile[k].extraInfo).includes("pattern"))) {
                file.write("\nclick_" + pageSelectorFile[k].Label + ": function () {\n" +
                    "logger.logInto(stackTrace.get());\n" +
                    "var res;\n" +
                    "res = action.click(this." + pageSelectorFile[k].Label + ");\n" +
                    "if (true == res) {\n logger.logInto(stackTrace.get(), \" " + pageSelectorFile[k].Label + " is clicked\");\n")
                if ((pageSelectorFile[k].returnValue) != "") {
                    generateReturnPage(PageTemplate, pageSelectorFile[k].returnValue);
                    /*     if ((pageSelectorFile[k].returnValue).toLowerCase().includes(".page"))
                             file.write("res =require" + PageTemplate.returnValue[pageSelectorFile[k].returnValue] + ";\n")
                         else
                             file.write("res= this.getData_" + pageSelectorFile[k].returnValue + "();");
     */
                }
                file.write(
                    "}\nelse {\nlogger.logInto(stackTrace.get(), res +\"" + pageSelectorFile[k].Label + " is NOT clicked\", 'error');\n}\n")
                file.write("return res;\n},\n")


                // console.log("Click function write")
            }

        }
    }

}
function generategroupClickfunction(pageSelectorGroup, selectorName, pageSelectorFileValue, PageTemplate) {
    var textcondition = null;
    var parentAvailable = null;
    var patternValue = null;
    for (var j = 0; j < pageSelectorGroup.length; j++) {
        if (((pageSelectorGroup[j].relation).toLowerCase().includes("parent"))) {
            parentAvailable = pageSelectorGroup[j].Label;
            break;
        }
    }

    for (var j = 0; j < pageSelectorGroup.length; j++) {
        if (((pageSelectorGroup[j].relation).toLowerCase().includes("condition"))) {
            textcondition = pageSelectorGroup[j].Label;
            break;
        }
    }


    if (textcondition == null) {
        for (var j = 0; j < pageSelectorGroup.length; j++) {

            if (((pageSelectorGroup[j].relation).toLowerCase().includes("parent"))) {
                textcondition = pageSelectorGroup[j].Label;
                break;
            }
        }
    }

    if ((textcondition == null) && (parentAvailable == null)) {
        for (var j = 0; j < pageSelectorGroup.length; j++) {

            if (((pageSelectorGroup[j].extraInfo).toLowerCase().includes("pattern"))) {
                patternValue = true;
            }
        }
    }
    if (textcondition == null) {
        textcondition = selectorName;
    }
    if (parentAvailable != null || patternValue == true) {
        Clickfunction(textcondition, selectorName, pageSelectorFileValue, PageTemplate);
    }
    else
        Clickfunctionindex(textcondition, selectorName, pageSelectorFileValue, PageTemplate);
}

function Clickfunctionindex(textcondition, selectorName, seletorRow, PageTemplate) {
    file.write("\nclick_" + selectorName + ": function (" + textcondition + "Name) {\n" +
        "logger.logInto(stackTrace.get());\n" +
        "var i, res;\n")
    if (textcondition != selectorName) {
        file.write( "var " + textcondition + "  = action.findElements(this." + textcondition + ");\n" +
            "var " + selectorName + " = action.findElements(this." + selectorName + ");\n" +
            "for (i = 0; i < " + textcondition + ".length; i++) {\n" +
            "if ((action.getText(" + textcondition + "[i]))== " + textcondition + "Name) {\n " +
            "res = action.click(" + selectorName + "[i]);\n" +
            "break;\n}\n" +
            "}\nif (res == true) {\n  logger.logInto(stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    }
    else {
        file.write(
            "var " + selectorName + " = action.findElements(this." + selectorName + ");\n" +
            "for (i = 0; i < " + selectorName + ".length; i++) {\n" +
            "if ((action.getText(" + selectorName + "[i]))== " + selectorName + "Name) {\n " +
            "res = action.click(" + selectorName + "[i]);\n" +
            "break;\n}\n" +
            "}\nif (res == true) {\n  logger.logInto(stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    }
    if ((seletorRow.returnValue) != "") {
        generateReturnPage(PageTemplate, seletorRow.returnValue);

    }
    file.write(

        "} \nelse\n" +
        "logger.logInto(stackTrace.get(), \" --" + selectorName + " NOT clicked\", \"error\")\n");

    file.write("return res;\n},\n")
}

function Clickfunction(textcondition, selectorName, seletorRow, PageTemplate) {
    file.write("\nclick_" + selectorName + ": function (" + textcondition + "Name) {\n" +
        "logger.logInto(stackTrace.get());\n" +
        "var i, list, res;\n" +
        "list = action.findElements(this." + selectorName + ");\n" +
        "for (i = 0; i < list.length; i++) {\n" +
        "if ((action.getText(this." + textcondition + "+i+\"]\"))== " + textcondition + "Name) {\n " +
        "res = action.click(list[i]);\n" +
        "break;\n}\n" +
        "}\nif (res == true) {\n  logger.logInto(stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    if ((seletorRow.returnValue) != "") {
        generateReturnPage(PageTemplate, seletorRow.returnValue);

    }
    file.write(

        "} \nelse\n" +
        "logger.logInto(stackTrace.get(), \" --" + selectorName + " NOT clicked\", \"error\")\n");

    file.write("return res;\n},\n")
}

function generateReturnPage(PageTemplate, returnValue) {

    const returnValueArray = returnValue.split(",");
    if (returnValueArray.length == 1) {
        if ((returnValue).toLowerCase().includes(".page"))
            file.write("res =require ('./" + returnValueArray[0] + "').isInitialized();\n")
        else
            file.write("res= this.getData_" + returnValueArray[0] + "();");
    }
    else {

        file.write("res=action." + returnValueArray[0] + "(this." + returnValueArray[1])
        if (returnValueArray.length > 2) {
            for (let i = 2; i < returnValueArray.length; i++)
                file.write("," + returnValueArray[i])
        }
        file.write(");")
    }

}

function generateSetValueFunctions(pageSelectorFile) {
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea")) {
            file.write("\nset_" + pageSelectorFile[i].Label + ": function (value)" + "{\nvar res;" +
                "\nlogger.logInto(stackTrace.get());\n" +
                "res = action.setValue(this." + pageSelectorFile[i].Label + ",value);\n" +
                "if (true == res) {\nlogger.logInto(stackTrace.get(), \"Value is entered in " + pageSelectorFile[i].Label + "\");\n}" +
                "else {\nlogger.logInto(stackTrace.get(), res + \"Value is NOT entered in " + pageSelectorFile[i].Label + "\", 'error');\n}\n" +
                "return res;\n},\n")
        }
        if ((pageSelectorFile[i].tagName).toLowerCase().includes("upload")) {
            file.write("\nupload_" + pageSelectorFile[i].Label + ": function (testdata)" + "{\nvar res;" +
                "\nlogger.logInto(stackTrace.get());\n" +
                "res = action.uploadFile(testdata);\n" +
                "if ((typeof res) === 'string') {\n" +
                "res = action.setValue(this." + pageSelectorFile[i].Label + " , res);\n" +
                "}\nlogger.logInto(stackTrace.get(), res);\n" +
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
            for (var i = 0; i < group.length; i++) {
                if ((group[i].relation).toLowerCase().includes("condition")) {
                    // console.log("groupName" + groupName)
                    dataPatternGenerateWithCondition(group, groupName, i)
                    generate = true;
                    break;

                }
            }
        }
        if (generate == false) {
            dataPatternGenerate(group, groupName);
        }
    }
    //}
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
                file.write(pageSelectorFile[i].Label + ":(action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0) ? action.waitForDisplayed(this." + pageSelectorFile[i].Label + ") : false,\n");
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
    for (var j = 0; j < groupSelectorData.length; j++) {
        if (((groupSelectorData[j].relation).toLowerCase().includes("parent"))) {
            selectedText = groupSelectorData[j].Label;
            break;
        }
    }
    if (selectedText)
        file.write("getData_" + groupName + ": function (" + selectedText + "Name)\n{\n")
    else
        file.write("getData_" + groupName + ": function ()\n{\n")
    file.write("logger.logInto(stackTrace.get());\n")
    file.write("var obj=[];\n")
    file.write("action.waitForDisplayed(this." + groupSelectorData[key].Label + ");\n" +
        "var list = action.findElements(this." + groupSelectorData[key].Label + ");\n");


    if (selectedText) {
        file.write(" if (" + selectedText + "Name) {" +
            "for (var i=0;i<list.length;i++){\n" +
            "if (action.getText(this." + selectedText + " + i) == " + selectedText + "Name) {\n")

        file.write("obj[0] = {\n")
        for (var i = 0; i < groupSelectorData.length; i++) {
            if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\") > 0) ? action.waitForDisplayed(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
                } else
                    file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")  > 0) ? action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");

            }
        }
        file.write("}\n break; \n}\n } \n")
        for (var i = 0; i < groupSelectorData.length; i++) {
            if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ") > 0) ? action.waitForDisplayed(this." + groupSelectorData[i].Label + ")  : false\n");
                } else
                    file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ")  > 0) ? action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

            }
        }
        file.write("}else{\n ")
    }


    file.write("for (var i=0;i<list.length;i++){\n obj[i] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {

        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            // console.log("groupName" + groupSelectorData[i].Label)
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\") > 0) ? action.waitForDisplayed(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")  > 0) ? action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");
        }
    }
    file.write("}\n")
    if (selectedText) {
        file.write(" }\n")
    }
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ") > 0) ? action.waitForDisplayed(this." + groupSelectorData[i].Label + ")  : false\n");
            } else
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(this." + groupSelectorData[i].Label + ")  > 0) ? action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

        }
    }
    file.write("}\n")
    file.write("return obj; \n},\n\n")
}


function dataPatternGenerateWithCondition(groupSelectorData, groupName, key) {
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
    file.write("var obj =[] , i , arr = [];\n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        file.write("var " + groupSelectorData[i].Label + "=action.findElements(this." + groupSelectorData[i].Label + ")\n");
    }

    file.write(" if (" + selectedText + "Name) {" +
        "for (var i=0;i<" + selectedText + ".length;i++){\n" +
        "if (action.getText(" + selectedText + "[i]) == " + selectedText + "Name) {\n")

    file.write("obj[0] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0) ? action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0) ? action.getText(" + groupSelectorData[i].Label + "[i])  : null,\n");

        }
    }
    file.write("}\n break; \n}\n } \n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0) ? action.waitForDisplayed(" + groupSelectorData[i].Label + "[i] )  : false\n");
            } else
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0) ? action.getText(" + groupSelectorData[i].Label + "[i])  : null\n");

        }
    }
    file.write("}else{\n ")
    //}


    file.write("for (var i=0;i<" + selectedText + ".length;i++){\n obj[i] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {

        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            // console.log("groupName" + groupSelectorData[i].Label)
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0) ? action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":(action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0) ? action.getText(" + groupSelectorData[i].Label + "[i])  : null,\n");
        }
    }
    file.write("}\n}\n")
    if (selectedText) {
        file.write(" }\n")
    }
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0) ? action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false\n");
            } else
                file.write("obj." + groupSelectorData[i].Label + "=(action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0) ? action.getText(" + groupSelectorData[i].Label + "[i])  : null\n");

        }
    }
    //file.write("}\n")
    file.write("return obj; \n},\n\n")
}