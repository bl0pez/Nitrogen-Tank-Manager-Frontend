import { Sidebar } from "@/components/layouts/Sidebar";
import { getCookies } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCookies("user");

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-screen bg-[#FAFAFB]">
      <Sidebar />
      <main className="p-4 flex-1 overflow-y-auto">
      {children}
      </main>
    </div>
  );
}
