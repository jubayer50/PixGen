import Logo from "@/assests/logo.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow bg-slate-50">
      <div className="max-w-285 mx-auto">
        <header className="flex flex-col md:flex-row gap-6 py-5 items-center justify-between px-6">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={Logo} alt="logo" width={40} height={40}></Image>
            <p className="font-bold text-xl">PixGen</p>
          </Link>

          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/all-photos">All Photos</Link>
            </li>

            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>

          <div>
            <Link href={"/signin"}>
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
