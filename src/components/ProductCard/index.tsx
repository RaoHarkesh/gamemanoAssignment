import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface props {
  id: string;
  title: string;
  thumbnail: string;
}

const ProductCard: React.FC<props> = ({ id, thumbnail, title }) => {
  return (
    <div className={styles.cardWrap} key={id}>
      <div className={styles.likeSection}>
        <span className={styles.likeText}>Favourite</span>
        <img className={styles.likeIcon} src="./like.png" />
      </div>
      <img src={thumbnail} className={styles.imgSection} />
      <h3 className={styles.titleSection}>{title}</h3>
      <Link className={styles.linkStyle} href={`/product/${id}`}>
        <button className={styles.viewButton}>
          View
          {/* <img className={styles.circleArrow} src="./circle-with-arrow.png" /> */}
          <span className={styles.ArrowCircleDark}>{"->"}</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
