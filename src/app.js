import  express  from "express";
import cors from 'cors';
import {dbconnection} from "./dataconnections/dbConnection.js";
import './models/Product.js';
import './models/ProductCategory.js';
import ProductRoute from './routes/Product.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/products",ProductRoute);
async function main(){
    try {
        
        await dbconnection.sync();
        console.log("conexxion exitosa");
    } catch (error) {
        console.log("no se conecto comod eberia",error)
    }

}
main();
export default app;