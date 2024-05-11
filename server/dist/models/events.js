"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Event = connection_1.default.define('Eventos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start: {
        type: sequelize_1.DataTypes.STRING
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    backgroundColor: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Event;
