import React from "react";
import Link from "next/link";
import Icon from "./Icons";

const Sidebar: React.FC = () => {
  const links = [
    {
      name: "Home",
      icon: "home",
      to: "/",
    },
    {
      name: "Explore",
      icon: "hashtag",
      to: "/",
    },
    {
      name: "Bookmark",
      icon: "bookmark",
      to: "/",
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 sm:hidden" />
      <aside className="w-72 sm:w-auto sm:block sm:py-4 lg:w-72 fixed sm:sticky sm:top-0 bg-white z-40 border-r h-screen">
        <header className="flex items-center justify-between px-4 border-b sm:border-0 py-4 sm:py-0">
          <button type="button" className="no-focus hidden sm:block lg:hidden">
            <img
              className="h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="abeid ahmed"
            />
          </button>
          <Link href="/">
            <a className="inline-block text-gray-700 hover:text-gray-900 sm:hidden lg:block">
              <Icon icon="logo" className="h-5 w-auto" viewBox="0 0 76 19" />
            </a>
          </Link>
          <button type="button" className="no-focus text-gray-700 sm:hidden">
            <Icon icon="x" className="w-6 h-6" />
          </button>
        </header>
        <nav className="mt-3 md:mt-5 sm:flex flex-col items-center lg:block lg:pr-6 px-4">
          {links.map((link) => (
            <Link href={link.to} key={link.name}>
              <a className="py-3 flex items-center text-gray-700 hover:text-rose-500">
                <Icon icon={link.icon} className="w-6 h-6" />
                <span className="ml-2 leading-5 font-medium sm:hidden lg:block">
                  {link.name}
                </span>
              </a>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
