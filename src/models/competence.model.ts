import mongoose, { Schema, Types } from 'mongoose';

export interface ICompetence {
  nom: string;
  categorie: string;
  userId: Types.ObjectId;
}

const CompetenceSchema = new Schema<ICompetence>(
  {
    nom: { type: String, required: true, trim: true },
    categorie: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, versionKey: false }
);

export const CompetenceModel = mongoose.model<ICompetence>('Competence', CompetenceSchema);
