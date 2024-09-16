import React from "react";
import DisplayText from "../DisplayText";

interface CardProps {
  title: string;
  description: string;
  company: string;
  expiry: number;
}

const Card = ({title, description, company, expiry}: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 data-testid="card-title" className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
        <h4 data-testid="card-company-name" className="text-lg font-medium text-gray-600">{company}</h4>
        <DisplayText text={description}/>
        <p data-testid="card-job-expiry" className="text-sm font-semibold text-gray-600 mt-5">Expires: <span>{new Date(expiry).toLocaleDateString()}</span></p>
      </div>
    </div>
  )
}

export default Card;