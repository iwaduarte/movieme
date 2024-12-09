import React from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import styled from "styled-components";

const MoviesBox = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const Home = ({ rate, movies }) => (
  <>
    <MoviesBox>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} rate={rate} />
      ))}
    </MoviesBox>
  </>
);

export default Home;
