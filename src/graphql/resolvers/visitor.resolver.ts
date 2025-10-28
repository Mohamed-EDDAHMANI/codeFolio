import { VisitorModel } from '../../models/visitor.model.js';

export default {
  Query: {
    visitors: async (_: any, args: { limit?: number; skip?: number }) => {
      const { limit = 50, skip = 0 } = args || {};
      return await VisitorModel.find().sort({ visit_time: -1 }).skip(skip).limit(limit).lean();
    },
    visitor: async (_: any, { id }: { id: string }) => await VisitorModel.findById(id).lean(),
  },
  Mutation: {
    createVisitor: async (_: any, { input }: { input: any }) => {
      const doc = await VisitorModel.create(input);
      return doc.toObject();
    },
    deleteVisitor: async (_: any, { id }: { id: string }) => !!(await VisitorModel.findByIdAndDelete(id)),
  },
};
