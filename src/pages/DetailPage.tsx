import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAnime } from "../api/AnimeApi";
import type { AnimeItem } from "../types/AnimeRespondType";
import { Box, Typography } from "@mui/material";

const DetailPage = () => {
  const { id } = useParams();
  const { fethAnimeById } = useGetAnime();
  const [anime, setAnime] = useState<AnimeItem>({} as AnimeItem);

  useEffect(() => {
    const getAnime = async () => {
        const response = await fethAnimeById(id);
        setAnime(response?.data);
      }
    if (id) {
        getAnime()
    }
  }, [id]);

  console.log('anime', anime);

  if (!anime) return <div>Loading...</div>;

  return (
    <Box>
      <Typography variant="h4">{anime.title}</Typography>
      <img src={anime?.images?.jpg?.image_url} alt={anime?.title} />
    </Box>
  );
};

export default DetailPage;
