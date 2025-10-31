import { UserModel } from '../../models/user.model.js';
import { comparePassword, signToken } from '../../utils/auth.js';

export default {
    Mutation: {
        login: async (_: any, { email, password }: { email: string; password: string }, ctx: any) => {
            // no requirement for ctx.token here
            const user = await UserModel.findOne({ email }).lean();
            if (!user) throw new Error('Invalid credentials');

            const hash = (user as any).password;
            const ok = await comparePassword(password, hash);
            if (!ok) throw new Error('Invalid credentials');

            const token = signToken({ sub: (user as any)._id.toString(), email: user.email });

            // optionally set HttpOnly cookie:
            // ctx.res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`);

            const { password: _pw, ...userSafe } = user as any;
            console.log(user)
            return { token, user: userSafe };
        },
    },
};