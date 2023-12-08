import './Pages.css'
import Book from "./Book"
import Hero from "../components/Hero"
import SectionTitle from '../components/SectionTitle'
import LatestBooks from '../components/LatestBooks'
import CategoriesGrid from '../components/CategoriesGrid'
import PopularAuthors from '../components/PopularAuthors'

export default function HomePage() {
  return (<>
   
      <Hero />
      <SectionTitle title="Latest books" link="/book"/>
      <LatestBooks/>
      <SectionTitle title="Browse categories" link="/book"/>
      <CategoriesGrid/>
      <SectionTitle title="Poplar authors" link="/book"/>
      <PopularAuthors/>
   
  </>
  )
}
