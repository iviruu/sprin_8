"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_1 = __importDefault(require("../routes/producto"));
const connection_1 = __importDefault(require("../db/connection"));
const sitios_1 = __importDefault(require("../routes/sitios"));
const events_1 = __importDefault(require("../routes/events"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`apliacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/calendar', (req, res) => {
            res.json({
                msg: 'API Worki maps'
            });
        });
        this.app.use('/api/events', events_1.default);
        this.app.get('/maps', (req, res) => {
            res.json({
                msg: 'API Worki maps'
            });
        });
        this.app.use('/api/sitios', sitios_1.default);
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Worki crud'
            });
        });
        this.app.use('/api/productos', producto_1.default);
    }
    midlewares() {
        //Parseamos el body
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('base de datos conectados ');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
