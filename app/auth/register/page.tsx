import React from "react";
import Image from "next/image";


export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 m-0">
          <div className="flex w-full h-screen">
    
            <div className="w-1/2 p-8 flex flex-col justify-center bg-white">
                <div className="m-9">          
                  <h1 className="text-4xl font-bold text-red-600 mb-4">RANAH</h1>
                  <h2 className="text-black text-xl font-semibold">Register</h2>
                  <p className="text-gray-600 mb-12">
                    Sudah Punya Akun? <a className="text-red-600" href="/auth/login">Log in</a>
                  </p>
    
                  <form>
                      <div className="mb-9 relative">
                        <input
                          className="drop-shadow-sm w-full px-4 py-2 text-black border-pink-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                          placeholder="Enter your name"
                          type="text"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-1 text-gray-700">Name</label>
                        <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                      </div>
    
                      <div className="mb-11 relative">
                        <input
                          className="drop-shadow-sm w-full px-4 py-2 text-black border-pink-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                          placeholder="Enter your password"
                          type="password"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-1 text-gray-700">Password</label>
                        <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
                      </div>
                      <button className="w-full bg-pink-500 text-xl text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600">
                        Sign In
                      </button>
                  </form>
    
                  <p className="text-gray-500 text-sm text-center mt-6 absolute bottom-0 pb-4 pl-4">© 2023 RIKAT | Pemerintah Kota Bogor</p>
                </div>
            </div>
    
            <div className="w-1/2 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
              <div className="m-9">
                <div className="text-center">
                  <Image
                    alt="Illustration of a person entering through a door"
                    className="mb-4"
                    height="200"
                    src="/people running.svg"
                    width="200"
                  />
                  <h1 className="text-3xl font-bold text-white mb-2">RANAH</h1>
                  <p className="text-white mb-4">Cepat Tangkas dan Mudah</p>
                  <div className="flex justify-center">
                    <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                    <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                    <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
