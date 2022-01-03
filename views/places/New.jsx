const React = require('react')
const Def = require('../Default')

function New_form(data){
    let message = ""
        if (data.message) {
            message = (
                <h4 className='alert-danger'>
                    {data.message}
                </h4>
        )
    }
    return(
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" name="name" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" name="pic" id="pic"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Place City</label>
                        <input className="form-control" type="text" name="city" id="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Place State</label>
                        <input className="form-control" name="state" id="state"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Place Cuisines</label>
                        <input className="form-control" name="cuisines" id="cuisines" required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="founded">Founded Year</label>
                        <input type="number" className='form-control' id="founded" name="founded" value={new Date().getFullYear()}/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = New_form