/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons

import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import Empty from "views/Empty/Empty.js"

import {
  AccountBalanceWalletOutlined,
  AccountBoxOutlined,
  DashboardOutlined,
  GroupOutlined,
  HelpOutlined,
  InfoOutlined,
  TrendingUpOutlined,
  WorkOutlineOutlined,
  BlockOutlined
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/empty",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: BlockOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: DashboardOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Billetera",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountBalanceWalletOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/portfolio",
    name: "Portafolio",
    rtlName: "قائمة الجدول",
    icon: WorkOutlineOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/makets",
    name: "Mercados",
    rtlName: "طباعة",
    icon: TrendingUpOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/account",
    name: "Cuenta",
    rtlName: "الرموز",
    icon: AccountBoxOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/referal",
    name: "Referir",
    rtlName: "خرائط",
    icon: GroupOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Ayuda",
    rtlName: "إخطارات",
    icon: HelpOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "Acerca de",
    rtlName: "پشتیبانی از راست به چپ",
    icon: InfoOutlined,
    component: Empty,
    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: Empty,
    layout: "/admin",
  },
];

export default dashboardRoutes;
