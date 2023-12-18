"use client"

import Hero from '@/components/HeroSection'
import styles from './styles.module.css'
import ProductCard from '@/components/ProductCard';
import StyledSelect from '@/components/Select';
import { useState } from 'react';

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

const Products: React.FC<Props> = () =>{
    const [products, setProducts] = useState<Array<Product>>([]);
    const handleChange = async (category: string) =>{
        try{
            const url = category === "" ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${category}`
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data.products);
        }catch{

        }

    }
    return (
        <>
        <Hero>
            <>
            <div className={styles.heroMidWrap}>
                <img src="product-headline.png" className={styles.heroMidImg} /> 
            </div>
            </>
        </Hero>
        <div className='bg-theme-purple'>
        <div className={`mw-1300  ${styles.screenWrapper}`}>
            <div className={styles.filterSection}>
                <h3 className={styles.breadCrumb}>{'>> All Products'}</h3>
                <StyledSelect handleFilterChange={handleChange} />
            </div>
            <div className={styles.gridWrap}>
            {products?.map((ele)=><ProductCard key={ele.id} id={ele.id} thumbnail={ele.images[1]} title={ele.title} />)}
            </div>
        </div>
        </div>
        </>
    )
}

export default Products