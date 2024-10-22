import styles from "./page.module.css";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchBar />
      </main>
    </div>
  );
}
