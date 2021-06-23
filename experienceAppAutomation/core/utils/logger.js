'use strict';
const winston = require('winston');
const fs = require('fs');
const Loggly = require('winston-loggly-bulk').Loggly;
/*******************************************/
const { format } = winston;
const { combine, label, json } = format;
/*******************************************/
var finalObject = {};

const logglyToken = argv.logglyToken;


const config = require('../../wdio.conf.js').config;
const logDir = 'logs';
var date = new Date();
var dateFormat = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${date.getHours()}h_${date.getMinutes()}m_${date.getSeconds()}s_${date.getMilliseconds()}ms`;

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
//logglyToken

var transportsArray = [];
if (logglyToken) {
    transportsArray = [new(winston.transports.File)({
            filename: `${logDir}/info_${dateFormat}.json`,
            handleExceptions: true,
            json: true,
            eol: '\n',
            level: 'debug'
        }),
        new(winston.transports.File)({
            filename: `${logDir}/error_${dateFormat}.json`,
            handleExceptions: true,
            json: true,
            eol: '\n',
            level: 'error'
        }),
        new winston.transports.Loggly({
            subdomain: 'compro16',
            inputToken: logglyToken,
            json: true,
            tags: ["Master-test"]
        })
    ]
} else {
    transportsArray = [new(winston.transports.File)({
            filename: `${logDir}/info_${dateFormat}.json`,
            handleExceptions: true,
            json: true,
            eol: '\n',
            level: 'debug'
        }),
        new(winston.transports.File)({
            filename: `${logDir}/error_${dateFormat}.json`,
            handleExceptions: true,
            json: true,
            eol: '\n',
            level: 'error'
        })
    ]
}

winston.loggers.add('jsonFileFormat', {
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS'
        }),
        winston.format.prettyPrint(),
        winston.format.printf(info => {

            var metaData = {
                //timestamp: new Date().getTime(),
                //timestamp: date.toISOString(),
                timestamp:new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString(),
                level: (info.level).toUpperCase(),
                // env:browser.capabilities.browserName+','+browser.capabilities.browserVersion+','+"deviceName"+','+"resolution"
            };

            var logMessage = JSON.parse(info.message);

            finalObject = Object.assign(metaData, logMessage);

            return (JSON.stringify(finalObject) + ',');
        })
    ),

    transports: transportsArray
});



//23243991-0ee4-4608-bc44-ed1ec4b42666

//log file format
// winston.loggers.add('logFileFormat', {
//   format: winston.format.combine(

//     winston.format.timestamp({
//       format: 'YYYY-MM-DD HH:mm:ss.SSS'
//     }),

//     winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " "))

//   ),
//   transports: [

//     new (winston.transports.Console)({
//       colorize: true,
//       level: 'info'
//     }),
//     new (winston.transports.File)({
//       filename: `${logDir}/info_${dateFormat}.log`,
//       handleExceptions: true,
//       eol: '\n',
//       level: 'debug'
//     }),
//     new (winston.transports.File)({
//       filename: `${logDir}/error_${dateFormat}.log`,
//       handleExceptions: true,
//       eol: '\n',
//       level: 'error'
//     })

//   ]
// });

const logger = winston.loggers.get(config.logFormat);

module.exports = logger;