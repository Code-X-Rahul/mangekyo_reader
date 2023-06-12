import { AiOutlineLogin } from "react-icons/ai"
import { RxPerson } from "react-icons/rx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"

import { useUserupdate, useUserLogin, useUser, useGLogin } from "../UserContext"
import { useState, useRef } from "react"

const SignUpModal = () => {
    const [user, setUser] = useState(true)
    const userName = useRef();
    const password = useRef();
    const confirmPassword = useRef();


    const signUp = useUserupdate()
    const signIn = useUserLogin()
    const userInfo = useUser()
    const gLogin = useGLogin()


    const userHandler = (e) => {
        e.preventDefault()
        if (user) {
            signIn(userName.current.value, password.current.value)
            alert("login")
            return
        }
        if (password.current.value !== confirmPassword.current.value) return alert("password does not match")
        signUp(userName.current.value, password.current.value)
    }
    return (
        <Dialog>
            <DialogTrigger className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2">
                {userInfo?.uid
                    ? <RxPerson /> : <AiOutlineLogin />}
            </DialogTrigger>
            {!userInfo && <DialogContent className="flex flex-col justify-center items-center w-[80vw] my-[20vh] border-2 border-solid border-teal-400 p-16 rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-4xl font-bold">{user ? "Login" : "Sign Up"}</DialogTitle>
                    <DialogDescription className="flex justify-center items-center">
                        <button onClick={() => setUser(true)} className={`text-2xl font-bold mx-2 ${user ? "text-teal-500" : "text-gray-400"}`}>Login</button>
                        <button onClick={() => setUser(false)} className={`text-2xl font-bold mx-2 ${user ? "text-gray-400" : "text-teal-500"}`}>Sign Up</button>
                        <button onClick={() => gLogin()} className={`text-2xl font-bold mx-2 ${user ? "text-gray-400" : "text-teal-500"}`}>Google</button>

                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col justify-center items-center">
                    <input ref={userName} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="text" placeholder="Username" />
                    <input ref={password} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Password" />
                    {!user && <input ref={confirmPassword} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Confirm Password" />}
                    <button onClick={userHandler} className="bg-teal-500 text-white p-2 rounded-lg my-2">{user ? "Login" : "Sign Up"}</button>
                    <p className="text-sm text-gray-700">Don't have an account?<span onClick={() => setUser(!user)} className="text-sm text-teal-700 cursor-pointer"> {user ? "Register" : "Login"}</span></p>

                </form>
            </DialogContent>}
            {userInfo && <DialogContent className="flex flex-col justify-center items-center w-[80vw] my-[20vh] border-2 border-solid border-teal-400 p-16 rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-4xl font-bold">{user.uid}</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col justify-center items-center">
                    <button onClick={userHandler} className="bg-teal-500 text-white p-2 rounded-lg my-2">Logout</button>
                </form>

            </DialogContent>}
        </Dialog>
    )
}

export default SignUpModal