
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sitios = db.define('Sitios',{
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    text:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.STRING
    },
    place_name:{
        type: DataTypes.STRING
    },
    center:{
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default Sitios;