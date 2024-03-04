import React from "react";
import * as MdIcons from "react-icons/md";
import * as LuIcons from "react-icons/lu";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text',
  },  
  {
    title: 'Compare',
    path: '/Compare',
    icon: <LuIcons.LuGitCompare />,
    cName: 'nav-text',
  },
  {
    title: 'Timeline',
    path: '/Timeline',
    icon: <RiIcons.RiTimeLine />,
    cName: 'nav-text',
  },    
]