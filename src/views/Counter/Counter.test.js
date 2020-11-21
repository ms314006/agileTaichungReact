import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from '../../store';

test('At the beginning count should be 0', () => {
  const { getByText } = render(<Counter />);

  expect(getByText('目前計數0')).toBeInTheDocument();
});

test('After click increment button the count will change to 1', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('點我加一');

  fireEvent.click(incrementButton);

  expect(getByText('目前計數1')).toBeInTheDocument();
});

/*
test('At the beginning count should be 0', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  expect(getByText('目前計數0')).toBeInTheDocument();
});

test('After click increment button the count will change to 1', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const incrementButton = getByText('點我加一');

  fireEvent.click(incrementButton);

  expect(getByText('目前計數1')).toBeInTheDocument();
});
*/
