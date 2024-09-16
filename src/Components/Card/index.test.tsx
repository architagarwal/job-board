import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from './index';

const mockData = {
  id: 4775699,
  title: "CT Technologist",
  company: "Image One Radiology",
  description: "Conducts a range of Computed Tomography procedures on patients of all age groups, including pediatrics, adhering to IAC guidelines. Assesses image quality, provides essential patient care during CT procedures, and takes immediate action in recognizing critical patient conditions.",
  expiry: 1728975600000
}

describe('Card', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(<Card {...mockData}/>);
  });

  it('renders card title', () => {
    const cardHeading = screen.getByTestId('card-title')
    expect(cardHeading).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual('CT Technologist');
  });

  it('renders company name', () => {
    const cardCompanyName = screen.getByTestId('card-company-name')
    expect(cardCompanyName).toBeInTheDocument();
    expect(cardCompanyName.textContent).toEqual('Image One Radiology');
  });

  it('renders expiry date', () => {
    const cardExpiryDate = screen.getByTestId('card-job-expiry')
    expect(cardExpiryDate).toBeInTheDocument();
    expect(cardExpiryDate.textContent).toEqual('Expires: 10/15/2024');
  });
})