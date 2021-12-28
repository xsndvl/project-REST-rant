const React = require('react')
const Def = require('./Default')

function Home(){
    return(
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className='home'>
                    <img src="/images/Pancakes.jpg" alt="Pancakes"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home