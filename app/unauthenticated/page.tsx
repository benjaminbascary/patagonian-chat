import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Unauthenticated() {
  const supabase = createServerComponentClient({ cookies });

  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Unauthenticated</h1>
      <p>Please sign in to access the chat</p>
    </div>
  );
}
