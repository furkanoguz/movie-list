import styled from "styled-components";
import { COLORS, DEVICE } from "../../commons/constants/Constants";

export const HomePageWrapper = styled.div`
  background-color: ${COLORS.netflixBlack};
  width: "100%";
  height: 100vh;
`;

export const MoviesWrapper = styled.div`
  padding: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  float: left;
  background: ${COLORS.netflixBlack};
  width: 100%;
  @media ${DEVICE.mobileL} {
    padding: 10px;
  }
`;

export const MovieWrapper = styled.div`
  width: 31%;
  padding: 15px;

  @media ${DEVICE.laptopL} {
    width: 46%;
    padding: 10px;
  }
  @media ${DEVICE.tablet} {
    width: 93%;
    padding: 0;
    margin-top: 15px;
  }
`;

export const ContentWrapper = styled.section`
  margin-top: 100px;
  float: left;
  min-width: 100%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  margin-top: 20px;
`;

export const SearchWrapper = styled.div`
  flex: 1;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 35px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;
