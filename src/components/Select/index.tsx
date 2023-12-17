"use client"
import React , { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'

const StyledSelect = () =>{
    const categories = ['All Products', 'Headphones', 'Mouse', 'Keyboard'];
    const [active, setActive] = useState(categories[0])
    const [open, setOpen] = useState<boolean>(false)
    const selectDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (selectDiv.current && !selectDiv.current.contains(event.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
        <div className={styles.selectWrapper}  ref={selectDiv} onClick={()=>setOpen(!open)}>
            <div className={styles.selectItem}>{active}</div>
            <div className={`${styles.optionWrapper} ${open ? 'block' : 'hidden'}`}>
            {categories.filter((ele)=>ele!== active).map((ele)=><div key={ele} onClick={()=>setActive(ele)} className={styles.selectItem}>{ele}</div>)}
            </div>
        </div>
    )
}

export default  React.memo(StyledSelect)