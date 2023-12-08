import './Pages.css'
import Book from "./Book"
import Hero from "../components/Hero"
import SectionTitle from '../components/SectionTitle'

export default function HomePage() {
  return (<>
   
      <Hero />
      <SectionTitle title="Latest books" link="/book"/>
      
      <SectionTitle title="Browse categories" link="/book"/>
      <SectionTitle title="Poplar authors" link="/book"/>
   
  </>
  )
}
