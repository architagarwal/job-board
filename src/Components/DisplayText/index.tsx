import React from "react";

interface DisplayTextProps {
  text: string;
}

const DisplayText = ({text}: DisplayTextProps) => {
  return (
    <p data-testid="display-text" className="text-gray-600">
      {text.split("\n").map((line: string, index: number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  )
}

export default DisplayText;