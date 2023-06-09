import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response){
    try{
        const { productId } = req.params;
        await Product.findByIdAndDelete(productId);

        res.status(204).send('Product Deleted with success');
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
