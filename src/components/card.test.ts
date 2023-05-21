import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given the component Card', () => {
  document.body.innerHTML = '<slot></slot>';
  // eslint-disable-next-line no-new
  new Card('slot');
  const element = screen.getByRole('paragraph');
  describe('When it is instantiated', () => {
    test('It should be in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
