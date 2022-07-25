const http = require('http');
const app = require('./app');


const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

/*
//la fonction normalizePort renvoie un port valide, 
// qu'il soit fourni sous la forme d'un num�ro ou d'une cha�ne ;
const port = normalizePort(process.env.PORT ||�'3000');

app.set('port', port);
*/
app.set('port', '3000');

//la fonction errorHandler  recherche les diff�rentes erreurs et les g�re de mani�re appropri�e. 
// Elle est ensuite enregistr�e dans le serveur ;
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

// un �couteur d'�v�nements est �galement enregistr�, consignant le port ou le canal nomm� 
// sur lequel le serveur s'ex�cute dans la console.
server.on('error', errorHandler);

server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + '3000';
  console.log('Listening on ' + bind);
});

server.listen('3000');

