import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit
{

  book: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void
  {
    this.dataService.receiveAllBooks.subscribe((response: any) =>
    {
      console.log(response);
      this.book = response;
    })
  }

}
