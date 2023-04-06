import {Sequelize} from 'sequelize';
import {createPool} from'mysql2/promise' ;

export const dbconnection = new Sequelize(
    'dbchobos',
    'root',
    'jachi',
    {
        host:'localhost',
        dialect:'mysql'
    }

);

// sequelize.authenticate().then(()=>{
//     console.log("La conexion se realizo con exit")
// }).catch((error)=>{
//     console.error("no se puede conectar a la base de datos", error)
// })
