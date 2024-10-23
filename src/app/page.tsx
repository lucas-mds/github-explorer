"use client";
import { useState } from "react";
import SearchBar from "@/components/search-bar";
import UserCard from "@/components/user-card";
import useSearchUsers from "@/hooks/use-search-users";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearchUsers(query);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchBar isLoading={isLoading} onClick={setQuery} />
        {query && data && !isLoading && (
          <Typography variant="caption">
            Showing results for "{query}"
          </Typography>
        )}
        <ul>
          {data?.items.map((user) => (
            <UserCard
              key={user.id}
              name={user.login}
              avatarUrl={user.avatar_url}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
