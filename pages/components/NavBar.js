import React from "react";
import { ConnectButton } from "web3uikit";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between m-10 ml-8 mb-0">
        <h1 className="font-bold text-4xl text-[#34b2ea]">Block Chat</h1>
        <div className="flex items-center">
          <h2 className="text-lg text-white">History</h2>
          {/* <Link to="/history" className="text-lg text-white"> */}

          {/* </Link> */}
          <ConnectButton className="mt-30" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
