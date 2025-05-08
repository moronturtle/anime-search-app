import { useApi } from "../BaseApi";

export const useGetAnime = () => {
  const { call } = useApi();

  const fetchAnime = async () => {
    const data = await call({
      method: "GET",
      subUrl: "/anime",
      data:{
        page:1
      }
    });
    return data;
  };

  return { fetchAnime };
};
