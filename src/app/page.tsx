"use client";
import { useState } from "react";
import SearchBar from "@/components/search-bar";
import UserCard from "@/components/user-card";
import useSearchUsers from "@/hooks/use-search-users";
import { AppBar, Box, Typography } from "@mui/material";
import Button from "@/components/button";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useSearchUsers(query);

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
          {!data?.pages[0].items.length && !isLoading && (
            <Typography variant="subtitle1" className="my-6 text-center">
              You haven’t searched for anything yet
            </Typography>
          )}
          {data?.pages.map((page) =>
            page.items.map((user) => (
              <UserCard
                key={user.id}
                name={user.login}
                avatarUrl={user.avatar_url}
              />
            ))
          )}
          {!isLoading && hasNextPage && (
            <Button
              isLoading={isFetchingNextPage}
              fullWidth
              variant="contained"
              onClick={() => fetchNextPage()}
            >
              Load more
            </Button>
          )}
        </main>
      </div>
    </>
  );
}
