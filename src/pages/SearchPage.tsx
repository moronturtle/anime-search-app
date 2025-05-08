import React, { useEffect, useState } from 'react'
import {  useGetAnime } from '../api/AnimeApi';

const SearchPage = () => {
    const [animeData, setAnimeData] = useState(null);
    const { fetchAnime } = useGetAnime();

    useEffect(()=>{
        const getAnime = async ()=>{
            const data = await fetchAnime();
            setAnimeData(data);
        };

        getAnime();
    },[])

    console.log(animeData);

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage