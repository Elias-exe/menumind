import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategories(req: Request, res: Response){
    try{
        const { icon,name } = req.body;

        if(!name){
            res.status(400).json({error: 'Name is required!'});
        }

        if(!icon){
            res.status(400).json({error: 'icon is required!'});
        }

        const category = await Category.create({icon,name});

        res.status(201).json(category);
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
