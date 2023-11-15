"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data?.user) {
      router.push("/");
    }
  };

  return (
    <div className="flex gap-2">
      <form className="flex gap-2" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-bordered input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-bordered input"
        />
        <button type="submit" className="btn-primary btn">
          Sign in
        </button>
      </form>
    </div>
  );
}