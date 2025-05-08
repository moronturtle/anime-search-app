import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAnime } from "../api/AnimeApi";
import { useDebounce } from "../hooks/useDebounce";
import type {
  AnimeItem,
  Pagination as PaginationType,
} from "../types/AnimeRespondType";
import { Box, Grid, Pagination, type PaginationProps } from "@mui/material";
import { Typography } from "@mui/material";
import SearchField from "../components/SearchField";
import type { AnimeSearchParams } from "../types/ParamSearchType";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
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
    async (params: AnimeSearchParams = { page: 1 }) => {
      const response = await fetchAnime(params);
      setDataPagination(response?.pagination);
      setAnimeList(response?.data);
      setPage(response?.pagination?.current_page);
    },
    [page, debouncedQuery]
  );

  useEffect(() => {
    let param = { page };
    if (debouncedQuery.trim()) {
      getAnime({
        ...param,
        q: debouncedQuery,
      });
      return;
    }
    getAnime(param);
  }, [debouncedQuery, page]);

  useEffect(() => {
    getAnime();
  }, []);

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
        {animeList?.map((item) => (
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={item?.mal_id}>
            <Box width={"20%"}>
              <Link to={`/anime/${item?.mal_id}`}>
                <img src={item?.images?.jpg?.image_url} alt={item?.title} />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      {dataPagination && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={dataPagination?.last_visible_page}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default SearchPage;
