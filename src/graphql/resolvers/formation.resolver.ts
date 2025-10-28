import { FormationModel } from '../../models/formation.model.js';

export default {
  Query: {
    formations: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await FormationModel.find({ userId: args.userId }).lean();
      return await FormationModel.find().lean();
    },
    formation: async (_: any, { id }: { id: string }) => await FormationModel.findById(id).lean(),
  },
  Mutation: {
    createFormation: async (_: any, { input }: { input: any }) => {
      const doc = await FormationModel.create(input);
      return doc.toObject();
    },
    updateFormation: async (_: any, { id, input }: { id: string; input: any }) =>
      await FormationModel.findByIdAndUpdate(id, input, { new: true }).lean(),
    deleteFormation: async (_: any, { id }: { id: string }) => !!(await FormationModel.findByIdAndDelete(id)),
  },
};
