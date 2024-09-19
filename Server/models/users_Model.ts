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
}

const userSchema = new Schema<User>({
    id: { type: String, immutable: true, unique: true, index: true },
    username: { type: String, required: true, minlength: 9, trim: true },
    password: { type: String, required: true, minlength: 8, trim: true },
    name: { type: String, required: true, minlength: 6, trim: true },
    dateOfBirth: { type: Date, immutable: true },
    country: { type: String, required: true },
    hometown: { type: String, required: true },
    IDCard: { type: String, immutable: true },
    phoneNumber: { type: String, immutable: true },
});
