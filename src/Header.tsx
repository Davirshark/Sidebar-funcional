import React, { useState } from "react";

import {
  BiLogOut

} from "react-icons/bi";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  SiLibreoffice
}
from 'react-icons/si'

import {
  HiOutlineChevronRight,
  HiOutlineChevronDown
} 
from 'react-icons/hi';
import {
  RiShoppingBasket2Line,
  RiInboxFill
}
from 'react-icons/ri'
import { FaCog, FaClipboardList } from 'react-icons/fa'

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "OMS" : "OMS"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <HiOutlineChevronRight/>
              ) : (
                <HiOutlineChevronRight/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<RiShoppingBasket2Line />}>
                Vendas
              </MenuItem>
              <MenuItem icon={<RiInboxFill />}> Suprimentos</MenuItem>
              <MenuItem icon={<FaClipboardList />}>Cadastros</MenuItem>
              <MenuItem icon={<SiLibreoffice />}>Calendário</MenuItem>
              <MenuItem icon={<FaCog />}>Configurações</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon= {<BiLogOut/>}></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;