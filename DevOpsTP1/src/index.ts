import { Console } from "console";
import http, { IncomingMessage } from "http";
import { ServerResponse } from "http";

const port = process.env.PING_LISTEN_PORT? process.env.PING_LISTEN_PORT : 3000;

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

 myServer.listen(port, () => {
    console.log('Server is running on port ' + port + '. Go to http://localhost:' + port + '/')
 });


 

