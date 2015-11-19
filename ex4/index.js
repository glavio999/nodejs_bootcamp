var fs = require("fs");
fs.readdir('../', function(err, files) {
  if (err) throw err;
  fs.writeFile('result.text',
  createNiceListOfFiles(files), function(err,data) {
    if (err) throw err;
    console.log("great");
  });
});

function createNiceListOfFiles(arrFiles){
  return arrFiles.join('\n');
}
