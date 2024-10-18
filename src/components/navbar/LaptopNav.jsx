import React from "react";

const laptopNavs = [
  {
    id: 1,
    name: "Home",
    url: "#home",
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

const LaptopNav = () => {
  return (
    <>
      <ul className="hidden md:flex items-center gap-5">
        {laptopNavs.map((laptopNav) => {
          return (
            <li className=" hover:text-primary" key={laptopNav.id}>
              <a href={laptopNav.url}>{laptopNav.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LaptopNav;
