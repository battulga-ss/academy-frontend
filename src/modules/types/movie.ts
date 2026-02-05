export interface IMovie {
  genre: [string];
  title: string;
  _id: string;
  poster: string;
  year: string;
  plot: string;
  imdb: {
    rating: string;
  };
  runtime: number;
}
export interface IComments {
  text: String;
}
