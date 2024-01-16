import React from "react";
import "./Components.css";
import { getCopyData } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";

export default function Copy({ copyid }) {
  const {
    data: copy,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availablecopies", copyid],
    queryFn: () => getCopyData(copyid),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  return (
    <div className="Copy flex">
      <div>
        {/* {copy.photo.map((pic) => {
          return <img src={pic} alt="" />;
        })} */}
        <img src={copy.photo[0]} alt={copy.bookModel.title} />
      </div>
      <div className="Copy__details--wrapper flex">
        <p>
          <span className="details--title">Condition:</span>{" "}
          <span className="details--data" style={{fontWeight: 'bold'}}>{copy.condition}</span>
        </p>
        <p>
          <span className="details--title"></span>
          <span className="details--data">
            {copy.conditionDescription}
          </span>
        </p>
        <p>
          <span className="details--title">This edition:</span>{" "}
          <span className="details--data">
            {copy.thisCopyPublishedYear}
          </span>
        </p>
        <p>
          <span className="details--title">ISBN:</span>{" "}
          <span className="details--data">{copy.Isbn}</span>
        </p>
        <p>
          <span className="details--title">Price:</span>{" "}
          <span className="details--data" style={{fontWeight: 'bold'}}>£{copy.price.toFixed(2)}</span>
        </p>
        <button className="btn">Buy this copy</button>
      </div>
    </div>
  );
}
