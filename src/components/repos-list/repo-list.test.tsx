import { render, screen } from "@testing-library/react";
import ReposList, { ReposListProps } from "./repos-list";
import { repos } from "./repo-list-mock-data";

describe("<ReposList />", () => {
  const renderReposList = (props: Partial<ReposListProps>) => {
    return render(
      <ReposList
        repos={[]}
        isLoading={false}
        hasNextPage={false}
        onClick={jest.fn}
        {...props}
      />
    );
  };

  describe("When passing a list of users", () => {
    describe("When the list is empty", () => {
      it("Should not render the list of repositories", () => {
        renderReposList({});

        expect(screen.queryAllByTestId(/^repo-line-item-/)).toHaveLength(0);
      });

      it("Should render a message saying that no repositories were found", () => {
        renderReposList({});

        expect(screen.getByText("No repositories found")).toBeDefined();
      });
    });

    describe("When the list is not empty", () => {
      it("Should render the list of repositories", () => {
        renderReposList({ repos });

        expect(screen.queryAllByTestId(/^repo-line-item-/)).toHaveLength(2);
      });

      describe("When more results are available", () => {
        it("Should render the load more button", () => {
          renderReposList({
            repos,
            hasNextPage: true,
          });

          expect(screen.getByText("Load more")).toBeDefined();
        });

        it("Should call onClick when clicking on the Load more button", () => {
          const onClick = jest.fn();

          renderReposList({
            repos,
            hasNextPage: true,
            onClick,
          });

          const loadMoreButton = screen.getByText("Load more");

          loadMoreButton.click();

          expect(onClick).toHaveBeenCalled();
        });
      });
    });
  });
});
