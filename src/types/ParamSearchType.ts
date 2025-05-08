export interface AnimeSearchParams {
    unapproved?: boolean;
    page?: number;
    limit?: number;
    q?: string;
    type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | 'cm' | 'pv' | 'tv_special';
    score?: number;
    min_score?: number;
    max_score?: number;
    status?: 'airing' | 'complete' | 'upcoming';
    rating?: 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?: 'mal_id' | 'title' | 'start_date' | 'end_date' | 'episodes' | 'score' | 'scored_by' | 'rank' | 'popularity' | 'members' | 'favorites';
    sort?: 'desc' | 'asc';
    letter?: string;
    producers?: string;
    start_date?: string;
    end_date?: string;
  }
  