import styles from './styles.module.css'

const HeroButton = () =>{
    return (
        // <div className={styles.buttonWrap}>
        //     <button className={styles.heroButton}>All Products</button>         
        // </div>
        <>
        <button className={styles.heroButton}>All Products
        <img className={styles.arrowImg} src='./circle-with-arrow.png' />
        </button>  
        </>
    )
}

export default HeroButton