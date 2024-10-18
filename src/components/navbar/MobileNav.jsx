import React from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const mobileNavs = [
  {
    id: 1,
    name: "Home",
    url: "#Home",
  },
  {
    id: 2,
    name: "Custome Stories",
    url: "#Custome",
  },
  {
    id: 3,
    name: "About",
    url: "#About",
  },
  {
    id: 4,
    name: "Blog",
    url: "#Blog",
  },
];

const MobileNav = () => {
  return (
    <div className=" flex md:hidden gap-2 items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={30} color="red" />
        </SheetTrigger>
        <SheetContent className='h-screen flex items-center justify-center flex-col '>
          <div className="flex items-center justify-center pb-10">
            <img src={logo} alt="logo" className="w-36" />
          </div>
          <ul className=" flex items-center justify-center flex-col gap-10 ">
            {mobileNavs.map((mobileNav) => {
              return (
                <li key={mobileNav.id} className="hover:text-primary">
                  <a href={mobileNav.url}>{mobileNav.name}</a>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
