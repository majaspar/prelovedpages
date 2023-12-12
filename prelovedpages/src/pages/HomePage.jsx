import Hero from "../components/Hero"
import SectionTitle from '../components/SectionTitle'
import LatestBooks from '../components/LatestBooks'
import CategoriesGrid from '../components/CategoriesGrid'
import PopularAuthors from '../components/PopularAuthors'

export default function HomePage() {
  return (<>
   
      <Hero />
      <SectionTitle title="Latest books" link="/latest"/>
      <LatestBooks/>
      <SectionTitle title="Popular categories" link="/categories"/>
      <CategoriesGrid/>
      <SectionTitle title="Poplar authors" link="/book"/>
      <PopularAuthors/>
   
  </>
  )
}
