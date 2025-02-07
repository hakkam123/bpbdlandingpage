import React from "react";
import Image from "next/image";
import gps from "../../public/gps.svg";

export default function SidebarDashboard() {
    return (
      <div className="bg-gray-100">
        <div className="flex h-screen">
          <div className="bg-white w-48 p-4 flex flex-col justify-between rounded-tr-lg rounded-br-lg shadow-lg">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  alt="Logo"
                  className="mr-2"
                  height="20"
                  src={gps}
                  width="20"
                />
                <div>
                  <h1 className="text-lg font-bold text-green-900">RANAH</h1>
                  <p className="text-xs text-gray-500">Laporan Management Platform</p>
                </div>
              </div>
              <div>
                <h2 className="text-gray-500 mb-3 text-sm">Menu</h2>
                <ul>
                  <li className="mb-3 flex items-center text-green-900 relative">
                    <div className="absolute left-0 h-full w-1 bg-pink-500 rounded-r"></div>
                    <i className="fas fa-th-large mr-2 text-pink-500"></i>
                    <a href="#" className="text-sm">Dashboard</a>
                  </li>
                  <li className="mb-3 flex items-center text-green-900">
                    <i className="fas fa-file-alt mr-2"></i>
                    <a href="#" className="text-sm">Data Bencana</a>
                  </li>
                  <li className="mb-3 flex items-center text-green-900">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <a href="#" className="text-sm">Data Kejadian</a>
                  </li>
                  <li className="mb-3 flex items-center text-green-900">
                    <i className="fas fa-user mr-2"></i>
                    <a href="#" className="text-sm">User Data</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-gray-500 mb-3 text-sm">Account</h2>
              <ul>
                <li className="mb-3 flex items-center text-green-900">
                  <i className="fas fa-cog mr-2"></i>
                  <a href="#" className="text-sm">Settings</a>
                </li>
                <li className="mb-3 flex items-center text-green-900">
                  <i className="fas fa-sign-out-alt mr-2 text-pink-500"></i>
                  <a href="#" className="text-sm">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }