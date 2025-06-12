import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';

class Main extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // axios.get으로 데이터를 불러오면 로딩 시간이 느리기 때문에 
  // 비동기방식 async, await을 사용한다.
  getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');

      this.setState({ movies, isLoading: false });

    } catch (error) {
      console.error("Error fetching movies:", error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getMovies(); // 
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <main>
        {isLoading ? (
          <img
            src={`${process.env.PUBLIC_URL}/images/bx_loader.jpg`}
            className="loading"
            alt="loading"
          />
        ) : (
          <section>
            <ul className='movie_list'>
            {movies.map((movie)=>
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                runtime={movie.runtime}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                rating={movie.rating}
              />
            )}
            </ul>
          </section>
        )}
      </main>
    );
  }
}

export default Main;
