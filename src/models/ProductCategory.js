import {DataTypes} from 'sequelize'
import {dbconnection} from '../dataconnections/dbConnection.js';

export const ProductCategory = dbconnection.define('product_categories',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.TEXT
    },
    importancia:{
        type:DataTypes.TEXT
    },
    servicio:{
        type:DataTypes.TEXT
    }
},
{
    timestamps:false
})
