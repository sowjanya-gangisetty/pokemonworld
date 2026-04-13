import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import Ball from "../../../public/images/pokeball.png";
import Pika from "../../../public/images/pika.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={Ball} alt="pokeball" sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 60vw, 20vw"/>
        <Image src={Logo} alt="logo" />
        <Image src={Pika} alt="pika" />
        
      </div>
      
    </header>
  );
};

export default Header;