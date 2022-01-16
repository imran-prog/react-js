import React from 'react'
import { useParams } from 'react-router-dom'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar.js'
import Actor from './Actor'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import noImage from '../images/no_image.jpg'

const Movie = () => {
    const { movieId } = useParams()

    const { state, loading, error } = useMovieFetch(movieId)
    console.log(state);

    if (loading) return <Spinner />
    if (error) return <div>Something Went Wrong...</div>
    
    return (
        <>
            <BreadCrumb movieTitle={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar 
                time={state.runtime} 
                budget={state.budget} 
                revenue={state.revenue} 
            />
            <Grid header='Actors'>
                {state.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : noImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie