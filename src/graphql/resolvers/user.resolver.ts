import { UserModel } from '../../models/user.model.js';

export default {
  Query: {
    users: async () => await UserModel.find().lean(),
    user: async (_: any, { id }: { id: string }) => await UserModel.findById(id).lean(),
  },
  Mutation: {
    createUser: async (
      _: any,
      { input }: { input: { nom: string; prenom: string; email: string; password: string; image?: string; dateNaissance?: Date; caver?: string; adress?: string; biographie?: string } }
    ) => {
      const newUser = new UserModel(input);
      await newUser.save();
      return newUser.toObject();
    },
    updateUser: async (_: any, { id, input }: { id: string; input: any }) => {
      return await UserModel.findByIdAndUpdate(id, input, { new: true }).lean();
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      const res = await UserModel.findByIdAndDelete(id);
      return !!res;
    },
  },
};
