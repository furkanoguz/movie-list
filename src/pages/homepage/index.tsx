import { FC, useCallback, useMemo, useState } from "react";
import { movies } from "../../commons/constants/movies";
import Header from "../../components/header";
import Movie from "../../components/movie";
import Pagination from "../../components/pagination";
import Wishlist from "../../components/wishlist";
import {
  ContentHeader,
  ContentWrapper,
  HomePageWrapper,
  TextWrapper,
  MoviesWrapper,
  MovieWrapper,
  PaginationWrapper,
  SearchWrapper,
} from "./styled";

import SearchInput from "../../components/search-input";

import Loader from "react-loader-spinner";
import { debounce } from "lodash";
// I added debounce. Because when users want to search, We shouldn't call API request every change.
// This is a performance improvement.
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { COLORS } from "../../commons/constants/Constants";
import { NoResult } from "../../components/wishlist/styled";

const Homepage: FC = () => {
  const LIST_COUNT = 12;

  const [loader, setLoader] = useState(false);
  const [wishlistVisible, setWishlistVisible] = useState(false);

  const [moviesList, setMoviesList] = useState(movies);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const [page, setPage] = useState(0);

  const pageCount = useMemo(
    () =>
      Math.ceil(
        moviesList.filter((a) => !favoriteIds.includes(a.id)).length / 12
      ),
    [favoriteIds]
  );

  const favoritedMovies = useMemo(() => {
    return moviesList.filter((a) => favoriteIds.includes(a.id));
  }, [favoriteIds]);

  const currentMovies = useMemo(
    () =>
      moviesList
        .slice(page * LIST_COUNT, page * LIST_COUNT + LIST_COUNT)
        .filter((a) => !favoriteIds.includes(a.id)),
    [page, favoriteIds]
  );

  const toggleWishlist = useCallback(() => {
    setWishlistVisible(!wishlistVisible);
  }, [wishlistVisible]);

  const addFavorite = (id: string) => {
    var newFavorites = [...favoriteIds];
    newFavorites.push(id);
    setFavoriteIds(newFavorites);
  };

  const removeFavorite = useCallback(
    (id: string) => {
      const newFavorites = favoriteIds.filter((i) => i !== id);
      setFavoriteIds(newFavorites);
    },
    [favoriteIds]
  );

  const changePage = (page: number) => {
    setLoader(true);
    setPage(page);
    setTimeout(() => setLoader(false), 400);
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      const searchedMovies = moviesList.filter((movie) =>
        movie.title.toLowerCase().includes(value.toString())
      );
      setMoviesList(searchedMovies);
      setLoader(false);
    }, 1000),
    []
  );

  const onSearch = async (searchText: string) => {
    setLoader(true);
    debouncedSearch(searchText);
  };

  return (
    <HomePageWrapper>
      <Header wishCount={favoriteIds.length} onButtonClick={toggleWishlist} />
      {wishlistVisible ? (
        <Wishlist
          movies={favoritedMovies}
          onCloseClick={toggleWishlist}
          onRemoveMovie={removeFavorite}
        />
      ) : null}

      <ContentWrapper>
        <ContentHeader>
          <SearchWrapper>
            <SearchInput
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </SearchWrapper>
          <PaginationWrapper>
            <Pagination
              pageCount={pageCount}
              onChangePage={changePage}
              activePage={page}
            />
          </PaginationWrapper>
        </ContentHeader>

        <MoviesWrapper>
          {!loader ? (
            currentMovies.map((movie, index) => (
              <MovieWrapper key={index}>
                <Movie
                  onButtonClick={() => addFavorite(movie.id)}
                  buttonTitle="Add To Favorite"
                  {...movie}
                />
              </MovieWrapper>
            ))
          ) : (
            <TextWrapper>
              <Loader
                type="Bars"
                color={COLORS.netflixRed}
                height={50}
                width={50}
              />
            </TextWrapper>
          )}
          {currentMovies.length === 0 ? (
            <TextWrapper>
              <NoResult>No Result.</NoResult>
            </TextWrapper>
          ) : null}
        </MoviesWrapper>
      </ContentWrapper>
    </HomePageWrapper>
  );
};

export default Homepage;
