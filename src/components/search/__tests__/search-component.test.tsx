import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRoot } from '../../../setupTests';

import { Search } from '../search-component';

describe('Search', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();

    renderRoot(<Search onChange={onChange} />);

    screen.getByPlaceholderText('Search...');
  });

  it('calls onChange', () => {
    const onChange = jest.fn();

    renderRoot(<Search onChange={onChange} />);

    userEvent.type(screen.getByPlaceholderText('Search...'), 'Πόνησις');

    expect(onChange).toHaveBeenCalled();
  });
});
