"use client";
import { useState } from "react";
import SearchBar from "@/components/search-bar";
import UserCard from "@/components/user-card";
import useSearchUsers from "@/hooks/use-search-users";
import useSearchUserRepositories from "@/hooks/use-search-user-repositories";
import styles from "./page.module.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const { data, isLoading } = useSearchUsers(query);
  const { data: reposData } = useSearchUserRepositories(selectedUser);

  const handleUsrClick = (user: string) => {
    setSelectedUser(user);
  };

  console.log(reposData);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchBar isLoading={isLoading} onClick={setQuery} />
        <ul>
          {data?.items.map((user) => (
            <li key={user.id} onClick={() => handleUsrClick(user.login)}>
              {user.login}
            </li>
          ))}
          <UserCard />
        </ul>
      </main>
    </div>
  );
}
