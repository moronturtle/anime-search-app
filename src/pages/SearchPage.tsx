import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetAnime } from "../api/AnimeApi";
import { useDebounce } from "../hooks/useDebounce";
import type {
  AnimeItem,
  Pagination as PaginationType,
} from "../types/AnimeRespondType";
import {
  Box,
  Grid,
  Skeleton,
  type PaginationProps,
  type SelectChangeEvent,
} from "@mui/material";
import type { AnimeSearchParams } from "../types/ParamSearchType";
import SearchField from "../components/SearchField";
import AnimeCard from "../components/CardAnime";
import CustomPagination from "../components/CustomPagination";

const SearchPage = () => {
  const location = useLocation();
  const prevState = location.state as {
    query?: string;
    page?: number;
    limit?: number;
  };

  const [query, setQuery] = useState<string>(prevState?.query || "");
  const [page, setPage] = useState<number>(prevState?.page || 1);
  const [limit, setLimit] = useState<number>(prevState?.limit || 10);
  const [dataPagination, setDataPagination] = useState<PaginationType | null>(
    null
  );
  const [animeList, setAnimeList] = useState<AnimeItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { fetchAnime } = useGetAnime();
  const debouncedQuery = useDebounce(query, 250);

  const handlePageChange: PaginationProps["onChange"] = (_, value) => {
    setPage(value);
  };

  const getAnime = useCallback(
    async (params: AnimeSearchParams) => {
      setIsLoading(true);
      try {
        const response = await fetchAnime(params);
        setAnimeList(response?.data);
        setDataPagination(response?.pagination);
      } finally {
        setIsLoading(false);
      }
    },
    [page, limit, debouncedQuery]
  );

  useEffect(() => {
    const params: AnimeSearchParams = {
      page,
      limit,
      ...(debouncedQuery.trim() && { q: debouncedQuery }),
    };
    getAnime(params);
  }, [debouncedQuery, page, limit]);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <SearchField
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          sx={{
            width: { xs: "100%", sm: "60%", md: "35%" },
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </Box>
      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: limit }).map((_, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
                <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Skeleton variant="rectangular" width="100%" height={260} />
                  <Skeleton width="80%" sx={{ mt: 1 }} />
                  <Skeleton width="60%" />
                </Box>
              </Grid>
            ))
          : animeList?.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
                <AnimeCard
                  anime={item}
                  index={index}
                  state={{ query, page, limit }}
                />
              </Grid>
            ))}
      </Grid>

      {dataPagination && (
        <CustomPagination
          page={page}
          limit={limit}
          total={dataPagination.items.total}
          pageCount={dataPagination.last_visible_page}
          onPageChange={handlePageChange}
          onLimitChange={(e: SelectChangeEvent) =>
            setLimit(parseInt(e.target.value))
          }
        />
      )}
    </>
  );
};

export default SearchPage;
