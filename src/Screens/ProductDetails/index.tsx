import Hero from '@/components/HeroSection'
import styles from './styles.module.css'
import ProductDetailCard from '@/components/ProductsDetailsCard';
import Carousel from '@/components/CustomCarousel';
import CarouselCard from '@/components/CarouselCard';

interface Props {
    id: string;
    productDetails: {
        description: string;
        price: number;
        discountPercentage: number;
        brand: string;
        thumbnail: string;
        rating: number;
        images: Array<string>
    }
}

const ProductDetailsScreen: React.FC<Props> = ({productDetails}) => {
    return (
        <>
        <Hero backgroundImagePath='/detailsHeroImage.png' />
        <div className='bg-theme-purple'>
          <h1 className={styles.productHeadline}>{productDetails.brand}</h1>
          <ProductDetailCard  productDetails={productDetails} />
        <div className={styles.carouselWrapper}></div>
          <Carousel count={productDetails.images.length || 0}>
                <>
                {productDetails.images.map((ele) => <div key={ele} className={styles.gridUnit}>
                    <CarouselCard preview={ele} brand={''} title={''} price={''} />
                </div>)}
                </>
            </Carousel>
        </div>
      
        </>
    )
}

export default ProductDetailsScreen
