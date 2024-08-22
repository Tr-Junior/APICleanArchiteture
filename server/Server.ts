import * as http from 'http';
import debug from 'debug';
import express, { Express } from 'express';
import app from '../src/index'; // Certifique-se de que isso exporta a instância do Express corretamente

const port: number | string = normalizePort(process.env.PORT || '3002');
(app as Express).set('port', port);

const server = http.createServer(app as Express);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

function normalizePort(val: string): number | string {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  return port >= 0 ? port : '3000'; // Substituir false por um valor padrão (como '3000') pode ser mais seguro
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  debug('Listening on ' + bind);
}
