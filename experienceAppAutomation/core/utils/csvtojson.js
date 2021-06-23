//To execution the utility
//node csvtojson.js --input "path to csv file" --output "path to json file"

const csv = require("csvtojson");
const fs = require("fs");
// const input = "Acceptance_test.csv";
const jsonFormat = require('json-format');
var argv = require('yargs').argv;

var BeforeArray = [], BeforeEachArray = [], AfterArray = [], AfterEachArray = [], suiteArray = [], uniqueSuiteArray = [], TestArray = [], testData = [], jsonpath = [], visualTest = []
var Name, RepoName, SuiteName, opJson, str;
var i, deletednodecounter = 0;
var myJson = {};


// function convertToJson(input, output) {
csv({
    colParser: {
        // "SuiteIndex": "omit",
        //"SuiteName": "omit",
        //"RepoName": "omit",

    },
    checkType: true
}).fromFile(argv.input).then((jsonObj) => {
    jsonObj.forEach(function (TestCase) {
        suiteArray.push(TestCase["SuiteIndex"])
    });
    uniqueSuiteArray = suiteArray.filter(onlyUnique);
    uniqueSuiteArray.forEach(function (SuiteIndex) {
        // console.log(jsonObj);
        BeforeArray = [];
        BeforeEachArray = [];
        TestArray = [];
        AfterArray = [];
        AfterEachArray = [];
        var beforeEachCount = 0;
        var beforeCount = 0;
        var testCount = 0;
        var afterCount = 0;
        var afterEachCount = 0;
        jsonObj.forEach(function (Test) {
            //console.log(Test)
            if (Test["SuiteIndex"] == SuiteIndex) {
                Name = Test["SuiteName"];
                RepoName = Test["RepoName"];
                SuiteName = SuiteIndex;
                if (Test["Nodename"] == "Before") {
                    beforeCount++;
                    if (beforeCount > 0) {
                        if (beforeCount == 1 && Test["ID"] == "") {
                            BeforeArray = []
                        }
                        else {
                            jsonpath = [];
                            testData = [];
                            jsonpath.push(Test["DataJsonPath"]);
                            str = JSON.stringify(jsonpath);
                            str = str.replace("\\n", "\",\"");
                            jsonpath = JSON.parse(str);
                            if (Test["DataJson"] != "" && jsonpath.length > 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": jsonpath
                                })
                            }
                            else if (Test["DataJson"] != "" && jsonpath.length == 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": Test["DataJsonPath"]
                                })
                            }
                            BeforeArray.push({
                                "id": Test["ID"],
                                "description": Test["Description"],
                                "testFile": Test["Testfile"],
                                ...("VisualTest" in Test && !(isEmpty(Test["VisualTest"])) ? { "visualTest": Test["VisualTest"] } : {}),
                                "testData": testData
                            })
                        }
                    }
                }
                if (Test["Nodename"] == "BeforeEach") {
                    beforeEachCount++;
                    if (beforeEachCount > 0) {
                        if (beforeEachCount == 1 && Test["ID"] == "") {
                            BeforeEachArray = []
                        }
                        else {
                            jsonpath = [];
                            testData = [];
                            jsonpath.push(Test["DataJsonPath"]);
                            str = JSON.stringify(jsonpath);
                            str = str.replace("\\n", "\",\"");
                            jsonpath = JSON.parse(str);
                            if (Test["DataJson"] != "" && jsonpath.length > 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": jsonpath
                                })
                            }
                            else if (Test["DataJson"] != "" && jsonpath.length == 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": Test["DataJsonPath"]
                                })
                            }
                            BeforeEachArray.push({
                                "id": Test["ID"],
                                "description": Test["Description"],
                                "testFile": Test["Testfile"],
                                ...("VisualTest" in Test && !(isEmpty(Test["VisualTest"])) ? { "visualTest": Test["VisualTest"] } : {}),
                                "testData": testData
                            })
                        }
                    }
                }
                if (Test["Nodename"] == "Test") {
                    testCount++;
                    if (testCount > 0) {
                        if (testCount == 1 && Test["ID"] == "") {
                            TestArray = []
                        }
                        else {
                            jsonpath = [];
                            testData = [];
                            jsonpath.push(Test["DataJsonPath"]);
                            str = JSON.stringify(jsonpath);
                            str = str.replace("\\n", "\",\"");
                            jsonpath = JSON.parse(str);
                            if (Test["DataJson"] != "" && jsonpath.length > 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": jsonpath
                                })
                            }
                            else if (Test["DataJson"] != "" && jsonpath.length == 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": Test["DataJsonPath"]
                                })
                            }
                            // console.log(Test)
                            TestArray.push({
                                "id": Test["ID"],
                                "description": Test["Description"],
                                "testFile": Test["Testfile"],
                                ...("VisualTest" in Test && !(isEmpty(Test["VisualTest"])) ? { "visualTest": Test["VisualTest"] } : {}),
                                "testData": testData
                            })
                        }
                    }
                }
                if (Test["Nodename"] == "AfterEach") {
                    afterEachCount++;
                    if (afterEachCount > 0) {
                        if (afterEachCount == 1 && Test["ID"] == "") {
                            AfterEachArray = []
                        }
                        else {
                            jsonpath = [];
                            testData = [];
                            jsonpath.push(Test["DataJsonPath"]);
                            str = JSON.stringify(jsonpath);
                            str = str.replace("\\n", "\",\"");
                            jsonpath = JSON.parse(str);
                            if (Test["DataJson"] != "" && jsonpath.length > 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": jsonpath
                                })
                            }
                            else if (Test["DataJson"] != "" && jsonpath.length == 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": Test["DataJsonPath"]
                                })
                            }
                            AfterEachArray.push({
                                "id": Test["ID"],
                                "description": Test["Description"],
                                "testFile": Test["Testfile"],
                                ...("VisualTest" in Test && !(isEmpty(Test["VisualTest"])) ? { "visualTest": Test["VisualTest"] } : {}),
                                "testData": testData
                            })

                        }
                    }
                }
                if (Test["Nodename"] == "After") {
                    afterCount++;
                    if (afterCount > 0) {
                        if (afterCount == 1 && Test["ID"] == "") {
                            AfterArray = []
                        }
                        else {
                            jsonpath = [];
                            testData = [];
                            jsonpath.push(Test["DataJsonPath"]);
                            str = JSON.stringify(jsonpath);
                            str = str.replace("\\n", "\",\"");
                            jsonpath = JSON.parse(str);
                            if (Test["DataJson"] != "" && jsonpath.length > 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": jsonpath
                                })
                            }
                            else if (Test["DataJson"] != "" && jsonpath.length == 1) {
                                testData.push({
                                    "dataFile": Test["DataJson"],
                                    "jsonPath": Test["DataJsonPath"]
                                })
                            }
                            AfterArray.push({
                                "id": Test["ID"],
                                "description": Test["Description"],
                                "testFile": Test["Testfile"],
                                ...("VisualTest" in Test && !(isEmpty(Test["VisualTest"])) ? { "visualTest": Test["VisualTest"] } : {}),
                                "testData": testData
                            })

                        }
                    }
                }
            }
        })
        //console.log(BeforeArray);

        opJson = {
            [SuiteName]: {
                "Name": Name,
                "TestCaseRepo": RepoName,
                "Before": BeforeArray,
                "BeforeEach": BeforeEachArray,
                "Test": TestArray,
                "AfterEach": AfterEachArray,
                "After": AfterArray
            }
        }

        //Code to remove blank Node IDs from output json
        Object.keys(opJson).forEach(function (index) {
            console.log("Running for Suite: " + index)
            combineTestData(opJson[index].Before);
            combineTestData(opJson[index].BeforeEach);
            combineTestData(opJson[index].Test);
            combineTestData(opJson[index].AfterEach);
            combineTestData(opJson[index].After);

            function combineTestData(array) {
                i = 0;
                deletednodecounter = 0;
                // console.log("inside function" + JSON.stringify(array));
                if (array.length > 1) {
                    for (var i = 0; i < array.length; i++) {
                       // console.log("array ID : " + array[i].id);
                        if (array[i].id == "") {
                            console.log("inside if loop");
                            array[i - 1].testData = (array[i - 1].testData).concat(array[i].testData);
                            array.splice(i, 1);
                            deletednodecounter++;
                            i--;
                            //console.log(array[i].testData);
                        }
                    };
                }
            }
        })
        // var myJson = { [SuiteName]: opJson[SuiteName] };
        Object.assign(myJson, { [SuiteName]: opJson[SuiteName] });
        fs.writeFileSync(argv.output, jsonFormat(myJson, {
            type: 'space',
            size: 2
        }));
    })

})
// }






function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function isEmpty(str) {
    return (0 === str.length);
}

// module.exports = { convertToJson: convertToJson };