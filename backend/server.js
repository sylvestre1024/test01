const http = require('http');
const app = require('./app');

/*
const server = http.createServer((req, res) => {
    res.end('Voil� la r�ponse du serveur3 !');
});
*/
// sur quel port
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);