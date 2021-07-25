import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import List from '@material-ui/core/List';

import { useSelector } from '../../store';
import { selectBooks, selectCount } from './books-slice';
import { BookItem } from './books-item-component';
import { default as Pagination } from '@material-ui/core/TablePagination';
import { useQuery } from '../../hooks/useQuery';

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light);
  padding: 3rem 1rem;
`;

export const BooksList = () => {
  const { page, itemsPerPage, filters } = useQuery();
  const history = useHistory();
  const books = useSelector(selectBooks);
  const count = useSelector(selectCount);

  const handlePageChange = (newPage: number, newItemsPerPage: number) =>
    history.push(
      `?page=${newPage}&itemsPerPage=${newItemsPerPage}${
        filters.length ? `&q=${filters[0].values}` : ''
      }`
    );

  return (
    <>
      <MainStyled>
        <List>
          {books.map((book) => (
            <BookItem key={book.id.toString()} book={book} />
          ))}
        </List>

        <Pagination
          component="div"
          count={count}
          page={page - 1}
          onPageChange={(e, newPage) =>
            handlePageChange(newPage + 1, itemsPerPage)
          }
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(e) =>
            handlePageChange(page, parseInt(e.target.value, 10))
          }
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
        />
      </MainStyled>
    </>
  );
};
