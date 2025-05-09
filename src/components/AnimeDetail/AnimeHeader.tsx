import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import TimerIcon from "@mui/icons-material/Timer";
import DateRangeIcon from '@mui/icons-material/DateRange';
import type { AnimeItem } from "../../types/AnimeRespondType";

const AnimeHeader = ({ anime }: { anime: AnimeItem }) => (
  <Box display="flex" flexDirection="column" gap={1} pl={2} flex={1} pt={2} minWidth={0}>
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="h5">{anime?.title_english || anime?.title}</Typography>
    </Box>
    <Box display="flex" alignItems="center" flexWrap={"nowrap"} gap={1}>
      <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
      <Typography variant="subtitle2">{anime?.score}</Typography>
      <TimerIcon sx={{ ml: 1, fontSize: 18 }} />
      <Typography variant="subtitle2">{anime?.duration}</Typography>
      <DateRangeIcon sx={{ ml: 1, fontSize: 18 }} />
      <Typography variant="subtitle2">{anime?.year || "-"}</Typography>
    </Box>
  </Box>
);

export default AnimeHeader;
