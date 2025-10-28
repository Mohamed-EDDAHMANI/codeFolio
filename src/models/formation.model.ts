import mongoose, { Schema, Types } from 'mongoose';

export interface IFormation {
  filiere: string;
  ecole: string;
  localisation?: string;
  dateDubee?: Date; // as in diagram (start date)
  dateFinal?: Date;
  description?: string;
  userId: Types.ObjectId;
}

const FormationSchema = new Schema<IFormation>(
  {
    filiere: { type: String, required: true, trim: true },
    ecole: { type: String, required: true, trim: true },
    localisation: { type: String },
    dateDubee: { type: Date },
    dateFinal: { type: Date },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, versionKey: false }
);

export const FormationModel = mongoose.model<IFormation>('Formation', FormationSchema);
