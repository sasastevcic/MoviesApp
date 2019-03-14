import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter();
  lastPage: number;

  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  ngOnChanges() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  updatePage(pageChange) {
    this.currentPage = pageChange;
    this.pageChange.emit({page: pageChange});
  }
}
