import React from 'react'

export default function Hero() {
    return (
        <section className='Hero'>
            <div className="hero__wrapper margins">







                <div className="hero__book-card">
                    <p className='hero__book-card--title'>Hush, hush</p>
                    <span className='italic'>by</span> <span className='hero__book-card--author italic'>Becca FitzPatrick</span>
                    <p className='hero__book-card--series'>
                        Volume <span>1</span>,
                        Series <span className='hero__book-card--series-title bold'>Hush, Hush</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
