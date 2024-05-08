import express, {Application, Request, Response} from 'express';
import cors from 'cors'
import routesProducto from '../routes/producto';
import db from '../db/connection';
import routesSitios from '../routes/sitios'


class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app= express();
        this.port= process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`apliacion corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/maps',(req:Request,res:Response)=>{
            res.json({
              msg: 'API Worki maps'
            })  
          })
          this.app.use('/api/sitios',routesSitios)

          
        this.app.get('/',(req:Request,res:Response)=>{
          res.json({
            msg: 'API Worki crud'
          })  
        })
        this.app.use('/api/productos',routesProducto)
    }

        

    midlewares(){

        //Parseamos el body
        this.app.use(express.json())

        //Cors
        this.app.use(cors());
    }

    async dbConnect(){
        try{
            await db.authenticate();
            console.log('base de datos conectados ')
        }catch(error){
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }

    }
}

export default Server