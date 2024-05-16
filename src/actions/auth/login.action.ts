"use server";
import { LoginFormValues } from "@/components/auth/LoginForm";
import { Auth, User } from "@/interfaces/user.interfas";
import { removeCookiesAuth, setCookiesAuth } from "@/lib/cookies";

export async function loginAction(values: LoginFormValues): Promise<User | null> {
  try {
    const resp = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!resp.ok) {
        throw new Error('Error');
    }

    const data = (await resp.json()) as Auth;
    
    setCookiesAuth(data);
    return data.user;
  } catch (error: any) {
    removeCookiesAuth();
    return null;
  }
}
