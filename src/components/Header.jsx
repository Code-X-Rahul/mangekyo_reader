"use client"
import logo from '../assets/logo.png'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineLogin } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import Form from "./Form"
import { Link, useNavigate } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"
const Header = () => {

    const navigate = useNavigate()
    const useHandler = () => {
        navigate('/login')
    }


    return (
        <>
            <header className="py-4 bg-blend-multiply bg-teal-600">
                <nav className="flex justify-between ">
                    <div className="flex items-center justify-center">
                        <button className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2 ">
                            <AiOutlineMenu />
                        </button>
                        <Link href="/">
                            <img src={logo} alt="logo" className="w-20 mx-4" />
                        </Link>
                        {/* <div className="flex justify-between">
                    <ul className="flex justify-center items-center">
                        <Link href="/">
                            <li className="list-none mx-4 text-teal-400">HOME</li>
                        </Link>
                        <Link href="/">
                            <li className="list-none mx-4 text-teal-400">CONTACT US</li>
                        </Link>
                    </ul>
                </div> */}
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2">
                            <RiSearchLine />
                        </button>
                        <Dialog>
                            <DialogTrigger>
                                <button onClick={useHandler} className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2">
                                    <AiOutlineLogin />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="flex justify-center items-center h-screen">
                                <DialogHeader>
                                    <DialogTitle><h1 className="text-4xl font-bold">Login</h1></DialogTitle>
                                    <DialogDescription>
                                        <div className="flex flex-col justify-center items-center">
                                            <form className="flex flex-col justify-center items-center">
                                                <input className="border-2 border-gray-400 p-2 rounded-lg my-2" type="text" placeholder="Username" />
                                                <input className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Password" />
                                                <button className="bg-teal-500 text-white p-2 rounded-lg my-2">Login</button>
                                            </form>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                </nav>
                <Form />
            </header>
            <div className="flex justify-center items-center h-screen">

            </div>
        </>
    )
}

export default Header