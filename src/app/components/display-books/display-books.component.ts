import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit
{
  books: any;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void
  {
    this.displayBooks();
  }

  displayBooks()
  {
    this.bookService.getBooks('Books').subscribe((response: any) =>
    {
      console.log(response);
      this.books = response.data;
      console.log(this.books);
    })
  }
}
