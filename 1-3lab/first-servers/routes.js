const http = require("http");

const host = 'localhost';
const port = 8000;
const books = JSON.stringify([{ "fistName": "Ivan", "lastName": "Ivanov", "group": "VIS21" }]);
 
  const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
      case "/books":
        res.writeHead(200);
        res.end(books);
        break
      case "/authors":
        res.writeHead(200);
        res.end(authors);
        break
      default:
        res.writeHead(404);
        res.end(JSON.stringify({
          error: "Resource not found"
        }));
    }
  }

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});