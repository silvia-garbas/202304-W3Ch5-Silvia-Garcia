/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu} from './menu';

describe('Given the component Menu', () => {
  document.body.innerHTML = '<slot></slot>';
  new Menu('slot');
  const element = screen.getByRole('link');
  describe('When it is instantiate', () => {
    test('It should be in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
