import { UserModel } from '../../models/user.model.js';
import { hashPassword } from '../../utils/auth.js';
import { GraphQLError } from 'graphql';

export default {
  Query: {
    users: async () => await UserModel.find().lean(),
    user: async (_: any, { _id }: { _id: string }) => {
      const user = await UserModel.findById(_id).lean();
      if (!user) {
        throw new GraphQLError('User not found', { extensions: { code: 'USER_NOT_FOUND' } });
      }
      return user;
    },
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
    updateUser: async (_: any, { _id, input }: { _id: string; input: any }) => {
      const updated = await UserModel.findByIdAndUpdate(_id, input, { new: true }).lean();
      if (!updated) {
        throw new GraphQLError('User not found', { extensions: { code: 'USER_NOT_FOUND' } });
      }
      return updated;
    },
    deleteUser: async (_: any, { _id }: { _id: string }) => {
      const res = await UserModel.findByIdAndDelete(_id);
      if (!res) {
        throw new GraphQLError('User not found', { extensions: { code: 'USER_NOT_FOUND' } });
      }
      return true;
    },
  },
};
