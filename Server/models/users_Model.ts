import { Schema, model, Document } from "mongoose";

interface User extends Document {
    id: string;
    username: string;
    password: string;
    name: string;
    dateOfBirth: Date;
    country: string;
    hometown: string;
    IDCard: string;
    phoneNumber: string;
    email: string;
    address: string;
}

const userSchema = new Schema<User>({
    id: { type: String, immutable: true, unique: true, index: true },
    username: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 20,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15,
        trim: true,
    },
    name: { type: String, required: true, minlength: 6, trim: true },
    dateOfBirth: { type: Date, immutable: true, required: true },
    country: { type: String, required: true },
    hometown: { type: String, required: true },
    IDCard: {
        type: String,
        required: true,
        immutable: true,
        validate: {
            validator: (v: string) => /^\d{11}$/.test(v),
            message: (props) =>
                `${props.value} is not a valid IDCard number! It should be exactly 11 digits.`,
        },
    },
    phoneNumber: {
        type: String,
        required: true,
        immutable: true,
        validate: {
            validator: (v: string) => /^\d{10}$/.test(v),
            message: (props) =>
                `${props.value} is not a valid phone number! It should be exactly 10 digits.`,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    address: { type: String, required: true, trim: true },
});

export const UserModel = model<User>("User", userSchema);
