import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import DeleteModal from "./DeleteModal";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Links from "../Links";
import { fetchBookModelsData } from "../../api/fetchData";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function BookModelsList() {
  
  const {
    data: bookModels,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchBookModelsData(),
  });

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
        title="List of Book Models"
        link="/admin"
        btn="Go to Admin Dashboard"
      />
      <Links/>
      <section className="BookModelsList table__wrapper margins">
        <table>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Delete</th>
              <th>Add Copy</th>
              <th>is available?</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>synopsis</th>
              <th>cover link</th>
              <th>is series?</th>
              <th>series title</th>
              <th>vol</th>
              <th>genre</th>
              <th>is featured?</th>
              <th>Mongo Id</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            { !bookModels.length ? <Loading/> : bookModels?.map((book) => {
              return (
                <tr key={book._id}>
                  <td className="BookModelsList__td--edit center">
                    <Link to={`/admin/books/${book._id}/update`}>
                      <EditIcon />
                    </Link>
                  </td>
                  <td className="BookModelsList__td--delete center">
                    <DeleteModal id={book._id} author={book.author._id}/>
                  
                  </td>
                  <td>
                    <Link to={`/admin/books/${book._id}/addcopy`}>
                      <AddCircleOutlineIcon />
                    </Link>
                  </td>
                  <td className="center">{book.availableCopies.length === 0 ? "No" : "Yes"}</td>
                  <td className="BookModelsList__td--title">
                    <Link to={`/books/${book._id}`}>{book.title}</Link>
                  </td>
                  <td>
                    <Link to={`/authors/${book.author._id}`}>
                      {book.author.firstName} {book.author.lastName}
                    </Link>
                  </td>
                  <td className="center">{book.publishedYear}</td>
                  <td className="BookModelsList__td--synopsis">
                    <p>{book.synopsis}</p>
                  </td>
                  <td className="BookModelsList__td--cover">
                    <img height="50" src={book.cover}/>
                  </td>
                  <td className="center">
                    {book.isPartOfSeries ? "Yes" : "No"}
                  </td>
                  <td>{!book.series ? "-" : book.series}</td>
                  <td className="center">{!book.volume ? "-" : book.volume}</td>
                  <td>{book.genre.join(", ")}</td>
                  <td className="center">{book.isFeatured ? "Yes" : "No"}</td>
                  <td className="center">{book._id}</td>
                  <td className="center"><ul>
                    {book.availableCopies?.map((c) => {
                      return <li key={c}><Link to={`/copies/${c}`}>{c}</Link></li>
                    })}</ul>
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
