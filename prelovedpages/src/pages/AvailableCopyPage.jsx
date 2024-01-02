
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import Loading from '../components/Loading';
import SectionTitle from '../components/SectionTitle';

export default function AvailableCopyPage() {

  const { copyid } = useParams()
  const [copy, setCopy] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/api/copies/${copyid}`);
        setCopy(response.data);
      } catch (error) {
        console.error("Error fetching book copy data:", error);
      }
    }
    getData();
  }, [copyid]); // Include id as a dependency
  return (
    <> {copy.photo ?
      <section className='AvailableCopyPage mt2'>
        <SectionTitle title={`${copy.bookModel.title}`} link="/allbooks" btn="See All Books"/>
        <div className='AvailableCopyPage_wrapper margins flex'>
          <div className=''><img src={copy.photo} alt="" /></div>
          <div>
            <Link to={`/authors/${copy.author._id}`}><h4>{copy.author.firstName} {copy.author.lastName}</h4></Link>
          
            <p></p>
          </div>
        </div>

      </section> :
      <Loading />
    }
    </>
  )
}
