//****************************************************//
// utility for reading activity json of lo package and giving quizData.json
// run this utility using following command:
// node quizDataGenerator.js --input 'path to activityjs' --output 'path for output json'
//****************************************************//

var fs = require('fs');
var argv = require('yargs').argv;
const jsonFormat = require('json-format');
fs.readFile(argv.input, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var loJson = JSON.parse(data.replace(/let activityJson =/g, ''));
    var quizObj = {
        "quizName": {
            "totalScore": 0,
            "passScore": "",
            "question": []
        }
    }
    Object.keys(loJson.itemBody.questions).forEach(function (qindex) {
        quizObj.quizName.question[qindex] = {
            "id": "",
            "number": "",
            "maxScore": "",
            "instruction": "",
            "text": "",
            "type": "",
            "maxOptions": "",
            "answerKey": [],
            "scenario1": [],
            "scenario2": []
        }
        quizObj.quizName.question[qindex].id = loJson.itemBody.questions[qindex].id;
        quizObj.quizName.question[qindex].maxScore = loJson.itemBody.questions[qindex].meta.score;
        quizObj.quizName.question[qindex].number = parseInt(qindex) + 1;
        var quesJson = loJson.itemFragments[quizObj.quizName.question[qindex].id];
        quizObj.quizName.question[qindex].type = quesJson.data.player;
        quizObj.quizName.question[qindex].instruction = quesJson.data.itemBody.instruction.content.data;
        quizObj.quizName.question[qindex].text = quesJson.data.itemBody.stimulus.content.data.replace(/(<([^>]+)>)/ig, '');
        quizObj.quizName.question[qindex] = getQuesdetail(quesJson, quizObj.quizName.question[qindex]);
        quizObj.quizName.totalScore = quizObj.quizName.totalScore + quizObj.quizName.question[qindex].maxScore;
        quizObj.quizName.question[qindex].id = undefined;
        quizObj.quizName.question[qindex].scenario1 = quizObj.quizName.question[qindex].answerKey;
        quizObj.quizName.question[qindex].scenario2 = quizObj.quizName.question[qindex].answerKey;
    })
    quizObj.quizName.passScore = Math.round(quizObj.quizName.totalScore * 0.7 * 10) / 10;

    //console.log(JSON.stringify(quizObj))
    fs.writeFile(argv.output, jsonFormat(quizObj, {
        type: 'space',
        size: 2
    }), function (err) {
        if (err) throw err;
        console.log('quiz data json saved at output path');
    });
})


function getQuesdetail(qJson, obj) {
    var quesOptions;
    if (qJson.data.itemBody.options != undefined)
        quesOptions = qJson.data.itemBody.options;
    else if (qJson.data.itemBody.responseContainer != undefined)
        quesOptions = qJson.data.itemBody.responseContainer;
    else {
        console.log("Options not found for question#" + obj.number + "(" + obj.id + ")");
        exit(0);
    }
    obj.maxOptions = quesOptions.length;
    var quesValidations = qJson.data.itemBody.validations;

    if (obj.type == 'dnd-imagelabel-itemplayer' || obj.type == 'dnd-fib-itemplayer') {
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][0] = quesOptions[opt].id;
            obj.answerKey[opt][1] = "";
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[opt].id) {
                    obj.answerKey[opt][2] = quesValidations[key].responseContainer;
                    obj.answerKey[opt][3] = quesOptions[opt].content.data;
                    obj.answerKey[opt][4] = "correct";
                }
            })
        })
    }
    else if (obj.type == 'block-mcsr-itemplayer' || obj.type == 'radio-mcsr-itemplayer') {
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][0] = quesOptions[opt].id;
            obj.answerKey[opt][1] = quesOptions[opt].content.data;
            obj.answerKey[opt][2] = "";
            obj.answerKey[opt][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].correctResponse == obj.answerKey[opt][0]) {
                    obj.answerKey[opt][2] = "select";
                    obj.answerKey[opt][3] = "correct";
                }
            })
        })
    }
    else if (obj.type == 'fibtext-itemplayer') {
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][0] = quesOptions[opt].id;
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[opt][0]) {
                    obj.answerKey[opt][1] = quesValidations[key].correctDisplay;
                    obj.answerKey[opt][2] = "correct";
                }
            })
        })
    }
    else if (obj.type == 'mcmr-itemplayer') {
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][0] = quesOptions[opt].id;
            obj.answerKey[opt][1] = quesOptions[opt].content.data;
            obj.answerKey[opt][2] = "";
            obj.answerKey[opt][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[opt][0] && quesValidations[key].correctResponse == 'true') {
                    obj.answerKey[opt][2] = "select";
                    obj.answerKey[opt][3] = "correct";
                }
            })
        })
    }
    else if (obj.type == 'orderlist-itemplayer') {
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][0] = quesOptions[opt].id;
            obj.answerKey[opt][1] = quesOptions[opt].content.data;
            obj.answerKey[opt][2] = "";
            obj.answerKey[opt][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[opt].id) {
                    obj.answerKey[opt][2] = quesValidations[key].responseContainer;
                    obj.answerKey[opt][3] = "correct";
                }
            })
        })
    }
    else if (obj.type == 'classify-itemplayer') {
        obj.answerKey = { "key1": [], "key2": [] }
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey.key1[opt] = [];
            obj.answerKey.key1[opt][0] = quesOptions[opt].id;
            obj.answerKey.key1[opt][1] = "";
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[opt].id) {
                    obj.answerKey.key1[opt][2] = quesValidations[key].responseContainer;
                    obj.answerKey.key1[opt][3] = quesOptions[opt].content.data;
                    obj.answerKey.key1[opt][4] = "correct";
                }
            })
        })
        //need to discuss this
        Object.keys(qJson.data.itemBody.responseContainer).forEach(function (opt) {
            obj.answerKey.key2[opt] = [];
            obj.answerKey.key2[opt][0] = qJson.data.itemBody.responseContainer[opt].id;
            obj.answerKey.key2[opt][1] = qJson.data.itemBody.responseContainer[opt].content.data;
            obj.answerKey.key2[opt][2] = "correct";
        })
    }
    else if (obj.type == 'matching-itemplayer') {
        var responseOptions = qJson.data.itemBody.responseContainer;
        Object.keys(quesOptions).forEach(function (opt) {
            obj.answerKey[opt] = [];
            obj.answerKey[opt][2] = quesOptions[opt].id;
            Object.keys(responseOptions).forEach(function (key) {
                if (quesValidations[key].responseContainer == responseOptions[opt].id) {
                    obj.answerKey[opt][1] = responseOptions[key].content.data;
                }
            })
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[opt].id) {
                    obj.answerKey[opt][0] = quesValidations[key].responseContainer;
                    obj.answerKey[opt][3] = quesOptions[opt].content.data;
                    obj.answerKey[opt][4] = "correct";
                }
            })
        })
    }
    else {
        console.log("get questiondetail is not available for " + obj.type);
    }
    return obj;
}
