export interface BooksRequestParams {
  page: number;
  itemsPerPage: number;
  filters?: Filter[];
}

export interface Filter {
  type: string;
  values: string[];
}

export interface Book {
  id: number;
  book_author: string[];
  book_title: string;
  book_publication_year: number;
  book_publication_country: string;
  book_publication_city: string;
  book_pages: number;
}

export type BooksState = BooksResponse & { isLoading: boolean };

export interface BooksResponse {
  count: number;
  books: Book[];
}
