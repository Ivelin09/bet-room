import { Schema, model, Document, Types } from 'mongoose';

interface IEmail extends Document {
    sender: string;
    subject: string;
    text: string;
    date: Date;
}

const userSchema = new Schema<IEmail>({
    sender: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Email = model<IEmail>('Email', userSchema);
export default Email;
