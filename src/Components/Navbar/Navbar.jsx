import Logo from "@/assests/logo.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 shadow bg-slate-50">
      <div className="max-w-285 mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={Logo} alt="logo" width={40} height={40}></Image>
            <p className="font-bold text-xl">PixGen</p>
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-photos">All Photos</Link>
            </li>
          </ul>

          <div>
            <Link href={"/signin"}>
              <Button>Sign In</Button>
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
