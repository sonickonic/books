import React, { useState } from 'react';
import styled from 'styled-components';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import { useQuery } from '../../hooks/useQuery';

const InputBaseStyled = styled(InputBase)`
  border: 2px solid var(--orange);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  && {
    color: var(--orange);
  }
  margin-top: 1.5rem;
`;

const SearchIconOrange = styled(SearchIcon)`
  color: var(--orange);
`;

interface Props {
  onChange: (value: string) => void;
}

export const Search = ({ onChange }: Props) => {
  const { filters } = useQuery();
  const [value, setValue] = useState(filters[0]?.values[0]);

  return (
    <InputBaseStyled
      autoFocus
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
      value={value || ''}
      onChange={(e) => {
        const { value } = e.target;

        setValue(value);
        onChange(value);
      }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIconOrange />
        </InputAdornment>
      }
    />
  );
};
