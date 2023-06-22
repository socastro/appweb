import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders without crashing', () => {
  const div = document.createElement('div');
//  const root = ReactDOM.createRoot(document.getElementById('root'));

  //createRoot(div).
  render(<App />, div);
});