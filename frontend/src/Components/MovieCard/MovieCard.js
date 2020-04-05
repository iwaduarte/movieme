import React from 'react';
import styled from 'styled-components'

const MovieCardBox = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;

border: 3px solid #000;
box-sizing: border-box;
margin: 2%;

`;

const MovieImage = styled.img`
display: inline-block;
align-self:center;
margin: 2vh 0;
width: calc(280px + 1vw);
`;

const MovieCard = () => <>
    <MovieCardBox>
        <MovieImage src="/guardians_img.jpg"/>
        <div>
            Name: Guardians of The Galaxy (2009)
        </div>
        <div>
            Description:
        </div>
        <div>
            IMDB Rating: 8

        </div>
        <div>
            My rate:
            <p>
                [Did not like]
            </p>
            <p>
                [I liked]
            </p>
            <p>
                [No feelings about it]
            </p>
        </div>

    </MovieCardBox>


</>;

export default MovieCard;