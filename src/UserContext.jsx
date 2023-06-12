import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";


const provider = new GoogleAuthProvider();

const UserContext = createContext();
const UserUpdateContext = createContext();
const UserLoginContext = createContext();
const GLoginContext = createContext();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function useUser() {
    return useContext(UserContext);
}

export function useUserupdate() {
    return useContext(UserUpdateContext);
}
export function useUserLogin() {
    return useContext(UserLoginContext);
}
export function useGLogin() {
    return useContext(GLoginContext);
}



export function UserProvider({ children }) {
    const [user, setUser] = useState()


    function signUp(email, password) {
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

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            alert(uid)
            // ...
        } else {
            // User is signed out
            // ...
            alert("signed out")
        }
    });
    function gLogin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                console.log(user);
                setUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
                // ...
            });
    }
    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={signUp}>
                <UserLoginContext.Provider value={signIn}>
                    <GLoginContext.Provider value={gLogin}>
                        {children}
                    </GLoginContext.Provider>
                </UserLoginContext.Provider>
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    );
}



