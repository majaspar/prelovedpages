import React, { useState } from "react";
import "../Admin.css";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import api from "axios";

export default function UpdateAuthorForm({ initialValue }) {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(initialValue.firstName || "");
  const [lastName, setLastName] = useState(initialValue?.lastName || "");
  const [born, setBorn] = useState(initialValue?.born || "");
  const [originalLanguage, setOriginalLanguage] = useState(
    initialValue?.originalLanguage || ""
  );
  const [country, setCountry] = useState(initialValue?.country || "");
  const [photo, setPhoto] = useState(initialValue?.photo || "");
  const [photoSource, setPhotoSource] = useState(
    initialValue?.photoSource || ""
  );

  const handleUpdateAuthor = async (updatedAuthor) => {
    return await api
      .patch(`/api/authors/${id}/update`, updatedAuthor)
      .catch((error) =>
        console.error("Error while updating an author:", error)
      );
  };

  const updateAuthorMutation = useMutation({
    mutationFn: handleUpdateAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries("authors");
      navigate("/admin/authorslist");
    },
  });

  const updateAuthorData = () => {
    updateAuthorMutation.mutate({
      firstName,
      lastName,
      born,
      photo,
      photoSource,
      originalLanguage,
      country,
    });
  };

  if (updateAuthorMutation.isLoading) {
    return <Loading />;
  }

  if (updateAuthorMutation.error) {
    return <Error message={updateAuthorMutation.error.message} />;
  }

  return (
    <>
      <SectionTitle
        title="Update an author"
        link="/admin/authorslist"
        btn="Go back"
      />

      <section className="admin mt2 margins">
        <div className="form">
          <p>
            <label className="mr1" htmlFor="firstName">
              First name:
            </label>
            <input
              type="text"
              value={firstName}
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="lastName">
              Last name:
            </label>
            <input
              type="text"
              value={lastName}
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="lastName">
              Born in:
            </label>
            <input
              type="number"
              id="born"
              value={born}
              onChange={(e) => setBorn(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="originalLanguage">
              Language:
            </label>
            <input
              type="text"
              id="originalLanguage"
              value={originalLanguage}
              onChange={(e) => setOriginalLanguage(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="country">
              Country:
            </label>
            <input
              type="text"
              id="country"
              value={country}
              placeholder="Where do/did they live?"
              onChange={(e) => setCountry(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="photo">
              Photo:
            </label>
            <input
              type="text"
              id="photo"
              value={photo}
              placeholder="Enter link"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="photoSource">
              Photo Source:
            </label>
            <input
              type="text"
              id="photoSource"
              value={photoSource}
              placeholder="Enter source"
              onChange={(e) => setPhotoSource(e.target.value)}
            />
          </p>

          <button onClick={updateAuthorData} type="submit" className="btn mt1">
            Update
          </button>
        </div>
      </section>
    </>
  );
}
