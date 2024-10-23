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
import ReposList from "../repos-list";
import useSearchUserRepositories from "@/hooks/use-search-user-repositories";

type UserCardProps = {
  name: string;
  avatarUrl?: string;
};

const UserCard = ({ name, avatarUrl }: UserCardProps) => {
  const [open, setOpen] = useState(false);
  const { data: repos } = useSearchUserRepositories(name);

  const handleClick = () => {
    setOpen(!open);
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
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </CardContent>
      <Collapse in={open} timeout="auto">
        <ReposList repos={repos || []} />
      </Collapse>
    </Card>
  );
};

export default UserCard;
