import React from "react";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className="flex h-screen">

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-xs">
          <button className="text-2xl mb-4">
            <Image alt="Back arrow icon" height={30} width={30} src="/corner up.svg" />
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-2xl text-black font-semibold mb-2">Lupa Kata Sandi</h1>
          <p className="text-gray-600 text-xs mb-8">
            Selalu jaga keamanan Anda dan jangan lupa untuk memperbaruinya
          </p>
          <div className="flex justify-center mb-8">
            <Image
              alt="Padlock icon"
              className=""
              height={100}
              width={100}
              src="/lock.svg"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mb-8">
            Masukan email anda untuk mereset akun anda
          </p>
          <form className="space-y-4">
            <div className="relative">
              <label
                className="absolute -top-3 left-3 bg-white px-1 text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full text-black border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="email"
                placeholder="Masukan email anda"
                type="email"
              />
              <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg text-lg" type="submit">
              Submit
            </button>
          </form>
          <p className="text-gray-500 text-sm text-center mt-6 absolute bottom-0 pb-4 pl-4">© 2023 RIKAT | Pemerintah Kota Bogor</p>
        </div>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-pink-500 to-pink-600 justify-center items-center">
        <div className="text-center">
          <Image
            alt="Person running through a door illustration"
            className="mb-4"
            height={200}
            width={200}
            src="/people running.svg"
          />
          <h2 className="text-white text-2xl font-semibold mb-2">RANAH</h2>
          <p className="text-white mb-4">Cepat Tangkas dan Mudah</p>
          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
