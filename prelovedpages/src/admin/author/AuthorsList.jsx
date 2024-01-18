import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import DeleteAuthor from "./DeleteAuthor";
import Error from "../../components/Error";
import Links from "../Links";
import Loading from "../../components/Loading";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import { getAuthorsData } from "../../api/fetchData";

export default function AuthorsList() {
  const {
    data: authors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getAuthorsData(),
  });

  if (isError) {
    return (
      <div className="mt-8 margins">
        <Error message={isError.message} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 margins">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <SectionTitle
        title="List of Authors"
        link="/admin"
        btn="Go to Admin Dashboard"
      />

      <Links />
      <section className="BookModelsList overflow-x-scroll pb-8 h-[65vh] margins">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>
                Add
                <br />
                Book
              </th>
              <th>Delete</th>
              <th>Born</th>
              <th>Country</th>
              <th>Book Models</th>
              <th>Available Copies</th>
              <th>Photo</th>
              <th>Photo source</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {!authors.length ? (
              <Loading />
            ) : (
              authors?.map((author) => {
                return (
                  <tr key={author._id}>
                    <td>
                      <Link to={`/authors/${author._id}`}>
                        {author.firstName}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/authors/${author._id}`}>
                        {author.lastName}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/authors/${author._id}/update`}>
                        <EditIcon />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/books/${author._id}/addbook`}>
                        <AddCircleOutlineIcon />
                      </Link>
                    </td>
                    <td className="BookModelsList__td--delete center">
                      {" "}
                      <DeleteAuthor id={author._id} />
                    </td>
                    <td className="center">{author.born}</td>
                    <td className="center">{author.country}</td>
                    <td style={{ paddingLeft: "1rem", width: "100%" }}>
                      <ol>
                        {author.writtenBooks.map((book) => {
                          return (
                            <li key={book._id}>
                              <Link to={`/books/${book._id}`}>
                                {book.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ol>
                    </td>
                    <td>
                      <p>{author.availableCopies.join(", ")}</p>
                    </td>
                    <td>
                      <p className="">
                        <img
                          className="h-10"
                          src={author.photo}
                          alt={`Photograph of ${author.firstName} ${author.lastName}`}
                        />
                      </p>
                    </td>
                    <td>
                      <p>{author.photoSource}</p>
                    </td>
                    <td>{author._id}</td>
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
