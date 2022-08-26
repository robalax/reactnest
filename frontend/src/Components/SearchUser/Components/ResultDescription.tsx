import React from "react";
import ResultInterface from "../../../Interfaces/Result";

interface ResultProps {
  result: ResultInterface;
}

export const ResultDescription: React.FC<ResultProps> = ({ result }) => {
  return (
    <>
      <p>
        <strong>Country: </strong> {result.country}
      </p>
      <p>
        <strong>State: </strong> {result.state}
      </p>
      <p>
        <strong>Zipcode: </strong> {result.zipcode}
      </p>
      <p>
        <strong>City: </strong> {result.city}
      </p>
    </>
  );
};
