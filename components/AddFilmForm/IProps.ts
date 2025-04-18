import { Dayjs } from "dayjs";

export interface ILanguage {
  name: string;
  shortening: string;
}

export interface IInitialValues {
  id: null | string;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: null | number;
  release_date: null | Dayjs;
  title: string;
  video: boolean;
  vote: null | number;
  file: null | File;
}
