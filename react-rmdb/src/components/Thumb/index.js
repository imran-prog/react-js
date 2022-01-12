import React from 'react'

//Styles
import { Image } from'./Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-thumb' loading='lazy' />
    </div>
)

export default Thumb