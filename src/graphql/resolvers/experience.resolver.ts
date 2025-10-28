import { ExperienceModel } from '../../models/experience.model.js';

export default {
  Query: {
    experiences: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await ExperienceModel.find({ userId: args.userId }).lean();
      return await ExperienceModel.find().lean();
    },
    experience: async (_: any, { id }: { id: string }) => await ExperienceModel.findById(id).lean(),
  },
  Mutation: {
    createExperience: async (_: any, { input }: { input: any }) => {
      const doc = await ExperienceModel.create(input);
      return doc.toObject();
    },
    updateExperience: async (_: any, { id, input }: { id: string; input: any }) =>
      await ExperienceModel.findByIdAndUpdate(id, input, { new: true }).lean(),
    deleteExperience: async (_: any, { id }: { id: string }) => !!(await ExperienceModel.findByIdAndDelete(id)),
  },
};
