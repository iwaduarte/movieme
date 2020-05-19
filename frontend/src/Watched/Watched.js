import React from 'react';
import styled from 'styled-components';
import MovieCard from "../Components/MovieCard/MovieCard";

const WatchedBox = styled.div`
display: flex;
flex-direction: column;
margin: 2%;
align-items: center;
font-family: Georgia;
font-size: 2rem;

`;
const WatchedSection = styled.div`
display: flex;
margin: 1vh;

`;
const Title = styled.div``;

const Watched = ({movies}) => <WatchedBox>
   { console.log(movies)}
    <Title> Liked (10): </Title>
    <WatchedSection name="Liked">
        {movies['liked'] && movies['liked'].length && movies['liked']
            .map((movie, index) => <MovieCard rated movie={movie} key={index} rate={() => console.log('remove')}/>)}
    </WatchedSection>
    <Title> Do not like (20):</Title>
    <WatchedSection name="Disliked">
        {movies['disliked'] && movies['disliked'].length && movies['disliked'].map((movie, index) => <MovieCard
            rated
            movie={movie} key={index}
            rate={() => console.log('remove')}/>)}
    </WatchedSection>
    <Title> No impressions (3):</Title>
    <WatchedSection name="No impressions">
        {movies['opinionless'] && movies['opinionless'].length && movies['opinionless'].map((movie, index) => <MovieCard
            rated
            movie={movie} key={index}
            rate={() => console.log('remove')}/>)}


    </WatchedSection>
</WatchedBox>;

export default Watched;