var fs = require('fs');
var argv = require('yargs').argv;
const jsonFormat = require('json-format');
const PageTemplate = require('./PageTemplate.json');
//var PageTemplate = jsonParserUtil.jsonParser(PageTemplate);
var file;

fs.readFile("selector.json", 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var pageJson = JSON.parse(data);


    // Traverse the selector json
    Object.keys(pageJson).forEach(function (key) {

        //Create the output Page
        file = fs.createWriteStream(key + '.js');

        // Generate Page Header
        generatePageHeader();

        //Travserse the Selector of a page     
        generatePageSelector(pageJson, key);


        //Generate Basic isinitialize fucntion  
        genrateIsinitiazeFunction(key);


        //Basic Data function
        gnerateGetDatafucntion(pageJson, key)


        // Basic Click/GetData functions
        generateBasicFucntions(pageJson, key)

        file.write("\n}\n\n")

    })
    file.end();
})

//Genrate header of the page
function generatePageHeader() {
    file.write(PageTemplate.header.useStrict );

}

//Generate Selector of a page
function generatePageSelector(pageJson, key) {
    file.write("module.exports =\n{")
    Object.keys(pageJson[key].cssselector).forEach(function (pageName) {
        file.write(pageName + ": selectorFile." + key + ".cssselector." + pageName + ",\n");
    });
}

//Basic isinitialize fucntion  
function genrateIsinitiazeFunction(key) {
    file.write(PageTemplate.isInitialized.fucntionName +
        PageTemplate.isInitialized.logger +
        PageTemplate.isInitialized.documentLoad +
        "res = this." + key + "_Data();\n" +
        PageTemplate.isInitialized.return);
}

function gnerateGetDatafucntion(pageJson, key) {
    file.write(key + "_Data: function ()\n {\nvar obj = {\n")
    Object.keys(pageJson[key].cssselector).forEach(function (pageselector) {
        if ((pageselector.substring(0, pageselector.indexOf("_"))).toLowerCase().includes("img"))
            file.write(pageselector + ":(action.getElementCount(this." + pageselector + ") > 0) ? action.waitForExist(this." + pageselector + ") : false,\n");
        else
            file.write(pageselector + ":(action.getElementCount(this." + pageselector + ") > 0) ? action.getText(this." + pageselector + ") : null,\n");
    });

}

function generateBasicFucntions(pageJson, key) {
    file.write("}\n return obj \n},\n\n")
    Object.keys(pageJson[key].cssselector).forEach(function (pageselector) {
        if ((pageselector.substring(0, pageselector.indexOf("_"))).toLowerCase().includes("button")) {
            file.write("\nclick_" + pageselector + ": function () {\n logger.logInto(stackTrace.get());\nres = action.click(this." + pageselector + ");\n if (true == res) {\n logger.logInto(stackTrace.get(), \" " + pageselector + " button is clicked\");\n} else {\nlogger.logInto(stackTrace.get(), res, 'error');\n}\n return res;\n},")
        }
        if (pageselector.includes("tbox") || pageselector.includes("textBox")) {
            file.write("\nset_" + pageselector + ": function (" + pageselector + ") {\n logger.logInto(stackTrace.get());\nres = action.setValue(this." + pageselector + "," + pageselector + ");\n if (true == res) {\nlogger.logInto(stackTrace.get(), \"Value is entered in " + pageselector + "\");\n} else {\nlogger.logInto(stackTrace.get(), res, 'error');\n}\n return res;\n},")
        }
    })
}