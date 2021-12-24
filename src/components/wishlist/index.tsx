import React, { FC, memo } from "react";
import { IMovie } from "../../interfaces/movies";
import SimpleButton from "../button";
import Movie from "../movie";
import {
  CloseWrapper,
  HeaderTitle,
  TitleWrapper,
  WishlistContents,
  WishlistHeader,
  WishlistWrapper,
  WishlistContent,
  NoResult,
} from "./styled";

interface IWishlist {
  movies: IMovie[];
  onCloseClick: () => void;
  onRemoveMovie: (id: string) => void;
}

const Wishlist: FC<IWishlist> = ({ movies, onCloseClick, onRemoveMovie }) => {
  return (
    <WishlistWrapper>
      <WishlistHeader>
        <TitleWrapper>
          <HeaderTitle>Wishlist({movies.length})</HeaderTitle>
        </TitleWrapper>
        <CloseWrapper>
          <SimpleButton title="Close" onClick={onCloseClick} />
        </CloseWrapper>
      </WishlistHeader>

      <WishlistContents>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <WishlistContent key={index}>
              <Movie
                {...movie}
                onButtonClick={() => onRemoveMovie(movie.id)}
                buttonTitle="Remove"
                splitLength={80}
              />
            </WishlistContent>
          ))
        ) : (
          <NoResult>No Movies</NoResult>
        )}
      </WishlistContents>
    </WishlistWrapper>
  );
};

export default memo(Wishlist);
