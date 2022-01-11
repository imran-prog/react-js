import React, { useState, useEffect } from 'react'

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'

// image
import noImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error } = useHomeFetch()
    console.log(state)

    return (
        <div>Home Page Works</div>
    )
}

export default Home
