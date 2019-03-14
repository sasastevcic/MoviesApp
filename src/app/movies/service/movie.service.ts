import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '../model/movie-list.model';
import { Genre } from '../model/genre.model';
import { readElementValue } from '@angular/core/src/render3/util';
import { Movie } from '../model/movie.model';

const baseUrl = 'http://localhost:3000/api/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(params?): Observable<MovieList> {
    let queryParams = {};
    if(params) {
      queryParams = { params: new HttpParams()
        .set('page', params.page && params.page.toString() || '')
        .set('pageSize', params.pageSize && params.pageSize.toString() || '')
        .set('sort', params.sort && params.sort.toString() || '')
        .set('sortDirection', params.sortDirection && params.sortDirection.toString() || '')
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(map(response => new MovieList(response)));
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get(baseUrl + '/' + id).pipe(map(response => new Movie(response)));
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Array<Genre>>('http://localhost:3000/api/genres').pipe(map(response => {
      let retVal = new Array<Genre>();
      response.forEach(elem => retVal.push(new Genre(elem)));
      return retVal;
    }));
  }

  postMovie(movie: Movie) {
    return this.http.post('http://localhost:3000/api/movie', movie).pipe(map(response => new Movie(response)));
  }
}
