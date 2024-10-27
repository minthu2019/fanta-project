import { User } from "lucide-react";
import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { Link } from "react-scroll";

const laptopNavs = [
  {
    id: 1,
    name: "Home",
    url: "Home",
  },
  {
    id: 2,
    name: "Custome Stories",
    url: "Custome",
  },
  {
    id: 3,
    name: "About",
    url: "About",
  },
  {
    id: 4,
    name: "Blog",
    url: "Blog",
  },
  {
    id: 5,
    name: "A&Q",
    url: "Question",
  },
];

const LaptopNav = () => {
  return (
    <>
      <ul className="hidden md:flex items-center gap-5 ">
        {laptopNavs.map((laptopNav) => {
          return (
            <Link to={laptopNav.url} className=" hover:text-black cursor-pointer" key={laptopNav.id}>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  scale: 6,
                  zIndex: 40,
                  followSpeed: 1.5,
                  mixBlendMode: "difference",
                }}
              >
                <a href={laptopNav.url}>{laptopNav.name}</a>
              </UpdateFollower>
            </Link>
          );
        })}

        <li className="ml-10">
          <button className="w-full hover:text-black">
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
    </>
  );
};

export default LaptopNav;
