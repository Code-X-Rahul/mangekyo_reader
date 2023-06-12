import { useState, createContext, useContext } from "react";

const UserContext = createContext();
const UserUpdateContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

export function useUserupdate(){
    return useContext(UserUpdateContext);
}



export function UserProvider({ children }) {
    const [user, setUser] = useState()

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const userData = userCredential.user;
                // ...
                console.log(userData);
                setUser(userData)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);

            });
    }

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={signUp}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    );
}



