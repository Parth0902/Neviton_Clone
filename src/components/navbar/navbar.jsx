"use client";
import { usePathname } from "next/navigation";

import { useRef } from "react";
import { useState } from "react";
import Logo from "@/assets/home/LOGO.png";
import Image from "next/image";
import "./navbar.css";
import * as React from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ScrollLink from "@/utlis/scrollLink";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();

  return (
    <div>
      <nav className="hidden lg:flex border border-b-1 border-gray">
        <div id="logo">
          <Link href="/">
            <Image src={Logo} width={114} height={23.7} alt="logo" />
          </Link>
        </div>
        <div className="px-2 mx-auto flex items-center justify-center">
          <AnimatedNavigationBar />
        </div>
        <div id="NavBtn">
          <Link href="/aws-partner">
            <button className="hover:bg-[#8560f3]">AWS Partner</button>
          </Link>
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </nav>
      <div className="flex items-center justify-between px-2 py-6 lg:hidden">
        <Link href="/">
          <Image src={Logo} width={114} height={23.7} alt="logo" />
        </Link>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        {isOpen && (
          <div className="z-50 fixed left-0 shadow-4xl right-0 top-[6rem] p-10 m-2 bg-white border border-black">
            <div className="flex items-center justify-center py-4">
              <div className="flex flex-col items-center gap-6 font-medium">
                {path === "/" ? (
                  <ScrollLink href="#section4" onClickFn={() => setOpen(false)}>
                    Industries
                  </ScrollLink>
                ) : (
                  <IndustriesDropdownButton heading={"Industries"} />
                )}
                <DropdownButton heading={"Services"} />
                <Link href="/case-study" onClick={() => setOpen(false)}>
                  Success Stories
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
                <Link href="/aws-partner">AWS Partner</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Enggcomponents = [
  {
    title: "CAD",
    query: "4",
    href: "/services",
  },
  {
    title: "CAM",
    query: "5",
    href: "/services",
  },
  {
    title: "Methods Engineering",
    query: "6",
    href: "/services",
  },
  {
    title: "Tooling",
    query: "7",
    href: "/services",
  },
];

const IndustryComponents = [
  {
    title: "Aerospace Engineering",
    query: "0",
    href: "/industries",
  },
  {
    title: "Education",
    query: "1",
    href: "/industries",
  },
  {
    title: "Life Science",
    query: "2",
    href: "/industries",
  },
  {
    title: "Manufacturing",
    query: "3",
    href: "/industries",
  },
  {
    title: "Media & Entertainment",
    query: "4",
    href: "/industries",
  },
  {
    title: "Renewable Energy",
    query: "5",
    href: "/industries",
  },
];

const ITComponents = [
  {
    title: "Digital & Cloud",
    query: "2",
    href: "/services",
  },
  {
    title: "Data Analytics",
    query: "1",
    href: "/services",
  },
  {
    title: "Automation & Integration",
    query: "0",
    href: "/services",
  },
  {
    title: "ERP & IT Infrastructure",
    query: "3",
    href: "/services",
  },
];

const IndustriesDropdownButton = ({ heading }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full px-4 py-2 font-medium rounded-md outline-none focus:outline-none hover:bg-gray-200"
      >
        {heading}
      </button>
      {isOpen && (
        <div className="right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute">
          <div className="flex gap-10 justify-between w-full text-lg p-4 m-2">
            <NavbarItem itemList={IndustryComponents} />
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownButton = ({ heading }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full px-4 py-2 font-medium rounded-md outline-none focus:outline-none hover:bg-gray-200"
      >
        {heading}
      </button>
      {isOpen && (
        <div className="right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute">
          <div className="flex gap-10 justify-between w-full text-lg p-4 m-2">
            <NavbarItem itemList={Enggcomponents} />
            <NavbarItem itemList={ITComponents} />
          </div>
        </div>
      )}
    </div>
  );
};

export function AnimatedNavigationBar() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ScrollLink href="#section4">Industries</ScrollLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-6 flex flex-col min-w-[300px]">
              {IndustryComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={{ pathname: component.href, query: component.query }}
                >
                  {component.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex justify-between w-[400px] p-6 md:w-[500px] lg:w-[600px] ">
              <ul>
                <h2 className="font-bold">Engineering</h2>
                {Enggcomponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={{ pathname: component.href, query: component.query }}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
              <ul>
                <h2 className="font-bold">IT Technology</h2>
                {ITComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={{ pathname: component.href, query: component.query }}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/case-study" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Success stories
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavbarItem = ({ itemList }) => {
  return (
    <ul className="flex flex-col gap-1">
      <h2 className="font-bold">Engineering</h2>
      {itemList.map((component) => (
        <Link
          onClick={() => closeMenu()}
          key={component.title}
          href={{ pathname: component.href, query: component.query }}
          className="text-lg"
        >
          {component.title}
        </Link>
      ))}
    </ul>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export default Navbar;
