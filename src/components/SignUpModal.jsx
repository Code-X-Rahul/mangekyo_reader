import { AiOutlineLogin } from "react-icons/ai"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"

import { signIn } from '../firebase'
import { useUserupdate } from "../UserContext"
import { useState, useRef, useContext } from "react"

const SignUpModal = () => {
    const [user, setUser] = useState(true)
    const userName = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const signUp = useContext(useUserupdate)

    const userHandler = (e) => {
        e.preventDefault()
        // if (password.current.value !== confirmPassword.current.value) alert("password does not match")
        if (user) {
            signIn(userName.current.value, password.current.value)
            return
        }
        signUp(userName.current.value, password.current.value)

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2">
                    <AiOutlineLogin />
                </button>
            </DialogTrigger>
            <DialogContent className="flex flex-col justify-center items-center w-[80vw] my-[20vh] border-2 border-solid border-teal-400 p-16 rounded-2xl">
                <DialogHeader>
                    <DialogTitle><h1 className="text-4xl font-bold">{user ? "Login" : "Sign Up"}</h1></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col justify-center items-center">
                    <input ref={userName} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="text" placeholder="Username" />
                    <input ref={password} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Password" />
                    {!user && <input ref={confirmPassword} className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Confirm Password" />}
                    <button onClick={userHandler} className="bg-teal-500 text-white p-2 rounded-lg my-2">{user ? "Login" : "Sign Up"}</button>
                    <p className="text-sm text-gray-700">Don't have an account?<span onClick={() => setUser(!user)} className="text-sm text-teal-700 cursor-pointer"> {user ? "Register" : "Login"}</span></p>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpModal