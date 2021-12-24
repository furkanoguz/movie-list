import styled from "styled-components";
import { COLORS } from "../../commons/constants/Constants";

export const ButtonWrapper = styled.button`
  background-color: ${(prop) =>
    prop.className === "transparent" ? "transparent" : COLORS.netflixRed};
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: ${COLORS.white};
  font-weight: bold;
  cursor: pointer;
  transition: 500ms;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
`;
