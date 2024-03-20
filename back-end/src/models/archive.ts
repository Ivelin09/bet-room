import { Schema, model, Document, Types } from 'mongoose';

interface IArchive extends Document {
    date: string;
    match: string;
    tip: string;
    odd: number;
    result: boolean;
}

const archiveSchema = new Schema<IArchive>(
    {
        date: {
            type: String,
            required: true,
        },
        match: {
            type: String,
            required: true,
        },
        tip: {
            type: String,
            required: true,
        },
        odd: {
            type: Number,
            required: true,
        },
        result: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Archive = model<IArchive>('Archive', archiveSchema);
export default Archive;
