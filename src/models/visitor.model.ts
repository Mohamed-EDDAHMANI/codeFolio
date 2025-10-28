import mongoose, { Schema } from 'mongoose';

export interface IVisitor {
  id?: number; // optional; Mongo uses _id
  ip_address?: string;
  country?: string;
  city?: string;
  isp?: string;
  user_agent?: string;
  referrer?: string;
  accept_language?: string;
  screen_resolution?: string;
  device_type?: string;
  timezone?: string;
  visit_time?: Date;
  pages_visited?: string[];
  session_duration?: number; // seconds
}

const VisitorSchema = new Schema<IVisitor>(
  {
    id: { type: Number },
    ip_address: { type: String },
    country: { type: String },
    city: { type: String },
    isp: { type: String },
    user_agent: { type: String },
    referrer: { type: String },
    accept_language: { type: String },
    screen_resolution: { type: String },
    device_type: { type: String },
    timezone: { type: String },
    visit_time: { type: Date },
    pages_visited: [{ type: String }],
    session_duration: { type: Number }
  },
  { timestamps: true, versionKey: false }
);

VisitorSchema.index({ ip_address: 1, visit_time: -1 });

export const VisitorModel = mongoose.model<IVisitor>('Visitor', VisitorSchema);
