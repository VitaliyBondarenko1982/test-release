import { render } from '@testing-library/react';

import Baz from './baz';

describe('Baz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Baz />);
    expect(baseElement).toBeTruthy();
  });

  it('should display "Welcome to Baz" as a title', () => {
    const { getByText } = render(<Baz />);
    expect(getByText(/Welcome to Baz/gi)).toBeTruthy();
  });
});
