import React from "react";
import styles from './styles.module.css'
import Hero from "@/components/HeroSection";
import HeroButton from "@/components/HeroButton";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/CustomCarousel";
import CarouselCard from "@/components/CarouselCard";
import Loader from "@/components/Loader";

interface Props {
    products: Array<Product> | null
}

interface Product {
    id: string;
    brand: string;
    title: string;
    thumbnail: string;
    price: string;
    images: Array<string>
}

const HomePage: React.FC<Props> = ({products}) =>{
    return(
        <>
        <Hero>
            <>
            <div className={styles.heroMidWrap}>
                <img src="./hero-mid-image.png" className={styles.heroMidImg} />
                <div className={styles.heroTextWrap}>
                    <div className={styles.gradLine} />
                    <span className={styles.heroText}>The Techies You Love</span>
                    <div className={styles.gradLine} />
                </div>
                <HeroButton path="/products" />
            </div>
            </>
        </Hero>
        <div className="bg-theme-purple">
         <div className={`mw-1300 ${styles.screenWrapper}`}>
            <div className={styles.positionCarousel}>
            <Carousel count={products?.length || 0}>
                <>
                {products?.map((ele) => <div key={ele.id} className={styles.gridUnit}>
                    <CarouselCard preview={ele.images[0]} brand={ele.brand} title={ele.title} price={ele.price} />
                </div>)}
                </>
            </Carousel>
            </div>
         <img className={styles.proHeadline} src="./product-headline.png" />
            <div className={styles.gridWrap}>
            {products?.map((ele)=><div className={styles.gridUnit}><ProductCard key={ele.id} id={ele.id} thumbnail={ele.images[1]} title={ele.title} /></div>)}
            </div>
         </div>
        </div>
        </>
    )
}

export default HomePage