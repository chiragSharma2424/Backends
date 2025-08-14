import React from "react";

function Signin() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        <form className="space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div> 


          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div> 

          <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Signin;