//****************************************************//
// Utility for comparing content of xhtml and html files
// Run this utility using following command:
// node vhlContentValidation.js --inputcsv='path to csv with xhtml file names to concatenate'
//****************************************************//


"use strict";
//--- modules ---
var argv = require('yargs').argv;
const fs = require("fs");
const path = require('path');
const mergeFiles = require('merge-files');
const TurndownService = require('turndown');
const turndownService = new TurndownService({ option: 'value' })
var Diff = require('text-diff');
var diff = new Diff();

//--- constants ---
const rawxhtmlDir = 'vhlcontent\\rawxhtml\\';
const sourceDir = 'vhlcontent\\source\\';
const targetDir = 'vhlcontent\\target\\';
const resultDir = 'vhlcontent\\result\\';
const xfileExt = ".xhtml";
const mexp1 = /(\.|\.\.)+(\/.*)+(.jpg|svg|png)/g;
const mreplace1 = "image";
const mexp2 = " \"click to enlarge\"";
const mreplace2 = "";
const mfileExt = ".md";
const encoding = 'utf-8';


//--- calling main ---
main();

//--- main function declaration
async function main() {
  //-----------------------------------------------------
  // Step 1 - Create a function to concatenate 2 xhtml files
  let res1 = await mergeXhtml();
  console.log(res1)


  //-----------------------------------------------------
  // Step 2 - Convert all input html and xthml files in a folder to md files
  if (res1) {
    res1 = await createmd();
    console.log(res1)
  }
  else {
    console.log("Error in merging xhtmls!");
  }


  //-----------------------------------------------------
  // Step 3 - Compare md files and generate diff
  if (res1) {
    res1 = await generateDiff();
    console.log(res1)
  }
  else {
    console.log("Error in creating md files!");
  }
}


//--- function to merge xhtml files
async function mergeXhtml() {
  try {
    let i, xfile1, xfile2, xfile3, name, arr1;
    const csvData = fs.readFileSync(argv.inputcsv).toString();
    //const csvData = fs.readFileSync('C:\\Users\\akhil\\Downloads\\test2.csv').toString();
    //const csvData = fs.readFileSync(argv.inputFile).toString();
    arr1 = csvData.split("\r\n");
    for (i = 0; i < arr1.length; i++) {
      if (!fs.existsSync(rawxhtmlDir + arr1[i] + xfileExt)) {
        throw new Error("File " + rawxhtmlDir + arr1[i] + xfileExt + " does not exists");
      } else if (!fs.existsSync(rawxhtmlDir + arr1[i + 1] + xfileExt)) {
        throw new Error("File " + rawxhtmlDir + arr1[i + 1] + xfileExt + " does not exists");
      }

      name = arr1[i + 1].slice(-3);
      xfile1 = rawxhtmlDir + arr1[i] + xfileExt;
      xfile2 = rawxhtmlDir + arr1[i + 1] + xfileExt;
      xfile3 = sourceDir + arr1[i] + "-" + name + xfileExt;

      await mergeFiles([
        xfile1,
        xfile2
      ], xfile3).then((status) => {
        //console.log(xfile3 + " - " + status)
      });
      i = i + 1;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//--- function to create md files from html and xhtml
async function createmd() {
  try {
    let files, fileData, filePath, markdown, rule1, rule2;
    files = fs.readdirSync(sourceDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    files.forEach(async (file) => {
      filePath = path.parse(file);
      if (filePath.ext == '.html' || filePath.ext == '.xhtml') {
        fileData = fs.readFileSync(sourceDir + file, encoding);
        markdown = turndownService.turndown(fileData);

        //--- Processing rule#1: replace image path with text 'image' for html and xhtml
        rule1 = markdown.replace(mexp1, mreplace1);

        //--- Processing rule#2: replace 'click to enlarge' with blank for xhtml
        if (filePath.ext == '.xhtml') {
          rule2 = rule1.replaceAll(mexp2, mreplace2);
        }
        else
          rule2 = rule1;

        fs.writeFileSync(targetDir + filePath.name + mfileExt, rule2);
      }
    })
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//--- function to generate diff from md files
async function generateDiff() {
  try {
    let i, files, filePath1, filePath2, fileData1, fileData2, textDiff;
    files = fs.readdirSync(targetDir);
    if (files.length % 2 != 0) {
      console.log(files)
      throw new Error("Incorrect number of files to compare: " + files.length);
    }
    if (!fs.existsSync(resultDir))
      fs.mkdirSync(resultDir);

    for (i = 0; i < files.length; i++) {
      filePath1 = path.parse(files[i]);
      fileData1 = fs.readFileSync(targetDir + files[i], encoding);
      filePath2 = path.parse(files[i + 1]);
      fileData2 = fs.readFileSync(targetDir + files[i + 1], encoding);
      if (filePath2.name.includes(filePath1.name)) {
        textDiff = diff.main(fileData1, fileData2);
        fs.writeFileSync(resultDir + filePath1.name + '_diff.html', diff.prettyHtml(textDiff));
      }
      i = i + 1;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}