import NavBar from "./components/NavBar";
import Head from "next/head";
import NotConnected from "./components/NotConnected";
import { useMoralis } from "react-moralis";
import Connected from "./components/Connected";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import History from "./components/History";

export default function Home() {
  const { account } = useMoralis();
  const [send, setSend] = useState(false);
  const [toAccount, setToAccount] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* <Router>
        <Routes> */}
      <NavBar
        send={send}
        setSend={setSend}
        message={message}
        setMessage={setMessage}
        toAccount={toAccount}
        setToAccount={setToAccount}
      />
      {/* <Route path="/history" element={<History />} /> */}
      {/* </Routes>
      </Router> */}
      {account ? (
        <Connected
          send={send}
          setSend={setSend}
          message={message}
          setMessage={setMessage}
          toAccount={toAccount}
          setToAccount={setToAccount}
        />
      ) : (
        <NotConnected />
      )}
    </>
  );
}
