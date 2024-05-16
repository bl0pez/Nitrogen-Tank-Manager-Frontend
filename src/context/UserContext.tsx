"use client";
import { checkAuthStatus } from "@/actions/auth/checkAuthStatus.action";
import { User } from "@/interfaces/user.interfas";
import { FC, createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
});


export const UserProvider:FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        checkAuthStatus().then((user) => {
            setUser(user);
        });
    }, [])

    

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}