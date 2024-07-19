"use client";

import SectionTitle from "@/app/components/SectionTitle";
import style from "./Experience.module.scss";
import Container from "@/app/components/Container";
import { motion } from "framer-motion";

const Experience = ({ title, variation = "v1" }) => {
  if (variation === "v1") {
    return (
      <section className={style["experience"]}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <SectionTitle color={"white"}>{title}</SectionTitle>
            </motion.div>
            <motion.div
              className={style["experience__image"]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <img src="/images/experience.png" alt="" />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  if (variation === "v2") {
    return (
      <section className={style["experience"]}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <motion.div
              transition={{ duration: 1, ease: "easeInOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <SectionTitle color={"white"}>{title}</SectionTitle>
            </motion.div>
            <div className={style["experience__image-wrapper"]}>
              <motion.div
                className={style["experience__image-left"]}
                transition={{ duration: 1, ease: "easeInOut" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { x: ["-100%", "5%", "0"], opacity: 1 },
                  hidden: { x: "-100%", opacity: 0 },
                }}
              >
                <div className={style["experience__image-first"]}>
                  <img src="/images/flexibility/left-first.png" alt="" />
                </div>
                <div className={style["experience__image-second"]}>
                  <img src="/images/flexibility/left-second.png" alt="" />
                </div>
              </motion.div>
              <motion.div
                className={`${style["experience__image"]} ${style["experience__image--v2"]}`}
                transition={{ duration: 1, ease: "easeInOut" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <img src="/images/experience2.png" alt="" />
              </motion.div>
              <motion.div
                className={style["experience__image-right"]}
                transition={{ duration: 1, ease: "easeInOut" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { x: ["100%", "-5%", "0"], opacity: 1 },
                  hidden: { x: "100%", opacity: 0 },
                }}
              >
                <div className={style["experience__image-first"]}>
                  <img src="/images/flexibility/right-first.png" alt="" />
                </div>
                <div className={style["experience__image-second"]}>
                  <img src="/images/flexibility/right-second.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variation === "v3") {
    return (
      <section className={`${style["experience"]} ${style["experience--v3"]}`}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <motion.div
              transition={{ duration: 1, ease: "easeInOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <SectionTitle>{title}</SectionTitle>
            </motion.div>
            <motion.div
              className={style["experience__image"]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { x: ["100%", "-5%", "0"], opacity: 1 },
                hidden: { x: "100%", opacity: 0 },
              }}
            >
              <img src="/images/experience3.png" alt="" />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }
};

export default Experience;
