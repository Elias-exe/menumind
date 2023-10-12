import { Request, Response } from 'express';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Account } from '../../models/Account';

export async function loginAccount(req: Request, res: Response) {
    const { email, password } = req.body;
    const jwtSecretKey: any = process.env.JWT_SECRET_KEY;

    if (!email) {
        res.status(400).json({ error: 'Email is required!' });
    }

    if (!password) {
        res.status(400).json({ error: 'Password is required!' });
    }

    const account = await Account.findOne({ email });

    if (!account) {
        res.status(404).json({ error: 'Account not registred' });
    } else {
        bcrypt.compare(password, account.password, (err, result) => {
            if (err) {
                console.error('Erro ao comparar as senhas:', err);
                return;
            }

            if (result) {
                const token = jwt.sign(account.toJSON(), jwtSecretKey, { expiresIn: '1d' });
                return res.status(202).json({ token });
            } else {
                return res.status(400).send('Dados inválidos!');
            }
        });
    }
}
