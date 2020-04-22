import React, {useCallback, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../../Home/Home";
import Watched from "../../Watched/Watched";
import Quiz from "../../Quiz/Quiz";

const moviesArr = [
    {
        Title: 'Guardians of The Galaxy (2009)',
        Year: '2009',
        Genre: '',
        description: 'Bunch of criminals get together to save galaxy from another criminals',
        imdbRating: '8',
        Poster: '/guardians_img.jpg',
    },
    {
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    }
];


const Main = props => {
    const [movies, setMovies] = useState(moviesArr);
    const [moviesWatched, setMoviesWatched] = useState([]);

    const rate = useCallback((rate) => {
        if (rate === 'liked')


            console.log('liked');
        else if (rate === 'disliked')
            console.log('disliked');
        else console.log('neutral');
    },[]);

    return <Switch>
        <Route exact path="/">
            <Home rate={rate} movies={movies} />
        </Route>
        <Route exact path="/watched">
            <Watched/>
        </Route>
        <Route exact path="/quiz">
            <Quiz/>
        </Route>
    </Switch>;
}
export default Main;