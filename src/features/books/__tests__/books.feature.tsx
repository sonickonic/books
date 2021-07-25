import {
  screen,
  waitForElementToBeRemoved,
  within,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { server, renderRoot } from '../../../setupTests';

import { Books } from '../books-component';
import { booksHandlers } from './books-mocks';

describe('Books', () => {
  beforeEach(() => server.use(...booksHandlers));
  afterEach(cleanup);

  it('can render default page', async () => {
    renderRoot(<Books />);

    // Wait for initial page load
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    // Renders 10 books by default
    await screen.findByText('1-10 of 11');
    const { getAllByRole } = within(screen.getByRole('list'));
    expect(getAllByRole('listitem')).toHaveLength(10);
  });

  it('can navigate to second page', async () => {
    renderRoot(<Books />);

    // Wait for initial page load
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    userEvent.click(screen.getByTitle('Next page'));

    // Renders second page with 1 book
    await screen.findByText('11-11 of 11');
    await screen.findByText('Πόνησις Χριστοφόρου του Αγγέλου Έλληνος');
    const { getAllByRole } = within(screen.getByRole('list'));
    expect(getAllByRole('listitem')).toHaveLength(1);
  });

  it('can change number of rows per page', async () => {
    renderRoot(<Books />);

    // Wait for initial page load
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    userEvent.selectOptions(screen.getByLabelText('rows per page'), ['25']);

    // Renders all 11 books
    await screen.findByText('1-11 of 11');
    await screen.findByText('Πόνησις Χριστοφόρου του Αγγέλου Έλληνος');
    expect(screen.getAllByRole('listitem')).toHaveLength(11);
  });

  it('can filter books', async () => {
    renderRoot(<Books />);

    // Wait for initial page loads
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const searchInput = screen.getByLabelText('search');
    userEvent.type(searchInput, 'Ο Αλέξανδρος ο Μακεδών');
    expect(searchInput).toHaveValue('Ο Αλέξανδρος ο Μακεδών');

    // Renders books matching the search query
    await screen.findByText('1-2 of 2');
    expect(await screen.findAllByText('Ο Αλέξανδρος ο Μακεδών')).toHaveLength(
      2
    );
  });
});
