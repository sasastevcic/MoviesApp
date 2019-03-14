import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';
import { MovieList } from './model/movie-list.model';

@Component({
  selector: 'mm-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MovieList;
  sortCrit;

  parameters = {
    page: 1,
    'pageSize': 6,
    'sort': '',
    'sortDirection': 'asc'
  }
  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.updateParams();
  }

  changeDir() {
    if(this.parameters.sortDirection == 'desc'){
      this.parameters.sortDirection = 'asc';
    }else{
      this.parameters.sortDirection = 'desc';
    }
    this.ms.getMovies(this.parameters).subscribe(data => this.movies = data);
  }


  updateParams(params?: any) {
    if(params) {
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
      this.parameters.page = params.page || this.parameters.page;
    }
    this.ms.getMovies(this.parameters).subscribe(data => this.movies = data);
  }

  sortBy() {
    this.parameters.sort = this.sortCrit;
    this.ms.getMovies(this.parameters).subscribe(data => this.movies = data);
  }

}
