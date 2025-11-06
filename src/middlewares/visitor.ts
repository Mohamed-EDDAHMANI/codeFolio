import { Request } from 'express';
import { VisitorModel } from '../models/visitor.model.js';
import { getDetailedVisitorInfo } from '../utils/visitorInfo.js';

export const trackVisitor = async (req: Request) => {
  try {
    const visitorInfo = await getDetailedVisitorInfo(req);
    await VisitorModel.create(visitorInfo);
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};