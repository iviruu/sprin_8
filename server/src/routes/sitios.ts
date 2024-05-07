import {Router} from 'express';
import { deleteSitios, getSitio, getSitios, postSitios, updateSitios } from '../controllers/sitios';



const router2 = Router();

router2.get('/',getSitios);
router2.get('/:id',getSitio);
router2.delete('/:id',deleteSitios);
router2.post('/',postSitios);
router2.put('/:id',updateSitios);


export default router2;