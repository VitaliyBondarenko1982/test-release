import { render } from '@testing-library/react';

import Bar from './bar';

describe('Bar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bar />);
    expect(baseElement).toBeTruthy();
  });

  it('should display "Bar" as a title', () => {
    const { getByText } = render(<Bar />);
    expect(getByText(/Bar/gi)).toBeTruthy();
  });
});
