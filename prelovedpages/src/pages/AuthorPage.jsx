import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import SectionTitle from '../components/SectionTitle'
import NewBook from '../admin/NewBook'

export default function AuthorPage() {
    const { id } = useParams()

    // Click button to open create book
    const [addBook, openAddBook] = useState(false)
    let checkState = addBook ? 'show' : ''
    const showNewBookForm = () => {
        openAddBook(!addBook)
    }

    const [author, setAuthor] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`/api/authors/${id}`);
                setAuthor(response.data);
            } catch (error) {
                console.error("Error fetching author data:", error);
            }
        }
        getData();
    }, [id]); // Include id as a dependency


    return (<>
        <SectionTitle title={`${author.firstName} ${author.lastName}`} link="/allauthors" btn="Go Back" />

        <section className='AuthorPage margins mt2'>
            <h4 className='mt1 mb1'>Books available by this author:</h4>


             
             {author.writtenBooks ? (
                    <ul>
                        {author.writtenBooks.map((book) => (
                            <li key={book._id}>&rarr; {book.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}

            <button onClick={showNewBookForm} className="mt4 mb2 btn">Add new book</button>
            <div className={`new-book-form ${checkState}`}>
                <NewBook authorid={id} />
            </div>
        </section>
    </>
    )
}



// export default function AuthorPage() {
//     const { id } = useParams();
//     const [author, setAuthor] = useState({});

//     useEffect(() => {
//         async function getData() {
//             try {
//                 const response = await axios.get(`/api/authors/${id}`);
//                 setAuthor(response.data);
//             } catch (error) {
//                 console.error("Error fetching author data:", error);
//             }
//         }
//         getData();
//     }, [id]); // Include id as a dependency

//     return (
//         <>
//             <SectionTitle title={`${author.firstName} ${author.lastName}`} link="/allauthors" btn="Go Back" />

//             <section className='AuthorPage margins mt2'>
//                 <h4 className='mt1 mb1'>Books available by this author:</h4>

                // {author.writtenBooks ? (
                //     <ul>
                //         {author.writtenBooks.map((book) => (
                //             <li key={book._id}>&rarr; {book.title}</li>
                //         ))}
                //     </ul>
                // ) : (
                //     <p>Loading...</p>
                // )}
//             </section>
//         </>
//     );
// }