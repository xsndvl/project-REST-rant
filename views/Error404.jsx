const React = require('react')
const Def = require('./Default')

function Error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div className='error404'>
                    <img src="/images/reaction.jpg" alt="Oops Reaction"></img>
                    <a href="/"><button className='btn-primary'>Home</button></a>
                </div>
                
            </main>
    </Def>
    )
}

module.exports = Error404