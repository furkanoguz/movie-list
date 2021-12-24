import { differenceInDays, fromUnixTime } from "date-fns";
import React, { FC, memo } from "react";
import { IMovie } from "../../interfaces/movies";
import SimpleButton from "../button";
import {
  MoviePoster,
  MovieWrapper,
  PosterWrapper,
  MovieContentWrapper,
  MovieTitle,
  MovieDescription,
  MovieReleaseDate,
  FavoriteWrapper,
} from "./styled";

interface IMovieComponent extends IMovie {
  onButtonClick: () => void;
  buttonTitle: string;
  splitLength?: number;
}

const Movie: FC<IMovieComponent> = ({
  id,
  title,
  poster,
  overview,
  release_date,
  onButtonClick,
  buttonTitle,
  splitLength = 100,
}) => {
  return (
    <MovieWrapper>
      <PosterWrapper>
        <MoviePoster src={poster} />
      </PosterWrapper>
      <MovieContentWrapper>
        <MovieTitle>{title}</MovieTitle>

        <MovieReleaseDate>
          {differenceInDays(new Date(), fromUnixTime(release_date))} days ago
        </MovieReleaseDate>

        <MovieDescription>
          {overview.length > splitLength
            ? overview.substring(0, splitLength) + "..."
            : overview}
        </MovieDescription>

        <FavoriteWrapper>
          <SimpleButton title={buttonTitle} onClick={onButtonClick} />
        </FavoriteWrapper>
      </MovieContentWrapper>
    </MovieWrapper>
  );
};

export default memo(Movie);
