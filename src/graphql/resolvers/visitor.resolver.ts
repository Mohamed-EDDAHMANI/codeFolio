import { VisitorModel } from '../../models/visitor.model.js';
import { GraphQLError } from 'graphql';

export default {
  Query: {
    visitors: async (_: any, args: { limit?: number; skip?: number }) => {
      const { limit = 50, skip = 0 } = args || {};
      return await VisitorModel.find().sort({ visit_time: -1 }).skip(skip).limit(limit).lean();
    },
    visitor: async (_: any, { _id }: { _id: string }) => {
      const doc = await VisitorModel.findById(_id).lean();
      if (!doc) {
        throw new GraphQLError('Visitor not found', { extensions: { code: 'VISITOR_NOT_FOUND' } });
      }
      return doc;
    },
  },
  Mutation: {
    createVisitor: async (_: any, { input }: { input: any }) => {
      const doc = await VisitorModel.create(input);
      return doc.toObject();
    },
    updateVisitorSession: async (_: any, { _id, pages_visited, session_duration }: { _id: string, pages_visited?: string[], session_duration?: number }) => {
      const doc = await VisitorModel.findByIdAndUpdate(
        _id,
        { $addToSet: { pages_visited: { $each: pages_visited || [] } }, session_duration },
        { new: true }
      );
      return doc?.toObject();
    },
    deleteVisitor: async (_: any, { _id }: { _id: string }) => !!(await VisitorModel.findByIdAndDelete(_id)),
  },
};
