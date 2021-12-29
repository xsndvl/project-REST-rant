const React = require('react')
const Def = require('../Default')

function Show(data){
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>

                <img src={data.place.pic} alt={data.place.name}/>

                <div className="rating">
                    <h2>Rating</h2>
                    <h3>Not Rated</h3>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
                </div>
                <div>
                    <h2>Comments</h2>
                    <h3>No comments yet</h3>
                </div>

                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

            </main>
        </Def>
    )
}

module.exports = Show