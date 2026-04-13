import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to Pokemon World. </h1>
      <p>This is the app page.js</p>
    </div>
  );
}
