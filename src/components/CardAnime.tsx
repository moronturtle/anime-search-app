import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { AnimeItem } from "../types/AnimeRespondType";
import TimerIcon from "@mui/icons-material/Timer";
import StarIcon from "@mui/icons-material/Star";

type AnimeCardProps = {
  anime: AnimeItem;
  index: number;
  state: {
    query?: string;
    page?: number;
    limit?: number;
  };
};

const MotionCard = motion(Card);

const AnimeCard = ({ anime, index, state }: AnimeCardProps) => {
  return (
    <MotionCard
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.05 }}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
      elevation={4}
    >
      <Link to={`/anime/${anime.mal_id}`} state={state}>
        <CardMedia
          component="img"
          image={anime.images?.jpg?.image_url}
          alt={anime.title}
          sx={{
            aspectRatio: "2 / 3",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Link>

      <CardContent
        sx={{
          px: 1.5,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Tooltip title={anime.title}>
          <Typography variant="caption" fontWeight="bold" noWrap>
            {anime.title}
          </Typography>
        </Tooltip>
        <Box
          mt={1.5}
          display="flex"
          flexWrap="wrap"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ sm: "space-between" }}
          alignItems={{ xs: "center", sm: "initial" }}
          sx={{ fontSize: 12, color: "text.secondary" }}
        >
          {anime.score !== undefined && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarIcon sx={{ fontSize: 14, color: "#fbc02d" }} />
              <Typography variant="caption">{anime.score || "-"}</Typography>
            </Box>
          )}
          {anime.duration && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <TimerIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">{anime.duration}</Typography>
            </Box>
          )}
        </Box>
        <Box
          mt={1}
          display="flex"
          gap={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {anime.type && (
            <Chip label={anime.type} size="small" color="primary" />
          )}
          {anime.status && (
            <Chip label={anime.status} size="small" color="secondary" />
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default AnimeCard;
