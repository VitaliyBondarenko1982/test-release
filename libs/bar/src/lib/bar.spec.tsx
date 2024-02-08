import { render } from '@testing-library/react';

import Bar from './bar';

describe('Bar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bar />);
    expect(baseElement).toBeTruthy();
  });

  it('should display "Welcome to Bar" as a title', () => {
    const { getByText } = render(<Bar />);
    expect(getByText(/Welcome to Bar/gi)).toBeTruthy();
  });
});
