import { render, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

test('after click 回首頁 button, the page will enter to 首頁', () => {
  const { getByText } = render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const homeButton = getByText('回首頁');

  fireEvent.click(homeButton);

  expect(getByText('這裡是首頁')).toBeInTheDocument();
});
