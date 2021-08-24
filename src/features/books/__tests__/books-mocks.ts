import { rest } from 'msw';
import { BooksResponse } from '../types';

const defaultBooksResponse: BooksResponse = {
  books: [
    {
      id: 2066,
      book_author: ['Πολίτης, Ματθαίος'],
      book_title: 'Βίος Δημητρίου Βασιλέως Μοσχοβίας',
      book_publication_year: 1612,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 24,
    },
    {
      id: 2079,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title: 'Ο Αλέξανδρος ο Μακεδών',
      book_publication_year: 1617,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Οξφόρδη',
      book_pages: 12,
    },
    {
      id: 2080,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title:
        'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
      book_publication_year: 1617,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Οξφόρδη',
      book_pages: 16,
    },
    {
      id: 2076,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title:
        'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
      book_publication_year: 1618,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Οξφόρδη',
      book_pages: 16,
    },
    {
      id: 2069,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title:
        'Εγχειρίδιον περί της καταστάσεως των σήμερον ευρισκομένων Ελλήνων',
      book_publication_year: 1619,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Καίμπριτζ',
      book_pages: 70,
    },
    {
      id: 2075,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title: 'Enchiridion de institutis Graecorum',
      book_publication_year: 1619,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Καίμπριτζ',
      book_pages: 64,
    },
    {
      id: 2084,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title:
        'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
      book_publication_year: 1620,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Λονδίνο',
      book_pages: 18,
    },
    {
      id: 2090,
      book_author: ['Ανώνυμος'],
      book_title: 'Ο Αλέξανδρος ο Μακεδών',
      book_publication_year: 1620,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 126,
    },
    {
      id: 2083,
      book_author: ['Άγγελος, Χριστόφορος (†1638)'],
      book_title: 'Of the conditions of the life in which the Greekes now live',
      book_publication_year: 1625,
      book_publication_country: 'Αγγλία',
      book_publication_city: 'Λονδίνο',
      book_pages: 10,
    },
    {
      id: 2091,
      book_author: ['Ανώνυμος'],
      book_title: 'Ο Αλέξανδρος ο Μακεδών',
      book_publication_year: 1620,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 126,
    },
  ],
  count: 11,
};

const secondPageResponse: BooksResponse = {
  books: [
    {
      id: 2092,
      book_author: ['Ανώνυμος'],
      book_title: 'Πόνησις Χριστοφόρου του Αγγέλου Έλληνος',
      book_publication_year: 1630,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 126,
    },
  ],
  count: 11,
};

const filterResponse: BooksResponse = {
  books: [
    {
      id: 2090,
      book_author: ['Ανώνυμος'],
      book_title: 'Ο Αλέξανδρος ο Μακεδών',
      book_publication_year: 1620,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 126,
    },
    {
      id: 2091,
      book_author: ['Ανώνυμος'],
      book_title: 'Ο Αλέξανδρος ο Μακεδών',
      book_publication_year: 1630,
      book_publication_country: 'Ιταλία',
      book_publication_city: 'Βενετία',
      book_pages: 126,
    },
  ],
  count: 2,
};

const allBooksResponse = {
  ...defaultBooksResponse,
  books: [...defaultBooksResponse.books, ...secondPageResponse.books],
};

export const booksHandlers = [
  rest.post('http://nyx.vima.ekt.gr:3000/api/books', (req, res, ctx) => {
    const { page, itemsPerPage, filters } = req.body as any;

    if (page === 2) {
      return res(ctx.status(200), ctx.json(secondPageResponse));
    }

    if (itemsPerPage === 25) {
      return res(ctx.status(200), ctx.json(allBooksResponse));
    }

    if (filters?.[0]?.values[0] === 'Ο Αλέξανδρος ο Μακεδών') {
      return res(ctx.status(200), ctx.json(filterResponse));
    }

    return res(ctx.status(200), ctx.json(defaultBooksResponse));
  }),
];
