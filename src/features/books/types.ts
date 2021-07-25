export interface BooksRequestParams {
  page: number;
  itemsPerPage: number;
  filters?: Filter[];
}

export interface Filter {
  type: string;
  values: string[];
}
