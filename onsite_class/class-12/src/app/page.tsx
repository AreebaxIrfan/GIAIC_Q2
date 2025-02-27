export const dynamic = 'force-dynamic'; // Ensures server-side rendering

import Image from "next/image";
import { SessionWrapper } from "./../../components/SessionWrapper";
import LoginComponents from './../../components/login/LoginComponents'
import SignOutComponents from './../../components/login/SignOutComponents'
import { auth } from './../../lib/auth'


export default async function Home() {
   const session = await auth();
   const isAuthenticated = !!session?.user;

   return (
      <>
         <SessionWrapper>
            {isAuthenticated ? <SignOutComponents /> : <LoginComponents />}
         </SessionWrapper>
      </>
   );
}
