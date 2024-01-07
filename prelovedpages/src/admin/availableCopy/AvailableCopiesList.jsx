import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { getCopiesData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function AvailableCopiesList() {
  const {
    data: copies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availablecopies"],
    queryFn: () => getCopiesData(),
  });
  console.log(copies)

  if (isError) {
    return (
      <div className="mt2 margins">
        <Error message={isError.message} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt2 margins">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <SectionTitle
        title="List of Available Copies"
        link="/admin"
        btn="Go to Admin Dashboard"
      />
      <section className="margins">
        List of Available Copies
        <ul>
         
          {copies?.map((copy) => {
               return <li key={copy._id}> {copy.bookModel} </li>;
              })
           }
        </ul>
      </section>
    </>
  );
}
