import React, { Fragment } from 'react'
import Searchbar from '../giphy/Searchbar';
import GiphyContainer from '../giphy/GiphyContainer';

const Home = () => {
    return (
        <Fragment>
            <Searchbar />
			<GiphyContainer /> 
        </Fragment>
    )
}

export default Home
