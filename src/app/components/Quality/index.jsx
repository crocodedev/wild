import style from "./Quality.module.scss";

const Quality = ({ text }) => {
  return (
    <div className={style["quality__item"]}>
      <div className={style["quality__icon"]}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.4924 4.26494C26.1134 1.72254 29.7286 1.72252 30.3496 4.26496L33.8808 18.7223C34.3751 20.746 35.9702 22.3167 38.0013 22.7797L52.4014 26.0625C54.9939 26.6535 54.9938 30.3465 52.4014 30.9375L38.0012 34.2203C35.9702 34.6833 34.3751 36.254 33.8808 38.2777L30.3496 52.7351C29.7286 55.2775 26.1134 55.2775 25.4924 52.735L21.9612 38.2777C21.4669 36.254 19.8718 34.6833 17.8407 34.2203L3.44057 30.9375C0.848124 30.3465 0.848136 26.6535 3.44056 26.0625L17.8407 22.7797C19.8718 22.3167 21.4669 20.746 21.9612 18.7223L25.4924 4.26494Z"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Quality;