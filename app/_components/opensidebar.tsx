import React from "react";
import Image from "next/image";

export default function OpenSidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-16 bg-white flex flex-col items-center py-4">
        {/* Logo Icon */}
        <div className="mb-8">
          <button className="p-2">
            <Image
              alt="Rocket Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* Sidebar Icons */}
        <div className="flex flex-col space-y-8">
          <button className="p-2">
            <Image
              alt="Dashboard Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
          <button className="p-2">
            <Image
              alt="File Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
          <button className="p-2">
            <Image
              alt="Calendar Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
          <button className="p-2">
            <Image
              alt="User Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* Spacer */}
        <div className="flex-grow"></div>
        {/* Settings and Logout Icons */}
        <div className="flex flex-col space-y-8">
          <button className="p-2">
            <Image
              alt="Settings Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
          <button className="p-2">
            <Image
              alt="Logout Icon"
              src=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
