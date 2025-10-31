import { DocumentModel } from '../../models/document.model.js';

export default {
  Query: {
    documents: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await DocumentModel.find({ userId: args.userId }).lean();
      return await DocumentModel.find().lean();
    },
  document: async (_: any, { _id }: { _id: string }) => await DocumentModel.findById(_id).lean(),
  },
  Mutation: {
    createDocument: async (_: any, { input }: { input: any }) => {
      const doc = await DocumentModel.create(input);
      return doc.toObject();
    },
    updateDocument: async (_: any, { _id, input }: { _id: string; input: any }) =>
      await DocumentModel.findByIdAndUpdate(_id, input, { new: true }).lean(),
    deleteDocument: async (_: any, { _id }: { _id: string }) => !!(await DocumentModel.findByIdAndDelete(_id)),
  },
};
