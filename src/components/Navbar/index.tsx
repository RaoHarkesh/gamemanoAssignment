import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Search from "../GlobalSearch";

const Navbar = async () => {
  let products;
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
  } catch {
    products = null;
  }
  return (
    <>
      <div className={styles.navouter}>
        <div className={styles.navinner}>
          <Link href="/">
            <img className={styles.navlogo} src="/logo.jpg" />
          </Link>
          <div className={styles.navinnerright}>
            <Search products={products} />
            <div className={styles.navbuttonwrap}>
              <Link href={"/"}>
                <button className={styles.navbuttonprimary}>Home</button>
              </Link>
            </div>
            <Link href={"/products"}>
              <button className={styles.navbuttonsecondary}>Products</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
