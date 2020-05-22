import React from 'react';
import styled from 'styled-components'

const MovieCardBox = styled.div`
font-family: Georgia;
display: inline-flex;
flex-direction: column;
// justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
// border: 1px solid #ffc83d;
// border-radius: 5%;
box-shadow: 0px 3px 20px gray;
font-size: 16px;
margin: calc(5px + 0.5vw);
width: calc(170px + 1vw);
`;
const MovieImage = styled.img`
display: inline-block;
align-self:center;
width: 100%;
`;
const Rates = styled.div`
display: flex;
justify-content: space-around;
align-content: flex-end;

`;
const Span = styled.span`
display: inline-block;
`;
const AnimatedSpan = styled(Span)`
&:hover {
transform: scale(1.5) translateY(-2px);
}
`;
const Rate = styled.div`
border-top: 1px solid #ffc83d;
border-right: 1px solid #ffc83d;
text-align: center;
cursor: pointer;
padding: 1vh;
flex-grow: 1;
background-color: #fbfbfb;
&.last-rate {
 border-right: none;
}

`;
const Info = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
margin: 4% 4%;
min-height: calc(100px + 1vh);
`;
const Text = styled.div`
display: flex;
flex-wrap: wrap;
margin: 2% 0;
align-items: flex-end;

`;
const remove = () => {

};

const MovieCard = ({rate, movie, rated}) => <>
    <MovieCardBox>
        <MovieImage src={movie.image || "/guardians_img.jpg"}/>
        <Info>
            <Text> <b>Title:</b> <Span>{movie.title}</Span> </Text>
            <Text> <b>Description:</b>{movie.description} </Text>
            <Text> <b>IMDB Rating:</b>
                <Span role="img" aria-label="star-emoji" title="Rating">⭐ </Span>
                {movie.imDbRating}
            </Text>
            <Text>Rank: {movie.rank}</Text>
        </Info>
        <Rates>
            {!rated
                ?
                <>
                    <Rate>
                        <AnimatedSpan onClick={() => rate('liked', movie.id)} role="img" aria-label="like-emoji"
                                      title="I liked"> 👍 </AnimatedSpan>
                    </Rate>
                    <Rate>
                        <AnimatedSpan onClick={() => rate('opinionless', movie.id)} role="img" aria-label="like-emoji"
                                      title="No feelings about it"> 😐 </AnimatedSpan>
                    </Rate>
                    <Rate className="last-rate">
                        <AnimatedSpan onClick={() => rate('disliked', movie.id)} role="img" aria-label="like-emoji"
                                      title="Did not like"> 👎 </AnimatedSpan>
                    </Rate>
                </>
                : <Rate>
                    <AnimatedSpan onClick={() => remove('opinionless', movie.id)} role="img" aria-label="like-emoji"
                                  title="Remove"> ❌ </AnimatedSpan>
                </Rate>
            }
        </Rates>

    </MovieCardBox>
</>;

export default MovieCard;