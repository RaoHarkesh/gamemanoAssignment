"use client"
import React , { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

interface Props {
  handleFilterChange: Function
}

const StyledSelect: React.FC<Props> = ({handleFilterChange}) =>{
    const [categories, setCategories] = useState<Array<string>>([]);
    const [active, setActive] = useState(categories[0])
    const [open, setOpen] = useState<boolean>(false)
    const selectDiv = useRef<HTMLDivElement>(null);
    const params = useSearchParams();
    const category = params.get('category');

    const getCategories = async () =>{
      try{
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
        setActive(data[0])
      }catch{

      }
  
    }


    useEffect(() => {
      console.log("run")
        const handleClickOutside = (event) => {
          if (selectDiv.current && !selectDiv.current.contains(event.target)) {
            setOpen(false);
          }
        };

        getCategories();
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

      useEffect(()=>{
        if(category){
          handleFilterChange(category);
        }else{
          handleFilterChange('')
        }
      },[category])

    

    return (
        <div className={styles.selectWrapper}  ref={selectDiv} onClick={()=>setOpen(!open)}>
            <div className={`${styles.selectItem} ${styles.activeWrapper}`}>{active}
                <img src='down-arrow.png' className={`${styles.arrowImage} ${open && styles.reverse}`} />
            </div>
            <div className={`${styles.optionWrapper} ${open ? 'block' : 'hidden'}`}>
            {categories.filter((ele)=> ele !== active).map((ele)=><Link key={ele} href={{
            pathname: '/products',
            query: { category: ele.toLocaleLowerCase() },
          }}><div key={ele} onClick={()=>setActive(ele)} className={styles.selectItem}>{ele}</div></Link>)}
            </div>
        </div>
    )
}

export default  React.memo(StyledSelect)