import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

const response = { speaker: 'Speaker', quote: 'Test quote'};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a quote, a button and an image', () => {
  render(<App />);

  const quoteEl = screen.getByText(/speaker/);
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');

  expect(quoteEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});

test('calls api on button click and updates its text', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});