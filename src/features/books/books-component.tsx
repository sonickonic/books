import { BooksHeader } from './books-header';
import { BooksList } from './books-list-component';
import { useQuery } from '../../hooks/useQuery';
import { usePostBooksQuery } from './books-api';

export const Books = () => {
  const query = useQuery();
  const { data = { count: 0, books: [] }, isLoading } =
    usePostBooksQuery(query);

  return (
    <>
      <BooksHeader />
      <BooksList data={data} isLoading={isLoading} />
    </>
  );
};
