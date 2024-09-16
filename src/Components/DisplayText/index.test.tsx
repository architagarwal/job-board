import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DisplayText from './index';

const text = "Conducts a range of Computed Tomography procedures on patients of all age groups";

describe('Card', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(<DisplayText text={text}/>);
  });

  it('renders text', () => {
    const displayText = screen.getByTestId('display-text')
    expect(displayText).toBeInTheDocument();
    expect(displayText.textContent).toEqual('Conducts a range of Computed Tomography procedures on patients of all age groups');
  });
})