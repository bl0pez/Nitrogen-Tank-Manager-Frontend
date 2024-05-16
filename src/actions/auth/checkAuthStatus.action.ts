"use server";
import { Auth, User } from "@/interfaces/user.interfas";
import { getCookies, removeCookiesAuth, setCookiesAuth } from "@/lib/cookies";

export async function checkAuthStatus(): Promise<User | null> {
  try {
    const token = await getCookies("token");

    if (!token) {
      return null;
    }

    const resp = await fetch(`${process.env.BACKEND_URL}/auth/check-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    

    if (!resp.ok) {
      removeCookiesAuth();
      return null;
    }

    const data: Auth = await resp.json();
    setCookiesAuth(data);
    return data.user;
  } catch (error: any) {
    removeCookiesAuth();
    return null;
  }
}
