import { UserModel } from '../../models/user.model.js';
import { comparePassword, signToken } from '../../utils/auth.js';

export default {
  Mutation: {
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      const user = await UserModel.findOne({ email }).lean();
      if (!user) throw new Error('Invalid credentials');

      const hash = (user as any).password;
      const ok = await comparePassword(password, hash);
      if (!ok) throw new Error('Invalid credentials');

      const token = signToken({ sub: (user as any)._id.toString(), email: user.email });

      const { password: _pw, ...userSafe } = user as any;
      return { token, user: userSafe };
    },
  },
};
