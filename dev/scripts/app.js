import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{

	constructor(){
		super();
		this.state = {
			isLoaded: false,
			movies: []
		};
		
	}

	componentDidMount(){
		const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=65bc1ae6979d7f748ed6631502f33f92&language=en-US&page=1&primary_release_date.gte=2018-12-31&primary_release_date.lte=2019-02-19'
		fetch(URL)
		.then(res => res.json())
		.then(
			(result) =>{
				console.log(result);
				this.setState({isLoaded: true, movies: result.results})
				console.log(this.state.movies)
			});
	}

	render(){
		const currentState = this.state;
		let isLoaded = currentState;

		if(!isLoaded){
				return <div className='contentLoading'>Loading ...</div>;
		}else{
			
			return(
				<React.Fragment>
				<div className='App'>
						{currentState.movies.map(function(movieDtls, index) {
							return( 
									<div className='card' key={index}>
									 	<div className='card-image waves-effect waves-block waves-light'>
											<img className='activator' src={'https://image.tmdb.org/t/p/w300/' + movieDtls.poster_path} alt={movieDtls.title} onError={i => i.target.style.display='none'}  />
										</div>
										<div className='card-content'>
											<span className='card-title activator'>{movieDtls.title}</span>
										</div>
										<div className='card-reveal'>
											<h1 className='card-title card-subTitle'>
												Synopsis <span className='right'>X</span>
											</h1>
											<p>{movieDtls.overview}</p>
											
											<div>
												<img src='/public/img/movie_icon.png' alt='movies' />
											</div>
										</div>
									</div>
								)}

							)}

				</div>
				</React.Fragment>
			);
		}

	}



}

ReactDOM.render(<App />, document.getElementById('app'));