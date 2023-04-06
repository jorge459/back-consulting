import {dbconnection} from '../dataconnections/dbConnection.js';
import {DataTypes} from 'sequelize';
import {ProductCategory} from './ProductCategory.js'

export const Product = dbconnection.define('products',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    }
},
{
    timestamps:false
});

Product.hasMany(ProductCategory,{
    foreignKey:'product_id',
    sourceKey:'id'
})
ProductCategory.belongsTo(Product,{
    foreignKey:'product_id',
    targetId:'id'
})