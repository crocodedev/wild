"use client";

import style from "./Header.module.scss";
import Button from "@/app/components/Button";
import HeaderNav from "./HeaderNav";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const body = document.querySelector("body");
  const header = useRef();

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (active) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [active]);

  const scrollHandler = (hero) => {
    if (
      hero.getBoundingClientRect().bottom -
        header.current.getBoundingClientRect().height <
      0
    ) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  useEffect(() => {
    if (body && header) {
      const hero = document.getElementById("hero");
      document.addEventListener("scroll", () => scrollHandler(hero));

      return () =>
        document.removeEventListener("scroll", () => scrollHandler(hero));
    }
  }, [body]);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: ["-100%", "5%", "0%"] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={
        headerBg
          ? `${style["header"]} ${style["header--white"]}`
          : `${style["header"]}`
      }
      ref={header}
    >
      <div className={style["header__wrapper"]}>
        <a
          href="#"
          className={style["header__logo"]}
          style={{ color: "black" }}
        >
          <div className={style["header__logo-icon"]}>
            <img src="/icons/logo.svg" alt="logo" />
          </div>
        </a>
        <div
          className={
            active
              ? `${style["header__menu-btn"]} ${style["header__menu-btn--active"]}`
              : `${style["header__menu-btn"]}`
          }
          onClick={toggleMenu}
        ></div>
        <HeaderNav active={active} />

        <div className={style["header__buy"]}>
          <Button text={"BUY THEME"} color={"blue"} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
