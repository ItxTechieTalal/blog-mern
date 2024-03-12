import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 flex justify-around">
      <Link
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white-white"
        to="/"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Talal's
        </span>
        <span>Blogs</span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button pill color="gray" className="w-10 h-10 lg:hidden">
        <AiOutlineSearch />
      </Button>
      <div className="flex items-center gap-4">
        <Button color="gray" pill className="w-10 h-12 lg:hidden sm:inline">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <button className=" bg-gradient-to-r py-2 px-4  from-indigo-500 to-cyan-500 rounded-lg  text-white    ">
            Sign In
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-semibold">
        <Navbar.Link
          active={path === "/"}
          as="div"
          className={path === "/" ? "text-red-500" : "text-black"}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/blogs"}
          as="div"
          className={path === "/blogs" ? "text-red-500" : "text-black"}
        >
          <Link to="/blogs">Blogs</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          as="div"
          className={path === "/about" ? "text-red-500" : "text-black"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
