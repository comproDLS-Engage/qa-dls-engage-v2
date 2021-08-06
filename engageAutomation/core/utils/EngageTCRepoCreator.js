const csv=require('csvtojson');
var jsonFormat = require('json-format');
const fs2 = require('fs')
let ModuleNameArray = [];
let TCArray = [];
let opJson = {
    "appname": "comproDLS Engage",
    "appdetails": "",
	"selectorFile": "./core/selectors/experienceApp/engageSelectors.json",
    "modules":[ 
    ]
}
function testCaseRepoCreation(inputFilePath, outputFilePath){
    csv()
    .fromFile(inputFilePath)
    .then((jsonObj)=>{
        jsonObj.forEach(function(TestCase){
            ModuleNameArray.push(TestCase["ModuleName"])
        });
        //creating an array of unique modules
        let uniqueModuleNameArray = ModuleNameArray.filter(onlyUnique)
        uniqueModuleNameArray.forEach(function(ModuleName) {
            TCArray = [];
            jsonObj.forEach(function(TestCase){
                if(TestCase["ModuleName"] == ModuleName){
                    TCArray.push({
                        "id":TestCase["Custom_TestCase_ID"],
                        "description":TestCase["Title"],
                        "tags":TestCase["Tags"],
                        ...(((TestCase["VisualTest"])!="-") ? { "visualTest": !!TestCase["VisualTest"] }:{"visualTest":TestCase["VisualTest"]} )
                    })
                }
            })
            

            let moduleStructure = {
            "modulename": ModuleName,
            "moduledetails": "",
            "testFile": "./test/engageExperienceApp/test.js",
            "testcase": TCArray
            }
            opJson.modules.push(moduleStructure);
        })
        fs2.writeFileSync(`${outputFilePath}`, jsonFormat(opJson,{
            type: 'space',
            size: 2
        }));
    });
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


module.exports = {testCaseRepoCreation:testCaseRepoCreation};