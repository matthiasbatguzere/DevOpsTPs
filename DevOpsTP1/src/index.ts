import { Console } from "console";
import http, { IncomingMessage } from "http";
import { ServerResponse } from "http";

const myServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method == "GET"){
        if (req.url == "/ping"){
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(req.headers));
            res.end();
        }else{
            res.writeHead(404, { "Content-Type": "application/json" });
            res.write(" ");
            res.end();
        }
    }
});

 myServer.listen(3000, () => {
    console.log('Server is running on port 3000. Go to http://localhost:3000/')
 });


 

