import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <>
      <img src="/footer-top-style.jpg" className={styles.footerTopImage} />
      <div className={styles.footerWrapper}>
        <div className={`${styles.footerWrapperInner} mw-1300`}>
          <div className={styles.footerLeft}>
            <img className={styles.footerlogo} src="/logo.jpg" />
            <p className={styles.compInfo}>
              {
                "Logo is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard ever since when the 1500s"
              }
            </p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerCol}>
              <img className={styles.footerlogo} src="/usefull-links.jpg" />
              <Link href={"/"}>
                <span className={styles.links}>Home</span>
              </Link>
              <Link href={"/products"}>
                <span className={styles.links}>Products</span>
              </Link>
              <span className={styles.links}>Contact</span>
              <span className={styles.links}>About US</span>
            </div>
            <div className={styles.footerCol}>
              <img
                className={styles.followHeadline}
                src="/follow-us-headline.jpg"
              />
              <div className={styles.socialLinksWrapper}>
                <img
                  src="/facebook-icon.jpg"
                  className={styles.socialMediaLogo}
                />
                <img src="/insta-logo.jpg" className={styles.socialMediaLogo} />
                <img
                  src="/twitter-logo.jpg"
                  className={styles.socialMediaLogo}
                />
                <img
                  src="/youtube-logo.jpg"
                  className={styles.socialMediaLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
