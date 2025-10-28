import mongoose, { Schema, Types } from 'mongoose';

export interface ISocial {
  nom: string;
  liensSociaux: string;
  icon?: string;
  userId: Types.ObjectId;
}

const SocialSchema = new Schema<ISocial>(
  {
    nom: { type: String, required: true, trim: true },
    liensSociaux: { type: String, required: true, trim: true },
    icon: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, versionKey: false }
);

export const SocialModel = mongoose.model<ISocial>('Social', SocialSchema);
