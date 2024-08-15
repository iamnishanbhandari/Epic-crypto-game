import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800">
      <div className="text-white text-2xl font-bold">Logo</div>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
        <b>Connect Your Wallet</b>
      </button>
    </nav>
  );
};

export default Navbar;
