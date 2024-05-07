"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Sitios = connection_1.default.define('Sitios', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    text: {
        type: sequelize_1.DataTypes.STRING
    },
    category: {
        type: sequelize_1.DataTypes.STRING
    },
    place_name: {
        type: sequelize_1.DataTypes.STRING
    },
    center: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Sitios;
