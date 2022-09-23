import { useState } from "react";

import Sending from "./Sending";
const Connected = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2 w-[900px] ">
        <Sending />
      </div>
    </>
  );
};

export default Connected;
