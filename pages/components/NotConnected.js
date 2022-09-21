import React from "react";
import Image from "next/image";
import { ConnectButton } from "web3uikit";

const NotConnected = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-32">
          <div className="flex flex-col gap-6" width={600} height={600}>
            <h1 className="text-4xl w-[320px] tracking-wide leading-9">
              Blockchain importance is a non centralized protocol
            </h1>
            <p className="w-[400px] text-sm font-light tracking-wider leading-6">
              Block chat is an <strong>Decentralized</strong> messaging app
              where none of your messgaes can not be traced back to you, so you
              can be anonymous and use how many accounts you like
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <Image
              src="/message.jpeg"
              alt="Locked Messages"
              width={400}
              height={600}
              className="float-right"
            />
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotConnected;
