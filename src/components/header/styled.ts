import styled from "styled-components";
import { COLORS, DEVICE } from "../../commons/constants/Constants";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  background-color: ${COLORS.lightBlack};
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  padding: 20px;
  box-shadow: 1px 1px 7px rgb(0 0 0 / 40%);
`;

export const Logo = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const WishlistWrapper = styled.div`
  width: 200px;
  align-self: flex-start;
  flex: 1;
  margin-right: 30px;
`;

export const LogoWrapper = styled.div`
  flex: 5;
  text-align: left;
  @media ${DEVICE.mobileL} {
    flex: 1;
  }
`;
