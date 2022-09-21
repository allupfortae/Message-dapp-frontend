import NavBar from "./components/NavBar";
import NotConnected from "./components/NotConnected";
import { useMoralis } from "react-moralis";
import Connected from "./components/Connected";

export default function Home() {
  const { account } = useMoralis();
  return (
    <>
      <NavBar />
      {account ? <Connected /> : <NotConnected />}
    </>
  );
}
