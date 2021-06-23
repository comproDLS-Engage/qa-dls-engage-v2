    var date = new Date();
    //console.log("date:"+date);
	var year = date.getFullYear();
	var todayDate = date.getDate();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
	 todayDate = (todayDate < 10 ? "0" : "") + todayDate;
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec; 
      
    var REPORTDIR = "output/reports/" + todayDate + "-" + month + "-" + year  +"/" + hour + "-" + min + "/"
    var REPORTFILENAME = "TestResult"+"-" + hour + "-" +min + "-" + sec+".html";
module.exports.REPORTDIR=REPORTDIR;
module.exports.REPORTFILENAME=REPORTFILENAME;

