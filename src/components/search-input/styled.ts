import styled from "styled-components";
import { COLORS, DEVICE } from "../../commons/constants/Constants";

export const StyledInput = styled.input`
  background: ${COLORS.lightBlack};
  border: none;
  padding: 15px;
  color: white;
  font-size: 20px;
  width: 50%;
  border-radius: 30px;
  font-weight: bold;
  transition: 500ms;
  border: 1px solid ${COLORS.lightBlack};
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.netflixRed};
  }

  @media ${DEVICE.mobileL} {
    width: 90%;
    font-size: 14px;
  }
  @media ${DEVICE.tablet} {
    width: 90%;
  }
`;
