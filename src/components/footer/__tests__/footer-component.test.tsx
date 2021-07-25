import { screen } from '@testing-library/react';
import { renderRoot } from '../../../setupTests';

import { Footer } from '../footer-component';

describe('Footer', () => {
  it('renders correctly', () => {
    renderRoot(<Footer />);

    screen.getByText('Made with ❤️ by Sofia Fateyev');
  });
});
