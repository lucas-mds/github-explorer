import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { RepositoryResponse } from "@/hooks/use-search-user-repositories";

type ReposListProps = {
  repos?: RepositoryResponse[];
};

const ReposList = ({ repos }: ReposListProps) => {
  const formatStarsCount = (starCount: number) => {
    if (starCount >= 1000) {
      return `${(starCount / 1000).toFixed(1)}k`;
    }

    return starCount;
  };

  return (
    <List>
      {repos?.map((item, index) => (
        <Box key={item.id}>
          <ListItem>
            <Box className="w-full">
              <Box className="w-full flex flex-row justify-between">
                <Link variant="body2" href={item.svn_url} target="_blank">
                  {item.name}
                </Link>
                <Box className="flex flex-row">
                  <Typography variant="body2" color="textSecondary">
                    {formatStarsCount(item.stargazers_count)}
                  </Typography>
                  <StarBorderRoundedIcon fontSize="small" color="action" />
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-2"
              >
                {item.description || "No description provided"}
              </Typography>
            </Box>
          </ListItem>
          {index !== repos.length - 1 && repos.length > 1 && (
            <Divider className="mx-4 my-2" />
          )}
        </Box>
      ))}
    </List>
  );
};

export default ReposList;
