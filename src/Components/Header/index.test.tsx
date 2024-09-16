import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './index';

describe('Header', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(<Header />);
  });

  it('renders header title', () => {
    const headerTitle = screen.getByTestId('header-title')
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle.textContent).toEqual('Job Board');
  });

  it('renders header as a link', () => {
    expect(screen.getByRole('link', { name: 'Job Board' })).toHaveAttribute('href', '/dashboard')
  });

  it('renders post job button', () => {
    const cardHeading = screen.getByTestId('post-job')
    expect(cardHeading).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual('Post Job');
  });

  it('renders post job as a link', () => {
    expect(screen.getByRole('link', { name: 'Post Job' })).toHaveAttribute('href', '/postJob')
  });
})