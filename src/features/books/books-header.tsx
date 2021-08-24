import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

import { Typography } from '@material-ui/core';
import { Search } from '../../components/search/search-component';
import { useQuery } from '../../hooks/useQuery';

const HeaderStyled = styled.header`
  background-color: var(--green);
  text-align: center;
  padding: 3rem 1rem 6rem;
  color: var(--white);
`;

export const BooksHeader = () => {
  const { itemsPerPage } = useQuery();
  const history = useHistory();

  const onChange = useDebouncedCallback((value: string) => {
    history.push(
      `?page=${1}&itemsPerPage=${itemsPerPage}${value ? `&q=${value}` : ''}`
    );
  }, 250);

  return (
    <HeaderStyled>
      <Typography variant="h1">Books</Typography>
      <Search onChange={onChange} />
    </HeaderStyled>
  );
};
