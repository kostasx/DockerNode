import http from "node:http";

http.createServer(function(request, response){
  return response.end("Hello World!");
}).listen( 8080, function serverListening(){
  console.log("Server is running on http://localhost:8080");
});
