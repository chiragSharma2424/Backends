import React from 'react';

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome to Authentication System
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">Signup Below</p>

        <input type="text" placeholder="Fullname" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        
        <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>

        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
