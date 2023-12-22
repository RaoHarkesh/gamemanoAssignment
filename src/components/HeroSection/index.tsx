import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface HeroProps {
  children?: ReactNode;
  backgroundImagePath?: string;
}

const Hero: React.FC<HeroProps> = ({ children, backgroundImagePath }) => {
  return (
    <>
      <div className={styles.homehero}>
        <img
          src={backgroundImagePath || "home-hero-banner.jpg"}
          className={`mw-1300 ${styles.heroimage}`}
        />
        <div className={styles.childWrapper}>{children}</div>
      </div>
    </>
  );
};

export default Hero;
