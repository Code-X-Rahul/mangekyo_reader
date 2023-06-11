"use client"
import logo from '../assets/logo.png'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineLogin } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import Form from "./Form"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
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
                    <button className="text-black bg-slate-50 p-2 rounded-full text-lg mx-2">
                        <AiOutlineLogin />
                    </button>
                </div>
            </nav>
            <Form/>
        </header>
    )
}

export default Header