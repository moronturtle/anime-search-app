import { useState } from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import type { AnimeItem } from "../../types/AnimeRespondType";

const MAX_LENGTH = 300;

const AnimeSynopsis = ({ anime }: { anime: AnimeItem }) => {
  const [expanded, setExpanded] = useState(false);

  const synopsis = anime.synopsis || "";
  const isLong = synopsis.length > MAX_LENGTH;
  const displayedText =
    expanded || !isLong ? synopsis : `${synopsis.slice(0, MAX_LENGTH)}...`;

  return (
    <Box flex={2}>
      <Typography variant="subtitle1" fontWeight={800}>
        Synopsis
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" color="text.secondary">
        {displayedText}
      </Typography>
      {isLong && (
        <Button
          variant="text"
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ mt: 1 }}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </Box>
  );
};

export default AnimeSynopsis;
