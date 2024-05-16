import { User, Role } from "@/interfaces/user.interfas";
import { getCookies } from "./cookies"

export const isAdmin = async (): Promise<Boolean> => {
    const user = await getCookies("user");
    if (!user) return false;
    const { role } = JSON.parse(user) as User;    
    return role === Role.ADMIN;
}