var http=require("http");

 var server = http.createServer(function(req,res){
 	res.writeHead(200,{"Content-Type":"text/plain"});
 	res.end("Hello Hyderabad")
 });
 server.listen(4321,function(){
 	console.log("server is running");
 });