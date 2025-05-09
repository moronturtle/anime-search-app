import { Typography, Grid, Paper } from "@mui/material";
import type { AnimeItem } from "../../types/AnimeRespondType";

const StatCard = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) => (
  <Paper
    elevation={2}
    sx={{
      p: 2,
      borderRadius: 2,
      textAlign: "center",
      bgcolor: highlight ? "#fbc02d" : "background.paper",
      color: highlight ? "#000" : "text.primary",
      minHeight: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography
      variant="body2"
      fontWeight={700}
      gutterBottom
      fontSize={"0.75rem"}
    >
      {label}
    </Typography>
    <Typography variant={"body1"} fontWeight={800} fontSize={"1rem"}>
      {value}
    </Typography>
  </Paper>
);

const AnimeContent = ({ anime }: { anime: AnimeItem }) => {
  const shortRating = anime.rating?.split(" - ")[0] || "-";

  return (
    <Grid
      container
      spacing={2}
      flex={2}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
    >
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Rating" value={shortRating} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Ranked" value={`#${anime.rank}`} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Popularity" value={`#${anime.popularity}`} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Member" value={`#${anime.members}`} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Favorite" value={`#${anime.favorites}`} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Scored By" value={`#${anime.scored_by}`} />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <StatCard label="Score" value={anime.score} highlight />
      </Grid>
    </Grid>
  );
};

export default AnimeContent;
