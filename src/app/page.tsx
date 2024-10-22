"use client";
import useSearchUsers from "@/hooks/use-search-users";
import styles from "./page.module.css";
import SearchBar from "@/components/search-bar";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data } = useSearchUsers(query);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchBar onClick={setQuery} />
        <ul>
          {data?.items.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
