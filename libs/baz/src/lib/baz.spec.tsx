import { render } from '@testing-library/react';

import Baz from './baz';

describe('Baz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Baz />);
    expect(baseElement).toBeTruthy();
  });

  it('should display "Welcome to really Baz!" as a title', () => {
    const { getByText } = render(<Baz />);
    expect(getByText(/Welcome to really Baz!/gi)).toBeTruthy();
  });
});
