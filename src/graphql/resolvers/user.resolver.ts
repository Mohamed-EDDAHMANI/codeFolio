import { UserModel } from '../../models/user.model.js';
import { hashPassword } from '../../utils/auth.js';

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
      if (input.password) {
        input.password = await hashPassword(input.password);
      }
      const newUser = new UserModel(input);
      await newUser.save();
      const obj = newUser.toObject();
      // never return password
      if ((obj as any).password) delete (obj as any).password;
      return obj;
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
