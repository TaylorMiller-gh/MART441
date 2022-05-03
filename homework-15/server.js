var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var fullName = "";

// Create a server
http.createServer(function (request, response) {
   var pathname = url.parse(request.url).pathname;
   const queryObject = url.parse(request.url, true).query;
   console.log("Request for " + pathname + " received.");

   if(pathname == "/page0.html")
   {
      readQueryString(queryObject);
   }
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {
            'Content-Type': 'text/html'
         });
      } else {
         response.writeHead(200, {
            'Content-Type': 'text/html'
         });
         response.write(data.toString());
      }

      response.end();
   });
}).listen(8081);

console.log("Listening on Port 8081");


function readQueryString(queryObject) {
   if (queryObject != null) {
      let text = queryObject.input;

      if (text != undefined) {
         textInput = input;

         updateFile(textInput);
         //console.log(textInput);
      }
   }
   console.log(textInput);
}

// update the html file
function updateFile(textInput)
{
  //console.log(textInput);
   fs.readFile('page0.html', 'utf8', (err,html)=>{
      if(err){
         throw err;
      }

      let root = parse(html);
      let mySpan = root.querySelector('span');

      mySpan.set_content(textInput);

      var writerStream = fs.createWriteStream("page0.html");
      writerStream.write(root.toString(), 'UTF8');
      writerStream.end();
      writerStream.on('finish', function () {
         console.log("Write completed.");
      });
      writerStream.on('error', function (err) {
         console.log(err.stack);
      });
    });

}
