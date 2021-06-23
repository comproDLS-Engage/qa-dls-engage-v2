var combineImage = require('combine-image');
//var Jimp = require('jimp');
var fs = require('fs');

module.exports = {
    combImage: async function (fileArr, direction) {
        return (await combineImage(fileArr, { direction: direction }));
    },

    combineImages: function (fileArr, outputfile, direction) {
        var promises = [];
        return new Promise(async (resolve, reject) => {
            try {
                fileArr.forEach(async (item) => {
                    await promises.push(this.checkImgExists(item))
                    //console.log("item:" + item)
                })
                // wait until all promises are resolved
                await Promise.all(promises)
                    .then(async () => {
                        var combinedImage = await this.combImage(fileArr, direction);
                        combinedImage.write(outputfile, () => {
                            //console.log('done:-' + outputfile);
                            resolve();
                        })
                    })
            }
            catch (err) {
                console.log("error---" + err);
                reject(err);
            }
        })
    },

    checkImgExists: function (filePath) {
        var timeout = 10000;
        return new Promise(function (resolve, reject) {
            var timer = setTimeout(function () {
                watcher.close();
                console.log(filePath)
                reject(new Error('File did not exists and was not created during the timeout.'));
            }, timeout);
            fs.access(filePath, fs.constants.R_OK, function (err) {
                if (!err) {
                    clearTimeout(timer);
                    watcher.close();
                    resolve();
                }
            });
            var dir = path.dirname(filePath);
            var basename = path.basename(filePath);
            var watcher = fs.watch(dir, function (eventType, filename) {
                //console.log("Checking File:-" + filename)
                if (eventType === 'rename' && filename === basename || eventType === 'change') {
                    //console.log("File Exists-" + filename)
                    clearTimeout(timer);
                    //watcher.close();
                    resolve(watcher.close());
                }
            });
        })
    }
}