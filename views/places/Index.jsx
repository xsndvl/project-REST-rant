const React = require('react')
const Def = require('../Default')

function Index(data){
    let placesFormatted = data.places.map((place) =>{
        return(
            <div className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <a href="/"><button className='btn-primary'>Home</button></a>
                <div className='row'>
                    {placesFormatted}
                </div>
                
            </main>
        </Def>
    )
}

module.exports = Index

