import Hero from '@/components/HeroSection'
import styles from './styles.module.css'
import ProductCard from '@/components/ProductCard';
import StyledSelect from '@/components/Select';

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

const Products: React.FC<Props> = ({products}) =>{
    return (
        <>
        <Hero>
            <>
            <div className={styles.heroMidWrap}>
                <img src="product-headline.png" className={styles.heroMidImg} /> 
            </div>
            </>
        </Hero>
        <div className={`mw-1300 bg-theme-purple ${styles.screenWrapper}`}>
            <div className={styles.filterSection}>
                <h3 className={styles.breadCrumb}>{'>> All Products'}</h3>
                <StyledSelect/>
            </div>
            <div className={styles.gridWrap}>
            {products?.map((ele)=><ProductCard key={ele.id} id={ele.id} thumbnail={ele.images[1]} title={ele.title} />)}
            </div>
        </div>
        
        </>
    )
}

export default Products