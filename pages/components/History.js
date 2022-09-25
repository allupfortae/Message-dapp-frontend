import React, { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../../constants/index";
import { useMoralis } from "react-moralis";

const History = ({}) => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = chainIdHex;
  const sendAnMessageAddresess =
    chainIdHex in contractAddress ? contractAddress[chainId][0] : null;

  const { runContractFunction: getMessage, isFetching } = useWeb3Contract({
    abi: abi,
    contractAddress: sendAnMessageAddresess,
    functionName: "getMessage",
    params: { message },
  });
  useEffect(() => {
    if (isWeb3Enabled) {
      async function update() {
        const getAnMessageCall = await getMessage();
        setSend(getAnMessageCall);
      }
      update();
    }
  }, [isWeb3Enabled]);
  return <></>;
};

export default History;
