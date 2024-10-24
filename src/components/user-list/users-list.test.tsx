import React from "react";
import { render, screen } from "@testing-library/react";
import UsersList, { UsersListProps } from "./users-list";
import { items } from "./user-list-mock-data";

jest.mock("octokit", () => {
  return jest.fn();
});

jest.mock("../../hooks/user-octokit");

jest.mock("../../hooks/use-search-user-repositories", () => {
  return () => ({
    data: { pages: [] },
    hasNextPage: false,
    isLoading: false,
    error: undefined,
    isError: false,
    fetchNextPage: jest.fn,
  });
});

describe("<UsersList />", () => {
  const renderUsersList = (props: Partial<UsersListProps>) => {
    render(
      <UsersList
        hasNextPage={false}
        isFetchingNextPage={false}
        isLoading={false}
        onLoadMore={() => {}}
        searchTerm="lucas-mds"
        items={[]}
        {...props}
      />
    );
  };

  describe("When passing a list of users", () => {
    describe("When the list is not empty", () => {
      it("Should render all options", () => {
        renderUsersList({
          items,
        });

        expect(screen.getAllByTestId(/^user-card-/)).toHaveLength(items.length);
      });

      describe("When more results are available", () => {
        it("Should render the load more button", () => {
          renderUsersList({
            items,
            hasNextPage: true,
          });

          expect(screen.getByText("Load more")).toBeDefined();
        });

        it('Should call "onLoadMore" when clicking on the "Load more" button', () => {
          const onLoadMore = jest.fn();

          renderUsersList({
            items,
            hasNextPage: true,
            onLoadMore,
          });

          screen.getByText("Load more").click();

          expect(onLoadMore).toHaveBeenCalled();
        });
      });
    });

    describe("when the list is empty", () => {
      it("Should not render any user cards", () => {
        renderUsersList({
          items: [],
        });

        expect(screen.queryAllByTestId(/^user-card-/)).toHaveLength(0);
      });
    });
  });
});
