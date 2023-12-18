"use client"
import React, {ReactNode, useState} from 'react'
import styles from './styles.module.css'

interface Props {
    children: ReactNode;
    count: number;
}

const Carousel: React.FC<Props> = ({children, count}) =>{
    let onScreen = 4;
    let wide = Math.ceil(count/onScreen);
    const [left, setLeft] = useState(0);
    const handleLeft = () =>{
        if(left > 0){
            setLeft(left-1);
        }
    }

    const handleRight = () =>{
        if(left < wide - 1){
            setLeft(left+1)
        }
    }
    return (
        <div className={styles.carouselOuterWrapper}>
            <div className={styles.leftMoveWrraper} onClick={handleLeft}>
            {left !== 0 && <img className={`${styles.arrowImg} rotate-180`} src='./circle-with-arrow.png' />}
            </div>
            <div className={styles.carouselFrame}>
                <div className={styles.carouselMovable} style={{width: `${wide*100}%`, transform: `translateX(-${(100*left)/wide}%)`, gridTemplateColumns: `repeat(${onScreen*wide}, 1fr)`}}>
                    {children}
                </div>
            </div>
            <div className={styles.leftMoveWrraper} onClick={handleRight}>
                {left < wide -1 && <img className={styles.arrowImg} src='./circle-with-arrow.png' />}
            </div>
        </div>
    )
}

export default Carousel