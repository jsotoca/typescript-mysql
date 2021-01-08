import router from './router/router';
import Server from './server/server';
import MySql from './mysql/mysql';

const PORT:number = 3000;
const server = Server.init(PORT);
const mysql = MySql.instance;
server.app.use(router);

server.start();

