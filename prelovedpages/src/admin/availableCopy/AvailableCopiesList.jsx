import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { getCopiesData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

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
              <th>ID</th>
              <th>Price</th>
              <th>Condition<br/>
              Description</th>
              <th>Publisher</th>
              <th>Isbn</th>
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
                      <img height="100" src={copy.photo || ""} />
                    </td>
                    <td>{copy._id}</td>

                    <td>
                      £
                      {!copy.price === null || undefined
                        ? copy.price.toFixed(2)
                        : "no data"}{" "}
                    </td>
                    <td>{copy.condition || ""} <br/>
                    {copy.conditionDescription || ""}</td>
                    
                    <td>{copy.publishingHouse || ""} </td>
                    <td> {copy.Isbn || ""}</td>
                    <td>
                      <Link to={`/copies/${copy._id}/update`}><EditIcon /></Link>
                    </td>
                    <td>
                      <DeleteIcon />
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
