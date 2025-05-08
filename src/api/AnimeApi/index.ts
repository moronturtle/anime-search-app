import type { AnimeDetailResponse, AnimeSearchResponse } from "../../types/AnimeRespondType";
import type { AnimeSearchParams } from "../../types/ParamSearchType";
import { useApi } from "../BaseApi";

export const useGetAnime = () => {
  const { call } = useApi();

  const fetchAnime = async (
    params: AnimeSearchParams = {}
  ): Promise<AnimeSearchResponse> => {
    const data = await call({
      method: "GET",
      subUrl: "/anime",
      data: params,
    });
    return data;
  };

  const fethAnimeById = async (
    id: string = ""
  ): Promise<AnimeDetailResponse> => {
    const data = await call({
      method: "GET",
      subUrl: `/anime/${id}`,
    });
    return data;
  };

  return { fetchAnime, fethAnimeById };
};
