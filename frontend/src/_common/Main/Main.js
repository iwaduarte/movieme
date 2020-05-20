import React, {useCallback, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../../Home/Home";
import Watched from "../../Watched/Watched";
import Quiz from "../../Quiz/Quiz";
import moviesList from './Movies';
import usePagination from "../myHooks/usePagination";


const Main = props => {
    const [movies, setMovies] = useState(moviesList);
    const [paginatedMovies, nextMovies, prevMovies] = usePagination(moviesList, 10);
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
            {/*<Home rate={rate} movies={movies}/>*/}
            <div onClick={prevMovies}>Prev</div>
            <div onClick={nextMovies}> Next</div>
            <Home rate={rate} movies={paginatedMovies}/>
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