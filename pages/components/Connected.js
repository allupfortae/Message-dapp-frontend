import { useState } from "react";
import Sending from "./Sending";

const Connected = ({
  setSend,
  send,
  setMessage,
  message,
  setToAccount,
  toAccount,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2 w-[900px] ">
        <Sending
          send={send}
          setSend={setSend}
          message={message}
          setMessage={setMessage}
          toAccount={toAccount}
          setToAccount={setToAccount}
        />
      </div>
    </>
  );
};

export default Connected;
