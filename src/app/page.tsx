import { TextField } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <TextField
            id="filled-basic"
            label="Search user name"
            variant="filled"
          />
        </div>
      </main>
    </div>
  );
}
