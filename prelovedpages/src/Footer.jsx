import './App.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="Footer__wrapper margins mt1">
        <div>
          <h5 className='mb1'>Navigaton</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stylespage">Selcetor Styles</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='mb1'>Contact</h5>
          </div>
        <div>
          <h5 className='mb1'>Social</h5></div>
      </div>
        <div className='center mb1 mt1'>&copy; <Link to='https://lenaesposito.co.uk' target="_blank">Lena Esposito</Link> 2023</div>
    </footer>
  )
}
