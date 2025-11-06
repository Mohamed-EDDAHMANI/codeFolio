import { Request } from 'express';
import { VisitorModel } from '../models/visitor.model.js';
import { getDetailedVisitorInfo } from '../utils/visitorInfo.js';

const trackedIPs = new Set<string>();

export const trackVisitor = async (req: Request) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] as string;
    
    // Only track if IP hasn't been tracked yet
    if (!trackedIPs.has(ip)) {
      const visitorInfo = await getDetailedVisitorInfo(req);
      await VisitorModel.create(visitorInfo);
      trackedIPs.add(ip);
    }
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};