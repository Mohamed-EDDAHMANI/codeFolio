import mongoose, { Schema } from 'mongoose';

export interface IUser {
  nom: string;
  prenom: string;
  password: string;
  email: string;
  image?: string;
  dateNaissance?: Date;
  caver?: string; // as in diagram
  adress?: string; // as in diagram
  biographie?: string;
}

const UserSchema = new Schema<IUser>(
  {
    nom: { type: String, required: true, trim: true },
    prenom: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    image: { type: String },
    dateNaissance: { type: Date },
    caver: { type: String },
    adress: { type: String },
    biographie: { type: String }
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = mongoose.model<IUser>('User', UserSchema);
