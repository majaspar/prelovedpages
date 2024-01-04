import React, { useState, useEffect } from "react";
import "../Admin.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Success from "../../components/Success";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import axios from "axios";
import { updateBookModel } from "../../api/fetchData";
import { useForm } from "react-hook-form";

export default function UpdateBookModelForm() {
  const { id } = useParams();
  const [bookModelData, setBookModelData] = useState([]);

  const getBookModelData = () => {
    axios
      .get(`/api/books/${id}`)
      .then((response) => {
        setBookModelData(response.data);
      })
      .catch((error) =>
        console.error("Error fetching book model data:", error)
      );
  };

  const editField = (id) => {};

  // Genre Checkboxes
  const handleGenreChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setGenre([...genre, value]);
    } else {
      setGenre(genre.filter((e) => e !== value));
    }
  };

  //   const mutation = useMutation({
  //     mutationFn: async (updatedBookModel) => {
  //       await axios
  //         .put(`/api/books/${id}/update`, updatedBookModel)
  //         .then((response) => response.data)
  //         .catch((error) =>
  //           console.error("Error while updating a book model:", error)
  //         );
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["bookmodels"], { exact: true });
  //     },
  //   });

  //   const updateBookData = () => {
  //     mutation.mutate({
  //       title,
  //       author,
  //       synopsis,
  //       cover,
  //       publishedYear,
  //       isFeatured,
  //       isPartOfSeries,
  //       series,
  //       volume,
  //       genre,
  //     });
  //   };

  //   if (mutation.isLoading) {
  //     return <Loading />;
  //   }

  //   if (mutation.isError) {
  //     return <Error message={mutation.error.message} />;
  //   }

  //   if (mutation.isSuccess) {
  //     return <Success message="Book Model updated successfully!" />;
  //   }

  return (
    <section className="admin margins mt2">
      <h2 className="mb2">Update a Book Model</h2>

      <div className="form">
        <p>
          <label className="mr1" htmlFor="title">
            Title:
          </label>
          <input
            required
            value={title}
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>

        <p>
          <label className="mr1" htmlFor="author">
            Author:{" "}
          </label>
          <input
            required
            value={author}
            type="text"
            id="author"
            placeholder="Enter author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </p>

        <p>
          <label className="mr1" htmlFor="publishedYear">
            Year:{" "}
          </label>
          <input
            required
            value={publishedYear}
            type="text"
            id="publishedYear"
            placeholder="When was it published?"
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </p>

        <p className="mt1 flex">
          <label className="mr1" htmlFor="synopsis">
            Synopsis:{" "}
          </label>
          <textarea
            value={synopsis}
            type="text"
            id="synopsis"
            placeholder="Enter synopsis"
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </p>

        <p>
          <label className="mr1" htmlFor="cover">
            Cover:
          </label>
          <input
            value={cover}
            type="text"
            id="cover"
            placeholder="Enter cover url"
            onChange={(e) => setCover(e.target.value)}
          />
        </p>

        <p className="mt1">
          <label className="mr1" htmlFor="isFeatured">
            Is featured?
          </label>
          <select
            required
            value={isFeatured}
            name="isFeatured"
            id="isFeatured"
            onChange={(e) => setIsFeatured(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </p>

        <p className="mt1">
          <label className="mr1" htmlFor="isPartOfSeries">
            Is it a series?
          </label>
          <select
            required
            value={isPartOfSeries}
            name="isPartOfSeries"
            id="isPartOfSeries"
            onChange={(e) => setIsPartOfSeries(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </p>

        {/* <p className='mt1'><span className="mr3">Genre:</span>
        {book ? book.genre : ''} </p> */}

        {isPartOfSeries ? (
          <div className="ml2 mt1">
            <p>
              <label className="mr1" htmlFor="series">
                Series:{" "}
              </label>
              <input
                value={series}
                type="text"
                id="series"
                placeholder="Enter series name"
                onChange={(e) => setSeries(e.target.value)}
              />
            </p>
            {series !== null && (
              <p>
                <label className="mr1" htmlFor="volume">
                  Volume:{" "}
                </label>
                <input
                  required
                  value={volume}
                  type="number"
                  id="volume"
                  placeholder="Volume number"
                  onChange={(e) => setVolume(e.target.value)}
                />
              </p>
            )}
          </div>
        ) : (
          <></>
        )}

        <div className="NewBook__genre--wrapper mt1 flex">
          <label>Genre:</label>
          <div className="NewBook__genre">
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="romance"
                name="genre"
                value="Romance"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="romance">
                Romance
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="fiction"
                name="genre"
                value="Fiction"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="fiction">
                Fiction
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="contemporary"
                name="genre"
                value="Contemporary"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="contemporary">
                Contemporary
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="thriller"
                name="genre"
                value="Thriller"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="thriller">
                Thriller
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="fantasy"
                name="genre"
                value="Fantasy"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="fantasy">
                Fantasy
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="sciencefiction"
                name="genre"
                value="Science Fiction"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="sciencefiction">
                Science Fiction
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="horror"
                name="genre"
                value="Horror"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="horror">
                Horror
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="foreign"
                name="genre"
                value="Foreign"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="foreign">
                Foreign
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="mystery"
                name="genre"
                value="Mystery"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="mystery">
                Mystery
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="youngadult"
                name="genre"
                value="Young Adult"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="youngadult">
                Young Adult
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="childrens"
                name="genre"
                value="Childrens"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="childrens">
                Childrens
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="historicalfiction"
                name="genre"
                value="Historical Fiction"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="historicalfiction">
                Historical Fiction
              </label>
            </div>
            <div className="genre__item flex">
              <input
                type="checkbox"
                id="nonfiction"
                name="genre"
                value="Non-Fiction"
                onChange={handleGenreChange}
              />
              <label className="mr2" htmlFor="nonfiction">
                Non-Fiction
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => updateBookData()}
          type="submit"
          className="btn mt3"
        >
          Edit Book Model
        </button>
      </div>

      {/* End of form */}
    </section>
  );
}
