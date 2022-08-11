/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
} from "@mui/material";
import DrawerComponent from "./Drawer";
import classes from "../css/navbar.module.css";
import { Outlet } from "react-router-dom";
import Logo from "../assets/EDDUSSAFY_배경x.png"

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{background: "#2ea2f8"}}>
        <Toolbar className={classes.toolbar}>
          <img src={Logo} alt="logo" className={classes.logo}></img>
          {isMobile ? (
            <DrawerComponent></DrawerComponent>
          ) : (
            <div className={classes.navlinks}>
              <Link to="/problemlist" className={classes.link}>
                문제 목록
              </Link>
              <Link to="/createquestion" className={classes.link}>
                문제 생성
              </Link>
              <Link to="/userprofile" className={classes.link}>
                개인정보 수정
              </Link>
              <Link to="/logout" className={classes.link}>
                로그아웃
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
