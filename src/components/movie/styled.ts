import styled from "styled-components";
import { COLORS, DEVICE } from "../../commons/constants/Constants";

export const MovieWrapper = styled.article`
  background-color: ${COLORS.lightBlack};
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 5px rgb(6 6 6 / 79%);
  border-radius: 10px;
  overflow: hidden;
  max-height: 220px;
  @media ${DEVICE.mobileL} {
    max-height: 300px;
  }
`;

export const PosterWrapper = styled.div`
  flex: 2;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const MovieContentWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
`;

export const MovieTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: ${COLORS.dirtyWhite};
`;

export const MovieDescription = styled.p`
  font-size: 15px;
  margin-top: 10px;
  text-align: left;
  color: ${COLORS.gray};
  flex: 1;
`;

export const MovieReleaseDate = styled.span`
  font-size: 14px;
  color: ${COLORS.gray};
  margin-top: 5px;
`;

export const FavoriteWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;
