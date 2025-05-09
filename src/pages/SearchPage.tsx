import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetAnime } from "../api/AnimeApi";
import { useDebounce } from "../hooks/useDebounce";
import type {
  AnimeItem,
  Pagination as PaginationType,
} from "../types/AnimeRespondType";
import {
  Box,
  MenuItem,
  Pagination,
  Select,
  type PaginationProps,
  type SelectChangeEvent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SearchField from "../components/SearchField";
import type { AnimeSearchParams } from "../types/ParamSearchType";

const LIMIT_PER_PAGE = [5, 10, 15, 25];

const SearchPage = () => {
  const location = useLocation();
  const prevState = location.state as {
    query?: string;
    page?: number;
    limit?: number;
  };

  const [query, setQuery] = useState<string>(prevState?.query || "");
  const [page, setPage] = useState<number>(prevState?.page || 1);
  const [limit, setLimit] = useState<number>(
    prevState?.limit || LIMIT_PER_PAGE[1]
  );
  const [dataPagination, setDataPagination] = useState<PaginationType | null>(
    null
  );
  const [animeList, setAnimeList] = useState<AnimeItem[]>([]);

  const { fetchAnime } = useGetAnime();
  const debouncedQuery = useDebounce(query, 250);

  const handlePageChange: PaginationProps["onChange"] = (_, value) => {
    setPage(value);
  };

  const getAnime = useCallback(
    async (params: AnimeSearchParams) => {
      const response = await fetchAnime(params);
      setAnimeList(response?.data);
      setDataPagination(response?.pagination);
      // setPage(response?.pagination?.current_page);
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
      <Typography variant="body2" component="h2" my={1}>
        Test
      </Typography>
      <SearchField
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={4}>
        {animeList?.map((item, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
            <Box width={"100%"}>
              <Link
                to={`/anime/${item?.mal_id}`}
                state={{
                  query,
                  page,
                  limit,
                }}
              >
                <img
                  src={item?.images?.jpg?.image_url}
                  alt={item?.title}
                  style={{
                    width: "100%",
                    aspectRatio: "2 / 3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>

      {dataPagination && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          flexWrap="wrap"
        >
          <Typography variant="body2" mb={1}>
            {`${(page - 1) * limit + 1}–${Math.min(
              page * limit,
              dataPagination.items.total
            )} of ${dataPagination.items.total}`}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            mt={4}
            gap={2}
            alignItems="center"
          >
            <Pagination
              count={dataPagination?.last_visible_page}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />

            {/* Dropdown Page Selector */}
            <Select
              size="small"
              value={limit.toString()}
              onChange={(e: SelectChangeEvent) =>
                setLimit(parseInt(e.target.value))
              }
            >
              {LIMIT_PER_PAGE.map((val, i) => (
                <MenuItem key={i} value={val.toString()}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SearchPage;
