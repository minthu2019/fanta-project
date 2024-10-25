import React from "react";
import { Menu, User } from "lucide-react";
import logo from "../../assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { UpdateFollower } from "react-mouse-follower";

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
    <div className=" flex md:hidden gap-2 items-center justify-center z-20">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={30} color="white" />
        </SheetTrigger>

        <SheetContent className="h-screen flex items-center justify-center flex-col invert ">
          <div className="flex items-center justify-center pb-10 ">
            <img src={logo} alt="logo" className="w-36" />
          </div>

          <ul className=" flex items-center justify-center flex-col gap-10 ">
            {mobileNavs.map((mobileNav) => {
              return (
                <li
                  key={mobileNav.id}
                  className="hover:text-blue-500 cursor-pointer z-[9999]"
                >
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      scale: 10,
                      zIndex: 40,
                      followSpeed: 1.5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a href={mobileNav.url}>{mobileNav.name}</a>
                  </UpdateFollower>
                </li>
              );
            })}
            <li className="md:ml-10">
              <button className="w-full hover:text-blue-500">
              <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                scale: 6,
                zIndex: 40,
                followSpeed: 1.5,
                mixBlendMode: "difference",
              }}
            >
              <User size={24} />
            </UpdateFollower>
              </button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
