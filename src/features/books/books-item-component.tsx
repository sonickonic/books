import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { Box, CardContent, Typography } from '@material-ui/core';

import { Book } from './types';

const CardStyled = styled(Card)`
  margin-bottom: 1.5rem;
  max-width: 60rem;
  && {
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 15%);
  }
`;

const BoxStyled = styled(Box)`
  display: inline-block;
  margin: 2px;
`;

const Text = styled(Typography)`
  opacity: 0.7;
`;

const Title = styled(Typography)`
  && {
    font-size: 1.75rem;
    margin: 1rem 0 0.5rem;
  }
`;

interface AuthorListProps {
  authors: string[];
}

export const AuthorList = ({ authors }: AuthorListProps) => {
  if (!authors.length) return <Text variant="body1">Unknown author</Text>;

  return (
    <>
      {authors.map((author) => (
        <Text key={author} variant="h6">
          {author}
        </Text>
      ))}
    </>
  );
};

interface BookItemProps {
  book: Book;
}

export const UnMemoizedBookItem = ({ book }: BookItemProps) => {
  const {
    book_publication_city,
    book_publication_country,
    book_publication_year,
    book_title,
    book_author,
    book_pages,
  } = book;

  const publishedAt = () => {
    const hasPublication = book_publication_city && book_publication_country;

    return hasPublication
      ? `${book_publication_city}, ${book_publication_country}`
      : 'Unknown place of publication';
  };

  return (
    <CardStyled component="li">
      <CardContent>
        <Text>
          {publishedAt()}
          <BoxStyled component="span">•</BoxStyled>
          {book_publication_year}
        </Text>

        <Title variant="h5">{book_title}</Title>

        <AuthorList authors={book_author} />

        <Text variant="body2">{book_pages} Pages</Text>
      </CardContent>
    </CardStyled>
  );
};

export const BookItem = memo(UnMemoizedBookItem);
