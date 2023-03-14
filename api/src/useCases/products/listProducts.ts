import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response){
    try{
        const product = await Product.find();

        res.status(201).json(product);
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
