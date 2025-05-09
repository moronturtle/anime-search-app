import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAnime } from "../api/AnimeApi";
import type { AnimeItem } from "../types/AnimeRespondType";
import { Button, Divider, Paper, Stack } from "@mui/material";

import AnimeHeader from "../components/AnimeDetail/AnimeHeader";
import AnimeContent from "../components/AnimeDetail/AnimeContent";
import AnimeSidebar from "../components/AnimeDetail/AnimeSidebar";
import AnimeSynopsis from "../components/AnimeDetail/AnimeSynopsis";
import AnimeSkeletonLoading from "../components/AnimeDetail/AnimeSkeletonLoading";

const DetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { fethAnimeById } = useGetAnime();
  const [anime, setAnime] = useState<AnimeItem>({} as AnimeItem);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const previousState = location.state as {
    query?: string;
    page?: number;
    limit?: number;
  };

  useEffect(() => {
    const getAnime = async () => {
      setIsLoading(true);
      try {
        const response = await fethAnimeById(id);
        setAnime(response?.data);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getAnime();
    }
  }, [id]);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{ mb: 2 }}
        onClick={() => navigate("/", { state: previousState })}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden", p: 3 }}>
        {isLoading ? (
          <AnimeSkeletonLoading />
        ) : (
          <>
            <Stack direction={{ xs: "column", sm: "row" }} gap={4}>
              <AnimeHeader anime={anime} />
              <AnimeContent anime={anime} />
            </Stack>

            <Divider sx={{ mb: 4, mt: 2 }} />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <AnimeSidebar anime={anime} />
              <AnimeSynopsis anime={anime} />
            </Stack>
          </>
        )}
      </Paper>
    </>
  );
};

export default DetailPage;
