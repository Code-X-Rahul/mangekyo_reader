import { useState } from "react";
import { useAuth } from "../UserContext"
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const { user, logout } = useAuth()
    const navigate = useNavigate()
    !user && navigate('/')

    const logoutHandler = async () => {
        try {
            await logout();
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className="m-4 w-[80vw] mx-auto flex justify-center flex-col">
            <h1 className="text-center text-3xl text-teal-700 my-2">Dashboard</h1>
            <form className="grid grid-cols-1 gap-3">
                <div className="flex justify-center items-center flex-col">
                    <img className="w-28 rounded-full my-2" src={user?.photoURL} alt="" />
                    <button className="text-teal-500 text-sm">Change Avatar</button>
                </div>
                <div className="flex justify-center items-center">
                    <label htmlFor="display-name">
                        <span className="text-teal-500 text-lg">Name</span>
                    </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" id="display-name" className="border border-teal-500 rounded-lg p-2 mx-2" value={user?.displayName} />
                </div>
                <div className="flex justify-center items-center">
                    <label htmlFor="email">
                        <span className="text-teal-500 text-lg">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" className="border border-teal-500 rounded-lg p-2 mx-2" value={user?.email} />
                </div>
                <button className="text-lg text-slate-200 bg-teal-500 rounded-lg p-2 my-6">
                    Save Changes
                </button>
            </form>

            <button onClick={logoutHandler} className="bg-teal-500 text-white p-2 rounded-lg my-2">Log Out</button>
        </div>
    )
}

export default Dashboard