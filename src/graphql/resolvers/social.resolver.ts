import { SocialModel } from '../../models/social.model.js';

export default {
  Query: {
    socials: async (_: any, args: { userId?: string }) => {
      if (args.userId) return await SocialModel.find({ userId: args.userId }).lean();
      return await SocialModel.find().lean();
    },
  social: async (_: any, { _id }: { _id: string }) => await SocialModel.findById(_id).lean(),
  },
  Mutation: {
    createSocial: async (_: any, { input }: { input: any }) => {
      const doc = await SocialModel.create(input);
      return doc.toObject();
    },
    updateSocial: async (_: any, { _id, input }: { _id: string; input: any }) =>
      await SocialModel.findByIdAndUpdate(_id, input, { new: true }).lean(),
    deleteSocial: async (_: any, { _id }: { _id: string }) => !!(await SocialModel.findByIdAndDelete(_id)),
  },
};
