import React, { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../../constants/index";
import { useMoralis } from "react-moralis";
import { Update } from "web3uikit";

const Connected = () => {
  const [send, setSend] = useState(false);
  const [toAccount, settoAccount] = useState("tim");
  const [message, setMessgae] = useState("Hello");
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = chainIdHex;
  const sendAnMessageAddresess =
    chainIdHex in contractAddress ? contractAddress[chainId][0] : null;

  const { runContractFunction: sendAnMessage } = useWeb3Contract({
    abi: abi,
    contractAddress: sendAnMessageAddresess,
    functionName: "sendAnMessage",
    params: { toAccount, message },
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      async function update() {
        const sendAnMessageCall = await sendAnMessage(toAccount, message);
        setSend(sendAnMessageCall);
      }
      update();
    }
  });

  const sendBtnEl = async () => {
    await sendAnMessageAddresess?.sendAnMessage(toAccount, message);
    console.log(`You have sent an message to ${toAccount}`);
  };

  return (
    <>
      <div>
        <button onClick={() => sendBtnEl()}>Send</button>
      </div>
    </>
  );
};

export default Connected;
