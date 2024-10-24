import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { RepositoriesResponse } from "@/hooks/use-search-user-repositories";
import Button from "../button";

export type ReposListProps = {
  repos: RepositoriesResponse;
  isLoading: boolean;
  errorMessage?: string;
  hasNextPage: boolean;
  onClick: () => void;
};

const ReposList = ({
  repos,
  isLoading,
  errorMessage,
  hasNextPage,
  onClick,
}: ReposListProps) => {
  const hasResults = repos.length > 0;

  const formatStarsCount = (starCount: number) => {
    if (starCount >= 1000) {
      return `${(starCount / 1000).toFixed(1)}k`;
    }

    return starCount;
  };

  return (
    <List className="max-h-80 overflow-y-auto	">
      {repos?.map((item) => {
        return (
          <Box data-testid={`repo-line-item-${item.id}`} key={item.id}>
            <ListItem>
              <Box className="w-full">
                <Box className="w-full flex flex-row justify-between">
                  <Link
                    id={`repo-link-${item.id}`}
                    variant="body2"
                    href={item.svn_url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                  <Box className="flex flex-row">
                    <Typography variant="body2" color="textSecondary">
                      {formatStarsCount(item.stargazers_count || 0)}
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
            {((!item.isLastOfItsPage && repos?.length > 1) ||
              (item.hasNextPageItem && item.isLastOfItsPage)) && (
              <Divider className="mx-4 my-2" />
            )}
          </Box>
        );
      })}
      {!hasResults && !errorMessage && (
        <ListItem>
          <Typography variant="body2">No repositories found</Typography>
        </ListItem>
      )}
      {!hasResults && errorMessage && (
        <ListItem>
          <Typography variant="body2" color="error">
            {errorMessage}
          </Typography>
        </ListItem>
      )}
      {hasNextPage && (
        <Box className=" flex justify-center">
          <Button isLoading={isLoading} onClick={onClick}>
            Load more
          </Button>
        </Box>
      )}
    </List>
  );
};

export default ReposList;
