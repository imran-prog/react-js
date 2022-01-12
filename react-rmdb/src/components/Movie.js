import React from 'react'
import { useParams } from 'react-router-dom'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import noImage from '../images/no_image.jpg'

const Movie = () => {
    const { movieId } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieId)

    if (loading) return <Spinner />
    if (error) return <div>Something Went Wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
        </>
    )
}

export default Movie