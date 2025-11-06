import { ExperienceModel } from '../../models/experience.model.js';
import { GraphQLError } from 'graphql';

export default {
  Query: {
    experiences: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await ExperienceModel.find({ userId: args.userId }).lean();
      return await ExperienceModel.find().lean();
    },
    experience: async (_: any, { _id }: { _id: string }) => {
      const doc = await ExperienceModel.findById(_id).lean();
      if (!doc) {
        throw new GraphQLError('Experience not found', { extensions: { code: 'EXPERIENCE_NOT_FOUND' } });
      }
      return doc;
    },
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
