import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit
{
  books: any;
  // bookId: any;

  constructor(private bookService: BooksService,
    private dataService: DataService,
    private route: Router) { }

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

  quickView(book: any)
  {
    this.dataService.sendBooks(book);
    this.route.navigateByUrl('quick-view');
  }
}
