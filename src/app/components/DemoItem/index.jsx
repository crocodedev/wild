"use client";

import { useEffect, useRef } from "react";
import style from "./DemoItem.module.scss";
import Image from "next/image";

const DemoItem = ({ name, image }) => {
  const imageRef = useRef();

  useEffect(() => {
    const img = imageRef.current.children[0];

    const handleMouseOver = () => {
      img.style.transition = `all ${
        (3 * img.getBoundingClientRect().height -
          imageRef.current.getBoundingClientRect().height) /
        1000
      }s linear`;
      img.style.transform = `translate3d(0, -${
        img.getBoundingClientRect().height -
        imageRef.current.getBoundingClientRect().height
      }px, 0)`;
    };

    const handleMouseOut = () => {
      img.style.transition = `all 2s ease`;
      img.style.transform = `translate3d(0, 0, 0)`;
    };

    const imageElement = imageRef.current;
    imageElement.addEventListener("mouseover", handleMouseOver);
    imageElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      imageElement.removeEventListener("mouseover", handleMouseOver);
      imageElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className={style["demo-item"]}>
      <div className={style["demo-item__image"]} ref={imageRef}>
        <Image
          src={image}
          width={800}
          height={800}
          alt={name}
          loading="lazy"
          quality={75}
        />
      </div>

      <p className={style["demo-item__name"]}>{name}</p>
    </div>
  );
};

export default DemoItem;
