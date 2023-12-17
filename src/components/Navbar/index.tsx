import React from "react";
import styles from './styles.module.css'

const Navbar = () =>{
    return (
        <>
        <div className={styles.navouter}>
            <div className={styles.navinner}>
                <img className={styles.navlogo} src="logo.jpg" />
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