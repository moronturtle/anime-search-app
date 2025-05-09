import { Box, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { AnimeItem } from "../../types/AnimeRespondType";

const AnimeSidebar = ({ anime }: { anime: AnimeItem }) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
    <Box flex={1} pl={4}>
      <CardMedia
        component="img"
        image={anime?.images?.jpg?.image_url}
        alt={anime.title}
        sx={{ width: 220, height: 300, objectFit: "cover" }}
      />
    </Box>
    <Box flex={1} display="flex" flexDirection="column" gap={1}>
      <Box>
        <Typography variant="subtitle1" fontWeight={800}>
          Genre
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mb={2}>
          {anime?.genres?.map((genre) => (
            <Chip key={genre.mal_id} label={genre.name} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={800}>
          Episode
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          {anime?.episodes}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={800}>
          Type
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          {anime?.type}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={800}>
          Source
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          {anime?.source}
        </Typography>
      </Box>
    </Box>
  </Stack>
);

export default AnimeSidebar;
