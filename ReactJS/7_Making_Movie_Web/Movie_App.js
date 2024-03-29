import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        );

        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }


    useEffect(() => {
        getMovies();

    }, []);

    console.log(movies);
    return (
        <div>
            {loading ? <h1>loading</h1> : movies.map(movie =>
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} />
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((g) => (<li key={g}>{g}</li>)
                        )}

                        {/* map을 쓰려면 각 교유한 key가 있어야함! */}
                    </ul>
                </div>)}
        </div>
    )
}

export default App;