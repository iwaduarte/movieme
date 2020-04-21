import React from 'react';
import styled from 'styled-components';

const WatchedBox = styled.div`
display: flex;
flex-direction: column;
margin: 2%;
align-items: center;

`;
const WatchedSection = styled.div`
display: flex;
margin: 1vh;
font-family: Georgia;
font-size: 2rem;
`;

const Watched = props => <WatchedBox>
    <WatchedSection name="Liked">
        Liked (10):
    </WatchedSection>
    <WatchedSection name="Disliked">
        Do not like (20):
    </WatchedSection>
    <WatchedSection name="No impressions">
        No impressions (3):
    </WatchedSection>
</WatchedBox>;

export default Watched;