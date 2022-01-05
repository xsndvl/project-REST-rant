const React = require('react')
const Def = require('../Default')

function Show(data){
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    var rating = (
        <h3 className='inactive'>
            Not yet rated!
        </h3>
    )
    if (data.place.comments.length) {
        console.log("theres data")
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        var averageRating = Math.round(sumRatings/data.place.comments.length)
        let stars = ""
        for(let i = 0; i < averageRating; i++){
            stars += "⭐"
        }
        
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return(
                <div className='border'>
                    <h2 className='rant'>{c.rant ? "Rant" : "Rave!"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
                            <h3>{rating}</h3>
                        </div>
                        <div className="description">
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {data.place.cuisines}
                            </h4>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
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
                        <h3>{comments}</h3>
                        <form method="POST" action={`/places/${data.place.id}/comment`}>
                            <div>
                                <label htmlFor="author">Author</label>
                                <input className="author" name="author" id="author"/>
                                <label htmlFor='content'>Content</label>
                                <input className='content' name="content" id="content"/>
                                <label htmlFor="stars">Star Rating</label>
                                <input type="range" min="1" max="10"  className="stars" name="stars" id="stars"/>
                                <label htmlFor='rant'>Rant?</label>
                                <input type="checkbox" name="rant" className='rant' id="rant"/>
                            </div>
                            <div>
                                <input className="btn btn-primary" type="submit" value="Add Rating"/>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show