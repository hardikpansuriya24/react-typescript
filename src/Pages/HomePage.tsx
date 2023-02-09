import React, { useState } from 'react';
import axios from 'axios';

export default function HomePage() {

    const [getNasaImage, setNasaImage ] = useState()

    axios.get("https://api.nasa.gov/planetary/apod?api_key=olcYdZ39i8sPqhc9XwsbLO9FxI230PZSBpeRSq4i").then(res => {
     setNasaImage(res.data.url);
    })

    return (
      <div>
        <img src={ getNasaImage }></img>
      </div>
    )
}