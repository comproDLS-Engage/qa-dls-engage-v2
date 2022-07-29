//****************************************************//
// utility for reading activity json of lo package and giving quizData.json
// run this utility using following command:
// node quizDataGenerator.js --input 'path to activity json' --output 'path for output json'
//****************************************************//

var fs = require('fs');
var argv = require('yargs').argv;
const jsonFormat = require('json-format');
fs.readFile(argv.input, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    //var loJson = JSON.parse(data.replace(/let activityJson =/g, ''));
    var loJson = JSON.parse(data);
    var quizObj = {
        "quizName": {
            // "totalScore": 0,
            // "passScore": 0,
            "type": "Native Engage Learning Object",
            "name": "",
            "question": []
        }
    }
    Object.keys(loJson.itemBody.questions).forEach(function (qindex) {
        quizObj.quizName.question[qindex] = {
            "number": null,
            "quesType": "",
            "quesTitle": "",
            "instructionText": null,
            "promptText": null,
            "viewLabels": {
                "instructionHeading": null,
                "selectOneLabel": null,
                "selectOneOrMoreLabel": null,
                "selectFromDropdownLabel": null,
                "matchingLeftLabel": null,
                "matchingRightLabel": null,
                "zoomLabel": null,
                "selectLabel": null,
                "noneLabel": null,
                "clearLabel": null
            },
            "mediaType": null,
            "subQues": [],
            "answerKey": [],
            "scenario1": [],
            "scenario2": [],
            // "maxScore": "",
            //"maxOptions": "",
            // "id": "",
        }
        //quizObj.quizName.question[qindex].id = loJson.itemBody.questions[qindex].id;

        console.log(loJson.itemBody.questions[qindex].id);

        quizObj.quizName.question[qindex].number = parseInt(qindex) + 1;
        quizObj.quizName.name = loJson.itemMeta.title;
        var quesJson = loJson.itemFragments[loJson.itemBody.questions[qindex].id];
        quizObj.quizName.question[qindex].quesType = quesJson.data.player;
        quizObj.quizName.question[qindex].quesTitle = quesJson.data.itemBody.stimulus.content.data.replace(/(<([^>]+)>)/ig, '');
        quizObj.quizName.question[qindex].instructionText = quesJson.data.itemBody.instruction.content.data.replace(/(<([^>]+)>)/ig, '') == "" ? null : quesJson.data.itemBody.instruction.content.data.replace(/(<([^>]+)>)/ig, '');
        if (quesJson.data.itemBody.prompt != null)
            quizObj.quizName.question[qindex].promptText = (quesJson.data.itemBody.prompt.content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : quesJson.data.itemBody.prompt.content.data.replace(/(<([^>]+)>)/ig, '');

        quizObj.quizName.question[qindex].mediaType = (quesJson.data.itemBody.media.content.data.type) == "" ? null : (quesJson.data.itemBody.media.content.data.type);
        quizObj.quizName.question[qindex] = getQuesdetail(quesJson, quizObj.quizName.question[qindex]);
        //quizObj.quizName.question[qindex].scenario1 = quizObj.quizName.question[qindex].answerKey;
        //quizObj.quizName.question[qindex].scenario2 = quizObj.quizName.question[qindex].answerKey;
        quizObj.quizName.question[qindex].subQues = quizObj.quizName.question[qindex].subQues;

        if (quesJson.data.itemBody.viewLabels != null) {
            quizObj.quizName.question[qindex].viewLabels = {
                instructionHeading: quesJson.data.itemBody.viewLabels.instructionHeading || null,
                selectOneLabel: quesJson.data.itemBody.viewLabels.selectOne || null,
                selectOneOrMoreLabel: quesJson.data.itemBody.viewLabels.selectOneOrMore || null,
                selectFromDropdownLabel: quesJson.data.itemBody.viewLabels.selectFromDropdown || null,
                matchingLeftLabel: quesJson.data.itemBody.viewLabels.matchingLeftLabel || null,
                matchingRightLabel: quesJson.data.itemBody.viewLabels.matchingRightLabel || null,
                zoomLabel: quesJson.data.itemBody.viewLabels.zoomLabel || null,
                selectLabel: quesJson.data.itemBody.viewLabels.selectLabel || null,
                noneLabel: quesJson.data.itemBody.viewLabels.noneLabel || null,
                clearLabel: quesJson.data.itemBody.viewLabels.clearLabel || null,
            }
        }
        // quizObj.quizName.totalScore = quizObj.quizName.totalScore + quizObj.quizName.question[qindex].maxScore;
        // quizObj.quizName.question[qindex].maxScore = loJson.itemBody.questions[qindex].meta.score;
    })
    // quizObj.quizName.passScore = Math.round(quizObj.quizName.totalScore * 0.7 * 10) / 10;

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
    /*else {
        console.log("Options not found for question#" + obj.number + "(" + obj.id + ")");
        //exit(0);
    }*/
    //obj.maxOptions = quesOptions.length;
    var quesValidations = qJson.data.itemBody.validations;

    if (obj.quesType == 'multi-mcqsr-itemplayer' || obj.quesType == 'mcqmr-itemplayer') {
        Object.keys(qJson.data.itemBody.questions).forEach(function (i) {
            let quesOptions = [];
            let answerKey = [];
            let subQues = [];
            let subQuesOption = [];
            subQuesOption[i] = qJson.data.itemBody.questions;
            Object.keys(subQuesOption).forEach(function (j) {
                subQues[j] = [];
                subQues[j][0] = subQuesOption[i][j].id.substring(13);
                subQues[j][1] = (subQuesOption[i][j].data.stimulus.content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : (subQuesOption[i][j].data.stimulus.content.data.replace(/(<([^>]+)>)/ig, ''));
                subQues[j][2] = (subQuesOption[i][j].data.media.content.data.type) == "" ? null : subQuesOption[i][j].data.media.content.data.type;
                obj.subQues.push(subQues[j])
            })

            quesOptions[i] = qJson.data.itemBody.questions[i].data
                .options;
            Object.keys(quesOptions[i]).forEach(function (j) {
                answerKey[j] = [];
                answerKey[j][0] = quesOptions[i][j].id;
                answerKey[j][1] = (quesOptions[i][j].content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : quesOptions[i][j].content.data.replace(/(<([^>]+)>)/ig, '')
                answerKey[j][2] = null;
                answerKey[j][3] = null;
                answerKey[j][4] = (quesOptions[i][j].media.content.data.type) == "" ? null : quesOptions[i][j].media.content.data.type;
                Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                    if (obj.quesType == 'mcqmr-itemplayer') {
                        if (qJson.data.itemBody.questions[i].id == quesValidations[key].responseContainer.slice(0, -3) && quesValidations[key].correctResponse == "true" && answerKey[j][0] == quesValidations[key].responseContainer.substring(15)) {
                            answerKey[j][2] = "select";
                            answerKey[j][3] = "correct";
                        }
                    }
                    else if (obj.quesType == 'multi-mcqsr-itemplayer') {
                        if (qJson.data.itemBody.questions[i].id == quesValidations[key].responseContainer && quesValidations[key].correctResponse == answerKey[j][0]) {
                            answerKey[j][2] = "select";
                            answerKey[j][3] = "correct";
                        }
                    }
                })
                answerKey[j][0] = (parseInt(i) + 1) + "-" + quesOptions[i][j].id;
                obj.answerKey.push(answerKey[j])
            })
        })
        //console.log(obj.answerKey)
    }

    else if (obj.quesType == 'fibtext-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[j][0]) {
                    obj.answerKey[j][1] = quesValidations[key].correctDisplay;
                    obj.answerKey[j][2] = "correct";
                }
            })
        })
    }

    else if (obj.quesType == 'fibdropdown-itemplayer') {
        quesRC = qJson.data.itemBody.responseContainer;
        quesOptions = qJson.data.itemBody.options;
        Object.keys(quesRC).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesRC[j].id;
            if (quesRC[j].id == quesValidations[j].responseContainer) {
                obj.answerKey[j][1] = quesValidations[j].correctResponse;
                obj.answerKey[j][3] = "correct";
            }
            Object.keys(quesOptions).forEach(function (i) {
                if (quesOptions[i].id == obj.answerKey[j][1]) {
                    obj.answerKey[j][2] = quesOptions[i].content.data;
                }
            })
        })
        //console.log(obj.answerKey)
    }
    else if (obj.quesType == 'dnd-imagelabel-itemplayer' || obj.quesType == 'dnd-fib-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = null;
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = quesOptions[j].content.data;
                    obj.answerKey[j][4] = "correct";
                }
            })
        })
    }

    /*else if (obj.quesType == 'mcmr-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = quesOptions[j].content.data;
            obj.answerKey[j][2] = "";
            obj.answerKey[j][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[j][0] && quesValidations[key].correctResponse == 'true') {
                    obj.answerKey[j][2] = "select";
                    obj.answerKey[j][3] = "correct";
                }
            })
        })
    }*/
    else if (obj.quesType == 'orderlist-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = quesOptions[j].content.data;
            obj.answerKey[j][2] = "";
            obj.answerKey[j][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = "correct";
                }
            })
        })
    }
    else if (obj.quesType == 'classify-itemplayer') {
        obj.answerKey = { "key1": [], "key2": [] }
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey.key1[j] = [];
            obj.answerKey.key1[j][0] = quesOptions[j].id;
            obj.answerKey.key1[j][1] = "";
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey.key1[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey.key1[j][3] = quesOptions[j].content.data;
                    obj.answerKey.key1[j][4] = "correct";
                }
            })
        })
        Object.keys(qJson.data.itemBody.responseContainer).forEach(function (j) {
            obj.answerKey.key2[j] = [];
            obj.answerKey.key2[j][0] = qJson.data.itemBody.responseContainer[j].id;
            obj.answerKey.key2[j][1] = qJson.data.itemBody.responseContainer[j].content.data;
            obj.answerKey.key2[j][2] = "correct";
        })
    }
    else if (obj.quesType == 'matching-itemplayer') {
        var responseOptions = qJson.data.itemBody.responseContainer;
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][2] = quesOptions[j].id;
            Object.keys(responseOptions).forEach(function (key) {
                if (quesValidations[key].responseContainer == responseOptions[j].id) {
                    obj.answerKey[j][1] = responseOptions[key].content.data;
                }
            })
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][0] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = quesOptions[j].content.data;
                    obj.answerKey[j][4] = "correct";
                }
            })
        })
    }
    else {
        console.log("get questiondetail is not available for " + obj.type);
    }
    return obj;
}
