import { useState } from "react";
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
    data: repos,
    isLoading,
    error,
    fetchNextPage,
  } = useSearchUserRepositories(name, enableSearch);

  const handleClick = () => {
    setOpen(!open);
    setEnableSearch(true);
  };

  return (
    <Card className="mb-4">
      <CardContent onClick={handleClick}>
        <Box className="flex flex-row items-center justify-between">
          <Box className="flex flex-row items-center">
            <Avatar variant="square" className="rounded" src={avatarUrl} />
            <Typography variant="h6" className="ml-2">
              {name}
            </Typography>
          </Box>
          {open ? (
            <ExpandLess />
          ) : (
            <ExpandMore className={`${isLoading && "animate-pulse"}`} />
          )}
        </Box>
      </CardContent>
      <Collapse in={open && !isLoading} timeout={600}>
        <ReposList
          repos={repos}
          errorMessage={
            (error as unknown as ErrorResponse)?.response?.data.message ||
            "An error has occurred"
          }
          onClick={() => fetchNextPage()}
        />
      </Collapse>
    </Card>
  );
};

export default UserCard;
