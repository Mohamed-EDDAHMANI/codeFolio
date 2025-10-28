import mongoose, { Schema, Types } from 'mongoose';

export interface IProjet {
  titre: string;
  description?: string;
  urlGit?: string;
  urlDemo?: string;
  image?: string;
  competences?: Types.ObjectId[]; // many-to-many with Competence
}

const ProjetSchema = new Schema<IProjet>(
  {
    titre: { type: String, required: true, trim: true },
    description: { type: String },
    urlGit: { type: String },
    urlDemo: { type: String },
    image: { type: String },
    competences: [{ type: Schema.Types.ObjectId, ref: 'Competence' }]
  },
  { timestamps: true, versionKey: false }
);

export const ProjetModel = mongoose.model<IProjet>('Projet', ProjetSchema);
