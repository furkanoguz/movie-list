import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./styled";

interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<ISearchInput> = (props) => {
  return <StyledInput {...props} />;
};

export default SearchInput;
