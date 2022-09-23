import NavBar from "./components/NavBar";
import Head from "next/head";
import NotConnected from "./components/NotConnected";
import { useMoralis } from "react-moralis";
import Connected from "./components/Connected";
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  const { account } = useMoralis();
  return (
    <>
      <NavBar />
      {account ? <Connected /> : <NotConnected />}
    </>
  );
}
