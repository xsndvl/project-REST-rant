const React = require('react')
const Def = require('../Default')

function Show(data){
    return(
        <Def>
            <main>
                <div className='row'>
                    <h1>{data.place.name}</h1>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name}/>
                            <h3>
                                Located in {data.place.city}, {data.place.state}
                            </h3>
                    </div>
                    <div className='col-sm-6'>
                        <div className="rating">
                            <h2>Rating</h2>
                            <h3>Not Rated</h3>
                        </div>
                        <div className="description">
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {data.place.cuisines}
                            </h4>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <h2>Comments</h2>
                        <h3>No comments yet</h3>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show