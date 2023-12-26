"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

interface Props {
  products: Array<Product> | null;
}

interface Product {
  id: string;
  brand: string;
  title: string;
  thumbnail: string;
  price: string;
  images: Array<string>;
}

const Search: React.FC<Props> = ({ products }) => {
  const [show, setShow] = useState<boolean>(false);
  const [options, setOptions] = useState<Array<Product>>([]);
  const [allOptions, setAllOptions] = useState<Array<Product>>([]);

  const handleChange = (val: string) => {
    const filteredOptions = allOptions.filter((ele) =>
      ele.title.toLowerCase().includes(val.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  useEffect(() => {
    if (products) {
      setOptions(products);
      setAllOptions(products);
    }
    const inputElement = document.getElementsByClassName(styles.inputBox)[0];
    const optionElement = document.getElementsByClassName(
      styles.optionWrapper
    )[0];

    document.body.addEventListener("click", function (event) {
      if (event.target !== inputElement && event.target !== optionElement) {
        setShow(false);
        console.log(event.target);
        console.log(inputElement);
      }
    });
  }, [products]);

  return (
    <div className={styles.inputWrapper}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        className={styles.inputBox}
        onFocus={() => setShow(true)}
        placeholder="search products"
      />
      <div className={`${styles.optionWrapper} ${!show && styles.hidden}`}>
        {options.map((product) => (
          <a
            key={product.id}
            onClick={() => setShow(false)}
            target="_blank"
            className={styles.option}
            href={`/product/${product.id}`}
          >
            {product.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Search;
