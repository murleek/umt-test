import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.title}>User Management Table</h1>
    </header>
  );
}
