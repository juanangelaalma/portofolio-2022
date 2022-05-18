import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const SidebarToggle = ({ isActiveSidebar, setIsActiveSidebar }) => {
  return (
    <div onClick={() => setIsActiveSidebar(!isActiveSidebar)}>
      <BiMenuAltLeft size={30} />
    </div>
  );
};

export default SidebarToggle;
