import React from "react";
import styles from './styles.module.css'
import Link from "next/link";

const Navbar = () =>{
    return (
        <>
        <div className={styles.navouter}>
            <div className={styles.navinner}>
                <Link href='/'>
                <img className={styles.navlogo} src="/logo.jpg" />
                </Link>
                <div className={styles.navinnerright}>
                    <div className={styles.navbuttonwrap}>
                        <button className={styles.navbuttonprimary}>Home</button>         
                    </div>
                    <button className={styles.navbuttonsecondary}>Products</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar