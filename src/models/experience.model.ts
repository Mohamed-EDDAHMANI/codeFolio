import mongoose, { Schema, Types } from 'mongoose';

export interface IExperience {
  poste: string;
  entreprise: string;
  dateDubee?: Date; // as in diagram (start date)
  dateFinal?: Date;
  description?: string;
  userId: Types.ObjectId;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    poste: { type: String, required: true, trim: true },
    entreprise: { type: String, required: true, trim: true },
    dateDubee: { type: Date },
    dateFinal: { type: Date },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, versionKey: false }
);

export const ExperienceModel = mongoose.model<IExperience>('Experience', ExperienceSchema);
