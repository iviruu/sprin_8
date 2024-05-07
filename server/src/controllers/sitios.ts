import{Request, Response} from 'express';
import Sitios from '../models/sitios';



export const getSitios = async (req:Request,res: Response) => {
    const listSitios = await Sitios.findAll()


    res.json(listSitios)
}

export const getSitio = async (req:Request,res: Response) => {
    const { id } = req.params;
    const product =await Sitios.findByPk(id);

    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        })
    }


}

export const deleteSitios =async (req:Request,res: Response) => {
    const { id } = req.params;
    const product =await Sitios.findByPk(id);

    if(!product){
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        })
    }else{
        await product.destroy();
        res.json({
            msg:'El producto a sido eliminado'
        })
    }


}

export const postSitios =async (req:Request,res: Response) => {
    const { body } = req;

    try{
        await Sitios.create(body);

        res.json({
            msg:'El producto a sido creado con exito'
        })
    }catch(error){
        console.log(error);
        res.json({
            msg:'Upps ocurio un error, comuniquese con suporte'
        })

    }

    

}

export const updateSitios =async (req:Request,res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product =await Sitios.findByPk(id);

    if(product){
        await product.update(body);
        res.json({
            msg:'El producto actualizado con exito'
        })
    }else{
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Upps ocurio un error, comuniquese con suporte'
        })
    }
    

}