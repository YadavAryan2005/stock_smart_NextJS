import User from "@/model/user";
import { connectDB, disconnectDB } from "@/utils/dbconnect";
import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, github],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          return true;
        }
        const newUser = new User(user);
        await newUser.save();
        console.log("user", user);
        console.log("account", account);
      } catch (error) {
        console.log("error", error);
      }
      await disconnectDB();
      return true;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
});
