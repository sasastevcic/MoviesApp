import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../service/movie.service';
import { Genre } from '../model/genre.model';
import { MovieList } from '../model/movie-list.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newMovie: Movie = new Movie();
  genres: Genre[];
  movies: MovieList;
  movie: Movie;
  movieForm: FormGroup;
  constructor(private ms: MovieService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.ms.getGenres().subscribe(data => this.genres = data);
    this.ms.getMovies().subscribe(data => this.movies = data);
    let id = +this.route.snapshot.params.id;
    this.ms.getMovie(id).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
      // this.movieForm.patchValue(this.movie);
      // this.movieForm = this.fb.group({
      //   'name': this.movie.name,
      //   'rating': this.movie.rating
      // });
    });
  }

  submit() {
    this.newMovie._id = this.movies.count + 1;
    this.ms.postMovie(this.newMovie).subscribe(data => window.alert('Added new movie'));
  }

}
