"use client";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Quality from "@/app/components/Quality";
import SectionTitle from "@/app/components/SectionTitle";
import style from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <Container>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { y: ["-100%", "5%", "0"], opacity: 1 },
              hidden: { y: "-100%", opacity: 0 },
            }}
          >
            <SectionTitle>What are you waiting for?</SectionTitle>
          </motion.div>
          <motion.div
            className={style["footer__quality"]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <Quality text={"Premium Support"} color={"white"} />
            <Quality text={"No Monthly Charge"} color={"white"} />
            <Quality text={"No coding knowledge required"} color={"white"} />
          </motion.div>
          <motion.div
            className={style["footer__btns"]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { y: ["100%", "-5%", "0"], opacity: 1 },
              hidden: { y: "100%", opacity: 0 },
            }}
          >
            <Button text={"BUY NOW"} size={"xl"} />
            <Button text={"OUR PORTFOLIO"} size={"xl"} />
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
