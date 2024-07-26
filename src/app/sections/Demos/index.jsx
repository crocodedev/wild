"use client";

import Container from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";
import style from "./Demos.module.scss";
import DemoItem from "@/app/components/DemoItem";
import { motion } from "framer-motion";

const Demos = ({ demoInfo, title, id }) => {
  return (
    <section className={style["demos"]} id={id}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className={style["demos__wrapper"]}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1 },
          }}
        >
          <SectionTitle>{title}</SectionTitle>
          <div className={style["demos__items"]}>
            {demoInfo.map((i) => (
              <DemoItem
                name={i.name}
                image={i.image}
                key={i.name}
                url={i.url}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Demos;
