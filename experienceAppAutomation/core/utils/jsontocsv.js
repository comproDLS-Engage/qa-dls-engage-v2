//To execution the utility
//node jsontocsv.js --input "path to json file" --output "path to csv file"

const jsonexport = require('jsonexport');
var fs = require('fs');
var argv = require('yargs').argv;
var arr2 = [];
// function writeCsv(input, output) {

var execJsonData = JSON.parse(fs.readFileSync(argv.input));

function propertiesToArray(obj) {
    const isObject = val =>
        typeof val === 'object' && !Array.isArray(val);

    function isArray(arr) {
        return Array.isArray(arr) ? true : false;
    }

    const addDelimiter = (a, b) =>
        a ? `${a}.${b}` : b;

    const paths = (obj = {}, head = '') => {
        return Object.entries(obj)
            .reduce((product, [key, value]) => {
                let fullPath = addDelimiter(head, key);

                if (isObject(value)) {
                    return product.concat(paths(value, fullPath))
                } else {
                    if (isArray(value)) {
                        var uniqueKeys = Object.keys(value.reduce(function(result, obj) {
                            return Object.assign(result, obj);
                        }, {}))
                        // console.log(uniqueKeys);
                        var arr1 = Object.values(uniqueKeys);
                        arr2 = [...arr2, ...arr1]
                    }
                    return product.concat(key)
                }

            }, []);
    }

    return paths(obj);
}

var keysArray = propertiesToArray(execJsonData);

var distinctKeys = [...new Set(arr2)]
//console.log(distinctKeys)


if (distinctKeys.includes("visualTest")) {
    fs.writeFileSync(argv.output, "SuiteIndex,SuiteName,RepoName,Nodename,ID,Description,VisualTest,Testfile,DataJson,DataJsonPath\n");
} else
    fs.writeFileSync(argv.output, "SuiteIndex,SuiteName,RepoName,Nodename,ID,Description,Testfile,DataJson,DataJsonPath\n");

Object.keys(execJsonData).forEach(function(index) {

    //before
    fs.appendFileSync(argv.output, index + "," + execJsonData[index].Name + "," + execJsonData[index].TestCaseRepo + ",Before,");

    if (distinctKeys.includes("visualTest")) {
        for (var i = 0; i < execJsonData[index].Before.length; i++) {
            var obj = {
                "id": execJsonData[index].Before[i].id,
                "description": execJsonData[index].Before[i].description,
                "visualTest": ("visualTest" in execJsonData[index].Before[i]) ? execJsonData[index].Before[i].visualTest : '',
                "testFile": execJsonData[index].Before[i].testFile,
                "testData": execJsonData[index].Before[i].testData
            }
            execJsonData[index].Before[i] = Object.assign(obj, execJsonData[index].Before[i])
        }
    }
    convertToCsv(execJsonData[index].Before)

    //beforeEach
    fs.appendFileSync(argv.output, "\n,,," + "BeforeEach" + ",");

    if (distinctKeys.includes("visualTest")) {
        for (var i = 0; i < execJsonData[index].BeforeEach.length; i++) {
            var obj = {
                "id": execJsonData[index].BeforeEach[i].id,
                "description": execJsonData[index].BeforeEach[i].description,
                "visualTest": ("visualTest" in execJsonData[index].BeforeEach[i]) ? execJsonData[index].BeforeEach[i].visualTest : '',
                "testFile": execJsonData[index].BeforeEach[i].testFile,
                "testData": execJsonData[index].BeforeEach[i].testData
            }
            execJsonData[index].BeforeEach[i] = Object.assign(obj, execJsonData[index].BeforeEach[i])

        }
    }
    convertToCsv(execJsonData[index].BeforeEach);

    //Test
    fs.appendFileSync(argv.output, "\n,,," + "Test" + ",");

    if (distinctKeys.includes("visualTest")) {
        for (var i = 0; i < execJsonData[index].Test.length; i++) {
            var obj = {
                "id": execJsonData[index].Test[i].id,
                "description": execJsonData[index].Test[i].description,
                "visualTest": ("visualTest" in execJsonData[index].Test[i]) ? execJsonData[index].Test[i].visualTest : '',
                "testFile": execJsonData[index].Test[i].testFile,
                "testData": execJsonData[index].Test[i].testData
            }
            execJsonData[index].Test[i] = Object.assign(obj, execJsonData[index].Test[i])
        }
    }
    convertToCsv(execJsonData[index].Test);

    //afterEach
    fs.appendFileSync(argv.output, "\n,,," + "AfterEach" + ",");
    if (distinctKeys.includes("visualTest")) {
        for (var i = 0; i < execJsonData[index].AfterEach.length; i++) {
            var obj = {
                "id": execJsonData[index].AfterEach[i].id,
                "description": execJsonData[index].AfterEach[i].description,
                "visualTest": ("visualTest" in execJsonData[index].AfterEach[i]) ? execJsonData[index].AfterEach[i].visualTest : '',
                "testFile": execJsonData[index].AfterEach[i].testFile,
                "testData": execJsonData[index].AfterEach[i].testData
            }
            execJsonData[index].AfterEach[i] = Object.assign(obj, execJsonData[index].AfterEach[i])
        }
    }
    convertToCsv(execJsonData[index].AfterEach);

    //after
    fs.appendFileSync(argv.output, "\n,,," + "After" + ",");
    if (distinctKeys.includes("visualTest")) {
        for (var i = 0; i < execJsonData[index].After.length; i++) {
            var obj = {
                "id": execJsonData[index].After[i].id,
                "description": execJsonData[index].After[i].description,
                "visualTest": ("visualTest" in execJsonData[index].After[i]) ? execJsonData[index].After[i].visualTest : '',
                "testFile": execJsonData[index].After[i].testFile,
                "testData": execJsonData[index].After[i].testData
            }
            execJsonData[index].After[i] = Object.assign(obj, execJsonData[index].After[i])
        }
    }
    convertToCsv(execJsonData[index].After);

    fs.appendFileSync(argv.output, "\n");
});

function convertToCsv(jsonpath) {
    jsonexport(jsonpath, { includeHeaders: false, arrayPathString: '\n', endOfLine: "\n,,,," }, function(err, csv) {
        if (err) return console.error(err);
        fs.appendFileSync(argv.output, csv);
        //console.log(csv);
    });
}
//  }

// module.exports = { writeCsv: writeCsv };