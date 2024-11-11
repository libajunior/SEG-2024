import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../@libs/types";

type AuthContextProps = {
    user: IUser | undefined;
    setUser: (user: IUser) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthContextProviderProps = {
    children: ReactNode
}
export function AuthContextProvider(props: AuthContextProviderProps) {
 
    const [user, setUser] = useState<IUser>();

    useEffect(()=>{
        //TO-DO: Recupera os valores da Local Storage        
    }, [user]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props. children}
        </AuthContext.Provider>
    )

}