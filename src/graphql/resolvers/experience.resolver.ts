import { ExperienceModel } from '../../models/experience.model.js';

export default {
  Query: {
    experiences: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await ExperienceModel.find({ userId: args.userId }).lean();
      return await ExperienceModel.find().lean();
    },
  experience: async (_: any, { _id }: { _id: string }) => await ExperienceModel.findById(_id).lean(),
  },
  Mutation: {
    createExperience: async (_: any, { input }: { input: any }) => {
      const doc = await ExperienceModel.create(input);
      return doc.toObject();
    },
    updateExperience: async (_: any, { _id, input }: { _id: string; input: any }) =>
      await ExperienceModel.findByIdAndUpdate(_id, input, { new: true }).lean(),
    deleteExperience: async (_: any, { _id }: { _id: string }) => !!(await ExperienceModel.findByIdAndDelete(_id)),
  },
};
