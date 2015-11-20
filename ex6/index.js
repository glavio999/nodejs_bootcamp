var http= require('http');
var cheerio = require('cheerio');
http.get('http://www.triptyk.eu', function(res) {
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data',function(data) {
    var $ = cheerio.load(data);
    $('a').each(function(i,element) {
      console.log(element.attribs.href);
    });
});
res.on('error', function(err) {
  console.log(err);
  });
})

// var http = require('http');
// http.get('http://www.triptyk.eu', function(res) {
//   console.log("Got response: " + res.statusCode);
//   res.setEncoding('utf8');
//   res.on('data',function(data) {
//     console.log(data);
//     console.log("----------------------------------------");
//   });
//   res.on('eror', function(err) {
//     console.log(err);
//     });
//   });



// https.get('https://www.triptyk.eu/', function(res) {
//   console.log("statusCode: ", res.statusCode);
//   console.log("head: ", res.head);
//
//   res.on('data', function(d) {
//     process.stdout.write(d);
//   });
//
//
// }).on('error', function(e) {
//   console.error(e);
// });
