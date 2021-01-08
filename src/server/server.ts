import express from 'express';

export default class Server {
    
    public app: express.Application;
    public port: number;

    constructor(port: number){
        this.port = port;
        this.app = express();
    }

    public static init(port: number){
        return new Server(port);
    }

    public start(){
        this.app.listen(this.port,()=>{
            console.log(`Server is running in the port ${this.port}`);
        });
    }
}