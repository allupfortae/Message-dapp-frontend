import React from "react";
import { ConnectButton } from "web3uikit";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between m-10 ml-8 mb-0">
        <h1 className="font-bold text-4xl">Block Chat</h1>
        <ConnectButton className="mt-30" />
      </div>
    </>
  );
};

export default NavBar;
