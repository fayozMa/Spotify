import React from "react";

function RightBar() {
  return (
    <div className="text-[#CCCCCC] px-5 pt-5 flex flex-col items-center">
      <div className="flex items-center gap-[75px] mb-10">
        <p>Friend Activity</p>
        <div className="flex items-center">
          <button>
            <img src="../icons/UserPlus_S.svg" alt="" />
          </button>
          <button>
            <img src="../icons/Close_S.svg" alt="" />
          </button>
        </div>
      </div>
      <p className="mb-5 text-base ">
        Let friends and followers on Spotify see what you’re listening to.
      </p>
      <div className="mb-5">
        <div className="flex p-2 rounded-md space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <img src="../icons/Union.svg"/>
            </div>
            <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 border-2 border-gray-800 rounded-full"></span>
          </div>

          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-28 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <div className="flex p-2 rounded-md space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <img src="../icons/Union.svg" alt="" />
            </div>
            <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 border-2 border-gray-800 rounded-full"></span>
          </div>

          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-28 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <div className="flex p-2 rounded-md space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <img src="../icons/Union.svg" alt="" />
            </div>
            <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 border-2 border-gray-800 rounded-full"></span>
          </div>

          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-28 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      <p className="text-base mb-6">
        Go to Settings → Social and enable “Share my listening activity on
        Spotify. You can turn this off at any time.
      </p>
      <button className="btn btn-lg bg-white text-black text-bold text-base rounded-full w-[233px] hover:bg-white hover:text-black">
        SETTINGS
      </button>
    </div>
  );
}

export default RightBar;
