import React from 'react';
import styles from './styles.module.css'

interface ProductDetails {
    brand: string;
    description: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    rating: number 
}

interface Props {
    productDetails: ProductDetails
}

const ProductDetailCard: React.FC<Props> = ({productDetails}) =>{
    let ratingArr = [] ;
    for(let i=0; i<Math.ceil(productDetails.rating); i++){
        ratingArr.push('')
    }
    return(
        <div className={styles.detailCardWrapper}>
            <div className={styles.leftCard}>
                <img src={productDetails.thumbnail} className={styles.thumbnail} />
            </div>
            <div className={styles.rightCard}>
                <h3 className={styles.brandName}>{productDetails.brand}</h3>
                <div className={styles.ratings}>
                    {ratingArr.map(() => <img src='/star.png' className={styles.star} key={Date.now()} />)}
                    <span className={styles.ratingText}>{`( ${Math.ceil(productDetails.rating)} )`}</span>    
                </div>
                <p className={styles.description}>{productDetails.description}</p>
                <h3 className={styles.discount}>{`Price Rs ${productDetails.discountPercentage}`}</h3>
                <h3 className={styles.discount}>{`Discount ${productDetails.discountPercentage}%`}</h3>
            </div>
        </div>
    )
}

export default ProductDetailCard;