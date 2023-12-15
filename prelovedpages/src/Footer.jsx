import './App.css'
import { Link } from 'react-router-dom'
import { colors } from './components/LatestBooks'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="Footer__wrapper margins mt1">
        <div>
          <h5 className='mb1'>Navigaton</h5>
          <div className='Footer__hr' style={{ backgroundColor: colors.pink }} />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stylespage">Selcetor Styles</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/allauthors">List of Authors</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='mb1'>Admin</h5>
          <div className='Footer__hr' style={{ backgroundColor: colors.yellow }} />
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/newbook">New Book</Link></li>
            <li><Link to="/newauthor">New Author</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='mb1'>Social</h5>
          <div className='Footer__hr' style={{ backgroundColor: colors.blue }} />
        </div>

      </div>
      <div className='hr mt1 margins'><hr /></div>
      <div className='center mb1 mt1'>&copy; <Link to='https://lenaesposito.co.uk' target="_blank">Lena Esposito</Link> 2023</div>
    </footer>
  )
}
