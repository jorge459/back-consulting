
import { Product} from "../models/Product.js";
import { ProductCategory } from "../models/ProductCategory.js"
export const getAll = ()=>{
    const products = Product.findAll();
    return products;
}

export const getAllAuditoria =()=>{
    const auditoriaProducts = ProductCategory.findAll({
        where:{
            product_id:1
        }
    });
    return auditoriaProducts;
}
export const getAllConsultoria =()=>{
    const consultoriaProducts = ProductCategory.findAll({
        where:{
            product_id:2
        }
    });
    return consultoriaProducts;
}
export const getAllOutsourcing =()=>{
    const outsourcingProducts = ProductCategory.findAll({
        where:{
            product_id:3
        }
    });
    return outsourcingProducts;
}
export const getAllInvetario =()=>{
    const inventarioProducts = ProductCategory.findAll({
        where:{
            product_id:4
        }
    });
    return inventarioProducts;
}