import Server from './server/server';

const PORT:number = 3000;
const server = Server.init(PORT);
server.start();

