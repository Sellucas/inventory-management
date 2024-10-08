"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toogleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
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
            <Image
              src="https://s3-inventorymanagement-initial.s3.sa-east-1.amazonaws.com/profile.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full size-12 object-cover"
            />
            <span className="font-semibold">Ana Luiza</span>
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
