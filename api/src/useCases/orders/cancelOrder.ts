import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response){
    try{
        const { orderId } = req.params;
        await Order.findByIdAndDelete(orderId);

        res.status(204).send('Order Deleted with success');
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
