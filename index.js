import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from 'search_bar';
import videoDetails from 'video_details'

const API_KEY = 'AIzaSyDFQUmWPrFolSelYq0ekwZUYWMaM9Ovtjo';

const App = () => {
    return ( 
        <searchBar />
    </div>
    );
}

React.render(<App/>, document.querySelector('.container'));