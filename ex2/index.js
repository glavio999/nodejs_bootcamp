var fs = require('fs');
fs.readFile('fake.txt', function(err, data) {
  if (err) throw err;
  // console.log(data.toString());
  // console.log(data.toString().split('\n').length);
  var inData = data.toString();
  var lineCount = inData.split('\n').length;
  console.log(lineCount);
});
