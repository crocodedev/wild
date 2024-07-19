import style from "./SectionTitle.module.scss";

const SectionTitle = ({ children, color }) => {
  return (
    <p
      className={
        color !== "white"
          ? `${style["title"]}`
          : `${style["title"]} ${style["title--white"]}`
      }
    >
      {children}
    </p>
  );
};

export default SectionTitle;
