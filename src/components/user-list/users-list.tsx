import { Box, Typography } from "@mui/material";
import { UsersResponse } from "@/hooks/use-search-users";
import UserCard from "../user-card";
import Button from "../button";

export type UsersListProps = {
  items: UsersResponse;
  searchTerm: string;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  errorMessage?: string;
  onLoadMore: () => void;
};

const UsersList = ({
  items,
  searchTerm,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  errorMessage,
  onLoadMore,
}: UsersListProps) => {
  const isSearchingForUser = searchTerm && items && !errorMessage;
  const haventSearchedYet = !searchTerm;
  const isFetchingData = isLoading || isFetchingNextPage;
  const isEmptySearch =
    items.length === 0 && searchTerm && !errorMessage && !isLoading;

  return (
    <>
      {errorMessage && (
        <Typography
          variant="subtitle1"
          color="error"
          className="my-6 text-center"
        >
          {errorMessage}
        </Typography>
      )}
      {isSearchingForUser && (
        <Box className="my-4">
          <Typography variant="caption">
            {isFetchingData ? "Loading" : "Showing"} results for &quot;
            {searchTerm}&quot;
          </Typography>
        </Box>
      )}
      {isEmptySearch && (
        <Typography variant="subtitle1" className="my-6 text-center">
          No users found
        </Typography>
      )}
      {haventSearchedYet && (
        <Typography variant="subtitle1" className="my-6 text-center">
          You haven’t searched for anything yet
        </Typography>
      )}
      {items.map((item) => (
        <UserCard key={item.id} name={item.login} avatarUrl={item.avatar_url} />
      ))}
      {!isLoading && hasNextPage && (
        <Box className=" flex justify-center">
          <Button
            isLoading={isFetchingNextPage}
            fullWidth
            variant="contained"
            className="md:w-60 "
            onClick={onLoadMore}
          >
            Load more
          </Button>
        </Box>
      )}
    </>
  );
};

export default UsersList;
