
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Event = db.define('Eventos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start:{
        type: DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING
    },
    backgroundColor:{
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default Event;