import { getCookies } from "@/lib/cookies";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
 title: 'Auth',
 description: 'Auth Layout',
};
export default async function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const user = await getCookies('user');
  
  if (user) {
    redirect('/')
  }

  

  return (
    <main className="h-screen flex justify-center items-center container">
      { children }
    </main>
  );
}