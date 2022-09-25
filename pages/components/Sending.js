import React, { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../../constants/index";
import { useMoralis } from "react-moralis";

const Sending = ({
  setSend,
  send,
  message,
  setMessage,
  toAccount,
  setToAccount,
}) => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = chainIdHex;
  const sendAnMessageAddresess =
    chainIdHex in contractAddress ? contractAddress[chainId][0] : null;

  const { runContractFunction: sendAnMessage, isFetching } = useWeb3Contract({
    abi: abi,
    contractAddress: sendAnMessageAddresess,
    functionName: "sendAnMessage",
    params: { _to: toAccount, _message: message },
  });
  useEffect(() => {
    if (isWeb3Enabled) {
      async function update() {
        const sendAnMessageCall = await sendAnMessage();
        setSend(sendAnMessageCall);
        setMessage(message);
        setToAccount(toAccount);
      }
      update();
    }
  }, [isWeb3Enabled]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#1f208f] w-[500px] h-[300px] flex flex-col rounded-md items-center ml-[900px] mt-20">
        <div className="flex gap-5 items-center flex-col">
          <input
            className="h-[24px] w-[260px] rounded-[5px] bg-[#1c1d79] p-3 text-white"
            placeholder="Enter address"
          />

          {/* <input className="block px-3 py-[4px] w-[600px] rounded-[15px] border-t border-r border-l border-gray-600 border-b-0 " /> */}
          <textarea className="h-[100px] w-[240px] rounded-md border border-gray-600 pl-2 pt-1" />
          <h3 className="text-white">{message}</h3>
          <button
            onClick={() => sendAnMessage()}
            disabled={isFetching}
            className="bg-[#34b2ea] py-[6px] px-[10px] text-white rounded-[20px]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sending;
