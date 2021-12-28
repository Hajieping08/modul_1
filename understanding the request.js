const http = require("http")
const Server = http.createServer((req, res) => {console.log(req.url, req.method, req.headers); //process.exit();
}); Server.listen (3000)