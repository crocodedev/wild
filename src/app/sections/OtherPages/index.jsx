"use client";

import Container from "@/app/components/Container";
import style from "./OtherPages.module.scss";
import SectionTitle from "@/app/components/SectionTitle";
import { motion } from "framer-motion";

const OtherPages = () => {
  return (
    <section className={style["other-pages"]} id="other">
      <Container>
        <motion.div
          className={style["other-pages__wrapper"]}
          transition={{ duration: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <SectionTitle>Other Pages</SectionTitle>
          <div className={style["other-pages__items"]}>
            <div className={style["other-pages__left"]}>
              <div>
                <img src="/images/other/1.png" alt="" />
              </div>
              <div>
                <img src="/images/other/4.png" alt="" />
              </div>
            </div>
            <div className={style["other-pages__center"]}>
              <div>
                <img src="/images/other/2.png" alt="" />
              </div>
              <div>
                <img src="/images/other/5.png" alt="" />
              </div>
            </div>
            <div className={style["other-pages__right"]}>
              <div>
                <img src="/images/other/3.png" alt="" />
              </div>

              <div>
                <img src="/images/other/6.png" alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default OtherPages;
