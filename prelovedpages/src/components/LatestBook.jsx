import './Components.css'
import options from '../assets/options.svg'
import shopingBaket from '../assets/shopping-basket-white.svg'


export default function LatestBook({ color, title, author, description, cover, seeBook }) {
    return (


        <article className='LatestBook flex' style={{ borderColor: color }}>
            <div className="LatestBook__cover--wrapper">
                <div className='LatestBook__cover'>
                    <img src={cover} alt="" />
                </div>
            </div>
            <div className='LatestBook__book flex-column'>
                <div className='LatestBook__info'>
                    <h3>{title}</h3>
                    <h4 className='mb1'>{author}</h4>
                    <p className='LatestBook__desc'>{description}</p>
                </div>
                <div>
                    <hr className='LatestBook__hr' />
                    <div className='LatestBook__buttons flex'>
                        <button className='btn see-book'  style={{ borderColor: color, backgroundColor: color }}>See book</button>
                        <button className='shopping-basket'><img src={shopingBaket} alt="" /></button>
                        <button  className='options'><img src={options} alt="" /></button>
                    </div>
                </div>
            </div>
        </article>

    )
}
