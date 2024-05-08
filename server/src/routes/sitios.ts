import {Router} from 'express';
import { deleteSitios, getSitio, getSitios, postSitios, updateSitios } from '../controllers/sitios';



const router = Router();

router.get('/',getSitios);
router.get('/:id',getSitio);
router.delete('/:id',deleteSitios);
router.post('/',postSitios);
router.put('/:id',updateSitios);


export default router;