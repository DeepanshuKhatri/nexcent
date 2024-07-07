"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { themeStore } from "@/store/theme";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useRouter, usePathname } from "next/navigation";

const pages = [
  {
    label: "Home",
    ref: "/",
  },
  {
    label: "Service",
    ref: "/service",
  },
  {
    label: "Feature",
    ref: "/feature",
  },
  {
    label: "Product",
    ref: "/product",
  },
  {
    label: "Testimonial",
    ref: "/testimonial",
  },
  {
    label: "FAQ",
    ref: "/FAQ",
  },
];

const Navbar = () => {
  // const router = useRouter();
  const currentPath = usePathname();
console.log(currentPath)
  
  const theme = themeStore((state: any) => state.theme);
  const updateTheme = themeStore((state: any) => state.updateTheme);
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    const newTheme = isDarkMode === true ? "light" : "dark";
    updateTheme(newTheme);
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[70px] w-full justify-between bg-secondary px-6 md:px-[10%] items-center">
      <div className="flex gap-1 items-center mb-4 md:mb-0">
        <Image alt="logo" src={logo} width={20} height={20} />
        <div className="text-xl">Nexcent</div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-16 text-sm mb-4 md:mb-0">
        {pages.map((page, index) => (
          <Link key={index} href={page.ref}  className={currentPath === page.ref ? "font-semibold" : ""}>
              {page.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 md:gap-10">
        <Button className="text-sm" variant="ghost">
          Login
        </Button>
        <Button className="text-sm">Sign Up</Button>
        <DarkModeSwitch
          className="h-10 w-10"
          sunColor="#4CAF4F"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
      </div>
    </div>
  );
};

export default Navbar;
