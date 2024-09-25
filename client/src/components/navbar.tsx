"use client";

import Link from "next/link";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";

import { setIsDarkMode, setIsSideBarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "../app/redux";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toogleSideBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  const toogleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toogleSideBar}
        >
          <Menu size={18} />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Search groups & products..."
            className="pl-10 pr-4 py-2 w-50 md:w-70 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex items-center gap-5 justify-between">
          <div>
            <button onClick={toogleDarkMode}>
              {isDarkMode ? (
                <Sun size={18} className="cursor-pointer text-gray-500" />
              ) : (
                <Moon size={18} className="cursor-pointer text-gray-500" />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={18} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Developer</span>
          </div>
        </div>
        <Link href={"/settings"}>
          <Settings className="cursor-pointer text-gray-500" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
