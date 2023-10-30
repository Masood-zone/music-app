import React from "react";
import { SIDEBAR_BOTTOM_NAV, SIDEBAR_NAV } from "../data/sidebarData";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/svgs/main-logo.svg";

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-col w-[270px] h-screen shadow-xl bg-base-100 py-[32px] px-[24px] max-sm:w-[230px] max-sm:px-2">
        <header className="flex items-center gap-3 mb-[32px]">
          <label className="">
            <img src={mainLogo} alt="Main logo" />
          </label>

          <h1 className="text-[24px] tracking-wide leading-normal">Songify</h1>
        </header>
        <div className="flex-1">
          <div className="flex flex-col w-[222px] h-[307px] mb-[32px]">
            <label className="text-[#3c3e43] font-bold text-[16px] leading-normal mb-[17px] dark:text-neutral-content">
              Discover
            </label>
            <ul className="menu">
              {SIDEBAR_NAV.map((link) => {
                return (
                  <li
                    className={
                      pathname === link.path
                        ? "bg-gradient-to-tr from-[#3DC3C0] to-[#8568F5] text-white rounded-xl font-medium"
                        : ""
                    }
                    key={link.id}
                  >
                    <Link to={link.path} className="flex rounded-md py-4 gap-3">
                      <label>
                        <img src={link.icon} alt={link.title} />
                      </label>
                      <h3 className="">{link.title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col w-[222px] h-[199px] overflow-hidden">
            <label className="text-[#3c3e43] font-bold text-[16px] leading-normal mb-[10px] dark:text-neutral-content">
              Library
            </label>
            <ul className="menu">
              {SIDEBAR_BOTTOM_NAV.map((link) => {
                return (
                  <li
                    className={
                      pathname === link.path
                        ? "bg-gradient-to-tr from-[#3DC3C0] to-[#8568F5] text-white rounded-xl font-medium"
                        : "text-neutral-500"
                    }
                    key={link.id}
                  >
                    <Link to={link.path} className="flex rounded-md py-4 gap-3">
                      <label>
                        <img src={link.icon} alt={link.title} />
                      </label>
                      <h3 className="">{link.title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
