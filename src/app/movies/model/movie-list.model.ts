import { Movie } from './movie.model';

export class MovieList {
  count: number;
  results: Movie[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => new Movie(elem)) || [];
  }
}
