import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Board from './index';

const mockJobs = [
  {
    "id": 4775699,
    "title": "CT Technologist",
    "company": "Image One Radiology",
    "location": "San Diego, CA",
    "description": "Conducts a range of Computed Tomography procedures on patients of all age groups, including pediatrics, adhering to IAC guidelines. Assesses image quality, provides essential patient care during CT procedures, and takes immediate action in recognizing critical patient conditions.",
    "requirements": "Graduate of a 2-year accredited school of Radiologic Technology or equivalent training.\nValid Computed Tomography Certificate/License.\n1+ year of CT Tech experience with successful completion of the department CT training program.\nCT certification (A.R.R.T) and BLS certification.",
    "name": "Suresh",
    "email": "suresh@gmail.com",
    "totalBids": 20,
    "minBid": 13.85,
    "maxBid": 15.85,
    "publishDate": 1725174000000,
    "expiry": 1728975600000
  },
  {
    "id": 3755103,
    "title": "General Lottery Contractor",
    "company": "Caders LLc",
    "location": "Los Angeles, CA",
    "description": "An important piece to delivering exceptional patient care falls on medical imaging, the team that helps with detection and diagnosis to the treatment of illnesses and abnormalities. Banner Health’s varied medical imaging and radiology services help physicians establish and execute individualized treatment plans.\nBanner Health was named to Fortune’s America’s Most Innovative Companies list for the second year in a row for 2024 and named Most Trustworthy Companies in America by Newsweek. We’re proud to be recognized for our commitment to the latest health care advancements and excellent patient care.",
    "requirements": "Certificate or diploma from an approved/accredited Radiologic Technology programs.\nRequires national certification from the American Registry of Radiologic Technologists (ARRT), Nuclear Medicine Technology Certification Board (NMTCB), or American Registry for Diagnostic Medical Sonography (ARDMS) based on modalities in which they will be conducting work and licensure by the state regulatory agency as applicable.\nMulti-Modality Technologist I requires certification in two (2) or more of the following modalities: Radiologic (X-ray), Computed Tomography (CT), Bone Densitometry (DEXA), Mammography, Breast Sonography, Angiography.",
    "name": "Kellen",
    "email": "kellen@gmail.com",
    "totalBids": 16,
    "minBid": 10.85,
    "maxBid": 15.65,
    "publishDate": 1725260400000,
    "expiry": 1728630000000
  },
  {
    "id": 2301940,
    "company": "Caders LLC",
    "description": "We are seeking a skilled and detail-oriented Lottery Technician Contractor to join our team. This role involves the installation, maintenance, and repair of lottery equipment at various retail locations. The ideal candidate will have strong technical skills and the ability to listen and respond effectively to client needs and feedback.",
    "email": "chris@gmail.com",
    "expiry": 1728604800000,
    "location": "Los Angeles, CA",
    "name": "Chris",
    "requirements": "We are seeking a skilled and detail-oriented Lottery Technician Contractor to join our team. This role involves the installation, maintenance, and repair of lottery equipment at various retail locations. The ideal candidate will have strong technical skills and the ability to listen and respond effectively to client needs and feedback.",
    "title": "General Lottery Contractor",
    "minBid": 11,
    "maxBid": 11,
    "totalBids": 1,
    "publishDate": 1725938216737
  }
]

describe('Board', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(<Board jobs={mockJobs} textMaxLength={300} title='Test Title'/>);
  });

  it('renders a board', () => {
    const boardHeading = screen.getByTestId('board-title')
    expect(boardHeading).toBeInTheDocument();
    expect(boardHeading.textContent).toEqual('Test Title');
  });
})