"use client";

import Container from "@/app/components/Container";
import style from "./Benefits.module.scss";
import SectionTitle from "@/app/components/SectionTitle";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section className={style["benefits"]}>
      <Container>
        <div className={style["benefits__wrapper"]}>
          <div className={style["benefits__top"]}>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/seo.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>SEO Optimized</p>
                <p className={style["benefits__item-text"]}>
                  Unlock unparalleled speed with our SEO-optimized theme design.
                </p>
              </div>
            </motion.div>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/mobile.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Mobile Friendly</p>
                <p className={style["benefits__item-text"]}>
                  Optimized design ensures performance, surpassing other themes
                  in speed.
                </p>
              </div>
            </motion.div>
          </div>
          <div className={style["benefits__center"]}>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/product.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Top Speed</p>
                <p className={style["benefits__item-text"]}>
                  Experience unmatched speed with our optimized theme
                  performance design.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <SectionTitle>Benefits</SectionTitle>
            </motion.div>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/diamond.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Premium Features</p>
                <p className={style["benefits__item-text"]}>
                  Unlock premium functionality alongside lightning-fast speed
                  with design.
                </p>
              </div>
            </motion.div>
          </div>
          <div className={style["benefits__bottom"]}>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/settings.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Easy To Use</p>
                <p className={style["benefits__item-text"]}>
                  Effortlessly personalize with our high-performance, theme
                  navigation.
                </p>
              </div>
            </motion.div>
            <motion.div
              className={style["benefits__item"]}
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
            >
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/code.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Optimized Code</p>
                <p className={style["benefits__item-text"]}>
                  Navigate effortlessly with high-performance, speed-optimized
                  theme.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
