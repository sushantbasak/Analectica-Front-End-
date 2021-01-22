import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={classes.nav1}>
      <div className={classes.logo}>
        <h4>The Navbar</h4>
      </div>
      <ul className={classes.navlink}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">SignIn</Link>
        </li>
      </ul>
      <div className={classes.burger}>
        {/* <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div> */}
      </div>
    </nav>
  );
}
// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".navlink");
//   const navLinks = document.querySelectorAll(".navlink li");

//   //Toggle links
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("navactive");

//     //Animation Links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) link.style.animation = "";
//       else
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.6
//         }s`;
//     });
//     //Burger animation
//     burger.classList.toggle("toggle");
//   });
// };
