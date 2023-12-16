import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from '@/actions';
import { z } from 'zod';






export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter( prisma ) as Adapter,
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",

  },
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo electrónico", type: "email", placeholder: "usuario@google.com" },
        password: { label: "Contraseña", type: "password", placeholder: '******' }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const parsedCredentials=z
        .object({email:z.string().email(),password:z.string().min(6)}).safeParse(credentials)
          
        if(!parsedCredentials.success) return null;

        const {email,password}=parsedCredentials.data;



        const user = await signInEmailPassword(email, password );
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const {password:_,...rest}=user
          return rest;
        } 

        return null;
      }
    }),

  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {


    async jwt({ token, user, account, profile }) {
   
      const dbUser = await prisma.user.findUnique({ where: { email: token.email?.toLowerCase() ?? 'no-email' } });

      if(!dbUser){
        throw Error('Correo o Contraseña invalida')
      }
      if ( dbUser?.isActive === false ) {
        throw Error('Usuario no está activo');
      }

      token.roles     = dbUser?.roles ?? 'no-roles';
      token.id        = dbUser?.id ?? 'no-uuid';
      token.isActive  = dbUser.isActive;
      token.name     = dbUser.name;
   
      return token;
    },

    async session({ session, token, user }) {
      
      if ( session && session.user ) {
        session.user.roles    = token.roles;
        session.user.id       = token.id;
        session.user.isActive = token.isActive;
        session.user.name     = token.name;

      }
      console.log(session)
      return session;
    }

  }

}



