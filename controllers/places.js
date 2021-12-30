const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) =>{
    res.render("places/Index", {places})
})

router.get("/new",(req, res) =>{
    res.render("places/new")
})

router.post("/", (req, res)=>{
    console.log(req.body)
    if (!req.body.pic){
        req.body.pic = "http://placekitten.com/400/400"
    }
    if (!req.body.city){
        req.body.city = "Anytown"
    }
    if (!req.body.state){
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get("/:id", (req, res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.status(404).render('error404')
    }
    else if (!places[id]){
        res.status(404).render("error404")
    }
    else{
        res.render("places/show", {place: places[id], id: req.params.id})
    }
})

router.get('/:id/edit', (req, res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.status(404).render('error404')
    }
    else if (!places[id]){
        res.status(404).render("error404")
    }
    else{
        res.render("places/edit", {place: places[id], id: req.params.id})
    }
})

//update
router.put('/:id', (req, res) => {
    console.log(req.body)
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        console.log(req.body)
        // Save the new data into places[id]
        places[req.params.id] = req.body
        res.redirect(`/places/${id}`)
    }
  })

router.delete("/:id", (req, res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.status(404).render('error404')
    }
    else if (!places[id]){
        res.status(404).render("error404")
    }
    else{
        places.splice(id,1)
        res.redirect("/places")
    }
})

module.exports = router
