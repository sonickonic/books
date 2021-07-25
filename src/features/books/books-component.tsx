import React, { useEffect } from 'react';

import { useDispatch } from '../../store';
import { fetchBooks } from './books-slice';

import { BooksList } from './books-list-component';
import { useQuery } from '../../hooks/useQuery';

export const Books = () => {
  const dispatch = useDispatch();
  const query = useQuery();

  useEffect(() => {
    dispatch(fetchBooks(query));
  }, [query, dispatch]);

  return (
    <>
      <BooksList />
    </>
  );
};
