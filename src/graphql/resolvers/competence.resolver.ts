import { CompetenceModel } from '../../models/competence.model.js';

export default {
  Query: {
    competences: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await CompetenceModel.find({ userId: args.userId }).lean();
      return await CompetenceModel.find().lean();
    },
  competence: async (_: any, { _id }: { _id: string }) => await CompetenceModel.findById(_id).lean(),
  },
  Mutation: {
    createCompetence: async (_: any, { input }: { input: any }) => {
      const doc = await CompetenceModel.create(input);
      return doc.toObject();
    },
    updateCompetence: async (_: any, { _id, input }: { _id: string; input: any }) =>
      await CompetenceModel.findByIdAndUpdate(_id, input, { new: true }).lean(),
    deleteCompetence: async (_: any, { _id }: { _id: string }) => !!(await CompetenceModel.findByIdAndDelete(_id)),
  },
};
