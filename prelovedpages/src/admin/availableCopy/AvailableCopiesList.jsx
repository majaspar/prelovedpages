import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { getCopiesData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function AvailableCopiesList() {
  const {
    data: copies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availablecopies"],
    queryFn: () => getCopiesData(),
  });
  console.log(copies);

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
        link="/admin/authorslist"
        btn="List of Authors"
      />
      <section className="margins">
        <table>
          <thead>
            <tr>
              <th>Img</th>
              <th>Price</th>
              <th>Condition</th>
              <th>Description</th>
              <th>Publisher</th>
              <th>ISBN</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!copies.length ? (
              <Loading />
            ) : (
              copies?.map((copy) => {
                return (
                  <tr key={copy._id}>
                    <td>
                      {" "}
                      <img height="100" src={copy.photo} />
                    </td>

                    <td>£{copy.price.toFixed(2)} </td>
                    <td>{copy.condition}</td>
                    <td>Description</td>
                    <td>{copy.publishingHouse} </td>
                    <td> {copy.ISBN}</td>
                    <td>
                      <AddCircleOutlineIcon />
                    </td>
                    <td>
                      <EditIcon />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
