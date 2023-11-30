import React, { useState } from "react";
import { HiHome, HiPlayCircle, HiTv } from "react-icons/hi2";
import NavbarItem from "./NavbarItem";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "UPCOMING",
      icon: FaIcons.FaBullhorn,
      path: "/movie/upcoming",
    },
    {
      name: "TOP RATE",
      icon: HiPlayCircle,
      path: "/movie/top-rate",
    },
    {
      name: "SERIES",
      icon: HiTv,
      path: "/series",
    },
  ];
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between py-2 bg-orange-600 w-full">
        <div className=" object-cover">
          <Link href="/">
            <h1 className="font-bold text-3xl px-5 text-white ">flixflix</h1>
          </Link>
        </div>
        <div className="flex gap-8 items-center pr-4 md:pr-10">
          <div className="hidden md:flex gap-8 mt-4 ">
            {menu.map((item, index) => (
              <Link key={index} href={item.path}>
                <NavbarItem
                  name={item.name}
                  Icon={item.icon}
                  classname={` nav ${
                    pathname === `${item.path}`
                      ? "underline underline-offset-8 decoration-4"
                      : "no-underline opacity-70"
                  }`}
                />
              </Link>
            ))}
          </div>
          <div className="flex md:hidden gap-6 mt-2 pr-0">
            {menu.map(
              (item, index) =>
                index < 2 && (
                  <Link key={index} href={item.path}>
                    <NavbarItem
                      key={index}
                      name={" "}
                      Icon={item.icon}
                      classname={`${
                        pathname === `${item.path}`
                          ? "underline underline-offset-8 decoration-4"
                          : "no-underline opacity-70"
                      }`}
                    />
                  </Link>
                )
            )}
          </div>
          <div className="md:hidden mt-3 " onClick={() => setToggle(!toggle)}>
            <NavbarItem name={" "} Icon={FaIcons.FaBars} />
            {toggle ? (
              <div className="absolute right-0 mt-2 border-[1px] font-thin text-xs bg-orange-600 border-gray-700 p-3 py-2">
                {menu.map(
                  (item, index) =>
                    index > -3 && (
                      <Link key={index} href={item.path}>
                        <NavbarItem
                          name={item.name}
                          Icon={item.icon}
                          classname={` ${
                            pathname === `${item.path}`
                              ? "underline underline-offset-8 decoration-4"
                              : "no-underline opacity-70"
                          }`}
                        />
                      </Link>
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <button
          className="hidden md:flex mr-8 text-white"
          onClick={() => router.push("/login")}
        >
          <FaUser />
        </button>
      </div>
      {/* Header end */}
    </>
  );
};

export default Navbar;
