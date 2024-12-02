import React from "react";
import { MdContactMail } from "react-icons/md";
const NavBar = () => {
  return (
    <div className="my-4 h-[60px] gap-2 rounded-lg bg-white flex justify-center items-center text-xl font-medium">
      <MdContactMail className="text-4xl text-orange"/>
      <div className="text-orange">Contant App</div>
    </div>
  );
};

export default NavBar;