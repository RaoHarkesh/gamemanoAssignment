"use client"
import React, {ReactNode, useState} from 'react'
import styles from './styles.module.css'
import useBreakpoint from '@/utils';

interface Props {
    children: ReactNode;
    count: number;
}

const Carousel: React.FC<Props> = ({children, count}) =>{
    const [left, setLeft] = useState(0);
    const isDesktop = useBreakpoint('desktop');
    const isTablet =  useBreakpoint('tablet');;
    let onScreen;
    if(isTablet){
        onScreen = 2;
    }else if(isDesktop){
        onScreen = 3
    }else{
        onScreen = 4
    }
    let wide = Math.ceil(count/onScreen);

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
        <>
        <div className={styles.carouselOuterWrapper}>
            <div className={styles.leftMoveWrraper} onClick={handleLeft}>
            {left !== 0 && <img className={`${styles.arrowImg} rotate-180`} src='/circle-with-arrow.png' />}
            </div>
            <div className={styles.carouselFrame}>
                <div className={styles.carouselMovable} style={{width: `${wide*100}%`, transform: `translateX(-${(100*left)/wide}%)`, gridTemplateColumns: `repeat(${onScreen*wide}, 1fr)`}}>
                    {children}
                </div>
            </div>
            <div className={styles.leftMoveWrraper} onClick={handleRight}>
                {left < wide -1 && <img className={styles.arrowImg} src='/circle-with-arrow.png' />}
            </div>
        </div>
        <div  className={styles.bottomControl}>
            {<img  onClick={handleLeft} className={`${styles.arrowImg} rotate-180 ${left === 0 && styles.opaque}`} src='/circle-with-arrow.png' />}
            {<img  onClick={handleRight} className={`${styles.arrowImg} ${left === wide -1 && styles.opaque}`} src='/circle-with-arrow.png' />}
        </div>
        </>
    )
}

export default Carousel