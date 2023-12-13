import './Components.css'
import { Link } from 'react-router-dom'

export default function SectionTitle({ title, link, btn }) {
  return (
    <section className='SectionTitle mt2 mb2'>
        <div className="SectionTitle__wrapper flex margins">
            <h2>{title}</h2>
            <button className='uppercase btn'><Link to={link}>{btn}</Link></button>
        </div>
            <hr className='margins'/>
    </section>
  )
}
