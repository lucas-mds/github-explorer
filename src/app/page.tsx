"use client";
import { useState } from "react";
import SearchBar from "@/components/search-bar";
import UserCard from "@/components/user-card";
import useSearchUsers from "@/hooks/use-search-users";
import styles from "./page.module.css";
import { AppBar, Box, Typography } from "@mui/material";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearchUsers(query);

  return (
    <>
      <AppBar position="static" className="h-12 justify-center pl-4">
        <Typography variant="h6">Github Explorer</Typography>
      </AppBar>
      <div className="p-10">
        <main>
          <SearchBar isLoading={isLoading} onClick={setQuery} />
          {query && data && !isLoading && (
            <Box className="my-4">
              <Typography variant="caption">
                Showing results for "{query}"
              </Typography>
            </Box>
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
    </>
  );
}
