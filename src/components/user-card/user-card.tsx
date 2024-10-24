import { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useSearchUserRepositories, {
  ErrorResponse,
  RepositoriesResponse,
} from "@/hooks/use-search-user-repositories";
import ReposList from "../repos-list";

type UserCardProps = {
  name: string;
  avatarUrl?: string;
};

const UserCard = ({ name, avatarUrl }: UserCardProps) => {
  const [open, setOpen] = useState(false);
  const [enableSearch, setEnableSearch] = useState(false);
  const {
    data,
    hasNextPage,
    isLoading,
    error,
    isError,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchUserRepositories(name, enableSearch);

  const handleClick = () => {
    setOpen(!open);
    setEnableSearch(true);
  };

  const repos = useMemo(() => {
    const items: RepositoriesResponse = [];
    data?.pages.map((page, pageIndex) =>
      page.items.map((item: RepositoriesResponse[0], itemIndex: number) => {
        const isLastOfItsPage = itemIndex === page.items.length - 1;
        const hasNextPageItem = pageIndex < data?.pages.length - 1;

        items.push({ ...item, isLastOfItsPage, hasNextPageItem });
      })
    );

    return items;
  }, [data]);

  return (
    <Card
      data-testid={`user-card-${name}`}
      id={`user-card-${name}`}
      className="mb-4"
    >
      <CardContent onClick={handleClick}>
        <Box className="flex flex-row items-center justify-between">
          <Box className="flex flex-row items-center">
            <Avatar variant="square" className="rounded" src={avatarUrl} />
            <Typography variant="h6" className="ml-2">
              {name}
            </Typography>
          </Box>
          {open && !isLoading ? (
            <ExpandLess />
          ) : (
            <ExpandMore className={`${isLoading && "animate-pulse"}`} />
          )}
        </Box>
      </CardContent>
      <Collapse in={open && !isLoading} timeout={600}>
        <ReposList
          repos={repos}
          isLoading={isLoading || isFetchingNextPage}
          hasNextPage={hasNextPage}
          onClick={() => fetchNextPage()}
          errorMessage={
            isError
              ? (error as unknown as ErrorResponse)?.response?.data.message ||
                "An error has occurred"
              : undefined
          }
        />
      </Collapse>
    </Card>
  );
};

export default UserCard;
