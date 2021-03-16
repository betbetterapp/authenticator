import mongoose from "mongoose";
import { Model } from "./model.js";

const AccountSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    permissionLevel: {
        type: Number,
        required: true,
        default: 1,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});

export interface Account {
    id: string;
    provider: string;
    username: string;
    password?: string;
    permissionLevel?: number;
    createdAt?: Date | number;
}

export default mongoose.model<Model<Account>>("Account", AccountSchema, "accounts");
