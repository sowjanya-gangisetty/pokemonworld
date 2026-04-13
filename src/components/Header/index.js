import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.title}>Welcome to the Pokemon World!</div>
      <div className={styles.pika}>Pika Pika!</div>
    </header>
  );
};

export default Header;