import React, {useCallback, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../../Home/Home";
import Watched from "../../Watched/Watched";
import Quiz from "../../Quiz/Quiz";

const moviesArr = [
    {
        id: 1,
        Title: 'Guardians of The Galaxy (2009)',
        Year: '2009',
        Genre: '',
        description: 'Bunch of criminals get together to save galaxy from another criminals',
        imdbRating: '8',
        Poster: '/guardians_img.jpg',
    },
    {
        id: 2,
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        id: 3,
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        id: 4,
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        id: 6,
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    },
    {
        id: 5,
        title: '',
        description: '',
        imdbRating: '',
        image: '',
    }
];

const Main = props => {
    const [movies, setMovies] = useState(moviesArr);
    const [moviesWatched, setMoviesWatched] = useState({});

    const rate = useCallback((rate, id) => {
        setMoviesWatched(prevWatched => {
            const movie = {...movies.find(el => el.id === id)};
            movie.rate = rate;
            const newPrevWatched = {...prevWatched};
            newPrevWatched[rate] = prevWatched[rate] && prevWatched[rate].length
                ? [...prevWatched[rate], movie]
                : [movie];

            return newPrevWatched;
        });
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));

        console.log(rate);
    }, [movies, moviesWatched, setMoviesWatched, setMovies]);

    return <Switch>
        <Route exact path="/">
            <Home rate={rate} movies={movies}/>
        </Route>
        <Route exact path="/watched">
            <Watched movies={moviesWatched}/>
        </Route>
        <Route exact path="/quiz">
            <Quiz/>
        </Route>
    </Switch>;
}
export default Main;