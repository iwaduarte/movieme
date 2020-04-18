import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './_common/Header/Header';
import Main from './_common/Main/Main';
import Footer from './_common/Footer/Footer';


const App = () => <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
</BrowserRouter>;

export default App;
