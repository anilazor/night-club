"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
    </>
  )
  return (
    <header className="  w-screen grid grid-cols-(--project-grid-cols) project-grid">
      <nav>
        <div className="h-25 flex items-center justify-between w-full">

            <Link href="/">
              <Image
                className=""
                src="/assets/Logo.png"
                width={200}
                height={200}
                alt="logo"
              />
            </Link>

            <button
              className="flex-0 cursor-pointer md:hidden"
              onClick={() => setOpen((s) => !s)}>
              <IoMenu size={40} />
            </button>
          

          <ul className={`${open ? "" : "opacity-0 md:opacity-100"} flex flex-col md:flex-row *:mx-4 font-medium uppercase *:tracking-[2%] *:text-nowrap  justify-center items-center  text-center  md:text-start *:py-3`}>
            <li>
              <ActiveLink href="/">home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog">blog</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/book">book table</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact">contact us</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/login">login</ActiveLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
