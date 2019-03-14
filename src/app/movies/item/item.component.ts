import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'mm-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() movies: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
