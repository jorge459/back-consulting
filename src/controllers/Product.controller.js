import {getAll,getAllAuditoria, getAllConsultoria, getAllInvetario, getAllOutsourcing} from "../services/Product.service.js";

export const getAllProducts = async(req,res)=>{
    const dataProducts = await getAll();
    res.json(dataProducts)
}

export const getAllAuditoriaServices = async (req,res)=>{
    const dataProducts = await getAllAuditoria();
    res.json(dataProducts)
}
export const getAllConsultoriaServices = async(req,res)=>{
    const dataProducts = await getAllConsultoria();
    res.json(dataProducts);
}
export const getAllOutsourcingServices = async(req,res)=>{
    const dataProducts = await getAllOutsourcing();
    res.json(dataProducts);
}
export const getAllInvetarioservice = async (req,res)=>{
    const dataProducts = await getAllInvetario();
    res.json(dataProducts)
}