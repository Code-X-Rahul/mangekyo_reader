import React from 'react'

const User = () => {
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Login</h1>
                <form className="flex flex-col justify-center items-center">
                    <input className="border-2 border-gray-400 p-2 rounded-lg my-2" type="text" placeholder="Username" />
                    <input className="border-2 border-gray-400 p-2 rounded-lg my-2" type="password" placeholder="Password" />
                    <button className="bg-teal-500 text-white p-2 rounded-lg my-2">Login</button>
                </form>
            </div>
        </div>

    )
}

export default User