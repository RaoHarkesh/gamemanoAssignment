import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

interface Props {
    path: string
}

const HeroButton: React.FC<Props> = ({path}) =>{
    return (
        // <div className={styles.buttonWrap}>
        //     <button className={styles.heroButton}>All Products</button>         
        // </div>
        <Link href={path}>
        <button className={styles.heroButton}>All Products
        <img className={styles.arrowImg} src='./circle-with-arrow.png' />
        </button>  
        </Link>
    )
}

export default HeroButton