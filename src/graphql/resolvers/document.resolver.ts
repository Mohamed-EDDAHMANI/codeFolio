import { DocumentModel } from '../../models/document.model.js';

export default {
  Query: {
    documents: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await DocumentModel.find({ userId: args.userId }).lean();
      return await DocumentModel.find().lean();
    },
    document: async (_: any, { id }: { id: string }) => await DocumentModel.findById(id).lean(),
  },
  Mutation: {
    createDocument: async (_: any, { input }: { input: any }) => {
      const doc = await DocumentModel.create(input);
      return doc.toObject();
    },
    updateDocument: async (_: any, { id, input }: { id: string; input: any }) =>
      await DocumentModel.findByIdAndUpdate(id, input, { new: true }).lean(),
    deleteDocument: async (_: any, { id }: { id: string }) => !!(await DocumentModel.findByIdAndDelete(id)),
  },
};
