import{Request, Response} from 'express';
import Events from '../models/events';



export const getEvents = async (req:Request,res: Response) => {
    const listProducts = await Events.findAll()


    res.json(listProducts)
}

export const getEvent =async (req:Request,res: Response) => {
    const { id } = req.params;
    const product =await Events.findByPk(id);

    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        })
    }


}

export const deleteEvent =async (req:Request,res: Response) => {
    const { id } = req.params;
    const product =await Events.findByPk(id);

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

export const postEvent =async (req:Request,res: Response) => {
    const { body } = req;

    try{
        await Events.create(body);

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

export const updateEvent =async (req:Request,res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product =await Events.findByPk(id);

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