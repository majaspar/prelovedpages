import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { getCopiesData, fetchBookModelData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Links from "../Links";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function AvailableCopiesList() {
  // Available Copies Data
  const {
    data: copies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["availablecopies"],
    queryFn: () => getCopiesData(),
  });

  console.log(copies);

  if (isLoading) {
    return (
      <div className="mt-8 margins">
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="mt-8 margins">
        <Error message={error.message} />
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
      <Links />
      <section className="margins overflow-x-scroll pb-8 h-[65vh]">
        <table>
          <thead>
            <tr>
              <th>Img</th>
              <th>Copy Id/Author/BM</th>
              <th>Price</th>
              <th>
                Condition
                <br />
                Description
              </th>
              <th>Publisher/ Isbn</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!copies.length
              ? "Loading..."
              : copies?.map((copy) => {
                  return (
                    <tr key={copy._id}>
                      <td>
                        <img
                          className="h-12"
                          src={copy.photo[0] || ""}
                          alt={`photograph of available copy of ${copy.bookModel.title}`}
                        />
                      </td>
                      <td>
                        <Link to={`/copies/${copy._id}`}>Copy: {copy._id}</Link>
                        <br />
                        <Link to={`/authors/${copy.author}`}>
                          A: {copy.author}
                        </Link>
                        <br />
                        <Link to={`/books/${copy.bookModel}`}>
                          BM: {copy.bookModel}
                        </Link>
                      </td>

                      <td>
                        {copy.price ? (
                          <span>£{copy.price.toFixed(2)}</span>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        {copy.condition || ""} <hr />
                        {copy.conditionDescription || ""}
                      </td>

                      <td>
                        {copy.publishingHouse || ""} <hr />
                        {copy.Isbn || ""}
                      </td>
                      <td>
                        <Link to={`/admin/copies/${copy._id}/update`}>
                          <EditIcon />
                        </Link>
                      </td>
                      <td>
                        <DeleteIcon />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </section>
    </>
  );
}
