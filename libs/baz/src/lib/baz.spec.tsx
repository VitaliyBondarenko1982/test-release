import { render } from '@testing-library/react';

import Baz from './baz';

describe('Baz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Baz />);
    expect(baseElement).toBeTruthy();
  });
});
