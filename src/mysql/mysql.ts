import mysql from 'mysql';

export default class MySql {

    private static _instance: MySql;
    conectado: boolean = false;
    cnn: mysql.Connection;

    constructor(){
        this.cnn = mysql.createConnection({
            host:'localhost',
            user:'dbnodeuser',
            password:'123456',
            database:'db_node'
        });
        this.conectarDB();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private conectarDB(){
        this.cnn.connect( (error:mysql.MysqlError)=> {
            if(error) console.log(error);
            console.log('Base de datos conectada.');
            return ;
        })
    }
}