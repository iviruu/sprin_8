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
exports.updateEvent = exports.postEvent = exports.deleteEvent = exports.getEvent = exports.getEvents = void 0;
const events_1 = __importDefault(require("../models/events"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield events_1.default.findAll();
    res.json(listProducts);
});
exports.getEvents = getEvents;
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield events_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getEvent = getEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield events_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'El producto a sido eliminado'
        });
    }
});
exports.deleteEvent = deleteEvent;
const postEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield events_1.default.create(body);
        res.json({
            msg: 'El producto a sido creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurio un error, comuniquese con suporte'
        });
    }
});
exports.postEvent = postEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield events_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El producto actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurio un error, comuniquese con suporte'
        });
    }
});
exports.updateEvent = updateEvent;
