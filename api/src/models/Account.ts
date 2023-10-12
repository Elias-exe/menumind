import { model, Schema } from 'mongoose';

export const Account = model('Account', new Schema({
    email: {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
}));
