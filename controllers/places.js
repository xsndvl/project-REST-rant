const router = require('express').Router()
const places = require('../models/places.js')
const db = require("../models")

router.get('/', (req, res) =>{
    db.Place.find()
    .then((places) => {
        res.render("places/index", {places})
    })
    .catch(err => {
        console.log(err)
        res.render("error404")
    })
})

router.get("/new",(req, res) =>{
    res.render("places/new")
})

router.post("/", (req, res)=>{
    if(req.body.pic === "") {req.body.pic = undefined}
    if(req.body.city === "") {req.body.city = undefined}
    if(req.body.state === "") {req.body.state = undefined}
    db.Place.create(req.body)
    .then(() => {
        res.redirect("/places")
    })
    .catch(err => {
        if (err && err.name == "ValidationError") {
            let message = "Validation Error: "
            for (var field in err.errors){
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            console.log("Validation error message", message)
            res.render("places/new", {message})
        } 
        else {
            res.render("error404")
        }
    })
})

router.get("/:id", (req, res)=>{
    db.Place.findById(req.params.id)
    .populate("comments")
    .then(place => {
        console.log(place.comments)
        res.render("places/show", {place})
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

router.get('/:id/edit', (req, res)=>{
    res.send("GET edit form stub")
})

//update
router.put('/:id', (req, res) => {
    res.send("PUT /places/:id stub")
  })

//Comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

router.delete("/:id", async (req, res)=>{
    try{
        const deletedPlace = await db.Place.findByIdAndDelete(req.params.id)
        console.log(deletedPlace)
        res.redirect("/places")
    } catch (err){
        res.send("ERROR")
    }
})

module.exports = router
