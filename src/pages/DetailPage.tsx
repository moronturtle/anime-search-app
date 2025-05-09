import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAnime } from "../api/AnimeApi";
import type { AnimeItem } from "../types/AnimeRespondType";
import { Box, Button, Typography } from "@mui/material";

const DetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const previousState = location.state as {
    query?: string;
    page?: number;
    limit?: number;
  };

  const { fethAnimeById } = useGetAnime();
  const [anime, setAnime] = useState<AnimeItem>({} as AnimeItem);

  useEffect(() => {
    const getAnime = async () => {
      const response = await fethAnimeById(id);
      setAnime(response?.data);
    };
    if (id) {
      getAnime();
    }
  }, [id]);


  if (!anime) return <div>Loading...</div>;

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      gap={2}
      alignItems="flex-start"
    >
      <Button
        variant="contained"
        onClick={() =>
          navigate("/", {
            state: previousState,
          })
        }
      >
        Back
      </Button>
      <Box>
        <Typography variant="h4">{anime.title}</Typography>
        <img src={anime?.images?.jpg?.image_url} alt={anime?.title} />
      </Box>
    </Box>
  );
};

export default DetailPage;
