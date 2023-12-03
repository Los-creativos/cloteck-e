"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Dropdown from "./DropDown";
import LinkButton from "./LinkButton";
import {
  getTokenCookie,
  removeTokenCookie,
} from "@/app/utils/CookieManagement";
import { VerifyJwt } from "@/app/utils/JwtUtils";
import { Customer } from "@prisma/client";
import Button from "./Button";

const links = ["COLLECTIONS"];
const adminLinks = ["PRODUCT", "CATEGORY"];

export default function Navbar({ admin = false }: { admin?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userStatus, setUserStatus] = useState<boolean>();
  const [userData, setUserData] = useState<Customer>();
  const [isAdmin, setIsAdmin] = useState(false)
  const handleLogOut = () => {
    setUserStatus(false);
    setUserData(undefined);
    removeTokenCookie();
  };

  useEffect(() => {
    const isLogged = async () => {
      const token = await getTokenCookie();
      const data = (await VerifyJwt(token?.value as string)) as Customer;
      data ? setUserStatus(true) : setUserStatus(false);
      data.type_user === 'Admin' ? setIsAdmin(true) : setIsAdmin(false)
      data ? setUserData(data) : setUserData(undefined);
    };
    isLogged();
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white px-4 py-2 flex items-center justify-center w-full/ sticky top-0 z-50">
        <button
          className="md:hidden absolute left-4 top-4 z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <Link className="text-black text-3xl font-semibold z-10" href={"/"}>
          CLOTECK
        </Link>

        <div className="hidden md:flex justify-between items-center absolute inset-0">
          <ul className="flex md:gap-6 gap-10 list-none font-semibold ml-4">
            {admin ? (
              <>
                {adminLinks.map((link) => (
                  <Link
                    key={link}
                    href={`/admin/${link.toLowerCase()}`}
                    className="underline-offset-4 sm:text-xs transition duration-300 ease-in-out"
                    id="alink"
                  >
                    <li key={link}>{link}</li>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {links.map((link) => (
                  <Link
                    key={crypto.randomUUID()}
                    href={"/collections"}
                    className="underline-offset-4 sm:text-xs transition duration-300 ease-in-out"
                    id="alink"
                  >
                    <li key={link}>{link}</li>
                  </Link>
                ))}
              </>
            )}
          </ul>
          <div className="grid grid-flow-col gap-4 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {userStatus ? (
              <>
                <Dropdown
                  className="min-w-min -left-5"
                  text={userData?.name}
                  classnameButton="flex bg-transparent col-span-2 hover:bg-transparent"
                  buttonChildren={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </>
                  }
                >
                  <LinkButton
                    text="Preferences"
                    className="bg-transparent text-black p-2 text-sm"
                    href="/user-preferences"
                  />
                  {isAdmin && 
                    <LinkButton className="p-2 text-sm" text='Admin' href="/admin/product"/>
                  }
                  <Button
                    onClick={() => handleLogOut()}
                    type="button"
                    text="Log out"
                    className="p-1 bg-black w-full text-white"
                  />
                </Dropdown>
              </>
            ) : (
              <>
                <Dropdown
                  className="min-w-min"
                  text="Unlogged"
                  classnameButton="flex bg-transparent text-red-900 col-span-2 hover:bg-transparent"
                  buttonChildren={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </>
                  }
                >
                  <LinkButton
                    text="Login"
                    className="bg-transparent text-black p-1 text-sm"
                    href="/login"
                  />
                </Dropdown>
              </>
            )}
            <Link href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="md:hidden grid grid-flow-col absolute right-4 top-4 z-50 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {userStatus ? (
            <>
              <Dropdown
                className="min-w-min max-h-max -left-16"
                classnameButton="flex bg-transparent col-span-2 hover:bg-transparent"
                buttonChildren={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </>
                }
              >
                <LinkButton
                  text="Preferences"
                  className="bg-transparent text-black p-2 text-sm"
                  href="/user-preferences"
                />
                {isAdmin && 
                    <LinkButton className="p-2 text-sm" text='Admin' href="/admin/product"/>
                  }
                <Button
                  onClick={() => handleLogOut()}
                  type="button"
                  text="Log out"
                  className="p-1 bg-black w-full text-white"
                />
              </Dropdown>
            </>
          ) : (
            <>
              <Dropdown
                className="min-w-min -left-9"
                classnameButton="flex bg-transparent text-red-900 col-span-2 hover:bg-transparent"
                buttonChildren={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </>
                }
              >
                <LinkButton
                  text="Login"
                  className="bg-transparent text-black p-1 text-sm"
                  href="/login"
                />
              </Dropdown>
            </>
          )}
          <Link href={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
        </div>

        <div
          className={`fixed inset-y-0 left-0 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-white w-64 z-40 shadow-lg md:hidden`}
        >
          <ul className="pt-24">
            {admin ? (
              <>
                {adminLinks.map((link) => (
                  <Link key={link} href={`/admin/${link.toLowerCase()}`}>
                    <li
                      key={link}
                      className="text-black px-6 py-2 hover:bg-gray-100"
                    >
                      {link}
                    </li>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {links.map((link) => (
                  <>
                    {link === "COLLECTIONS" ? (
                      <Link key={link} href={`/collections`}>
                        <li
                          key={link}
                          className="text-black px-6 py-2 hover:bg-gray-100"
                        >
                          {link}
                        </li>
                      </Link>
                    ) : (
                      <Link
                        key={link}
                        href={`/collections/${link.toLowerCase()}`}
                      >
                        <li
                          key={link}
                          className="text-black px-6 py-2 hover:bg-gray-100"
                        >
                          {link}
                        </li>
                      </Link>
                    )}
                  </>
                ))}
              </>
            )}
          </ul>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
}
