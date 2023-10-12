import { Request, Response } from 'express';

import bcrypt  from 'bcryptjs';

import { Account } from '../../models/Account';

export async function createAccount(req: Request, res: Response){
    try{
        const { email , password } = req.body;

        if(!email){
            res.status(400).json({error: 'Email is required!'});
        }

        if(!password){
            res.status(400).json({error: 'Password is required!'});
        }

        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async(err, hash) => {
            if (err) {
                console.error('Erro to generate hash password:', err);
                return;
            }
            await Account.create(
                {
                    email,
                    password: hash
                }
            );
        });

        res.status(201).json('Conta criada com sucesso');
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
