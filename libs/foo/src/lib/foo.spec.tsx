import { render } from '@testing-library/react';

import Foo from './foo';

describe('Foo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Foo />);
    expect(baseElement).toBeTruthy();
  });

  it('should display "Foo!" as a title', () => {
    const { getByText } = render(<Foo />);
    expect(getByText(/Foo!/gi)).toBeTruthy();
  });
});
