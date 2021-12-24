import styled from "styled-components";
import { COLORS, DEVICE } from "../../commons/constants/Constants";

export const WishlistWrapper = styled.div`
  height: 100vh;
  position: fixed;
  width: 30%;
  background-color: ${COLORS.netflixBlack};
  box-shadow: -4px 1px 7px rgb(0 0 0 / 40%);
  right: 0;

  @media ${DEVICE.mobileL} {
    width: 100%;
  }
`;

export const WishlistHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

export const CloseWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

export const TitleWrapper = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h4`
  color: ${COLORS.white};
  text-align: left;
  font-size: 20px;
`;

export const WishlistContents = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;

export const WishlistContent = styled.div`
  padding: 10px;
`;

export const NoResult = styled.span`
  color: ${COLORS.dirtyWhite};
`;
