import React, { FC } from "react";
import SimpleButton from "../button";
import { Page, PaginationWrapper } from "./styled";

interface IPagination {
  pageCount: number;
  onChangePage: (page: number) => void;
  activePage: number;
}

const Pagination: FC<IPagination> = ({
  pageCount,
  onChangePage,
  activePage,
}) => {
  return (
    <PaginationWrapper>
      {Array.from(Array(pageCount).keys()).map((page) => (
        <Page key={page}>
          <SimpleButton
            title={(page + 1).toString()}
            onClick={() => onChangePage(page)}
            isTransparent={page !== activePage}
          />
        </Page>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
