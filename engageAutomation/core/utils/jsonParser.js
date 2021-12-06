"use strict";
var data, datanode;

function jsonParser(filepath) {
	//console.log("parsing json");
	try {
		data = JSON.parse(fs.readFileSync(filepath));
		//console.log("[USER] json file " + filepath + " parsed successfully.");
		return data;
	}
	catch(e) {
		console.log("[USER] Error in parsing json file " + filepath);
		throw e;
	}
	
}

function getJsonNode(jsonObj, jsonPath) {
	try {
		jsonObj = loadashget(jsonObj, jsonPath);
		return jsonObj;
	}
	catch(e) {
		console.log("[USER] Error in parsing json node for " + jsonPath);
		throw e;
	}

}


module.exports = {
	jsonParser:jsonParser, 
	getJsonNode:getJsonNode
};
