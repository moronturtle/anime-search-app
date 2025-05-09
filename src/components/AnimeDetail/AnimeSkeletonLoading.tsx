import { Box, Divider, Skeleton, Stack } from "@mui/material";

const AnimeSkeletonLoading = () => {
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} gap={4}>
        <Box flex={1}>
          <Skeleton variant="text" width="60%" height={40} />
          <Skeleton variant="text" width="40%" />
          <Skeleton
            variant="rectangular"
            width={200}
            height={300}
            sx={{ mt: 2 }}
          />
        </Box>
        <Box flex={2}>
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="85%" />
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
        <Box flex={1}>
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box flex={2}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
        </Box>
      </Stack>
    </>
  );
};

export default AnimeSkeletonLoading;
