import React from "react";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 sm:hidden" />
      <aside className="w-72 sm:w-auto sm:block sm:py-4 lg:w-72 fixed sm:sticky sm:top-0 bg-white z-40 border-r h-screen">
        aside
      </aside>
    </>
  );
};

export default Sidebar;
