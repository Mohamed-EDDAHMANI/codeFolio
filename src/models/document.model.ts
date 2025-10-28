import mongoose, { Schema, Types } from 'mongoose';

export interface IDocument {
  nom: string;
  urlStocket: string; // as in diagram
  userId: Types.ObjectId;
}

const DocumentSchema = new Schema<IDocument>(
  {
    nom: { type: String, required: true, trim: true },
    urlStocket: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, versionKey: false }
);

export const DocumentModel = mongoose.model<IDocument>('Document', DocumentSchema);
