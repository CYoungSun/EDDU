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
import { useSelector } from "react-redux";
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const position = useSelector((state)=>state.user.value.position);
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            className={classes.logo}
          >
            Eddu SSAFY
          </Typography>
          {isMobile ? (
            <DrawerComponent></DrawerComponent>
          ) : (
            <div className={classes.navlinks}>
              {position ==="professor" &&
              <Link to="/problemlist" className={classes.link}>
                문제 목록
              </Link>
              }
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
