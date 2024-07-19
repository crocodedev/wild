import Link from "next/link";
import style from "./HeaderNav.module.scss";
import Button from "@/app/components/Button";

const HeaderNav = ({ active }) => {
  return (
    <nav
      className={
        active
          ? `${style["header-nav"]} ${style["header-nav--active"]}`
          : `${style["header-nav"]}`
      }
      id="menu"
    >
      <a href="#demos">Demos</a>
      <a href="#catalog">Catalog Pages</a>
      <a href="#products">Product Pages</a>
      <a href="#other">Other Pages</a>
      <a href="#">Get Support</a>
      <a href="#">Online Documentation</a>
      <div className={style["header-nav__btn"]}>
        <Button text={"BUY THEME"} color={"blue"} />
      </div>
    </nav>
  );
};

export default HeaderNav;
