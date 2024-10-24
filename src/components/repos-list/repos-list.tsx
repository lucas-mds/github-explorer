import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { Item } from "@/hooks/use-search-user-repositories";
import Button from "../button";
import { InfiniteData } from "@tanstack/react-query";

type ReposListProps = {
  repos?: InfiniteData<
    {
      nextPage: number | undefined;
      items: Item[];
    },
    unknown
  >;
  errorMessage?: string;
  hasNextPage: boolean;
  onClick: () => void;
};

const ReposList = ({
  repos,
  errorMessage,
  hasNextPage,
  onClick,
}: ReposListProps) => {
  const formatStarsCount = (starCount: number) => {
    if (starCount >= 1000) {
      return `${(starCount / 1000).toFixed(1)}k`;
    }

    return starCount;
  };

  const hasResults = !!repos?.pages?.[0]?.items?.length;

  return (
    <List className="max-h-80 overflow-y-auto	">
      {repos?.pages.map((page, pageIndex) =>
        page.items.map((item, itemIndex) => {
          const isLastItem = itemIndex === page.items.length - 1;
          const hasNextItem = pageIndex < repos?.pages.length - 1;
          return (
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
              {((!isLastItem && page.items.length > 1) ||
                (hasNextItem && isLastItem)) && (
                <Divider className="mx-4 my-2" />
              )}
            </Box>
          );
        })
      )}
      {!hasResults && !errorMessage && (
        <ListItem>
          <Typography variant="body2">No repositories found</Typography>
        </ListItem>
      )}
      {!repos && errorMessage && (
        <ListItem>
          <Typography variant="body2" color="error">
            {errorMessage}
          </Typography>
        </ListItem>
      )}
      {hasNextPage && (
        <Box className=" flex justify-center">
          <Button onClick={onClick}>Load more</Button>
        </Box>
      )}
    </List>
  );
};

export default ReposList;
