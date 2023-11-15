import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/unauthenticated");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10 justify-between background-gradient">
      <Image src={"/patagonian.png"} alt="Llama Logo" width={200} height={200} />
      <ChatSection />
      <Header />
    </main>
  );
}
