import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../style.scss";

const Layout = () => {
  function play() {
    var player = document.getElementById("player");
    player.play();
  }
  return (
    <>
      <div className="all" style={{ display: "flex" }}>
        <audio
          id="player"
          src="https://www.fesliyanstudios.com/play-mp3/6"
        ></audio>
        <div className="Navbar">
          <Link to="/home" onClick={play}>Home</Link>
        </div>
        <div className="Navbar1">
          <Link to="/aboutUs"  onClick={play}>About US</Link>
          <Link to="/account" onClick={play}>Account</Link>
          <Link to="/logIn" onClick={play}>Log In</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
