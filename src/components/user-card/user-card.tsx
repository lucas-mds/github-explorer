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

const UserCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Box className="flex flex-row items-center justify-between">
          <Box className="flex flex-row items-center">
            <Avatar
              variant="square"
              className="rounded"
              src="https://avatars.githubusercontent.com/u/26863142?v=4"
            />
            <Typography variant="h6" className="ml-2">
              lucas-mds
            </Typography>
          </Box>
          <Box onClick={() => setOpen(!open)}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </Box>
      </CardContent>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ReposList />
      </Collapse>
    </Card>
  );
};

export default UserCard;
