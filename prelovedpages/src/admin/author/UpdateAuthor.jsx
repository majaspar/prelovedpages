import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Admin.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { updateAuthor, getAuthorData } from "../../api/fetchData";
import api from "axios";

export default function UpdateAuthor() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  

  const { data: initialValue, isLoading, isError } = useQuery({
    queryKey: ['authors'],
    queryFn: () => getAuthorData(id)
  })
  console.log('Fetched author: ', initialValue)

  const [firstName, setFirstName] = useState(initialValue?.firstName || '');
  const [lastName, setLastName] = useState(initialValue?.lastName || '');
  const [born, setBorn] = useState(initialValue?.born || '');
  const [originalLanguage, setOriginalLanguage] = useState(initialValue?.originalLanguage || '');
  const [country, setCountry] = useState(initialValue?.country || '');
  const [photo, setPhoto] = useState(initialValue?.photo || '');
  const [photoSource, setPhotoSource] = useState(initialValue?.photoSource || '');

  const updateAuthorMutation = useMutation({
    mutationFn: async (updatedAuthor) => {
      return await api
      .patch(`/api/authors/${id}/update`, updatedAuthor)
      .catch((error) =>
        console.error("Error while updating a book model:", error)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries('authors')
      navigate('/admin/authorslist')
    }
  })
  const updateAuthorData = () => {
    updateAuthorMutation.mutate({
      firstName, lastName, born, photo, photoSource, originalLanguage, country
    })
  };

  if (updateAuthorMutation.isLoading) {
    return <Loading/>
  }

  if (updateAuthorMutation.isError) {
    return <Error message={updateAuthorMutation.error.message}/>
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
              required
              type="text"
              value={firstName}
              id="firstName"
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="lastName">
              Last name:
            </label>
            <input
              required
              type="text"
              value={lastName}
              id="lastName"
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>

          <p>
            <label className="mr1" htmlFor="lastName">
              Born in:
            </label>
            <input
              required
              type="number"
              id="born"
              value={born}
              placeholder="Enter date"
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
              placeholder="Enter original language"
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
            Update Author
          </button>
        </div>
      </section>
    </>
  );
}
