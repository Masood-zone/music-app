import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Layout() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex gap-5 items-center navbar max-sm:gap-1 max-[299px]:flex-wrap py-3">
          <label htmlFor="my-drawer" className="hover:cursor-pointer">
            <HiMenu fontSize={28} />
          </label>
          <h1 className="max-[299px]:block hidden px-10 text-2xl">Songify</h1>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
