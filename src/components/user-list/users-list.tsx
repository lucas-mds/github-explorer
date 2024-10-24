import { Box, Typography } from "@mui/material";
import { UsersResponse } from "@/hooks/use-search-users";
import UserCard from "../user-card";
import Button from "../button";

type UsersListProps = {
  items: UsersResponse;
  searchTerm: string;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
};

const UsersList = ({
  items,
  searchTerm,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  onLoadMore,
}: UsersListProps) => {
  const isSearchingForUser = searchTerm && items;
  const haventSearchedYet = !searchTerm;
  const isFetchingData = isLoading || isFetchingNextPage;

  return (
    <>
      {isSearchingForUser && (
        <Box className="my-4">
          <Typography variant="caption">
            {isFetchingData ? "Loading" : "Showing"} results for &quot;
            {searchTerm}&quot;
          </Typography>
        </Box>
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
