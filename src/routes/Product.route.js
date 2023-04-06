import {Router} from 'express'
import {getAllAuditoriaServices, getAllConsultoriaServices, getAllInvetarioservice, getAllOutsourcingServices, getAllProducts} from '../controllers/Product.controller.js'
const router=Router();
router.get('/',getAllProducts);
router.get('/auditoria',getAllAuditoriaServices);
router.get('/consultoria',getAllConsultoriaServices);
router.get('/outsourcing',getAllOutsourcingServices);
router.get('/inventario',getAllInvetarioservice);

export default router;