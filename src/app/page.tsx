"use client";
import { useMemo, useState } from "react";
import SearchBar from "@/components/search-bar";
import useSearchUsers, { UsersResponse } from "@/hooks/use-search-users";
import { AppBar, Box, Container, Typography } from "@mui/material";
import TokenSettingsDialog from "@/components/token-settings-dialog";
import UsersList from "@/components/user-list";

export default function Home() {
  const [query, setQuery] = useState("");
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useSearchUsers(query);

  const handleClick = (nextQuery: string) => {
    if (error && nextQuery) {
      refetch();
      return;
    }

    setQuery(nextQuery);
  };

  const users = useMemo(() => {
    const users: UsersResponse = [];
    data?.pages.map((page) =>
      page.items.map((user) => {
        users.push(user);
      })
    );

    return users;
  }, [data]);

  return (
    <>
      <AppBar position="static" className="h-12 justify-center px-4">
        <Box className="flex flex-row items-center justify-between">
          <Typography variant="h6">Github Explorer</Typography>
          <TokenSettingsDialog />
        </Box>
      </AppBar>
      <Container component={"main"} maxWidth="md" className="p-10 md:px-0">
        <SearchBar isLoading={isLoading} onClick={handleClick} />
        <UsersList
          items={users}
          searchTerm={query}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          onLoadMore={fetchNextPage}
          errorMessage={error?.message}
        />
      </Container>
    </>
  );
}
