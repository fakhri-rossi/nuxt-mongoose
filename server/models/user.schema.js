// const nuxtMongoose = require('#nuxt/')
import { defineMongooseModel } from '#nuxt/mongoose'
import mongoose from 'mongoose'

export const UserSchema = defineMongooseModel({
    name: 'user',
    schema: {
        username: {
            type: String,
            required: [true, 'Username harus diisi'],
            unique: [true, 'Username sudah digunakan']
        },
        email: {
            type: String,
            required: [true, 'Email harus diisi'],
            unique: [true, 'Email sudah digunakan'],
            // validate: {
            //     validator: validator.isEmail,
            //     message: 'Inputan harus berupa Email'
            // }
        },
        password: {
            type: String,
            required: [true, 'Password harus diisi'],
            minLength: 6
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
})