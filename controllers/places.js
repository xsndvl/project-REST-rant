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
    res.send("places/new")
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
        console.log("err", err)
        res.render("error404")
    })
})

router.get("/:id", (req, res)=>{
    db.Place.findById(req.params.id)
    .then(place => {
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

router.delete("/:id", (req, res)=>{
    // res.send("DELETE /places/:id stub")
    // db.Place.findByIdAndDelete(req.params.id)
    // .then(deletedPlace => {
    //     console.log(deletedPlace)
    //     res.status(303).redirect("/places")
    // })
})

module.exports = router
