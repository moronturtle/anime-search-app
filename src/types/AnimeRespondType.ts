export interface AnimeImageFormat {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }
  
  export interface AnimeTitle {
    type: string;
    title: string;
  }
  
  export interface AiredDate {
    day: number;
    month: number;
    year: number;
  }
  
  export interface Aired {
    from: string;
    to: string;
    prop: {
      from: AiredDate;
      to: AiredDate;
      string: string;
    };
  }
  
  export interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  export interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
  }
  
  export interface Broadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
  }
  
  export interface AnimeItem {
    mal_id: number;
    url: string;
    images: {
      jpg: AnimeImageFormat;
      webp: AnimeImageFormat;
    };
    trailer: Trailer;
    approved: boolean;
    titles: AnimeTitle[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: Broadcast;
    producers: Producer[];
    licensors: Producer[];
    studios: Producer[];
    genres: Producer[];
    explicit_genres: Producer[];
    themes: Producer[];
    demographics: Producer[];
  }
  
  export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  }
  
  export interface AnimeSearchResponse {
    data: AnimeItem[];
    pagination: Pagination;
  }

  export interface AnimeDetailResponse {
    data: AnimeItem;
  }
  