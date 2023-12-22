import styles from "./styles.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  brand: string;
  title: string;
  price: string;
  preview: string;
}

const CarouselCard: React.FC<Props> = ({ brand, title, price, preview }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.thumbnailWrapper}></div>
      {preview ? (
        <img className={styles.thumbnail} src={preview} />
      ) : (
        <Skeleton />
      )}
      <h3 className={styles.category}>{brand}</h3>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.price}>{price}</h3>
    </div>
  );
};

export default CarouselCard;
