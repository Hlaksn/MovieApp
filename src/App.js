import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './Components/MovieListHeading';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async()=>{
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
    const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue}
        setSearchValue={setSearchValue}/>
			</div>

      <div className='row'>
        <MovieList movies={movies}/>
      </div>
		</div>
	);
};

export default App;